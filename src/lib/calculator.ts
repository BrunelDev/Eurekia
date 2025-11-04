type ServiceToggles = {
  // AMO toggles
  descriptiveNotice?: boolean;
  urbanismAuthorization?: boolean;
  accessibilityNotice?: boolean;
  fireSecurityNotice?: boolean;
  planningStudies?: boolean;
  concessionaryProcedures?: boolean;
  geotechnicalSpecifications?: boolean;
  ccapRedaction?: boolean;
  consultationRegulation?: boolean;

  // MOE toggles
  moeDiagnostic?: boolean;
  moeFeasibility?: boolean;
  moeApsApd?: boolean;
  moeDceAct?: boolean;
  moeExecutionPlans?: boolean;
  moeElectricalCalc?: boolean;
  moePlumbingCalc?: boolean;
  moeHvacCalc?: boolean;
  moeVrdCalc?: boolean;
  moeThermalAttestationSmall?: boolean;
  moeThermalStudyPc?: boolean;
  moeThermalStudyConstruction?: boolean;
  moeFinalAttestationAcv?: boolean;
};

type ServiceItem = {
  key: string;
  designation: string;
  pu: number;
  tva: number;
};

const designationsMapping: Record<
  string,
  {
    designation: string;
    pu?: number;
    tva?: number;
  }
