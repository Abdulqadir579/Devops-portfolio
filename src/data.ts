export const profile = {
  name: 'Abdul Qadir',
  fullName: 'Abdul Qadir Sher Gulab',
  role: 'DevOps / Site Reliability Engineer',
  location: 'Dubai, UAE',
  available: true,
  availabilityNote: 'Open to DevSecOps / SRE roles',
  email: 'abdulqadirk1998@gmail.com',
  phone: '+971 58 802 8136',
  phoneHref: 'tel:+971588028136',
  github: 'https://github.com/Abdulqadir579',
  linkedin: 'https://www.linkedin.com/in/aqsg/',
  resume: '/Abdul-Qadir-DevOps-SRE-Engineer.pdf',
  visa:
    'Own UAE residence visa, self-sponsored. No employer sponsorship or NOC required.',
  intro:
    'I build and run the infrastructure under production blockchain systems. Four years of multi-region Kubernetes on AWS, GitOps delivery, and the observability to prove any of it works at 3am.',
};

export const ledger = [
  { label: 'Mean time to recovery', from: null, to: 'down 80%' },
  { label: 'Deployment time', from: '~20 min', to: 'under 5 min' },
  { label: 'Off-peak compute spend', from: null, to: 'down ~50%' },
  { label: 'Security posture score', from: '43%', to: '92%' },
];

export type Category = 'Blockchain' | 'Platform & SRE' | 'Self-directed';

