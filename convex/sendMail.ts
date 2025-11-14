import { v } from "convex/values";
import { action } from "./_generated/server";

interface EmailResult {
  success: boolean;
  message: string;
  emailId?: string;
  error?: string;
}

/**
 * Convertit un Blob en chaîne Base64
 * @param blob - Le Blob à convertir
 * @returns Promesse avec la chaîne Base64
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Retirer le préfixe data:application/pdf;base64,
      const base64Content = base64String.split(",")[1];
      resolve(base64Content);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export const post = action({
  args: {
    nom: v.string(),
    prenom: v.string(),
    numero: v.string(),
    email: v.string(),
    pdfBlob: v.string(), // Base64 string du PDF
  },
  handler: async (ctx, args): Promise<EmailResult> => {
    const { nom, prenom, numero, email, pdfBlob } = args;

    try {
      // Corps du message personnalisable
      const sujet = `Document pour ${prenom} ${nom}`;
      const corpsMessage = `
Bonjour ${prenom} ${nom},

Nous vous remercions de votre intérêt.

Veuillez trouver ci-joint le document demandé au format PDF.

Si vous avez des questions, n'hésitez pas à nous contacter au ${numero}.

Cordialement,
L'équipe
      `.trim();

      // Configuration de l'email pour Resend
      const emailPayload = {
        from: "onboarding@resend.dev", // À remplacer par votre domaine vérifié
        to: email,
        subject: sujet,
        text: corpsMessage,
        attachments: [
          {
            filename: `document_${nom}_${prenom}.pdf`,
            content: pdfBlob, // Le blob est déjà en Base64
          },
        ],
      };

      // Envoi via l'API Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Erreur Resend: ${errorData.message || response.status}`
        );
      }

      const result = await response.json();

      console.log(`Email envoyé avec succès à: ${email}`);
      console.log(`ID de l'email: ${result.id}`);

      return {
        success: true,
        message: `Email envoyé avec succès à ${email}`,
        emailId: result.id,
      };
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return {
        success: false,
        message: "Échec de l'envoi de l'email",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      };
    }
  },
});
