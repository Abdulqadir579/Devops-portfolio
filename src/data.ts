// Language-neutral structure. Prose lives in src/i18n/<lang>.ts
// Tech names, links, dates and companies are not translated.

export const profile = {
  name: 'Abdul Qadir',
  fullName: 'Abdul Qadir Sher Gulab',
  photo: '/abdul-qadir.webp',
  available: true,
  email: 'abdulqadirk1998@gmail.com',
  phone: '+971 58 802 8136',
  phoneHref: 'tel:+971588028136',
  github: 'https://github.com/Abdulqadir579',
  githubHandle: 'Abdulqadir579',
  linkedin: 'https://www.linkedin.com/in/aqsg/',
  linkedinHandle: 'in/aqsg',
  resume: '/Abdul-Qadir-DevOps-SRE-Engineer.pdf',
};

export type Category = 'blockchain' | 'platform' | 'self';

export type ProjectMeta = {
  id: string;
  category: Category;
  stack: string[];
  links?: { key: string; href: string }[];
};

export const projects: ProjectMeta[] = [
  {
    id: 'tokenb',
    category: 'blockchain',
    stack: ['EKS', 'Helm', 'GitHub Actions', 'Prometheus', 'Grafana'],
    links: [
      {
        key: 'architecture',
        href: 'https://github.com/Abdulqadir579/architecture-diagram-tokenb',
      },
    ],
  },
  {
    id: 'merchant-payments',
    category: 'blockchain',
    stack: ['EKS', 'Aurora RDS', 'AWS WAF', 'CloudFront', 'Loki'],
  },
  {
    id: 'b2b-stablecoin',
    category: 'blockchain',
    stack: ['Terraform', 'AWS', 'Ethereum', 'TRON', 'Solana', 'Apollo'],
  },
  {
    id: 'terraform-token13',
    category: 'blockchain',
    stack: ['Terraform', 'AWS', 'EKS', 'IAM'],
    links: [
      { key: 'repo', href: 'https://github.com/Abdulqadir579/terraform-token13' },
    ],
  },
  {
    id: 'observability',
    category: 'platform',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager'],
  },
  {
    id: 'security-posture',
    category: 'platform',
    stack: ['Trivy', 'SonarQube', 'DefectDojo', 'GuardDuty', 'OWASP DC'],
  },
  {
    id: 'ssh-access',
    category: 'platform',
    stack: ['JumpServer PAM', 'AWS SSM', 'IAM', 'EKS'],
  },
  {
    id: 'cicd-restricted',
    category: 'platform',
    stack: ['GitLab', 'Jenkins', 'Docker', 'Linux'],
  },
  {
    id: 'k8s-hard-way',
    category: 'self',
    stack: ['Kubernetes', 'etcd', 'PKI', 'CNI', 'Linux'],
    links: [
      { key: 'repo', href: 'https://github.com/Abdulqadir579/kubernetes-my-way' },
    ],
  },
  {
    id: 'data-lakehouse',
    category: 'self',
    stack: ['S3', 'AWS Glue', 'Athena'],
  },
  {
    id: 'gitops-lab',
    category: 'self',
    stack: ['ArgoCD', 'Kubernetes', 'Helm'],
    links: [
      { key: 'repo', href: 'https://github.com/Abdulqadir579/Argocd-Project' },
    ],
  },
];

export const experience = [
  { id: 'token13', company: 'Token13 Software LLC', period: '2025 — ', current: true },
  { id: 'skillspace', company: 'Skill Space Technology LLC', period: '2024 — 2025' },
  { id: 'dastgyr', company: 'Dastgyr Technologies', period: '2022 — 2024' },
];

export const stackGroups = [
  {
    id: 'blockchain',
    items: [
      'Ethereum',
      'TRON',
      'Solana',
      'EVM / non-EVM',
      'USDT / USDC',
      'Non-custodial wallets',
    ],
  },
  {
    id: 'kubernetes',
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
    id: 'cloud',
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
    id: 'cicd',
    items: [
      'GitHub Actions',
      'Jenkins',
      'GitLab CI',
      'AWS CodePipeline',
      'OIDC federation',
      'Self-hosted runners',
      'Blue-green deploys',
    ],
  },
  {
    id: 'observability',
    items: [
      'Prometheus',
      'Grafana',
      'Loki',
      'Promtail',
      'Alertmanager',
      'Blackbox Exporter',
      'Zabbix',
      'SLO / SLI',
      'Error budgets',
      'Runbooks',
    ],
  },
  {
    id: 'security',
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
    ],
  },
  {
    id: 'systems',
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
  { id: 'saa', name: 'AWS Certified Solutions Architect — Associate' },
  { id: 'ccp', name: 'AWS Certified Cloud Practitioner' },
  { id: 'cka', name: 'Certified Kubernetes Administrator (CKA)' },
];
