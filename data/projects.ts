export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;      // Made optional in case some projects don't have live links
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Y-ERP',
    description: 'Agentic ERP system designed for SMBs to streamline and automate workflows across Sales, Customer Success, HR, Marketing, Finance, and Operations. Leverages AI agents to enhance efficiency and decision-making.',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Supabase',
      'Vercel',
      'Clerk',
      'Trigger.dev',
      'Gemini AI'
    ],
    image: '/projects/y-erp.jpg',
    liveUrl: 'https://y-erp.co',
    githubUrl: 'https://github.com/Adam151997/Y-CRM'
  },
  {
    id: '2',
    title: 'L2B - Business Intelligence Database',
    description: 'Modern Business Intelligence platform containing over 1 million public business records across 1,000+ industries in the USA. Provides powerful data exploration and insights for market research and lead generation.',
    technologies: [
      'Next.js',
      'Python',
      'PostgreSQL',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    image: '/projects/l2b.jpg',
    liveUrl: 'https://l2b-20-bi-frontend.up.railway.app/',
    githubUrl: 'https://github.com/Adam151997/l2b-2.0'
  }
];