> = {
  // ... mappings existants ...

  // AMO toggles
  descriptiveNotice: {
    designation: `Notice descriptive + estimation prévisionnelle<br><br>
    Élaboration d'un descriptif sommaire du projet avec estimation indicative du coût des travaux (devis estimatif).<br><br>
    Conditions d'entrée : Plans de masse et programme fonctionnel fournis par le client.`,
    pu: 300,
    tva: 20,
  },
  urbanismAuthorization: {
    designation: `Autorisation urbanisme (permis/déclaration)<br><br>
    Montage et dépôt du dossier de permis de construire ou déclaration de travaux (50 € HT/m², min. 1 500 €).<br><br>
    Hors délai de traitement des services urbanisme.<br><br>
    Conditions d'entrée : Plans à jour, études préliminaires, et frais de dossier selon mairie fournis.`,
    pu: 1500,
    tva: 20,
  },
  accessibilityNotice: {
    designation: `Notice accessibilité<br><br>
    Rédaction de la notice d'accessibilité (ERP 5e catégorie ou logement) conformément aux normes en vigueur.<br><br>
    Conditions d'entrée : Données projet (surface, typologie d'usage) communiquées.`,
    pu: 300,
    tva: 20,
  },
  fireSecurityNotice: {
    designation: `Notice sécurité incendie<br><br>
    Rédaction de la notice sécurité incendie (ERP 5e catégorie ou équivalent) selon réglementation.<br><br>
    Conditions d'entrée : Fiches techniques des installations, surfaces et volumes précisés.`,
    pu: 300,
    tva: 20,
  },
  planningStudies: {
    designation: `Planning (études & travaux)<br><br>
    Élaboration d'un planning global (études d'ingénierie et exécution des travaux).<br><br>
    Conditions d'entrée : Durées unitaires prévisionnelles et séquençage indicatifs, ajustables selon complexité.`,
    pu: 400,
    tva: 20,
  },
  concessionaryProcedures: {
    designation: `Démarches concessionnaires<br><br>
    Démarches de raccordement auprès des concessionnaires (électricité, eau, gaz, télécom, assainissement).<br><br>
    Hors délai de traitement et travaux des concessionnaires.<br><br>
    Conditions d'entrée : Coordonnées clients des concessions et documents requis (PV de propriété, etc.) fournis.`,
    pu: 300,
    tva: 20,
  },
  geotechnicalSpecifications: {
    designation: `Cahier des charges géotechniques<br><br>
    Rédaction du CCTP pour étude géotechnique préalable (missions G1, G2-AVP).<br><br>
    Conditions d'entrée : Cotes cadastrales et informations géotechniques initiales (hypothèses de sol) à disposition.`,
    pu: 300,
    tva: 20,
  },
  ccapRedaction: {
    designation: `Rédaction CCAP<br><br>
    Rédaction du Cahier des Clauses Administratives Particulières pour consultation des entreprises.<br><br>
    Conditions d'entrée : Spécifications administratives générales fournies (CCAG, éventuels avenants).`,
    pu: 300,
    tva: 20,
  },
  consultationRegulation: {
    designation: `Rédaction règlement de consultation<br><br>
    Élaboration du règlement de consultation (modalités d'appel d'offres, critères de sélection).<br><br>
    Conditions d'entrée : Contenu du CCTP technique fourni ; règlement-type ou CCAP de référence fournis.`,
    pu: 300,
    tva: 20,
  },

  // MOE toggles
  moeDiagnostic: {
    designation: `Diagnostic (construction existante)<br><br>
    Diagnostic technique de la structure et des éléments porteurs du bâtiment (~1 685 € HT).<br><br>
    Conditions d'entrée : Accès chantier, historique des pathologies, et relevés initiaux fournis.`,
    pu: 1700,
    tva: 20,
  },
  moeFeasibility: {
    designation: `Étude de faisabilité<br><br>
    Étude de faisabilité (implantation, conformité, normes) avec estimation sommaire du budget travaux.<br><br>
    Conditions d'entrée : Plans de l'existant et besoins fonctionnels détaillés fournis.`,
    pu: 500,
    tva: 20,
  },
  moeApsApd: {
    designation: `Études de conception (APS/APD)<br><br>
    Conception sommaire (esquisses, principes constructifs) incluant estimation des lots gros-œuvre (~65 € HT/m²).<br><br>
    Conditions d'entrée : Programme architectural précis et contraintes techniques définis.`,
    pu: 6500,
    tva: 20,
  },
  moeDceAct: {
    designation: `Dossier Consultation Entreprises (DCE) & ACT<br><br>
    Rédaction des pièces administratives (CCAP, CCTP, DPGF…) et Analyse des Offres (ACT) (~5% du montant travaux, min. 2 500 €).<br><br>
    Conditions d'entrée : Évaluation chiffrée des travaux connue ; liste de candidats potentiels disponible.`,
    pu: 3000,
    tva: 20,
  },
  moeExecutionPlans: {
    designation: `Plans d'exécution technique (1 prestation par corps d'état)<br><br>
    Établissement des plans d'exécution détaillés (coffrage, charpente, électricité, plomberie, etc.).<br><br>
    Conditions d'entrée : Avant-projet détaillé validé. Cahier des charges techniques initial ou plans de niveau APD disponibles.`,
    pu: 150,
    tva: 20,
  },
  moeElectricalCalc: {
    designation: `Note de calcul électrique<br><br>
    Calculs de dimensionnement des installations électriques (courants forts/faibles).<br><br>
    Conditions d'entrée : Schéma électrique de principe et puissances nominatives fournies.`,
    pu: 300,
    tva: 20,
  },
  moePlumbingCalc: {
    designation: `Note de calcul plomberie<br><br>
    Calculs de dimensionnement des réseaux d'eau potable et d'assainissement (débits, sections).<br><br>
    Conditions d'entrée : Plans sommaires de plomberie et débits estimés communiqués.`,
    pu: 300,
    tva: 20,
  },
  moeHvacCalc: {
    designation: `Note de calcul aéraulique (HVAC)<br><br>
    Calculs de dimensionnement des réseaux de ventilation/climatisation (débits d'air, pertes de charge).<br><br>
    Conditions d'entrée : Hypothèses de système (VMC simple/fluides frigorigènes) et plans HVAC de base fournis.`,
    pu: 300,
    tva: 20,
  },
  moeVrdCalc: {
    designation: `Note de calcul VRD<br><br>
    Calculs de dimensionnement VRD (voirie, assainissement pluvial et EU).<br><br>
    Conditions d'entrée : Plans topographiques et données pluviométriques locales disponibles.`,
    pu: 300,
    tva: 20,
  },
  moeThermalAttestationSmall: {
    designation: `Attestation thermique (PC <50 m²)<br><br>
    Attestation de respect de la réglementation thermique (RT/RE2020) pour dépôt de permis (<50 m²).<br><br>
    Conditions d'entrée : Données climatiques et fiches techniques des parois envoyées.`,
    pu: 30,
    tva: 20,
  },
  moeThermalStudyPc: {
    designation: `Étude thermique (PC >50 m²)<br><br>
    Étude thermique réglementaire (RT/RE2020) préalable au permis de construire (>50 m²).<br><br>
    Conditions d'entrée : Cahier des charges thermique défini ; maquettes géométriques et descriptifs des systèmes fournis.`,
    pu: 90,
    tva: 20,
  },
  moeThermalStudyConstruction: {
    designation: `Étude thermique (phase chantier)<br><br>
    Calculs thermiques en cours de chantier (bilans Cep, etc.).<br><br>
    Conditions d'entrée : Validation des choix thermiques initiaux réalisée avant travaux.`,
    pu: 200,
    tva: 20,
  },
  moeFinalAttestationAcv: {
    designation: `Attestation + ACV fin de travaux (>50 m²)<br><br>
    Calculs finaux (Cep, Cepₙr, Ic énergie+construction) et attestation de conformité RT/RE2020 avec ACV.<br><br>
    Conditions d'entrée : Rapports d'exécution (isolation, surfaces réelles) et factures finales fournis.`,
    pu: 290,
    tva: 20,
  },
};

function getSelectedServices(toggles: ServiceToggles): ServiceItem[] {
  const selectedServices: ServiceItem[] = [];

  // Parcourir toutes les clés de l'objet toggles
  for (const [key, value] of Object.entries(toggles)) {
    // Si la valeur est true et que la clé existe dans le mapping
    if (value === true && designationsMapping[key]) {
      const mapping = designationsMapping[key];
      selectedServices.push({
        key,
        designation: mapping.designation,
        pu: mapping.pu || 0,
        tva: mapping.tva || 20,
      });
    }
  }

  return selectedServices;
}

// Exemple d'utilisation :
const services: ServiceToggles = {
  descriptiveNotice: true,
  accessibilityNotice: true,
  moeDiagnostic: false,
  moeFeasibility: true,
};

const selectedList = getSelectedServices(services);


function getSelectedServicesWithTotal(toggles: ServiceToggles) {
  const services = getSelectedServices(toggles);

  const totalHT = services.reduce((sum, service) => sum + service.pu, 0);
  const totalTTC = services.reduce((sum, service) => {
    return sum + service.pu * (1 + service.tva / 100);
  }, 0);

  return {
    services,
    totalHT,
    totalTTC,
    count: services.length,
  };
}