export type Project = {
  title: string;
  context: string;
  category: Category;
  blurb: string;
  proves: string;
  stack: string[];
  impact?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'TokenB non-custodial wallet',
    context: 'Token13 · live on the App Store and Google Play',
    category: 'Blockchain',
    blurb:
      'Owned the full EKS infrastructure and GitHub Actions delivery pipeline for a production non-custodial wallet: multi-chain token swaps, live market data across 100+ assets, a DApps browser, and both EVM and non-EVM chain support.',
    proves:
      'Shipping and operating consumer crypto software that real users hold funds in, on infrastructure I designed end to end.',
    stack: ['EKS', 'Helm', 'GitHub Actions', 'Prometheus', 'Grafana'],
    links: [
      {
        label: 'Architecture diagram',
        href: 'https://github.com/Abdulqadir579/architecture-diagram-tokenb',
      },
    ],
  },
  {
    title: 'Merchant crypto payment platform',
    context: 'Token13 · production',
    category: 'Blockchain',
    blurb:
      'Deployed and operated a merchant payment platform on EKS serving over 10,000 concurrent users, backed by Aurora RDS, AWS WAF and CloudFront, with Loki-based audit logging for every transaction path.',
    proves:
      'Running payment-grade infrastructure where downtime and missing audit trails both cost real money.',
    stack: ['EKS', 'Aurora RDS', 'AWS WAF', 'CloudFront', 'Loki'],
    impact: '10,000+ concurrent users',
  },
  {
    title: 'B2B stablecoin settlement rails',
    context: 'Skill Space Technology · sole DevOps engineer',
    category: 'Blockchain',
    blurb:
      'Provisioned and managed the entire AWS footprint with Terraform for a B2B platform settling USDT and USDC across EVM chains (Ethereum, TRON) and non-EVM (Solana). Added Apollo config management across three environments so eight services could take config changes with no restart.',
    proves:
      'Multi-chain settlement infrastructure built from an empty AWS account, and eliminating a whole class of config-change downtime.',
    stack: ['Terraform', 'AWS', 'Ethereum', 'TRON', 'Solana', 'Apollo'],
  },
  {
    title: 'Infrastructure as code for Token13',
    context: 'Token13 · Terraform modules',
    category: 'Blockchain',
    blurb:
      'The Terraform that provisions Token13 infrastructure. Networking, EKS, data stores and IAM defined as reviewable code rather than console clicks.',
    proves:
      'Reproducible environments, and infrastructure changes that go through pull request like everything else.',
    stack: ['Terraform', 'AWS', 'EKS', 'IAM'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Abdulqadir579/terraform-token13',
      },
    ],
  },
  {
    title: 'Observability and on-call from zero',
    context: 'Token13 · greenfield build',
    category: 'Platform & SRE',
    blurb:
      'Built the entire observability and alerting stack on EKS from nothing: Prometheus, Grafana, Loki, Promtail, Blackbox Exporter and Alertmanager, with on-call routing into Lark and Slack.',
    proves:
      'Turning an opaque platform into one where an engineer can find the failing thing in minutes instead of hours.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager'],
    impact: 'MTTR down 80%',
  },
  {
    title: 'Security posture, 43% to 92%',
    context: 'Token13 · CI/CD security gates',
    category: 'Platform & SRE',
    blurb:
      'Embedded GuardDuty, Trivy container scanning, OWASP Dependency-Check, SonarQube and DefectDojo into every pipeline, then enforced security gates on all pull requests so nothing merges around them.',
    proves:
      'Security that lives in the pipeline where it blocks bad builds, not in a spreadsheet reviewed each quarter.',
    stack: ['Trivy', 'SonarQube', 'DefectDojo', 'GuardDuty', 'OWASP DC'],
    impact: '43% → 92%',
  },
  {
    title: 'Removing standing SSH access',
    context: 'Token13 · access hardening',
    category: 'Platform & SRE',
    blurb:
      'Replaced shared credentials org-wide with JumpServer PAM as a single auditable entry point to EKS, RDS and Redis, provisioning individual accounts across four teams, then moved all server access to AWS SSM Session Manager and closed the SSH ports entirely.',
    proves:
      'Every production session is attributable to a person, and there is no open SSH port left to attack.',
    stack: ['JumpServer PAM', 'AWS SSM', 'IAM', 'EKS'],
    impact: 'Zero open SSH ports',
  },
  {
    title: 'CI/CD platform under network restrictions',
    context: 'Skill Space Technology · on-premise',
    category: 'Platform & SRE',
    blurb:
      'Stood up a self-hosted GitLab instance on-premise by hand under tight network restrictions, then built Jenkins pipelines for eight Dockerized services across dev, staging and production.',
    proves:
      'Delivering a working platform in a constrained, air-gapped-adjacent environment where the managed option was not available.',
    stack: ['GitLab', 'Jenkins', 'Docker', 'Linux'],
    impact: '15 min → under 4 min per service',
  },
  {
    title: 'Kubernetes the hard way',
    context: 'Self-directed · public build series',
    category: 'Self-directed',
    blurb:
      'Bootstrapped a Kubernetes control plane from first principles on Linux VMs: certificate authority, etcd cluster, kubelet and kube-proxy, and CNI networking. Each phase documented alongside a note on what managed EKS abstracts away.',
    proves:
      'I can debug a cluster below the layer most people stop at, because I have assembled one by hand.',
    stack: ['Kubernetes', 'etcd', 'PKI', 'CNI', 'Linux'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Abdulqadir579/kubernetes-my-way',
      },
    ],
  },
  {
    title: 'AWS data lakehouse',
    context: 'Self-directed · banking-style data platform',
    category: 'Self-directed',
    blurb:
      'Built a production-shaped data lakehouse on AWS mirroring a banking data-platform stack, using S3 for storage, Glue for ingestion and cataloguing, and Athena for query.',
    proves:
      'Comfort with the data-platform side of cloud, not only the compute and delivery side.',
    stack: ['S3', 'AWS Glue', 'Athena'],
  },
  {
    title: 'GitOps delivery lab',
    context: 'Self-directed · ArgoCD',
    category: 'Self-directed',
    blurb:
      'A working ArgoCD setup for declarative application delivery, used to test sync strategies and rollback behaviour before taking the same patterns into production clusters.',
    proves: 'Git as the single source of truth for what is actually running.',
    stack: ['ArgoCD', 'Kubernetes', 'Helm'],
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/Abdulqadir579/Argocd-Project',
      },
    ],
  },
];

