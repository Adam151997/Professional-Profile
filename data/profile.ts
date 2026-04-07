export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  website: string
  github: string
  linkedin: string
  avatar: string
}

export const profile: Profile = {
  name: 'Adam',
  title: 'Software Developer',
  bio: 'Passionate software developer with expertise in building modern web applications. Focused on creating elegant solutions to complex problems.',
  email: 'adam@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  website: 'https://adam.dev',
  github: 'https://github.com/Adam151997',
  linkedin: 'https://linkedin.com/in/adam',
  avatar: '/avatar.jpg',
}

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'PostgreSQL',
  'Git',
  'Docker',
]