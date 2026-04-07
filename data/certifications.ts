export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expires: string | null
  credentialId: string
  credentialUrl: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: '2024-06',
    expires: '2027-06',
    credentialId: 'AWS-SAP-C01-123456',
    credentialUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: '2',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2024-03',
    expires: '2026-03',
    credentialId: 'GCP-PCD-789012',
    credentialUrl: 'https://google.com/verification',
  },
  {
    id: '3',
    name: 'Meta Front-End Developer Certificate',
    issuer: 'Meta',
    date: '2023-09',
    expires: null,
    credentialId: 'META-FED-345678',
    credentialUrl: 'https://coursera.org/verify',
  },
]