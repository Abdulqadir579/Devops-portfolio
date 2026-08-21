import type { Dictionary } from './en';

// German tech teams keep most English terms (Deployment, Pipeline, Observability).
// Translating them into German reads wrong. That is deliberate here.
const de: Dictionary = {
  meta: {
    label: 'German',
    endonym: 'Deutsch',
    dir: 'ltr',
    htmlLang: 'de',
  },
  nav: {
    work: 'Projekte',
    experience: 'Erfahrung',
    stack: 'Tech-Stack',
    contact: 'Kontakt',
    resume: 'Lebenslauf',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    skip: 'Zum Inhalt springen',
    switchLanguage: 'Sprache wechseln',
  },
  hero: {
    role: 'DevOps- / Site-Reliability-Engineer',
    basedIn: 'ansässig in Dubai',
    location: 'Dubai, VAE',
    availability: 'Offen für DevSecOps- / SRE-Rollen',
    openTo: 'VAE und Europa',
    intro:
      'Ich baue und betreibe die Infrastruktur, auf der produktive Blockchain-Systeme laufen. Vier Jahre Multi-Region-Kubernetes auf AWS, GitOps-Delivery und die Observability, um nachzuweisen, dass das alles auch um drei Uhr nachts funktioniert.',
    downloadResume: 'Lebenslauf herunterladen',
    seeWork: 'Zu den Projekten',
    ledgerTitle: 'Was sich unter meiner Verantwortung verändert hat',
    photoAlt: 'Abdul Qadir Sher Gulab, DevOps- und Site-Reliability-Engineer',
  },
  ledger: [
    { label: 'Wiederherstellungszeit (MTTR)', from: null, to: '80 % kürzer' },
    { label: 'Deployment-Dauer', from: 'ca. 20 Min.', to: 'unter 5 Min.' },
    { label: 'Compute-Kosten außerhalb der Spitzenzeiten', from: null, to: 'ca. 50 % geringer' },
    { label: 'Security-Posture-Score', from: '43 %', to: '92 %' },
  ],
  sections: {
    workEyebrow: 'Ausgewählte Projekte',
    workTitle: 'Was ich gebaut habe und betreibe',
    experienceEyebrow: 'Werdegang',
    experienceTitle: 'Wo ich das gemacht habe',
    stackEyebrow: 'Werkzeuge',
    stackTitle: 'Was ich tatsächlich in Produktion einsetze',
    contactEyebrow: 'Kontakt',
    contactTitle: 'Sprechen wir',
  },
  categories: {
    all: 'Alle',
    blockchain: 'Blockchain',
    platform: 'Plattform & SRE',
    self: 'Eigene Projekte',
  },
  work: {
    filterLabel: 'Projekte filtern',
    whyItMatters: 'Warum das zählt — ',
    links: { repo: 'Repository', architecture: 'Architekturdiagramm' },
  },
  projects: {
    tokenb: {
      title: 'TokenB — Non-Custodial-Wallet',
      context: 'Token13 · live im App Store und bei Google Play',
      blurb:
        'Verantwortlich für die komplette EKS-Infrastruktur und die GitHub-Actions-Pipeline einer produktiven Non-Custodial-Wallet: Multi-Chain-Token-Swaps, Live-Marktdaten zu über 100 Assets, ein DApps-Browser sowie Unterstützung für EVM- und Nicht-EVM-Chains.',
      proves:
        'Consumer-Krypto-Software ausliefern und betreiben, in der echte Nutzer ihr Geld halten — auf einer Infrastruktur, die ich vollständig selbst entworfen habe.',
    },
    'merchant-payments': {
      title: 'Krypto-Zahlungsplattform für Händler',
      context: 'Token13 · Produktion',
      blurb:
        'Aufbau und Betrieb einer Händler-Zahlungsplattform auf EKS mit über 10.000 gleichzeitigen Nutzern, gestützt auf Aurora RDS, AWS WAF und CloudFront, mit Loki-basiertem Audit-Logging für jeden Transaktionspfad.',
      proves:
        'Betrieb von Infrastruktur auf Payment-Niveau, wo sowohl Ausfälle als auch lückenhafte Audit-Trails echtes Geld kosten.',
      impact: 'über 10.000 gleichzeitige Nutzer',
    },
    'b2b-stablecoin': {
      title: 'B2B-Settlement für Stablecoins',
      context: 'Skill Space Technology · alleiniger DevOps-Engineer',
      blurb:
        'Die gesamte AWS-Umgebung mit Terraform bereitgestellt und betrieben — für eine B2B-Plattform, die USDT und USDC über EVM-Chains (Ethereum, TRON) und Nicht-EVM (Solana) abwickelt. Ergänzt um Apollo-Config-Management über drei Umgebungen hinweg, sodass acht Services Konfigurationsänderungen ohne Neustart übernehmen.',
      proves:
        'Multi-Chain-Settlement-Infrastruktur aus einem leeren AWS-Konto heraus aufgebaut — und eine ganze Klasse von Ausfällen durch Konfigurationsänderungen beseitigt.',
    },
    'terraform-token13': {
      title: 'Infrastructure as Code für Token13',
      context: 'Token13 · Terraform-Module',
      blurb:
        'Das Terraform, das die Token13-Infrastruktur bereitstellt. Netzwerk, EKS, Datenspeicher und IAM als überprüfbarer Code statt als Klicks in der Konsole.',
      proves:
        'Reproduzierbare Umgebungen, und Infrastrukturänderungen, die wie alles andere durch einen Pull Request laufen.',
    },
    observability: {
      title: 'Observability und Rufbereitschaft von null auf',
      context: 'Token13 · Greenfield-Aufbau',
      blurb:
        'Den gesamten Observability- und Alerting-Stack auf EKS von Grund auf aufgebaut: Prometheus, Grafana, Loki, Promtail, Blackbox Exporter und Alertmanager, mit Alarmierung nach Lark und Slack.',
      proves:
        'Aus einer undurchsichtigen Plattform eine machen, auf der ein Engineer den Fehler in Minuten statt in Stunden findet.',
      impact: 'MTTR 80 % kürzer',
    },
    'security-posture': {
      title: 'Security-Posture von 43 % auf 92 %',
      context: 'Token13 · Security-Gates in CI/CD',
      blurb:
        'GuardDuty, Trivy-Container-Scanning, OWASP Dependency-Check, SonarQube und DefectDojo in jede Pipeline integriert und anschließend Security-Gates für alle Pull Requests verbindlich gemacht, sodass sich nichts daran vorbeimergen lässt.',
      proves:
        'Sicherheit, die in der Pipeline lebt und schlechte Builds blockiert — nicht in einer Tabelle, die quartalsweise durchgesehen wird.',
      impact: '43 % → 92 %',
    },
    'ssh-access': {
      title: 'Dauerhafte SSH-Zugänge abgeschafft',
      context: 'Token13 · Härtung der Zugriffe',
      blurb:
        'Gemeinsam genutzte Zugangsdaten unternehmensweit durch JumpServer PAM als einzigen auditierbaren Zugang zu EKS, RDS und Redis ersetzt, individuelle Konten für vier Teams eingerichtet, anschließend sämtliche Serverzugriffe auf AWS SSM Session Manager umgestellt und die SSH-Ports vollständig geschlossen.',
      proves:
        'Jede Produktionssitzung ist einer Person zuzuordnen, und es bleibt kein offener SSH-Port als Angriffsfläche.',
      impact: 'kein offener SSH-Port',
    },
    'cicd-restricted': {
      title: 'CI/CD-Plattform unter Netzwerkbeschränkungen',
      context: 'Skill Space Technology · On-Premise',
      blurb:
        'Eine selbst gehostete GitLab-Instanz unter strengen Netzwerkbeschränkungen manuell on-premise aufgesetzt und anschließend Jenkins-Pipelines für acht dockerisierte Services über Dev, Staging und Produktion gebaut.',
      proves:
        'Eine funktionierende Plattform in einer eingeschränkten Umgebung liefern, in der die Managed-Variante nicht zur Verfügung stand.',
      impact: '15 Min. → unter 4 Min.',
    },
    'k8s-hard-way': {
      title: 'Kubernetes the Hard Way',
      context: 'Eigenes Projekt · öffentliche Serie',
      blurb:
        'Eine Kubernetes-Control-Plane von Grund auf auf Linux-VMs aufgebaut: Certificate Authority, etcd-Cluster, kubelet und kube-proxy sowie CNI-Networking. Jede Phase dokumentiert, jeweils mit einer Notiz dazu, was ein verwaltetes EKS an dieser Stelle abstrahiert.',
      proves:
        'Ich kann einen Cluster unterhalb der Ebene debuggen, bei der die meisten aufhören — weil ich einen von Hand zusammengesetzt habe.',
    },
    'data-lakehouse': {
      title: 'AWS-Data-Lakehouse',
      context: 'Eigenes Projekt · Datenplattform nach Bankenvorbild',
      blurb:
        'Ein produktionsnahes Data Lakehouse auf AWS gebaut, das den Stack einer Bank-Datenplattform nachbildet: S3 als Speicher, Glue für Ingest und Katalogisierung, Athena für Abfragen.',
      proves:
        'Sicherheit auch auf der Datenplattform-Seite der Cloud, nicht nur bei Compute und Delivery.',
    },
    'gitops-lab': {
      title: 'GitOps-Delivery-Labor',
      context: 'Eigenes Projekt · ArgoCD',
      blurb:
        'Ein funktionierendes ArgoCD-Setup für deklaratives Application Delivery, mit dem ich Sync-Strategien und Rollback-Verhalten teste, bevor dieselben Muster in Produktionscluster wandern.',
      proves: 'Git als einzige verlässliche Quelle dafür, was tatsächlich läuft.',
    },
  },
  experience: {
    current: 'Aktuell',
    token13: {
      role: 'Site Reliability Engineer',
      location: 'Dubai, VAE',
      period: 'Mai 2025 — heute',
      points: [
        'Verantwortlich für den gesamten Betrieb der EKS-Cluster in zwei AWS-Regionen: Helm-Deployments, Rolling Updates, Rollbacks ohne Ausfallzeit und Workload Identity über IRSA/OIDC.',
        'Cluster Autoscaler und HPA-Policies so abgestimmt, dass die Compute-Kosten außerhalb der Spitzenzeiten um rund die Hälfte sinken — ohne Auswirkung auf die Verfügbarkeit zu Spitzenzeiten.',
        'GitHub-Actions-Pipelines gebaut, die Build, Test und Deployment für mehr als sieben Go-Microservices über Dev und Produktion automatisieren und die Deployment-Dauer um 80 % senken.',
        'Betrieb und Absicherung produktiver Frontends über CloudFront und S3 mit ACM-Zertifikaten und WAF-Regeln.',
      ],
    },
    skillspace: {
      role: 'DevOps Engineer',
      location: 'Dubai, VAE',
      period: 'Mai 2024 — Mai 2025',
      points: [
        'Alleiniger DevOps-Engineer. Die komplette CI/CD-Plattform von Grund auf aufgebaut, einschließlich einer von Hand konfigurierten On-Premise-GitLab-Instanz unter Netzwerkbeschränkungen.',
        'Sämtliche AWS-Infrastruktur mit Terraform bereitgestellt — für eine B2B-Krypto-Zahlungsplattform, die USDT und USDC über EVM- und Nicht-EVM-Chains abwickelt.',
        'Pipelines mit Image-Scanning und zentralem Secrets-Management gehärtet; die Zahl offengelegter Zugangsdaten blieb über alle Workflows hinweg bei null.',
      ],
    },
    dastgyr: {
      role: 'DevOps Engineer',
      location: 'Karatschi, Pakistan',
      period: 'Aug. 2022 — Mai 2024',
      note: 'von Y Combinator finanziert',
      points: [
        'CI/CD für über 15 Microservices von Jenkins auf GitHub Actions migriert, die Build-Zeiten von rund 20 Minuten auf unter 5 gesenkt und den Jenkins-EC2-Server vollständig abgeschaltet.',
        'AWS-Infrastruktur für drei produktive Mobile-Apps und mehr als 15 Backend-Services in Python, Node.js und .NET entworfen und betrieben.',
        'Zabbix-Monitoring mit teamspezifischem Slack-Routing aufgesetzt, sodass über 15 Engineers nur für ihre eigenen Services alarmiert wurden.',
      ],
    },
  },
  credentials: {
    certificationsTitle: 'Zertifizierungen',
    educationTitle: 'Ausbildung',
    certified: 'Zertifiziert',
    ckaStatus: 'in Vorbereitung, angestrebt für September 2026',
    degree: 'BS Informatik (Software Engineering)',
    school: 'SZABIST University, Karatschi',
    educationNote: '2021 · Stipendiat des Bright-Programms',
  },
  stackGroups: {
    blockchain: 'Blockchain und Web3',
    kubernetes: 'Kubernetes und Delivery',
    cloud: 'Cloud und Infrastructure as Code',
    cicd: 'CI/CD',
    observability: 'Observability und SRE-Praxis',
    security: 'Security und Compliance',
    systems: 'Systeme und Daten',
  },
  contact: {
    intro:
      'Ich bin offen für DevSecOps- und SRE-Rollen in den VAE und bereit, für das richtige Team nach Europa umzuziehen. Gerne gehe ich jedes der oben genannten Systeme im Detail mit Ihnen durch. Am schnellsten erreichen Sie mich per E-Mail.',
    email: 'E-Mail',
    phone: 'Telefon',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    authorisationTitle: 'Arbeitserlaubnis',
    languagesTitle: 'Sprachen',
  },
  authorisation: [
    {
      region: 'Vereinigte Arabische Emirate',
      status: 'kein Sponsoring nötig',
      detail:
        'Ich verfüge über eine eigene, selbst finanzierte Aufenthaltsgenehmigung. Kein Arbeitgeber-Sponsoring, kein NOC — ich kann sofort anfangen.',
    },
    {
      region: 'Europa',
      status: 'umzugsbereit',
      detail:
        'Ich suche aktiv einen Umzug nach Europa und bin bereit, ein Sponsoring-Verfahren zu durchlaufen. Hochschulabschluss in Informatik und über vier Jahre Berufserfahrung — üblicherweise die Grundvoraussetzung für eine EU Blue Card, wobei die Schwellenwerte je nach Land variieren.',
    },
  ],
  languages: [
    { name: 'Englisch', level: 'verhandlungssicher' },
    { name: 'Urdu', level: 'Muttersprache' },
  ],
  footer: {
    built: 'Gebaut mit React und Tailwind. Deployment über Vercel.',
  },
};

export default de;
