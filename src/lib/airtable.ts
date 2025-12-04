import { FormData } from "@/context/useFormState";
import Airtable from "airtable";

/**
 * Interface for the client submission data to be stored in Airtable
 */
export interface ClientSubmission {
  // Client Information
  nom: string;
  prenom: string;
  email: string;
  telephone: string;

  // Service Information
  flowType?: "forfait" | "prestations";
  forfaitType?: "AMO" | "MOE";
  serviceChosen?: "AMO" | "MOE";

  // Prestations/Services selected
  prestationsChoisies?: string[];

  // Documents checked
  documentsChecked?: string[];

  // Date of submission
  dateSubmission: string;
}

/**
 * Format phone number for Airtable Phone field
 * Converts "33612345678" to "+33 6 12 34 56 78"
 */
const formatPhoneForAirtable = (phone: string): string => {
  // Remove any existing spaces or special characters
  const cleaned = phone.replace(/\D/g, "");

  // If it starts with country code (like 33 for France)
  if (cleaned.length >= 10) {
    // Add + prefix and format with spaces
    return `+${cleaned}`;
  }

  return phone; // Return as-is if format is unexpected
};

/**
 * Stores client information and form submission data in Airtable
 *
 * @param clientData - The client submission data to store
 * @returns Promise with the created record ID
 *
 * @example
 * ```typescript
 * const result = await storeClientSubmission({
 *   nom: "Dupont",
 *   prenom: "Jean",
 *   email: "jean.dupont@example.com",
 *   telephone: "+33612345678",
 *   flowType: "prestations",
 *   serviceChosen: "AMO",
 *   prestationsChoisies: ["descriptiveNotice", "urbanismAuthorization"],
 *   documentsChecked: ["CGV", "Privacy Policy"],
 *   dateSubmission: new Date().toISOString()
 * });
 * ```
 */
export const storeClientSubmission = async (
  clientData: ClientSubmission
): Promise<string> => {
  try {
    const base = new Airtable({
      apiKey: import.meta.env.VITE_AIRTABLE_API_TOKEN,
    }).base(import.meta.env.VITE_AIRTABLE_BASE_ID!);

    return new Promise((resolve, reject) => {
      base(import.meta.env.VITE_AIRTABLE_TABLE_NAME!).create(
        [
          {
            fields: {
              Nom: clientData.nom,
              Prénom: clientData.prenom,
              Email: clientData.email,
              Téléphone: formatPhoneForAirtable(clientData.telephone),
              "Type de flux": clientData.flowType,
              "Type de forfait": clientData.forfaitType,
              "Service choisi": clientData.serviceChosen,
              "Prestations choisies":
                clientData.prestationsChoisies?.join(", "),
              "Documents vérifiés": clientData.documentsChecked?.join(", "),
              "Date de soumission": clientData.dateSubmission,
            },
          },
        ],
        (err, records) => {
          if (err) {
            console.error(
              "Erreur lors de la création de l'enregistrement Airtable:",
              err
            );
            reject(err);
          } else if (records && records.length > 0) {
            console.log("Enregistrement créé avec succès:", records[0].getId());
            resolve(records[0].getId());
          } else {
            reject(new Error("Aucun enregistrement créé"));
          }
        }
      );
    });
  } catch (error) {
    console.error("Erreur lors de la soumission à Airtable:", error);
    throw error;
  }
};

/**
 * Helper function to extract selected prestations from FormData
 *
 * @param formData - The complete form data
 * @returns Array of selected prestation names
 */
