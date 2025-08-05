import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  DesktopIcon,
  GearIcon,
  MobileIcon,
  ArchiveIcon,
  CodeIcon,
  FigmaLogoIcon,
  GlobeIcon,
  ComponentInstanceIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function MinimalPortfolio() {
  const projects = [
    {
      title: "E-commerce Mobile App",
      description: "Aplicación móvil de comercio electrónico con React Native y APIs RESTful.",
      image: "/mobile-ecommerce-app.png",
      technologies: ["React Native", "Node.js", "API RESTful", "Expo"],
      link: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "Dashboard web para gestión de tareas con autenticación y base de datos.",
      image: "/task-dashboard-dark.png",
      technologies: ["Next.js", "Supabase", "Tailwind", "JavaScript"],
      link: "#",
    },
    {
      title: "Spring Boot API",
      description: "API RESTful robusta con Spring Boot para gestión de usuarios y productos.",
      image: "/spring-boot-api.png",
      technologies: ["Java", "Spring Boot", "SQL", "GitHub"],
      link: "#",
    },
  ]

  const skills = {
    frontend: [
      { name: "React", icon: <CodeIcon className="h-4 w-4" /> },
      { name: "Next.js", icon: <GlobeIcon className="h-4 w-4" /> },
      { name: "React Native", icon: <MobileIcon className="h-4 w-4" /> },
      { name: "JavaScript", icon: <CodeIcon className="h-4 w-4" /> },
      { name: "Bootstrap", icon: <ComponentInstanceIcon className="h-4 w-4" /> },
      { name: "Tailwind", icon: <ComponentInstanceIcon className="h-4 w-4" /> },
    ],
    backend: [
      { name: "Node.js", icon: <GearIcon className="h-4 w-4" /> },
      { name: "PHP", icon: <CodeIcon className="h-4 w-4" /> },
      { name: "Java", icon: <CodeIcon className="h-4 w-4" /> },
      { name: "Spring Boot", icon: <GearIcon className="h-4 w-4" /> },
      { name: "SQL", icon: <ArchiveIcon className="h-4 w-4" /> },
      { name: "API RESTful", icon: <GlobeIcon className="h-4 w-4" /> },
    ],
    tools: [
      { name: "GitHub", icon: <GitHubLogoIcon className="h-4 w-4" /> },
      { name: "Figma", icon: <FigmaLogoIcon className="h-4 w-4" /> },
      { name: "Expo", icon: <MobileIcon className="h-4 w-4" /> },
      { name: "Supabase", icon: <ArchiveIcon className="h-4 w-4" /> },
      { name: "Android", icon: <MobileIcon className="h-4 w-4" /> },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 right-0 z-50 p-6">
        <nav className="flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-gray-300 text-gray-400">
            Sobre mí
          </a>
          <a href="#projects" className="transition-colors hover:text-gray-300 text-gray-400">
            Proyectos
          </a>
          <a href="#skills" className="transition-colors hover:text-gray-300 text-gray-400">
            Habilidades
          </a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Ruben Rivera</h1>
                <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Desarrollo de software con una pasión por aprender y crear. Busco constantemente nuevos desafíos para
                ampliar mis conocimientos. Me encanta explorar las últimas tecnologías y aplicarlas a proyectos
                prácticos para mejorar mis habilidades y contribuir a soluciones innovadoras.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  asChild
                >
                  <a href="mailto:ruben@email.com">
                    <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                    Contacto
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/ruben-profile-square.png"
                  alt="Ruben Rivera"
                  width={400}
                  height={400}
                  className="rounded-2xl border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-gray-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado recientemente
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="border border-gray-800 hover:border-blue-500 transition-all duration-300 rounded-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=200&width=300&query=dark project screenshot"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-gray-500">
                          {tech}
                          {techIndex < project.technologies.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Ver Más Proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-gray-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tecnologías y herramientas que domino</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-300">
                  <DesktopIcon className="mr-3 h-5 w-5" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-gray-400">{skill.icon}</span>
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-300">
                  <GearIcon className="mr-3 h-5 w-5" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.backend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-gray-400">{skill.icon}</span>
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-300">
                  <ComponentInstanceIcon className="mr-3 h-5 w-5" />
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-gray-400">{skill.icon}</span>
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gray-300" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gray-300" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-gray-300" asChild>
                <a href="mailto:ruben@email.com">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <p className="text-sm text-gray-500">© 2025 Ruben Rivera. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
