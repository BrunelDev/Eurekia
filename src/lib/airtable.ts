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

  // File attachments (base64 encoded)
  devisPdf?: { base64: string; filename: string };
  uploadedFiles?: { name: string; base64: string; type: string }[];
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
 * Upload a file to an Airtable record's attachment field
 * Note: Airtable's uploadAttachment API requires field ID (fld...) or exact field name
 *
 * Environment variables needed:
 * - VITE_AIRTABLE_DEVIS_FIELD_ID: Field ID for Devis column (e.g., "fldXXXXXXXXXXXXXX")
 * - VITE_AIRTABLE_PIECES_JOINTES_FIELD_ID: Field ID for Pièces jointes column
 */
const uploadAttachment = async (
  recordId: string,
  fieldIdOrName: string,
  file: { base64: string; filename: string; contentType: string }
): Promise<void> => {
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const apiKey = import.meta.env.VITE_AIRTABLE_API_TOKEN;

  if (!baseId || !apiKey) {
    console.error("Missing Airtable configuration");
    return;
  }

  // Debug logging
  // Note: Field IDs like "fldXXXX" don't need URL encoding
  const url = `https://content.airtable.com/v0/${baseId}/${recordId}/${fieldIdOrName}/uploadAttachment`;

  // Validate base64 content
  if (!file.base64 || file.base64.length === 0) {
    console.error("Empty base64 content for file:", file.filename);
    return;
  }

  // Make sure base64 doesn't have data URI prefix
  let cleanBase64 = file.base64;
  if (cleanBase64.includes(",")) {
    cleanBase64 = cleanBase64.split(",")[1];
  }

  console.log("Upload URL:", url);
  console.log("File info:", {
    filename: file.filename,
    contentType: file.contentType,
    base64Length: cleanBase64?.length || 0,
    base64Preview: cleanBase64?.substring(0, 50) + "...",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contentType: file.contentType,
        file: cleanBase64,
        filename: file.filename,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Failed to upload attachment to field "${fieldIdOrName}":`,
        errorText
      );
      console.error(
        "Make sure the field exists in Airtable as an 'Attachment' type field"
      );
    } else {
      console.log(
        `Successfully uploaded ${file.filename} to field ${fieldIdOrName}`
      );
    }
  } catch (error) {
    console.error("Error uploading attachment:", error);
  }
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

    // First, create the record with text fields
    const recordId = await new Promise<string>((resolve, reject) => {
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

    // Get field IDs from environment (fallback to field names if not set)
    const devisFieldId =
      import.meta.env.VITE_AIRTABLE_DEVIS_FIELD_ID || "Devis";
    const piecesJointesFieldId =
      import.meta.env.VITE_AIRTABLE_PIECES_JOINTES_FIELD_ID || "Pièces jointes";

    // Upload devis PDF if provided
    if (clientData.devisPdf) {
      try {
        await uploadAttachment(recordId, devisFieldId, {
          base64: clientData.devisPdf.base64,
          filename: clientData.devisPdf.filename,
          contentType: "application/pdf",
        });
      } catch (error) {
        console.error("Error uploading devis PDF:", error);
      }
    }

    // Upload user-provided files if any
    if (clientData.uploadedFiles && clientData.uploadedFiles.length > 0) {
      for (const file of clientData.uploadedFiles) {
        try {
          await uploadAttachment(recordId, piecesJointesFieldId, {
            base64: file.base64,
            filename: file.name,
            contentType: file.type || "application/octet-stream",
          });
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
        }
      }
    }

    return recordId;
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
 * @param devisPdf - Optional devis PDF as base64
 * @returns Promise with the created record ID
 *
 * @example
 * ```typescript
 * const recordId = await storeFormSubmission(formData, ["CGV", "Privacy Policy"], { base64: "...", filename: "devis.pdf" });
 * ```
 */
export const storeFormSubmission = async (
  formData: FormData,
  documentsChecked: string[] = [],
  devisPdf?: { base64: string; filename: string }
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
    devisPdf,
    uploadedFiles: formData.uploadedFiles,
  };

  return storeClientSubmission(clientSubmission);
};