export const extractSelectedPrestations = (formData: FormData): string[] => {
  const prestations: string[] = [];

  // AMO prestations
  const amoPrestations = [
    { key: "descriptiveNotice", label: "Notice descriptive" },
    { key: "urbanismAuthorization", label: "Autorisation d'urbanisme" },
    { key: "accessibilityNotice", label: "Notice d'accessibilité" },
    { key: "fireSecurityNotice", label: "Notice de sécurité incendie" },
    { key: "planningStudies", label: "Études de planification" },
    { key: "concessionaryProcedures", label: "Procédures concessionnaires" },
    {
      key: "geotechnicalSpecifications",
      label: "Spécifications géotechniques",
    },
    { key: "ccapRedaction", label: "Rédaction CCAP" },
    { key: "consultationRegulation", label: "Règlement de consultation" },
  ];

  // MOE prestations
  const moePrestations = [
    { key: "moeDiagnostic", label: "Diagnostic MOE" },
    { key: "moeFeasibility", label: "Faisabilité MOE" },
    { key: "moeApsApd", label: "APS/APD MOE" },
    { key: "moeDceAct", label: "DCE/ACT MOE" },
    { key: "moeExecutionPlans", label: "Plans d'exécution MOE" },
    { key: "moeElectricalCalc", label: "Calculs électriques MOE" },
    { key: "moePlumbingCalc", label: "Calculs plomberie MOE" },
    { key: "moeHvacCalc", label: "Calculs CVC MOE" },
    { key: "moeVrdCalc", label: "Calculs VRD MOE" },
    {
      key: "moeThermalAttestationSmall",
      label: "Attestation thermique petite",
    },
    { key: "moeThermalStudyPc", label: "Étude thermique PC" },
    {
      key: "moeThermalStudyConstruction",
      label: "Étude thermique construction",
    },
    { key: "moeFinalAttestationAcv", label: "Attestation finale ACV" },
  ];

  // Additional options
  const additionalOptions = [
    { key: "isArchitectNeeded", label: "Architecte nécessaire" },
    { key: "cerfaFilling", label: "Remplissage CERFA" },
    { key: "pluVerification", label: "Vérification PLU" },
    { key: "rdcPlanVerification", label: "Vérification plan RDC" },
    { key: "bbioStudy", label: "Étude Bbio" },
    { key: "seismicStudy", label: "Étude sismique" },
    { key: "expressDelivery", label: "Livraison express" },
    { key: "displayPanel", label: "Panneau d'affichage" },
    { key: "render3D", label: "Rendu 3D" },
  ];

  // Check AMO prestations
  amoPrestations.forEach(({ key, label }) => {
    if (formData[key] === true) {
      prestations.push(label);
    }
  });

  // Check MOE prestations
  moePrestations.forEach(({ key, label }) => {
    if (formData[key] === true) {
      prestations.push(label);
    }
  });

  // Check additional options
  additionalOptions.forEach(({ key, label }) => {
    if (formData[key] === true) {
      prestations.push(label);
    }
  });

  // Add needed plans if specified
  if (formData.neededPlans && formData.neededPlans.length > 0) {
    prestations.push(`Plans nécessaires: ${formData.neededPlans.join(", ")}`);
  }

  return prestations;
};

/**
 * Convenience function to store form submission directly from FormData
 *
 * @param formData - The complete form data from the form state
 * @param documentsChecked - Array of document names that were checked
 * @returns Promise with the created record ID
 *
 * @example
 * ```typescript
 * const recordId = await storeFormSubmission(formData, ["CGV", "Privacy Policy"]);
 * ```
 */
export const storeFormSubmission = async (
  formData: FormData,
  documentsChecked: string[] = []
): Promise<string> => {
  const prestationsChoisies = extractSelectedPrestations(formData);

  const clientSubmission: ClientSubmission = {
    nom: formData.clientLastName,
    prenom: formData.clientFirstName,
    email: formData.clientEmail,
    telephone: formData.clientPhone,
    flowType: formData.flowType,
    forfaitType: formData.forfaitType,
    serviceChosen: formData.serviceChosen,
    prestationsChoisies,
    documentsChecked,
    dateSubmission: new Date().toISOString(),
  };

  return storeClientSubmission(clientSubmission);
};
