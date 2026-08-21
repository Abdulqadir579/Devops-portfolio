const en = {
  meta: {
    label: 'English',
    endonym: 'English',
    dir: 'ltr' as 'ltr' | 'rtl',
    htmlLang: 'en',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
    resume: 'Résumé',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    switchLanguage: 'Change language',
  },
  hero: {
    role: 'DevOps / Site Reliability Engineer',
    basedIn: 'based in Dubai',
    location: 'Dubai, UAE',
    availability: 'Open to DevSecOps / SRE roles',
    openTo: 'UAE and Europe',
    intro:
      'I build and run the infrastructure under production blockchain systems. Four years of multi-region Kubernetes on AWS, GitOps delivery, and the observability to prove any of it works at 3am.',
    downloadResume: 'Download résumé',
    seeWork: 'See the work',
    ledgerTitle: 'What changed on my watch',
    photoAlt: 'Abdul Qadir Sher Gulab, DevOps and Site Reliability Engineer',
  },
  ledger: [
    { label: 'Mean time to recovery', from: null, to: 'down 80%' },
    { label: 'Deployment time', from: '~20 min', to: 'under 5 min' },
    { label: 'Off-peak compute spend', from: null, to: 'down ~50%' },
    { label: 'Security posture score', from: '43%', to: '92%' },
  ],
  sections: {
    workEyebrow: 'Selected work',
    workTitle: 'Things I built and run',
    experienceEyebrow: 'Track record',
    experienceTitle: 'Where I have done it',
    stackEyebrow: 'Tooling',
    stackTitle: 'What I actually use in production',
    contactEyebrow: 'Contact',
    contactTitle: 'Let us talk',
  },
  categories: {
    all: 'All',
    blockchain: 'Blockchain',
    platform: 'Platform & SRE',
    self: 'Self-directed',
  },
  work: {
    filterLabel: 'Filter work',
    whyItMatters: 'Why it matters — ',
    links: { repo: 'Repository', architecture: 'Architecture diagram' },
  },
  projects: {
    tokenb: {
      title: 'TokenB non-custodial wallet',
      context: 'Token13 · live on the App Store and Google Play',
      blurb:
        'Owned the full EKS infrastructure and GitHub Actions delivery pipeline for a production non-custodial wallet: multi-chain token swaps, live market data across 100+ assets, a DApps browser, and both EVM and non-EVM chain support.',
      proves:
        'Shipping and operating consumer crypto software that real users hold funds in, on infrastructure I designed end to end.',
    },
    'merchant-payments': {
      title: 'Merchant crypto payment platform',
      context: 'Token13 · production',
      blurb:
        'Deployed and operated a merchant payment platform on EKS serving over 10,000 concurrent users, backed by Aurora RDS, AWS WAF and CloudFront, with Loki-based audit logging for every transaction path.',
      proves:
        'Running payment-grade infrastructure where downtime and missing audit trails both cost real money.',
      impact: '10,000+ concurrent users',
    },
    'b2b-stablecoin': {
      title: 'B2B stablecoin settlement rails',
      context: 'Skill Space Technology · sole DevOps engineer',
      blurb:
        'Provisioned and managed the entire AWS footprint with Terraform for a B2B platform settling USDT and USDC across EVM chains (Ethereum, TRON) and non-EVM (Solana). Added Apollo config management across three environments so eight services could take config changes with no restart.',
      proves:
        'Multi-chain settlement infrastructure built from an empty AWS account, and eliminating a whole class of config-change downtime.',
    },
    'terraform-token13': {
      title: 'Infrastructure as code for Token13',
      context: 'Token13 · Terraform modules',
      blurb:
        'The Terraform that provisions Token13 infrastructure. Networking, EKS, data stores and IAM defined as reviewable code rather than console clicks.',
      proves:
        'Reproducible environments, and infrastructure changes that go through pull request like everything else.',
    },
    observability: {
      title: 'Observability and on-call from zero',
      context: 'Token13 · greenfield build',
      blurb:
        'Built the entire observability and alerting stack on EKS from nothing: Prometheus, Grafana, Loki, Promtail, Blackbox Exporter and Alertmanager, with on-call routing into Lark and Slack.',
      proves:
        'Turning an opaque platform into one where an engineer can find the failing thing in minutes instead of hours.',
      impact: 'MTTR down 80%',
    },
    'security-posture': {
      title: 'Security posture, 43% to 92%',
      context: 'Token13 · CI/CD security gates',
      blurb:
        'Embedded GuardDuty, Trivy container scanning, OWASP Dependency-Check, SonarQube and DefectDojo into every pipeline, then enforced security gates on all pull requests so nothing merges around them.',
      proves:
        'Security that lives in the pipeline where it blocks bad builds, not in a spreadsheet reviewed each quarter.',
      impact: '43% → 92%',
    },
    'ssh-access': {
      title: 'Removing standing SSH access',
      context: 'Token13 · access hardening',
      blurb:
        'Replaced shared credentials org-wide with JumpServer PAM as a single auditable entry point to EKS, RDS and Redis, provisioning individual accounts across four teams, then moved all server access to AWS SSM Session Manager and closed the SSH ports entirely.',
      proves:
        'Every production session is attributable to a person, and there is no open SSH port left to attack.',
      impact: 'Zero open SSH ports',
    },
    'cicd-restricted': {
      title: 'CI/CD platform under network restrictions',
      context: 'Skill Space Technology · on-premise',
      blurb:
        'Stood up a self-hosted GitLab instance on-premise by hand under tight network restrictions, then built Jenkins pipelines for eight Dockerized services across dev, staging and production.',
      proves:
        'Delivering a working platform in a constrained environment where the managed option was not available.',
      impact: '15 min → under 4 min',
    },
    'k8s-hard-way': {
      title: 'Kubernetes the hard way',
      context: 'Self-directed · public build series',
      blurb:
        'Bootstrapped a Kubernetes control plane from first principles on Linux VMs: certificate authority, etcd cluster, kubelet and kube-proxy, and CNI networking. Each phase documented alongside a note on what managed EKS abstracts away.',
      proves:
        'I can debug a cluster below the layer most people stop at, because I have assembled one by hand.',
    },
    'data-lakehouse': {
      title: 'AWS data lakehouse',
      context: 'Self-directed · banking-style data platform',
      blurb:
        'Built a production-shaped data lakehouse on AWS mirroring a banking data-platform stack, using S3 for storage, Glue for ingestion and cataloguing, and Athena for query.',
      proves:
        'Comfort with the data-platform side of cloud, not only the compute and delivery side.',
    },
    'gitops-lab': {
      title: 'GitOps delivery lab',
      context: 'Self-directed · ArgoCD',
      blurb:
        'A working ArgoCD setup for declarative application delivery, used to test sync strategies and rollback behaviour before taking the same patterns into production clusters.',
      proves: 'Git as the single source of truth for what is actually running.',
    },
  },
  experience: {
    current: 'Current',
    token13: {
      role: 'Site Reliability Engineer',
      location: 'Dubai, UAE',
      period: 'May 2025 — Present',
      points: [
        'Own end-to-end EKS cluster operations across two AWS regions: Helm deployments, rolling updates, zero-downtime rollbacks and IRSA/OIDC workload identity.',
        'Tuned Cluster Autoscaler and HPA policies to cut off-peak compute spend by roughly half with no impact on peak availability.',
        'Built GitHub Actions pipelines automating build, test and deploy for 7+ Go microservices across dev and production, cutting deployment time by 80%.',
        'Host and secure production frontend properties via CloudFront and S3 with ACM certificates and WAF rules.',
      ],
    },
    skillspace: {
      role: 'DevOps Engineer',
      location: 'Dubai, UAE',
      period: 'May 2024 — May 2025',
      points: [
        'Sole DevOps engineer. Built the entire CI/CD platform from scratch, including a hand-configured on-premise GitLab instance under network restrictions.',
        'Provisioned all AWS infrastructure with Terraform for a B2B crypto payment platform handling USDT and USDC across EVM and non-EVM chains.',
        'Hardened pipelines with image scanning and centralised secrets management, keeping credential exposure at zero across all workflows.',
      ],
    },
    dastgyr: {
      role: 'DevOps Engineer',
      location: 'Karachi, Pakistan',
      period: 'Aug 2022 — May 2024',
      note: 'Y Combinator-backed',
      points: [
        'Migrated CI/CD for 15+ microservices from Jenkins to GitHub Actions, cutting build times from around 20 minutes to under 5 and decommissioning the Jenkins EC2 server entirely.',
        'Designed and operated AWS infrastructure for three production mobile apps and 15+ backend services in Python, Node.js and .NET.',
        'Stood up Zabbix monitoring with team-specific Slack routing so 15+ engineers were paged only for services they owned.',
      ],
    },
  },
  credentials: {
    certificationsTitle: 'Certifications',
    educationTitle: 'Education',
    certified: 'Certified',
    ckaStatus: 'In progress, target September 2026',
    degree: 'BS Computer Science (Software Engineering)',
    school: 'SZABIST University, Karachi',
    educationNote: '2021 · Bright Scholarship recipient',
  },
  stackGroups: {
    blockchain: 'Blockchain and Web3',
    kubernetes: 'Kubernetes and delivery',
    cloud: 'Cloud and infrastructure as code',
    cicd: 'CI/CD',
    observability: 'Observability and SRE practice',
    security: 'Security and compliance',
    systems: 'Systems and data',
  },
  contact: {
    intro:
      'I am open to DevSecOps and SRE roles in the UAE, and to relocating to Europe for the right team. Happy to walk through any of the systems above in detail. Fastest route is email.',
    email: 'Email',
    phone: 'Phone',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    authorisationTitle: 'Work authorisation',
    languagesTitle: 'Languages',
  },
  authorisation: [
    {
      region: 'United Arab Emirates',
      status: 'No sponsorship needed',
      detail:
        'I hold my own residence visa, self-sponsored. No employer sponsorship, no NOC, and I can start immediately.',
    },
    {
      region: 'Europe',
      status: 'Open to relocation',
      detail:
        'Actively looking to relocate and happy to go through a sponsorship process. Degree-qualified in computer science with 4+ years of experience, which is the usual baseline for an EU Blue Card, though thresholds vary by country.',
    },
  ],
  languages: [
    { name: 'English', level: 'Full professional' },
    { name: 'Urdu', level: 'Native' },
  ],
  footer: {
    built: 'Built with React and Tailwind. Deployed on Vercel.',
  },
};

export type Dictionary = typeof en;
export default en;
