export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;        // YYYY-MM format
  endDate: string | null;
  description: string[];    // Strong bullet points
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'DGRNTE',
    position: 'Senior SDR / BDR (PropTech SaaS)',
    location: 'Giza, Egypt',
    startDate: '2025-09',
    endDate: '2025-12',
    description: [
      'Promoted DGRNTE’s PropTech SaaS solution to real estate developers and facility management companies across the Egyptian market.',
      'Conducted targeted outreach and successfully set up on-site and remote meetings with key decision makers.',
      'Performed in-depth market research to identify and qualify high-potential clients in the real estate sector.'
    ],
    technologies: ['CRM Systems', 'Market Research', 'Lead Generation Tools']
  },
  {
    id: '2',
    company: 'VixelStudio',
    position: 'Senior SDR / BDR (Marketing Agency)',
    location: 'Giza, Egypt (Targeting Canada & US)',
    startDate: '2025-06',
    endDate: '2025-08',
    description: [
      'Booked 22 qualified meetings in just 2 months with a 10% conversion rate while targeting clients in Canada and the United States.',
      'Managed lead qualification and nurturing using GoHighLevel CRM.',
      'Executed outbound sales strategies focused on marketing agency services.'
    ],
    technologies: ['CRM Systems', 'Lead Generation Tools', 'AI Outreach Tools']
  },
  {
    id: '3',
    company: 'Virtual Worker Now',
    position: 'SDR / BDR (Cybersecurity)',
    location: 'Giza, Egypt (Targeting Canada & US)',
    startDate: '2024-08',
    endDate: '2025-01',
    description: [
      'Consistently generated 10 qualified leads per month for Cyology Labs in the cybersecurity space.',
      'Boosted daily outreach efficiency by leveraging AI tools while contacting up to 200 prospects per day.',
      'Conducted targeted prospecting and lead qualification for North American markets.'
    ],
    technologies: ['AI Tools', 'CRM Systems', 'Lead Generation Tools']
  },
  {
    id: '4',
    company: 'Lotus Interworks',
    position: 'SDR / BDR (Marketing Agency)',
    location: 'Giza, Egypt',
    startDate: '2024-01',
    endDate: '2024-07',
    description: [
      'Delivered 2 qualified leads daily through intensive market research and personalized outreach.',
      'Optimized the “Elevate X” paid advertising campaign, achieving 1 qualified lead per day.',
      'Supported client acquisition efforts for marketing and digital services.'
    ],
    technologies: ['CRM Systems', 'Sales Outreach Tools', 'Lead Generation Tools']
  },
  {
    id: '5',
    company: 'Revealsite',
    position: 'SDR / BDR (Pharmacies SaaS)',
    location: 'Giza, Egypt (Targeting US)',
    startDate: '2023-09',
    endDate: '2023-12',
    description: [
      'Successfully booked 45 meetings in 3 months with a strong 20% conversion rate targeting the US market.',
      'Managed full client outreach lifecycle using Zoho CRM.',
      'Conducted targeted prospecting for pharmacy management SaaS solutions.'
    ],
    technologies: ['CRM Systems', 'Sales Outreach Tools', 'Lead Generation Tools']
  },
  {
    id: '6',
    company: 'PlanRadar',
    position: 'Inside Sales Consultant (PropTech SaaS)',
    location: 'Giza, Egypt (Targeting Africa, EU & GCC)',
    startDate: '2022-01',
    endDate: '2023-06',
    description: [
      'Closed €10,000 in contracts throughout 2022 by delivering 3 daily presentations to clients across Africa, Europe, and GCC.',
      'Achieved a consistent 25-35% closing rate on scheduled meetings.',
      'Promoted PlanRadar’s construction and facility management PropTech solution to international clients.'
    ],
    technologies: ['CRM Systems', 'Sales Presentation Tools', 'Sales Outreach Tools', 'Lead Generation Tools']
  },
  {
    id: '7',
    company: 'Hope Outsourcing Center',
    position: 'Sales Team Leader',
    location: 'Giza, Egypt',
    startDate: '2018-08',
    endDate: '2020-08',
    description: [
      'Exceeded 150% of monthly lead targets as a Telemarketer in the US healthcare BPO sector (30+ leads per month).',
      'Scaled the telesales team from 5 to 15 members within one year.',
      'Improved team performance through coaching, lead quality monitoring, and performance tracking.'
    ],
    technologies: ['Telesales Systems','CRM Systems', 'Performance Monitoring Tools']
  },
  {
    id: '8',
    company: 'SiriusXM & Vodafone UK',
    position: 'Customer Service & Retention Specialist',
    location: 'Remote / Giza, Egypt',
    startDate: '2016-01',
    endDate: '2018-06',
    description: [
      'Handled 100+ daily customer interactions for SiriusXM and Vodafone UK, focusing on retention and issue resolution.',
      'Developed strong client retention and problem-solving skills in high-volume environments.',
      'Consistently achieved high customer satisfaction through effective complaint handling and relationship management.'
    ],
    technologies: ['Customer Service Platforms', 'CRM Systems']
  }
];
