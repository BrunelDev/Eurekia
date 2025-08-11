# Application Web Eureka

Bienvenue sur le dépôt officiel du site web Eureka. Ce projet est une application frontend moderne et responsive, conçue avec les dernières technologies web pour présenter nos services et notre expertise.

## À propos du projet

Cette application constitue la présence numérique principale d'Eureka. Elle fournit aux utilisateurs des informations sur nos services, nos solutions, nos tarifs et notre entreprise. Elle comprend également un formulaire de contact et une inscription à la newsletter.

Les fonctionnalités clés incluent :
*   **Page d'accueil (`Accueil`) :** Une présentation de l'entreprise et de ses offres.
*   **À propos de nous (`APropos`) :** Des informations détaillées sur la mission et l'équipe de l'entreprise.
*   **Nos solutions (`NosSolutions`) :** Une description des services et produits proposés.
*   **Tarifs (`Pricing`) :** Des informations sur le coût des services.
*   **Contact (`Contact`) :** Un formulaire permettant aux utilisateurs de nous contacter.
*   **Demande de devis (`DevisChoice`) :** Une fonctionnalité pour demander un devis.
*   **Ressources (`RessourcesEtude`) :** Une section pour les études de cas et autres ressources.
*   **Inscription à la newsletter (`newsletterRegister`) :** Un formulaire pour s'inscrire à la newsletter de l'entreprise.

## Stack Technologique

Ce projet est construit avec une stack technologique moderne et robuste :

*   **Framework :** [React](https://reactjs.org/)
*   **Outil de build :** [Vite](https://vitejs.dev/)
*   **Langage :** [TypeScript](https://www.typescriptlang.org/)
*   **Style :** [Tailwind CSS](https://tailwindcss.com/)
*   **Gestionnaire de paquets :** [Bun](https://bun.sh/)

## Structure du Projet

Le projet suit une architecture basée sur les composants, avec une séparation claire des responsabilités.

```
/src
├── App.tsx       # Composant principal de l'application
├── components/   # Composants d'interface utilisateur réutilisables
├── index.tsx     # Point d'entrée de l'application
├── lib/          # Fonctions utilitaires
└── screens/      # Composants de page de haut niveau
    ├── Accueil/
    ├── APropos/
    ├── Contact/
    ├── DevisChoice/
    ├── Map/
    ├── NosSolutions/
    ├── Pricing/
    ├── RessourcesEtude/
    └── newsletterRegister/
```

## Pour Commencer

Pour obtenir une copie locale et la faire fonctionner, suivez ces étapes simples.

### Prérequis

Assurez-vous d'avoir [Bun](https://bun.sh/docs/installation) installé sur votre machine.

### Installation

1.  Clonez le dépôt :
    ```sh
    git clone https://github.com/BrunelDev/Eurekia.git
    ```
2.  Accédez au répertoire du projet :
    ```sh
    cd Eureka
    ```
3.  Installez les dépendances :
    ```sh
    bun install
    ```

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

*   `bun run dev` : Lance l'application en mode développement. Ouvrez [http://localhost:5173](http://localhost:5173) pour la voir dans le navigateur.
*   `bun run build` : Construit l'application pour la production dans le dossier `dist`.
*   `bun run preview` : Sert la version de production localement pour un aperçu.

*Note : Ce sont des scripts Vite standards. Veuillez les vérifier par rapport à votre fichier `package.json`.*

## Déploiement

Ce projet est configuré pour un déploiement facile sur [Vercel](https://www.eurekaingenierie.com/). Le fichier `vercel.json` à la racine du projet contient la configuration nécessaire. Toute poussée sur la branche `main` déclenchera un nouveau déploiement.