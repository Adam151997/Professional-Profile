export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  website?: string;           // Made optional since you don't have one yet
  github: string;
  linkedin: string;
  avatar: string;
}

export const profile: Profile = {
  name: 'Adham Ayoub',
  title: 'Senior Business Development Executive & AI Creator',
  bio: 'Dynamic Senior Business Development and Sales professional with extensive global experience across North America, Europe, Africa, GCC, Australia, and APAC. Passionate about leveraging data analysis and AI tools to drive strategic growth, identify high-potential opportunities, and build strong client relationships. Proven track record in exceeding sales targets, executing effective go-to-market strategies, and orchestrating AI-powered workflows to maximize efficiency and results.',
  email: 'adham.ayoub32@gmail.com',
  phone: '+20 105 500 1644',
  location: 'Giza, Egypt',
  website: '',                    // Leave empty for now or remove the field later
  github: 'https://github.com/Adam151997',
  linkedin: 'https://www.linkedin.com/in/adham-ayoub-4a5026121',
  avatar: '/avatar.jpg',
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Sales & Business Development',
    skills: [
      'Sales Strategy & Negotiation',
      'Sales Closing',
      'Account & Relationship Management',
      'Client Acquisition & Retention',
      'Pipeline Development',
      'Go-to-Market Strategy',
    ]
  },
  {
    category: 'Market Research & Analysis',
    skills: [
      'Market Research & Analysis',
      'Data Analysis & Interpretation',
      'Lead Generation & Qualification',
      'Strategic Planning',
    ]
  },
  {
    category: 'Technology & Tools',
    skills: [
      'CRM Management (Salesforce, HubSpot, Zoho)',
      'Lead Generation Tools (zoominfo, Lusha, Seamless AI)',
      'AI Tools Orchestration',
      'Database Management',
      'AI Workflow Automation',
    ]
  }
];

// Legacy skills array for backward compatibility
export const skills = skillCategories.flatMap(category => category.skills);
