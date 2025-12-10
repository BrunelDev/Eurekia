interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_AIRTABLE_API_TOKEN: string;
  readonly VITE_AIRTABLE_BASE_ID: string;
  readonly VITE_AIRTABLE_TABLE_NAME: string;
  readonly VITE_AIRTABLE_DEVIS_FIELD_ID: string;
  readonly VITE_AIRTABLE_PIECES_JOINTES_FIELD_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
