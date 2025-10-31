// Données des témoignages pour le carrousel
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  initials: string;
  category: "Agent Immobilier" | "Marchand de Biens" | "Particulier" | "Promoteur" | "Entreprise";
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Monsieur Thibaud Hondermarck gérant de la société Eurêka Ingénierie ! a fait un travail excellent pour 4 clients, avec la gestion des démarches concessionnaires, la création de plans des réseaux d'eau potable, électrique (ENEDIS) et Telecom (ORANGE) pour un ensemble immobilier de 4 lots. Suivi méticuleux du terrassier, instruction des demandes concessionnaires, rendez-vous techniques sur place avec clients et concessionnaires, appels et mails. L'ensemble des clients et moi sommes pleinement satisfaits de son travail rigoureux, exigeant et particulièrement professionnel. Je ne peux que vivement recommander son travail.",
    name: "Alain V.",
    title: "Agent immobilier – EIFFEL REALTY – Nice, Alpes-Maritimes, France",
    initials: "AV",
    category: "Agent Immobilier",
  },
  {
    id: 2,
    quote:
      "J'ai fait appel à EURÊKA INGÉNIERIE ! dans le cadre de plusieurs opérations de rénovation et de mise en conformité de petits ensembles immobiliers. J'ai particulièrement apprécié la rigueur et la clarté de leur méthodologie de travail : chaque étape est structurée, documentée et expliquée avec précision. Leur approche mêle écoute, pragmatisme et réactivité, ce qui facilite grandement la prise de décision et la coordination entre les différents intervenants du projet. Les livrables sont toujours soignés, complets et livrés dans les délais annoncés, un point rare et appréciable dans ce domaine. EURÊKA INGÉNIERIE se distingue avant tout par une gestion sérieuse et méthodique, qui inspire confiance et garantit des résultats à la hauteur des attentes. Une collaboration que je recommande sans réserve.",
    name: "Maurice C.",
    title: "Marchand de biens – Marseille, Alpes-Maritimes, France",
    initials: "MC",
    category: "Marchand de Biens",
  },
  {
    id: 3,
    quote:
      "J'ai sollicité EURÊKA INGÉNIERIE ! pour m'accompagner dans la préparation de mon projet de rénovation. Leur travail de définition précise des besoins m'a permis d'avoir une vision claire des travaux à prévoir et d'obtenir une estimation réaliste et cohérente du coût global de l'opération. Cette approche structurée a été déterminante pour la présentation du dossier de financement et l'obtention de mon prêt. J'ai également apprécié leur pédagogie et leur disponibilité, qui rendent les échanges simples et efficaces, même à distance. Une prestation sérieuse et utile pour démarrer un projet sur des bases solides.",
    name: "Guillaume V.",
    title: "Particulier – Lille, Nord, France",
    initials: "GV",
    category: "Particulier",
  },
  {
    id: 4,
    quote:
      "Dans le cadre d'un projet de maison passive, j'ai fait appel à EURÊKA INGÉNIERIE ! pour leur expertise technique et réglementaire. Leur accompagnement m'a permis d'intégrer des solutions innovantes (Isolation renforcée, Triple vitrage, VMC double flux avec récupération de chaleur, Étanchéité à l'air optimale) en matière d'efficacité énergétique tout en respectant strictement les exigences réglementaires en vigueur. Les conseils clairs et argumentés de l'équipe ont facilité le dialogue avec les différents intervenants et contribué à optimiser la conception du projet. Une collaboration sérieuse et constructive, que je recommande pour tout projet où innovation et conformité doivent avancer de pair.",
    name: "Khaled J.",
    title: "Promoteur – Metz, Moselle, France",
    initials: "KJ",
    category: "Promoteur",
  },
  {
    id: 5,
    quote:
      "J'ai contacté EURÊKA INGÉNIERIE ! pour m'accompagner dans la conception d'une maison bioclimatique. J'ai particulièrement apprécié leur approche pédagogique : chaque choix technique est expliqué avec clarté, ce qui permet de mieux comprendre les enjeux du projet et les principes du bâtiment durable. Les solutions proposées sont cohérentes avec le climat local et les objectifs de performance énergétique, sans tomber dans la complexité inutile. Une expérience enrichissante, à la fois professionnelle et formatrice, que je recommande à toute personne souhaitant concevoir un logement respectueux de l'environnement et bien pensé dès le départ.",
    name: "Marie V.",
    title: "Particulière – Saint-Denis, Outre-Mer, France",
    initials: "MV",
    category: "Particulier",
  },
  {
    id: 6,
    quote:
      "J'ai fait appel à EURÊKA INGÉNIERIE ! pour une rénovation intérieure complète de ma maison. Ce que j'ai le plus apprécié, c'est le rapport humain, mis au premier plan tout au long du projet. Les échanges sont francs, parfois directs, mais toujours dans l'intérêt du projet et de sa réussite. Cette franchise bienveillante m'a permis de faire les bons choix, même lorsque certaines décisions remettaient en question mes idées initiales. Le résultat est à la hauteur : un projet cohérent, réfléchi et abouti. Une collaboration sincère et professionnelle que je recommande à ceux qui recherchent un accompagnement authentique et constructif.",
    name: "Manon S.",
    title: "Particulière – Vence, Alpes-Maritimes, France",
    initials: "MS",
    category: "Particulier",
  },
  {
    id: 7,
    quote:
      "J'ai sollicité EURÊKA INGÉNIERIE ! pour une estimation de budget travaux sur un bien destiné à la vente. Leur approche m'a permis d'y voir clair dans les priorités de rénovation, en tenant compte des réglementations actuelles et des contraintes liées aux logements classés passoires énergétiques. Les conseils donnés sont empreints de bon sens et de réalisme, avec une vraie compréhension du marché immobilier et des attentes des acheteurs. Cette analyse claire et structurée a grandement contribué à la vente du bien, en apportant aux acquéreurs une vision fiable du potentiel et du coût des améliorations à prévoir. Une prestation utile et lucide, qui aide à positionner un bien sur des bases solides tout en anticipant les exigences croissantes en matière de performance énergétique.",
    name: "Stéphanie V.",
    title: "Agente Immobilière – Draguignan, Var, France",
    initials: "SV",
    category: "Agent Immobilier",
  },
  {
    id: 8,
    quote:
      "Thibaud de la société EURÊKA INGÉNIERIE ! m'a accompagné pour les études d'électricité, l'assistance dans l'étude domotique et la démarche de raccordement électrique de mon projet. J'ai particulièrement apprécié la clarté des explications et la structure du travail, qui rendent les aspects techniques beaucoup plus compréhensibles. Chaque étape est bien détaillée, avec des solutions adaptées à mes besoins et à la configuration du chantier. Un accompagnement sérieux et transparent, qui facilite vraiment la gestion des volets techniques souvent complexes dans ce type de projet.",
    name: "Abdel F.",
    title: "Entreprise électricité – Cagnes-sur-Mer, Alpes-Maritimes, France",
    initials: "AF",
    category: "Entreprise",
  },
  {
    id: 9,
    quote:
      "Nous avons collaboré avec EURÊKA INGÉNIERIE ! sur plusieurs projets de rénovation. Leur rigueur technique et leur vision globale du chantier facilitent grandement la coordination entre les différents corps d'état. Les documents transmis sont clairs, précis et exploitables, ce qui permet d'avancer sans perte de temps ni ambiguïté. Un partenaire fiable, à l'écoute, qui met en avant le pragmatisme et la cohérence technique, deux qualités essentielles dans notre métier.",
    name: "Thierry M.",
    title: "Entreprise de rénovation Tous Corps d'Etat – Fréjus, Var, France",
    initials: "TM",
    category: "Entreprise",
  },
  {
    id: 10,
    quote:
      "J'ai fait appel à EURÊKA INGÉNIERIE ! pour une mission complète d'assistance à maîtrise d'ouvrage dans le cadre d'un projet de construction neuve. Malgré une collaboration entièrement à distance, la qualité des réunions et la clarté du dossier fourni ont dépassé mes attentes. Les conseils prodigués avant le lancement des travaux m'ont permis d'éviter plusieurs erreurs courantes et de mieux comprendre les enjeux techniques et réglementaires d'un tel projet. Je ressors de cette expérience avec le sentiment d'avoir véritablement appris à piloter un projet de construction, grâce à un encadrement rigoureux et pédagogique, le tout à un coût très compétitif. Une prestation à recommander sans hésiter à ceux qui veulent comprendre et bien faire les choses. Merci Thibaud !",
    name: "Aldo A.",
    title: "Particulier – Paris, Île-de-France, France",
    initials: "AA",
    category: "Particulier",
  },
];
