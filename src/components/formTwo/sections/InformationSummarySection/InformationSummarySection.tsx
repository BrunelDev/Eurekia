import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useFormState } from "../../../../context/useFormState.ts";
import BackButton from "../../PrimaryButton/BackButton.tsx";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton.tsx";
import { Question, QuestionWithInput } from "../formFour/questionComponent.tsx";

export const InformationSummarySection = () => {
  const { formData, updateFormData } = useFormState();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  type FormItem = {
    question: string;
    isInputFilled?: boolean;
    description?: string;
    handleChange: (value: boolean) => void;
    value?: boolean;
    placeholder?: string;
    price?: string;
    type?: string;
    options?: { label: string; value: string }[];
    required?: boolean;
    inputRequired?: boolean;
    handleInputChange?: (value: string | undefined) => void;
    inputValue?: string | number;
    alert?: { doc: string; price: number }[]; // Document name and price
  };

  const amoForm: FormItem[] = [
    {
      question: "Notice descriptive + estimation prévisionnelle",
      description:
        "Élaboration d’un descriptif sommaire du projet avec estimation indicative du coût des travaux (devis estimatif). Durée: 1–2 semaines.",
      alert: [
        { doc: "Plans de masse fournis par le client.", price: 50 },
        { doc: "Programme fonctionnel fourni par le client.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, descriptiveNotice: value });
      },
      value: formData.descriptiveNotice,
      price: "(300 € HT)",
    },
    {
      question: "Autorisation urbanisme (permis/déclaration)",
      description:
        "Montage et dépôt du dossier de permis de construire ou déclaration de travaux. Durée: 2–4 semaines. Hors délai de traitement des services urbanisme.",
      alert: [
        { doc: "Plans à jour fournis.", price: 50 },
        { doc: "Études préliminaires fournies.", price: 50 },
        { doc: "Frais de dossier selon mairie fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, urbanismAuthorization: value });
      },
      value: formData.urbanismAuthorization,
      price: "(50 € HT/m², min. 1 500 €)",
    },
    {
      question: "Notice accessibilité",
      description:
        "Rédaction de la notice d’accessibilité (ERP 5e catégorie ou logement) conformément aux normes en vigueur. Durée: 1 semaine.",
      alert: [
        { doc: "Surface du projet communiquée.", price: 50 },
        { doc: "Typologie d’usage communiquée.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, accessibilityNotice: value });
      },
      value: formData.accessibilityNotice,
      price: "(300 € HT)",
    },
    {
      question: "Notice sécurité incendie",
      description:
        "Rédaction de la notice sécurité incendie (ERP 5e catégorie ou équivalent) selon réglementation. Durée: 1 semaine.",
      alert: [
        { doc: "Fiches techniques des installations fournies.", price: 50 },
        { doc: "Surfaces précises communiquées.", price: 50 },
        { doc: "Volumes précisés.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, fireSecurityNotice: value });
      },
      value: formData.fireSecurityNotice,
      price: "(300 € HT)",
    },
    {
      question: "Planning (études & travaux)",
      description:
        "Élaboration d’un planning global (études d’ingénierie et exécution des travaux). Durée: 1–2 semaines.",
      alert: [
        { doc: "Durées unitaires prévisionnelles fournies.", price: 50 },
        { doc: "Séquençage indicatif communiqué.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, planningStudies: value });
      },
      value: formData.planningStudies,
      price: "(400 € HT)",
    },
    {
      question: "Démarches concessionnaires",
      description:
        "Démarches de raccordement auprès des concessionnaires (électricité, eau, gaz, télécom, assainissement). Durée: 1–2 semaines. Hors délai de traitement et travaux des concessionnaires.",
      alert: [
        { doc: "Coordonnées clients des concessions fournies.", price: 50 },
        { doc: "Documents requis (PV de propriété, etc.) fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, concessionaryProcedures: value });
      },
      value: formData.concessionaryProcedures,
      price: "(300 € HT)",
    },
    {
      question: "Cahier des charges géotechniques",
      description:
        "Rédaction du CCTP pour étude géotechnique préalable (missions G1, G2-AVP). Durée: 1 semaine.",
      alert: [
        { doc: "Cotes cadastrales à disposition.", price: 50 },
        {
          doc: "Informations géotechniques initiales (hypothèses de sol) à disposition.",
          price: 50,
        },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, geotechnicalSpecifications: value });
      },
      value: formData.geotechnicalSpecifications,
      price: "(300 € HT)",
    },
    {
      question: "Rédaction CCAP",
      description:
        "Rédaction du Cahier des Clauses Administratives Particulières pour consultation des entreprises. Durée: 1 semaine.",
      alert: [
        {
          doc: "Spécifications administratives générales (CCAG) fournies.",
          price: 50,
        },
        { doc: "Avenants éventuels fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, ccapRedaction: value });
      },
      value: formData.ccapRedaction,
      price: "(300 € HT)",
    },
    {
      question: "Rédaction règlement de consultation",
      description:
        "Élaboration du règlement de consultation (modalités d’appel d’offres, critères de sélection). Durée: 1 semaine.",
      alert: [
        { doc: "Contenu du CCTP technique fourni.", price: 50 },
        { doc: "Règlement-type ou CCAP de référence fourni.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, consultationRegulation: value });
      },
      value: formData.consultationRegulation,
      price: "(300 € HT)",
    },
  ];

  const moeForm: FormItem[] = [
    {
      question: "Diagnostic (construction existante)",
      description:
        "Diagnostic technique de la structure et des éléments porteurs du bâtiment. Durée: 1–2 semaines.",
      alert: [
        { doc: "Accès chantier fourni.", price: 50 },
        { doc: "Historique des pathologies fourni.", price: 50 },
        { doc: "Relevés initiaux fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeDiagnostic: value });
      },
      value: formData.moeDiagnostic,
      price: "(~1 685 € HT)  Référence: 1 700 € HT",
    },
    {
      question: "Étude de faisabilité",
      description:
        "Étude de faisabilité (implantation, conformité, normes) avec estimation sommaire du budget travaux. Durée: 2 semaines.",
      alert: [
        { doc: "Plans de l’existant fournis.", price: 50 },
        { doc: "Besoins fonctionnels détaillés fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeFeasibility: value });
      },
      value: formData.moeFeasibility,
      price: "(500 € HT)",
    },
    {
      question: "Études de conception (APS/APD)",
      description:
        "Conception sommaire (esquisses, principes constructifs) incluant estimation des lots gros-œuvre. Durée: 3–4 semaines.",
      alert: [
        { doc: "Programme architectural précis défini.", price: 50 },
        { doc: "Contraintes techniques définies.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeApsApd: value });
      },
      value: formData.moeApsApd,
      price: "(~65 € HT/m²)  Référence: 6 500 € HT",
    },
    {
      question: "Dossier Consultation Entreprises (DCE) & ACT",
      description:
        "Rédaction des pièces administratives (CCAP, CCTP, DPGF…) et Analyse des Offres (ACT). Durée: 2 semaines.",
      alert: [
        { doc: "Évaluation chiffrée des travaux connue.", price: 50 },
        { doc: "Liste de candidats potentiels disponible.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeDceAct: value });
      },
      value: formData.moeDceAct,
      price: "(~5% montant travaux, min. 2 500 €)  Référence: 3 000 € HT",
    },
    {
      question: "Plans d’exécution technique (1 prestation par corps d’état)",
      description:
        "Établissement des plans d’exécution détaillés (coffrage, charpente, électricité, plomberie, etc.). Durée: 2–3 semaines.",
      alert: [
        { doc: "Avant-projet détaillé validé.", price: 50 },
        {
          doc: "Cahier des charges techniques initial ou plans de niveau APD disponibles.",
          price: 50,
        },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeExecutionPlans: value });
      },
      value: formData.moeExecutionPlans,
      price: "(150 € HT min.)",
    },
    {
      question: "Note de calcul électrique",
      description:
        "Calculs de dimensionnement des installations électriques (courants forts/faibles). Durée: 1–2 semaines.",
      alert: [
        { doc: "Schéma électrique de principe fourni.", price: 50 },
        { doc: "Puissances nominatives fournies.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeElectricalCalc: value });
      },
      value: formData.moeElectricalCalc,
      price: "(300 € HT)",
    },
    {
      question: "Note de calcul plomberie",
      description:
        "Calculs de dimensionnement des réseaux d’eau potable et d’assainissement (débits, sections). Durée: 1 semaine.",
      alert: [
        { doc: "Plans sommaires de plomberie communiqués.", price: 50 },
        { doc: "Débits estimés communiqués.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moePlumbingCalc: value });
      },
      value: formData.moePlumbingCalc,
      price: "(300 € HT)",
    },
    {
      question: "Note de calcul aéraulique (HVAC)",
      description:
        "Calculs de dimensionnement des réseaux de ventilation/climatisation (débits d’air, pertes de charge). Durée: 1 semaine.",
      alert: [
        {
          doc: "Hypothèses de système (VMC simple/fluides frigorigènes) fournies.",
          price: 50,
        },
        { doc: "Plans HVAC de base fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeHvacCalc: value });
      },
      value: formData.moeHvacCalc,
      price: "(300 € HT)",
    },
    {
      question: "Note de calcul VRD",
      description:
        "Calculs de dimensionnement VRD (voirie, assainissement pluvial et EU). Durée: 1 semaine.",
      alert: [
        { doc: "Plans topographiques disponibles.", price: 50 },
        { doc: "Données pluviométriques locales disponibles.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeVrdCalc: value });
      },
      value: formData.moeVrdCalc,
      price: "(300 € HT)",
    },
    {
      question: "Attestation thermique (Permis de Construire <50 m²)",
      description:
        "Attestation de respect de la réglementation thermique (RT/RE2020) pour dépôt de permis (<50 m²). Durée: 1 semaine.",
      alert: [
        { doc: "Données climatiques envoyées.", price: 50 },
        { doc: "Fiches techniques des parois envoyées.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeThermalAttestationSmall: value });
      },
      value: formData.moeThermalAttestationSmall,
      price: "(16 € HT)  Référence: 30 € HT",
    },
    {
      question: "Étude thermique (Permis de Construire >50 m²)",
      description:
        "Étude thermique réglementaire (RT/RE2020) préalable au permis de construire (>50 m²). Durée: 1 semaine.",
      alert: [
        { doc: "Cahier des charges thermique défini.", price: 50 },
        { doc: "Maquettes géométriques fournies.", price: 50 },
        { doc: "Descriptifs des systèmes fournis.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeThermalStudyPc: value });
      },
      value: formData.moeThermalStudyPc,
      price: "(90 € HT)",
    },
    {
      question: "Étude thermique (phase chantier)",
      description:
        "Calculs thermiques en cours de chantier (bilans Cep, etc.). Durée: 2 semaines.",
      alert: [
        {
          doc: "Validation des choix thermiques initiaux réalisée avant travaux.",
          price: 50,
        },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeThermalStudyConstruction: value });
      },
      value: formData.moeThermalStudyConstruction,
      price: "(208 € HT)  Référence: 200 € HT",
    },
    {
      question: "Attestation + ACV fin de travaux (>50 m²)",
      description:
        "Calculs finaux (Cep, Cepₙr, Ic énergie+construction) et attestation de conformité RT/RE2020 avec ACV. Durée: 2 semaines.",
      alert: [
        {
          doc: "Rapports d'exécution (isolation, surfaces réelles) fournis.",
          price: 50,
        },
        { doc: "Factures finales fournies.", price: 50 },
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeFinalAttestationAcv: value });
      },
      value: formData.moeFinalAttestationAcv,
      price: "(290 € HT)",
    },
  ];

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    let isValid = true;
    const currentForm =
      formData.serviceChosen === "AMO" ? amoForm
      : formData.serviceChosen === "MOE" ? moeForm
      : [];

    if (formData.option === "") {
      const hasNeededPlans = formData.doesNeedPlan === true;
      const hasRdcPlan = formData.rdcPlanVerification === true;
      const has3DRender = formData.render3D === true;

      if (!hasNeededPlans && !hasRdcPlan && !has3DRender) {
        errors["plan_selection"] =
          "Veuillez sélectionner au moins un type de plan";
        isValid = false;
      }
    }

    currentForm.forEach((item, index) => {
      if (
        (typeof item.value === "boolean" &&
          item.value === true &&
          item.inputRequired === true) ||
        (typeof item.value === "string" && item.value !== "")
      ) {
        errors[`question_${index}`] = "Ce champ est obligatoire";

        isValid = false;
      }

      if (item.inputRequired && item.value === true) {
        if (item.value === true && !formData[`question_${index}_input`]) {
          errors[`question_${index}_input`] = "Ce champ est obligatoire";

          isValid = false;
        }

        if (item.type === "option" && Array.isArray(item.options)) {
          if (item.value === true) {
            const selectValue = formData[`question_${index}_select`];
            if (!selectValue) {
              errors[`question_${index}_input`] =
                "Veuillez sélectionner une option";
              isValid = false;
            }
          }
        }

        if (
          item.question.includes("Sélectionnez les plans") &&
          item.value === true
        ) {
          if (!formData.neededPlans || formData.neededPlans.length === 0) {
            errors[`question_${index}_input`] =
              "Veuillez sélectionner au moins un plan";
            isValid = false;
          }
        }
      }
    });

    setFormErrors(errors);

    if (!isValid) {
      toast.error(
        "Veuillez compléter tous les champs obligatoires avant de continuer."
      );
    }

    return isValid;
  };

  useEffect(() => {
    if (formData) {
      updateFormData({
        ...formData,
        isStepThreeChecked: false,
      });
    }
  }, [updateFormData]);

  const formToUse: FormItem[] =
    formData.serviceChosen === "AMO" ? amoForm
    : formData.serviceChosen === "MOE" ? moeForm
    : [];
  console.log(formData.serviceChosen, formToUse);
  return (
    <div className="flex flex-col w-full items-start gap-6 sm:gap-8 pt-0 px-0">
      {formErrors["general"] && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
          role="alert"
        >
          <strong className="font-bold">Attention! </strong>
          <span className="block sm:inline">{formErrors["general"]}</span>
        </div>
      )}

      {formErrors["plan_selection"] && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
          role="alert"
        >
          <strong className="font-bold">Attention! </strong>
          <span className="block sm:inline">
            {formErrors["plan_selection"]}
          </span>
        </div>
      )}

      <div className="flex flex-col items-start gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto] overflow-y-auto">
        <div></div>
        {formToUse.map((item, index) =>
          "type" in item && item.type === "default" ?
            <Question
              key={index}
              question={item.question}
              description={item.description}
              handleChange={item.handleChange}
              value={item.value ? "oui" : "non"}
              required={item.required}
              error={formErrors[`question_${index}`]}
            />
          : <QuestionWithInput
              key={index}
              question={item.question}
              description={item.description}
              handleChange={item.handleChange}
              value={item.value}
              placeholder={item.placeholder}
              price={item.price}
              type={item.type}
              options={item.options}
              inputRequired={item.inputRequired}
              error={formErrors[`question_${index}`]}
              inputError={formErrors[`question_${index}_input`]}
              index={index}
              formData={formData}
              updateFormData={updateFormData}
              handleInputChange={item.handleInputChange || (() => {})}
              inputValue={item.inputValue?.toString() || ""}
              alert={item.alert}
            />
        )}
      </div>
      <div className="hidden sm:flex flex-row sm:flex-row items-center justify-between gap-4 sm:gap-0 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-100 [--animation-delay:600ms]">
        <BackButton
          handleClick={() => {
            updateFormData({
              ...formData,
              isStepFourChecked: false,
              isStepThreeChecked: false,
            });
          }}
          disabled={!formData.isStepFourChecked}
        />
        <PrimaryButton
          handleClick={() => {
            if (validateForm()) {
              updateFormData({
                ...formData,
                isStepTwoChecked: true,
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />
      </div>
      <div className="sm:hidden flex items-center justify-between animate-fade-in opacity-100 [--animation-delay:600ms] fixed bottom-0 left-0 right-0 bg-[#ffffffaa] pt-10 pb-14 px-4 shadow-xl backdrop-blur-lg">
        <BackButton
          handleClick={() => {
            updateFormData({
              ...formData,
              isStepFourChecked: false,
              isStepThreeChecked: false,
            });
          }}
          disabled={!formData.isStepFourChecked}
        />
        <PrimaryButton
          handleClick={() => {
            if (validateForm()) {
              updateFormData({
                ...formData,
                isStepTwoChecked: true,
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
};
