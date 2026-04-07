export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart functionality, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/Adam151997/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, Kanban boards, and team features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'TypeScript'],
    image: '/projects/taskmanager.jpg',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/Adam151997/taskmanager',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with forecasts, maps, and historical data visualization.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind CSS'],
    image: '/projects/weather.jpg',
    liveUrl: 'https://weather-demo.com',
    githubUrl: 'https://github.com/Adam151997/weather',
  },
]