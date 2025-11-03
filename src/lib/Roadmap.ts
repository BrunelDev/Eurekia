export interface RoadmapItem {
  title: string;
  description?: string;
}

export interface RoadmapPhase {
  id: number;
  title: string;
  period: string;
  icon: string; // emoji ou icône
  items: RoadmapItem[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    id: 1,
    title: "En cours",
    period: "T3 2025 – Été",
    icon: "🚀",
    items: [
      { title: "Finalisation du site internet (version 1.0)" },
      { title: "Mise en ligne du tableau de prestations (missions AMO/MOE)" },
      { title: "Ajout d’un formulaire de demande de devis automatisé" },
      { title: "Création d’une section « Questions fréquentes »" },
    ],
  },
  {
    id: 2,
    title: "Prochaines étapes",
    period: "T4 2025 – Automne",
    icon: "🧱",
    items: [
      { title: "Lancement d’un agent IA pour assister et développer en autonomie" },
      { title: "Mise en ligne" },
      { title: "Lancement d’un simulateur de faisabilité rapide (projet <150 m²)" },
      { title: "Lancement d’un simulateur photo / vidéo rapide (projet <150 m²)" },
    ],
  },
  {
    id: 3,
    title: "À venir",
    period: "T1 2026 – Hiver",
    icon: "🔍",
    items: [
      { title: "Ajout d’un espace client pour le suivi des projets à distance" },
      { title: "Mise en ligne de modèles & documents types (PDF téléchargeables)" },
      { title: "Intégration d’un module de prise de rendez-vous en ligne" },
      { title: "Mise en ligne d’un guide interactif des démarches administratives" },
      { title: "Version mobile optimisée du simulateur" },
      { title: "Intégration d’un outil de suivi d’avancement (projets clients)" },
    ],
  },
  {
    id: 4,
    title: "En réflexion",
    period: "2026",
    icon: "📘",
    items: [
      { title: "Réseau partenaires (artisans, experts, diagnostiqueurs de confiance)" },
      { title: "Plateforme collaborative pour gérer son projet de A à Z avec nos experts" },
      { title: "Création d’une académie en ligne (mini-cours et tutoriels)" },
      { title: "Offre « pack projet clé en main » 100 % en ligne" },
      { title: "Application mobile dédiée EURÊK’IA !" },
      { title: "Ajout de vidéos explicatives sur les étapes d’un projet AMO/MOE" },
    ],
  },
];
