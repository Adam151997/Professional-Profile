export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;                    // Issue date (YYYY-MM)
  expires: string | null;          // Expiry date or null if no expiry
  credentialId?: string;           // Made optional
  credentialUrl?: string;          // Made optional
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Data Analyst Associate',
    issuer: 'DataCamp',
    date: '2026-01',
    expires: '2028-01',
    credentialId: 'DAA0010034712372',
    credentialUrl: 'https://www.datacamp.com/certificate/DAA0010034712372'
  },
  {
    id: '2',
    name: 'SQL Associate',
    issuer: 'DataCamp',
    date: '2025-08',
    expires: '2027-08',
    credentialId: 'SQA0019133086432',
    credentialUrl: 'https://www.datacamp.com/certificate/SQA0019133086432'
  },
  {
    id: '3',
    name: 'Sales Certified - Software as a Service Solutions & Sales Closings',
    issuer: 'VBC - How to Sell',
    date: '2022-06',
    expires: null,
    credentialId: '',
    credentialUrl: ''
  }
];
