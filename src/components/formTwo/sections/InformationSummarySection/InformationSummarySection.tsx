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
    alert?: string[]; // Add this new property
  };

  const amoForm: FormItem[] = [
    {
      question: "Notice descriptive + estimation prévisionnelle",
      description:
        "Élaboration d’un descriptif sommaire du projet avec estimation indicative du coût des travaux (devis estimatif). Durée: 1–2 semaines.",
      alert: [
        "Plans de masse fournis par le client.",
        "Programme fonctionnel fourni par le client.",
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
        "Plans à jour fournis.",
        "Études préliminaires fournies.",
        "Frais de dossier selon mairie fournis.",
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
        "Surface du projet communiquée.",
        "Typologie d’usage communiquée.",
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
        "Fiches techniques des installations fournies.",
        "Surfaces précises communiquées.",
        "Volumes précisés.",
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
        "Durées unitaires prévisionnelles fournies.",
        "Séquençage indicatif communiqué.",
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
        "Coordonnées clients des concessions fournies.",
        "Documents requis (PV de propriété, etc.) fournis.",
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
        "Cotes cadastrales à disposition.",
        "Informations géotechniques initiales (hypothèses de sol) à disposition.",
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
        "Spécifications administratives générales (CCAG) fournies.",
        "Avenants éventuels fournis.",
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
        "Contenu du CCTP technique fourni.",
        "Règlement-type ou CCAP de référence fourni.",
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
        "Accès chantier fourni.",
        "Historique des pathologies fourni.",
        "Relevés initiaux fournis.",
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
        "Plans de l’existant fournis.",
        "Besoins fonctionnels détaillés fournis.",
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
        "Programme architectural précis défini.",
        "Contraintes techniques définies.",
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
        "Évaluation chiffrée des travaux connue.",
        "Liste de candidats potentiels disponible.",
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
        "Avant-projet détaillé validé.",
        "Cahier des charges techniques initial ou plans de niveau APD disponibles.",
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
        "Schéma électrique de principe fourni.",
        "Puissances nominatives fournies.",
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
        "Plans sommaires de plomberie communiqués.",
        "Débits estimés communiqués.",
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
        "Hypothèses de système (VMC simple/fluides frigorigènes) fournies.",
        "Plans HVAC de base fournis.",
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
        "Plans topographiques disponibles.",
        "Données pluviométriques locales disponibles.",
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeVrdCalc: value });
      },
      value: formData.moeVrdCalc,
      price: "(300 € HT)",
    },
    {
      question: "Attestation thermique (PC <50 m²)",
      description:
        "Attestation de respect de la réglementation thermique (RT/RE2020) pour dépôt de permis (<50 m²). Durée: 1 semaine.",
      alert: [
        "Données climatiques envoyées.",
        "Fiches techniques des parois envoyées.",
      ],
      handleChange: (value: boolean) => {
        updateFormData({ ...formData, moeThermalAttestationSmall: value });
      },
      value: formData.moeThermalAttestationSmall,
      price: "(16 € HT)  Référence: 30 € HT",
    },
    {
      question: "Étude thermique (PC >50 m²)",
      description:
        "Étude thermique réglementaire (RT/RE2020) préalable au permis de construire (>50 m²). Durée: 1 semaine.",
      alert: [
        "Cahier des charges thermique défini.",
        "Maquettes géométriques fournies.",
        "Descriptifs des systèmes fournis.",
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
        "Validation des choix thermiques initiaux réalisée avant travaux.",
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
        "Rapports d’exécution (isolation, surfaces réelles) fournis.",
        "Factures finales fournies.",
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
      formData.serviceChosen === "AMO"
        ? amoForm
        : formData.serviceChosen === "MOE"
        ? moeForm
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
    formData.serviceChosen === "AMO"
      ? amoForm
      : formData.serviceChosen === "MOE"
      ? moeForm
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
          "type" in item && item.type === "default" ? (
            <Question
              key={index}
              question={item.question}
              description={item.description}
              handleChange={item.handleChange}
              value={item.value ? "oui" : "non"}
              required={item.required}
              error={formErrors[`question_${index}`]}
            />
          ) : (
            <QuestionWithInput
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
              handleInputChange={item.handleInputChange || (() => {})}
              inputValue={item.inputValue?.toString() || ""}
              alert={item.alert}
            />
          )
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
