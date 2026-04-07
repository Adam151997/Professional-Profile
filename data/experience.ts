export interface Experience {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    role: 'Senior Software Developer',
    location: 'San Francisco, CA',
    startDate: '2023-01',
    endDate: null,
    description: 'Leading development of cloud-based applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    location: 'Remote',
    startDate: '2021-06',
    endDate: '2022-12',
    description: 'Built and maintained multiple client projects using modern web technologies. Implemented CI/CD pipelines and improved application performance.',
    technologies: ['Next.js', 'Python', 'Docker', 'MongoDB', 'GraphQL'],
  },
  {
    id: '3',
    company: 'WebAgency Co.',
    role: 'Junior Developer',
    location: 'Los Angeles, CA',
    startDate: '2020-03',
    endDate: '2021-05',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with design team to implement pixel-perfect interfaces.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
  },
]