import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group"

export const ContactFormSection = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      row: 1,
      fields: [
        { id: "nom", label: "Nom", defaultValue: "DOE" },
        { id: "prenom", label: "Prénom", defaultValue: "John" },
      ],
    },
    {
      row: 2,
      fields: [
        { id: "email", label: "Email", defaultValue: "Johndoe@gmail.com" },
        {
          id: "telephone",
          label: "Téléphone",
          defaultValue: "Johndoe@gmail.com",
        },
      ],
    },
  ];

  // Subject options
  const subjectOptions = [
    { id: "information", label: "Demande d'information", defaultChecked: true },
    { id: "devis", label: "Devis" },
    { id: "assistance", label: "Assistance IA" },
    { id: "partenariat", label: "Partenariat" },
    { id: "autre", label: "Autre" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <Card className="max-w-[1160px] mx-auto border-none shadow-none">
        <CardContent className="p-0">
          <form className="flex flex-col gap-20">
            {/* Name and First Name Fields */}
            {formFields.map((row) => (
              <div
                key={`row-${row.row}`}
                className="flex items-center gap-8 w-full"
              >
                {row.fields.map((field) => (
                  <div
                    key={field.id}
                    className="flex-1 flex flex-col items-start"
                  >
                    <Label
                      htmlFor={field.id}
                      className="self-stretch text-[#1e1e1e] text-[length:var(--label-large-font-size)] leading-[var(--label-large-line-height)] font-label-large font-[number:var(--label-large-font-weight)] tracking-[var(--label-large-letter-spacing)] [font-style:var(--label-large-font-style)]"
                    >
                      {field.label}
                    </Label>
                    <div className="w-full border-b border-[#5d5d5d] py-3 px-2">
                      <Input
                        id={field.id}
                        defaultValue={field.defaultValue}
                        className="border-none px-0 text-[#5d5d5d] font-text-medium font-[number:var(--text-medium-font-weight)] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Subject Selection and Message */}
            <div className="flex flex-col items-start gap-10 w-full">
              {/* Subject Selection */}
              <div className="flex flex-col items-start justify-center gap-[15px] w-full">
                <Label className="text-[#1e1e1e] text-[length:var(--label-large-font-size)] leading-[var(--label-large-line-height)] font-label-large font-[number:var(--label-large-font-weight)] tracking-[var(--label-large-letter-spacing)] [font-style:var(--label-large-font-style)]">
                  Sélectionnez un Sujet?
                </Label>

                <RadioGroup
                  defaultValue="information"
                  className="flex items-center gap-8 w-full"
                >
                  {subjectOptions.map((option) => (
                    <div
                      key={option.id}
                      className="inline-flex items-center gap-1"
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        defaultChecked={option.defaultChecked}
                        className="w-4 h-4 border-[#deb83b]"
                      />
                      <Label
                        htmlFor={option.id}
                        className="text-[#1e1e1e] font-text-medium font-[number:var(--text-medium-font-weight)] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Message Field */}
              <div className="w-full flex flex-col items-start">
                <Label
                  htmlFor="message"
                  className="text-[#1e1e1e] text-[length:var(--label-large-font-size)] leading-[var(--label-large-line-height)] font-label-large font-[number:var(--label-large-font-weight)] tracking-[var(--label-large-letter-spacing)] [font-style:var(--label-large-font-style)]"
                >
                  Message
                </Label>
                <div className="w-full border-b border-[#5d5d5d] py-3 px-2">
                  <Input
                    id="message"
                    placeholder="Ecrivez votre message"
                    className="border-none px-0 text-[#5d5d5d] font-text-medium font-[number:var(--text-medium-font-weight)] text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end w-full">
              <Button
                type="submit"
                className="w-[167px] p-3 bg-[#f6f2cb] hover:bg-[#f6f2cb] text-[#483621] rounded-none"
              >
                <span className="font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
                  Envoyer le message
                </span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