export const experience = [
  {
    role: 'Site Reliability Engineer',
    company: 'Token13 Software LLC',
    location: 'Dubai, UAE',
    period: 'May 2025 — Present',
    current: true,
    points: [
      'Own end-to-end EKS cluster operations across two AWS regions: Helm deployments, rolling updates, zero-downtime rollbacks and IRSA/OIDC workload identity.',
      'Tuned Cluster Autoscaler and HPA policies to cut off-peak compute spend by roughly half with no impact on peak availability.',
      'Built GitHub Actions pipelines automating build, test and deploy for 7+ Go microservices across dev and production, cutting deployment time by 80%.',
      'Host and secure production frontend properties via CloudFront and S3 with ACM certificates and WAF rules.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Skill Space Technology LLC',
    location: 'Dubai, UAE',
    period: 'May 2024 — May 2025',
    points: [
      'Sole DevOps engineer. Built the entire CI/CD platform from scratch, including a hand-configured on-premise GitLab instance under network restrictions.',
      'Provisioned all AWS infrastructure with Terraform for a B2B crypto payment platform handling USDT and USDC across EVM and non-EVM chains.',
      'Hardened pipelines with image scanning and centralised secrets management, keeping credential exposure at zero across all workflows.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Dastgyr Technologies',
    location: 'Karachi, Pakistan',
    period: 'Aug 2022 — May 2024',
    note: 'Y Combinator-backed',
    points: [
      'Migrated CI/CD for 15+ microservices from Jenkins to GitHub Actions, cutting build times from around 20 minutes to under 5 and decommissioning the Jenkins EC2 server entirely.',
      'Designed and operated AWS infrastructure for three production mobile apps and 15+ backend services in Python, Node.js and .NET.',
      'Stood up Zabbix monitoring with team-specific Slack routing so 15+ engineers were paged only for services they owned.',
    ],
  },
];

export const stack = [
  {
    group: 'Blockchain and Web3',
    items: [
      'Ethereum',
      'TRON',
      'Solana',
      'EVM and non-EVM chains',
      'USDT / USDC settlement',
      'Non-custodial wallet infrastructure',
    ],
  },
  {
    group: 'Kubernetes and delivery',
    items: [
      'Kubernetes',
      'EKS',
      'GKE',
      'Helm',
      'ArgoCD',
      'Kustomize',
      'HPA',
      'Cluster Autoscaler',
      'IRSA',
      'Docker',
    ],
  },
  {
    group: 'Cloud and infrastructure as code',
    items: [
      'AWS',
      'Terraform',
      'CloudFormation',
      'GCP',
      'Azure',
      'VPC',
      'IAM / OIDC',
      'Route 53',
      'Lambda',
    ],
  },
  {
    group: 'CI/CD',
    items: [
      'GitHub Actions',
      'Jenkins',
      'GitLab CI',
      'AWS CodePipeline',
      'OIDC federation',
      'Self-hosted runners',
      'Blue-green and rolling deploys',
    ],
  },
  {
    group: 'Observability and SRE practice',
    items: [
      'Prometheus',
      'Grafana',
      'Loki',
      'Promtail',
      'Alertmanager',
      'Blackbox Exporter',
      'Zabbix',
      'SLO / SLI definition',
      'Error budgets',
      'Incident response',
      'Postmortems',
      'Runbooks',
    ],
  },
  {
    group: 'Security and compliance',
    items: [
      'AWS WAF',
      'GuardDuty',
      'Trivy',
      'SonarQube',
      'DefectDojo',
      'Gitleaks',
      'Gosec',
      'HashiCorp Vault',
      'JumpServer PAM',
      'CyberArk',
      'mTLS',
      'VAPT remediation',
    ],
  },
  {
    group: 'Systems and data',
    items: [
      'Linux',
      'Bash',
      'Python',
      'systemd',
      'MySQL',
      'Aurora',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect — Associate', status: 'Certified' },
  { name: 'AWS Certified Cloud Practitioner', status: 'Certified' },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    status: 'In progress, target September 2026',
  },
];

export const education = {
  degree: 'BS Computer Science (Software Engineering)',
  school: 'SZABIST University, Karachi',
  year: '2021',
  note: 'Bright Scholarship recipient',
};
