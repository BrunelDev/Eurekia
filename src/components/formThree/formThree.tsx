import { useRef, useState } from "react";
import { useFormState } from "../../context/useFormState";
import BackButton from "../formTwo/PrimaryButton/BackButton";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const statistics = [
  {
    value: "6800+",
    label: "Plans réalisés",
  },
  {
    value: "900+",
    label: "Cerfas remplis",
  },
  {
    value: "96%",
    label: "Permis acceptés",
  },
  {
    value: "70%",
    label: "D'économie",
  },
];

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function FormThree() {
  const { formData, updateFormData } = useFormState();
  const [formErrors, setFormErrors] = useState<{
    nom?: string;
    prenom?: string;
    email?: string;
    telephone?: string;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const [nom, setNom] = useState(formData.clientLastName || "");
  const [prenom, setPrenom] = useState(formData.clientFirstName || "");
  const [email, setEmail] = useState(formData.clientEmail || "");
  const [telephone, setTelephone] = useState(formData.clientPhone || "");

  const formFields = [
    {
      id: "nom",
      label: "Nom",
      placeholder: "Nom",
      value: nom,
      onChange: setNom,
      required: true,
      type: "text",
    },
    {
      id: "prenom",
      label: "Prénom",
      placeholder: "Prénom",
      value: prenom,
      onChange: setPrenom,
      required: true,
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "exemple@email.com",
      type: "email",
      value: email,
      onChange: setEmail,
      required: true,
    },
    {
      id: "telephone",
      label: "Téléphone",
      placeholder: "06 12 34 56 78",
      value: telephone,
      onChange: setTelephone,
      required: true,
      type: "tel",
    },
  ];

  const validateForm = () => {
    const errors: {
      nom?: string;
      prenom?: string;
      email?: string;
      telephone?: string;
    } = {};

    if (!nom.trim()) errors.nom = "Le nom est requis";
    if (!prenom.trim()) errors.prenom = "Le prénom est requis";
    if (!email.trim()) errors.email = "L'email est requis";
    else if (!validateEmail(email)) errors.email = "Format d'email invalide";
    if (!telephone.trim()) errors.telephone = "Le téléphone est requis";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = async () => {
    const isValid = validateForm();
    if (!isValid) return;

    // Sauvegarde dans l'état global et passage à l'étape suivante
    updateFormData({
      ...formData,
      clientLastName: nom,
      clientFirstName: prenom,
      clientEmail: email,
      clientPhone: telephone,
      isStepThreeChecked: true,
      isStepFourChecked: false,
    });
  };

  return (
    <section className="w-full sm:pb-8 pb-[150px]">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 w-full justify-center px-4">
        <div className="flex flex-col w-full lg:w-[40%] items-start gap-6 lg:gap-7 animate-fade-in opacity-1 [--animation-delay:0ms]">
          <div className="flex flex-col items-end gap-4 sm:gap-5 w-full">
            <header className="flex items-start gap-3 sm:gap-3.5 w-full translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
              <Avatar className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex-shrink-0">
                <AvatarImage src="/ellipse-1.png" alt="Conseiller" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start gap-2 flex-1">
                <h2 className="font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)]">
                  Conseiller
                </h2>

                <p className="font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  Merci de compléter vos informations afin de finaliser votre
                  demande.
                  <br />
                  Votre devis vous sera envoyé instantanément par e-mail.
                </p>
              </div>
            </header>

            <div className="flex flex-col items-start gap-6 sm:gap-8 w-full translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
              <form
                ref={formRef}
                className="flex flex-col items-start gap-4 w-full"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                  {formFields.slice(0, 2).map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-stretch gap-2 flex-1 w-full"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] flex items-center"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>

                      <div className="relative w-full">
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            if (
                              formErrors[field.id as keyof typeof formErrors]
                            ) {
                              setFormErrors((prev) => ({
                                ...prev,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                          className={`px-3 w-full sm:px-4 py-2.5 sm:py-3 rounded-lg border ${
                            formErrors[field.id as keyof typeof formErrors]
                              ? "border-red-500"
                              : "border-[#6d7074]"
                          }`}
                          required={field.required}
                        />
                        {formErrors[field.id as keyof typeof formErrors] && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors[field.id as keyof typeof formErrors]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full">
                  {formFields.slice(2, 4).map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-stretch gap-2 flex-1 w-full"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-label-medium font-[number:var(--label-medium-font-weight)] text-[#042347] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] flex items-center"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </Label>

                      <div className="relative w-full">
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          className={`px-3 w-full sm:px-4 py-2.5 sm:py-3 rounded-lg border ${
                            formErrors[field.id as keyof typeof formErrors]
                              ? "border-red-500"
                              : "border-[#6d7074]"
                          } font-text-medium font-[number:var(--text-medium-font-weight)] text-placeholder-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]`}
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            if (
                              formErrors[field.id as keyof typeof formErrors]
                            ) {
                              setFormErrors((prev) => ({
                                ...prev,
                                [field.id]: undefined,
                              }));
                            }
                          }}
                          required={field.required}
                          type={field.type as string}
                        />
                        {formErrors[field.id as keyof typeof formErrors] && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors[field.id as keyof typeof formErrors]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              <div className="hidden sm:flex flex-row sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
                <BackButton
                  handleClick={() => {
                    updateFormData({
                      ...formData,
                      isStepTwoChecked: false,
                      isStepThreeChecked: false,
                      isStepFourChecked: false,
                    });
                  }}
                />

                <PrimaryButton
                  disabled={!nom || !prenom || !email || !telephone}
                  handleClick={handleNextStep}
                />
              </div>
            </div>
          </div>

          <Card className="w-full bg-gradient-to-b from-[#483621df] to-[#483621] border-0 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:600ms]">
            <CardContent className="flex flex-col items-center justify-center gap-5 sm:gap-7 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-8 w-full">
                <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3 flex-1 text-center sm:text-left">
                  <h3 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-lg sm:text-xl lg:text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                    Faites comme des milliers de français
                  </h3>

                  <p className="font-text-small font-[number:var(--text-small-font-weight)] text-white text-sm sm:text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] [font-style:var(--text-small-font-style)]">
                    Optez pour notre service rapide et facile, et faites
                    réaliser vos plans sur mesure par des professionnels
                    compétents
                  </p>
                </div>

                {/* <img
                  width={120}
                  height={100}
                  className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] object-cover flex-shrink-0"
                  alt="Urban building hero"
                  src="/building.svg"
                /> */}
              </div>

              <div className="grid grid-cols-2 sm:flex lg:grid lg:gap-4 lg:h-auto lg:mx-auto xl:flex sm:h-16 items-center lg:items-center lg:justify-center justify-center sm:justify-between gap-4 sm:gap-0 w-full">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full sm:w-[98px] lg:w-full xl:w-[98px] items-center lg:items-center sm:items-start xl:items-start gap-1"
                  >
                    <div className="w-full  text-white text-2xl sm:text-3xl text-center">
                      {stat.value}
                    </div>
                    <div className="w-full font-text-medium text-white text-xs sm:text-sm text-center text-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <img
          width={534}
          height={640}
          className="w-full lg:w-[40%] h-auto lg:h-[640px] translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:800ms] object-contain hidden sm:block "
          alt="Frame"
          src="/etape2b.jpg"
        />
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between animate-fade-in opacity-1 [--animation-delay:400ms]  bg-[#ffffffaa] pt-10 pb-14 px-4 shadow-xl backdrop-blur-lg">
        <BackButton
          handleClick={() => {
            updateFormData({
              ...formData,
              isStepTwoChecked: false,
              isStepThreeChecked: false,
              isStepFourChecked: false,
            });
          }}
        />

        <PrimaryButton
          disabled={!nom || !prenom || !email || !telephone}
          handleClick={handleNextStep}
        />
      </div>
    </section>
  );
}
