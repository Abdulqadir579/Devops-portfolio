import type { Dictionary } from './en';

const fr: Dictionary = {
  meta: {
    label: 'French',
    endonym: 'Français',
    dir: 'ltr',
    htmlLang: 'fr',
  },
  nav: {
    work: 'Projets',
    experience: 'Expérience',
    stack: 'Stack',
    contact: 'Contact',
    resume: 'CV',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skip: 'Aller au contenu',
    switchLanguage: 'Changer de langue',
  },
  hero: {
    role: 'Ingénieur DevOps / Site Reliability',
    basedIn: 'basé à Dubaï',
    location: 'Dubaï, Émirats arabes unis',
    availability: 'Ouvert aux postes DevSecOps / SRE',
    openTo: 'Émirats arabes unis et Europe',
    intro:
      "Je conçois et j'exploite l'infrastructure sur laquelle tournent des systèmes blockchain en production. Quatre ans de Kubernetes multirégion sur AWS, de livraison GitOps et de l'observabilité qu'il faut pour prouver que tout cela fonctionne à trois heures du matin.",
    downloadResume: 'Télécharger le CV',
    seeWork: 'Voir les projets',
    ledgerTitle: 'Ce qui a changé sous ma responsabilité',
    photoAlt: 'Abdul Qadir Sher Gulab, ingénieur DevOps et Site Reliability',
  },
  ledger: [
    { label: 'Temps moyen de rétablissement (MTTR)', from: null, to: '−80 %' },
    { label: 'Durée de déploiement', from: '≈ 20 min', to: 'moins de 5 min' },
    { label: 'Coût de calcul hors pointe', from: null, to: '≈ −50 %' },
    { label: 'Score de posture de sécurité', from: '43 %', to: '92 %' },
  ],
  sections: {
    workEyebrow: 'Projets sélectionnés',
    workTitle: "Ce que j'ai construit et ce que j'exploite",
    experienceEyebrow: 'Parcours',
    experienceTitle: "Où je l'ai fait",
    stackEyebrow: 'Outils',
    stackTitle: "Ce que j'utilise réellement en production",
    contactEyebrow: 'Contact',
    contactTitle: 'Discutons',
  },
  categories: {
    all: 'Tout',
    blockchain: 'Blockchain',
    platform: 'Plateforme et SRE',
    self: 'Projets personnels',
  },
  work: {
    filterLabel: 'Filtrer les projets',
    whyItMatters: 'Pourquoi cela compte — ',
    links: { repo: 'Dépôt', architecture: "Schéma d'architecture" },
  },
  projects: {
    tokenb: {
      title: 'TokenB — portefeuille non dépositaire',
      context: "Token13 · disponible sur l'App Store et Google Play",
      blurb:
        "Responsable de toute l'infrastructure EKS et du pipeline de livraison GitHub Actions d'un portefeuille non dépositaire en production : échanges de jetons multichaînes, données de marché en direct sur plus de 100 actifs, navigateur DApps et prise en charge des chaînes EVM et non-EVM.",
      proves:
        "Livrer et exploiter un logiciel crypto grand public dans lequel de vrais utilisateurs placent leurs fonds, sur une infrastructure que j'ai conçue de bout en bout.",
    },
    'merchant-payments': {
      title: 'Plateforme de paiement crypto pour commerçants',
      context: 'Token13 · production',
      blurb:
        "Déploiement et exploitation d'une plateforme de paiement sur EKS servant plus de 10 000 utilisateurs simultanés, adossée à Aurora RDS, AWS WAF et CloudFront, avec journalisation d'audit via Loki sur chaque parcours de transaction.",
      proves:
        "Exploiter une infrastructure de niveau paiement, où l'indisponibilité comme les pistes d'audit lacunaires coûtent de l'argent réel.",
      impact: '10 000+ utilisateurs simultanés',
    },
    'b2b-stablecoin': {
      title: 'Rails de règlement B2B en stablecoins',
      context: 'Skill Space Technology · seul ingénieur DevOps',
      blurb:
        "Provisionnement et gestion de l'ensemble de l'environnement AWS avec Terraform pour une plateforme B2B réglant des USDT et USDC sur des chaînes EVM (Ethereum, TRON) et non-EVM (Solana). Ajout de la gestion de configuration Apollo sur trois environnements, permettant à huit services de prendre en compte les changements sans redémarrage.",
      proves:
        "Une infrastructure de règlement multichaîne bâtie à partir d'un compte AWS vide, et toute une catégorie d'interruptions liées aux changements de configuration éliminée.",
    },
    'terraform-token13': {
      title: 'Infrastructure as code pour Token13',
      context: 'Token13 · modules Terraform',
      blurb:
        "Le Terraform qui provisionne l'infrastructure de Token13. Réseau, EKS, stockage de données et IAM définis comme du code relisible plutôt que par des clics dans la console.",
      proves:
        "Des environnements reproductibles, et des changements d'infrastructure qui passent par une pull request comme tout le reste.",
    },
    observability: {
      title: "Observabilité et astreinte partant de zéro",
      context: 'Token13 · construction greenfield',
      blurb:
        "Construction complète de la pile d'observabilité et d'alerte sur EKS à partir de rien : Prometheus, Grafana, Loki, Promtail, Blackbox Exporter et Alertmanager, avec routage des astreintes vers Lark et Slack.",
      proves:
        "Transformer une plateforme opaque en une plateforme où un ingénieur trouve la panne en quelques minutes plutôt qu'en quelques heures.",
      impact: 'MTTR −80 %',
    },
    'security-posture': {
      title: 'Posture de sécurité, de 43 % à 92 %',
      context: 'Token13 · portes de sécurité CI/CD',
      blurb:
        "Intégration de GuardDuty, du scan de conteneurs Trivy, d'OWASP Dependency-Check, de SonarQube et de DefectDojo dans chaque pipeline, puis application de portes de sécurité sur toutes les pull requests afin que rien ne puisse les contourner.",
      proves:
        "Une sécurité qui vit dans le pipeline et bloque les mauvais builds, plutôt que dans un tableur relu chaque trimestre.",
      impact: '43 % → 92 %',
    },
    'ssh-access': {
      title: "Suppression des accès SSH permanents",
      context: 'Token13 · durcissement des accès',
      blurb:
        "Remplacement des identifiants partagés à l'échelle de l'entreprise par JumpServer PAM comme point d'entrée unique et auditable vers EKS, RDS et Redis, avec des comptes individuels pour quatre équipes, puis bascule de tous les accès serveurs vers AWS SSM Session Manager et fermeture complète des ports SSH.",
      proves:
        "Chaque session en production est attribuable à une personne, et il ne reste aucun port SSH ouvert à attaquer.",
      impact: 'aucun port SSH ouvert',
    },
    'cicd-restricted': {
      title: 'Plateforme CI/CD sous contraintes réseau',
      context: 'Skill Space Technology · sur site',
      blurb:
        "Mise en place manuelle d'une instance GitLab auto-hébergée sur site sous de fortes contraintes réseau, puis construction de pipelines Jenkins pour huit services conteneurisés sur les environnements de développement, de recette et de production.",
      proves:
        "Livrer une plateforme fonctionnelle dans un environnement contraint où l'option managée n'était pas disponible.",
      impact: '15 min → moins de 4 min',
    },
    'k8s-hard-way': {
      title: 'Kubernetes the hard way',
      context: 'Projet personnel · série publique',
      blurb:
        "Amorçage d'un plan de contrôle Kubernetes depuis les fondations sur des VM Linux : autorité de certification, cluster etcd, kubelet et kube-proxy, et réseau CNI. Chaque étape documentée, accompagnée d'une note sur ce qu'un EKS managé masque à cet endroit.",
      proves:
        "Je sais déboguer un cluster sous la couche où la plupart s'arrêtent, parce que j'en ai assemblé un à la main.",
    },
    'data-lakehouse': {
      title: 'Data lakehouse sur AWS',
      context: 'Projet personnel · plateforme de données de type bancaire',
      blurb:
        "Construction d'un data lakehouse de forme production sur AWS reproduisant la pile d'une plateforme de données bancaire : S3 pour le stockage, Glue pour l'ingestion et le catalogage, Athena pour les requêtes.",
      proves:
        "De l'aisance aussi du côté plateforme de données du cloud, pas seulement du côté calcul et livraison.",
    },
    'gitops-lab': {
      title: 'Laboratoire de livraison GitOps',
      context: 'Projet personnel · ArgoCD',
      blurb:
        "Une configuration ArgoCD opérationnelle pour la livraison déclarative d'applications, utilisée pour tester les stratégies de synchronisation et le comportement des rollbacks avant de porter les mêmes schémas en production.",
      proves: "Git comme source de vérité unique de ce qui tourne réellement.",
    },
  },
  experience: {
    current: 'En poste',
    token13: {
      role: 'Ingénieur Site Reliability',
      location: 'Dubaï, Émirats arabes unis',
      period: 'mai 2025 — aujourd’hui',
      points: [
        "Responsable de bout en bout de l'exploitation des clusters EKS sur deux régions AWS : déploiements Helm, mises à jour progressives, rollbacks sans interruption et identité de charge de travail via IRSA/OIDC.",
        "Réglage des politiques Cluster Autoscaler et HPA pour réduire de moitié environ le coût de calcul hors pointe, sans effet sur la disponibilité aux heures de pointe.",
        "Construction de pipelines GitHub Actions automatisant build, tests et déploiement pour plus de sept microservices Go en développement et en production, réduisant la durée de déploiement de 80 %.",
        "Hébergement et sécurisation des frontends de production via CloudFront et S3, avec certificats ACM et règles WAF.",
      ],
    },
    skillspace: {
      role: 'Ingénieur DevOps',
      location: 'Dubaï, Émirats arabes unis',
      period: 'mai 2024 — mai 2025',
      points: [
        "Seul ingénieur DevOps. Construction de toute la plateforme CI/CD à partir de zéro, y compris une instance GitLab sur site configurée à la main sous contraintes réseau.",
        "Provisionnement de toute l'infrastructure AWS avec Terraform pour une plateforme de paiement crypto B2B traitant des USDT et USDC sur des chaînes EVM et non-EVM.",
        "Durcissement des pipelines par le scan d'images et une gestion centralisée des secrets, avec zéro exposition d'identifiants sur l'ensemble des workflows.",
      ],
    },
    dastgyr: {
      role: 'Ingénieur DevOps',
      location: 'Karachi, Pakistan',
      period: 'août 2022 — mai 2024',
      note: 'soutenue par Y Combinator',
      points: [
        "Migration de la CI/CD de plus de 15 microservices de Jenkins vers GitHub Actions, réduisant les temps de build d'environ 20 minutes à moins de 5 et permettant la mise hors service complète du serveur EC2 Jenkins.",
        "Conception et exploitation de l'infrastructure AWS de trois applications mobiles en production et de plus de 15 services backend en Python, Node.js et .NET.",
        "Mise en place d'une supervision Zabbix avec routage Slack par équipe, afin que plus de 15 ingénieurs ne soient alertés que pour les services dont ils avaient la charge.",
      ],
    },
  },
  credentials: {
    certificationsTitle: 'Certifications',
    educationTitle: 'Formation',
    certified: 'Certifié',
    ckaStatus: 'en cours, visée septembre 2026',
    degree: 'Licence en informatique (génie logiciel)',
    school: 'Université SZABIST, Karachi',
    educationNote: '2021 · boursier du programme Bright',
  },
  stackGroups: {
    blockchain: 'Blockchain et Web3',
    kubernetes: 'Kubernetes et livraison',
    cloud: 'Cloud et infrastructure as code',
    cicd: 'CI/CD',
    observability: 'Observabilité et pratique SRE',
    security: 'Sécurité et conformité',
    systems: 'Systèmes et données',
  },
  contact: {
    intro:
      "Je suis ouvert aux postes DevSecOps et SRE aux Émirats arabes unis, et prêt à m'installer en Europe pour la bonne équipe. C'est avec plaisir que je détaillerai n'importe lequel des systèmes ci-dessus. Le plus rapide reste l'e-mail.",
    email: 'E-mail',
    phone: 'Téléphone',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    authorisationTitle: 'Autorisation de travail',
    languagesTitle: 'Langues',
  },
  authorisation: [
    {
      region: 'Émirats arabes unis',
      status: 'aucun parrainage nécessaire',
      detail:
        "Je dispose de mon propre titre de séjour, que je finance moi-même. Aucun parrainage employeur, aucun NOC, et je peux commencer immédiatement.",
    },
    {
      region: 'Europe',
      status: 'prêt à déménager',
      detail:
        "Je cherche activement à m'installer en Europe et suis prêt à suivre une procédure de parrainage. Diplômé en informatique avec plus de quatre ans d'expérience, ce qui correspond au socle habituel de la carte bleue européenne, même si les seuils varient selon les pays.",
    },
  ],
  languages: [
    { name: 'Anglais', level: 'professionnel complet' },
    { name: 'Ourdou', level: 'langue maternelle' },
  ],
  footer: {
    built: 'Construit avec React et Tailwind. Déployé sur Vercel.',
  },
};

export default fr;
