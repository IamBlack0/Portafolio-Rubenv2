import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechIcon } from "@/components/tech-icon"
import Image from "next/image"

export default function MinimalPortfolio() {
  const projects = [
    {
      title: "Fazil",
      description: "App de finanzas personales con IA que te ayuda a controlar gastos usando tu voz. Classifica automáticamente ingresos y gastos, ofrece estadísticas visuales, presupuestos y soporte offline.",
      image: "/news/FAZIL.png",
      technologies: ["React Native", "Expo", "Tailwind", "JavaScript", "Supabase", "API", "Postgres"],
      link: "#",
    },
    {
      title: "AquaSense",
      description: "Aplicación web que permite evaluar la salud del ecosistema costero mediante análisis automatizado de imágenes de playas usando OpenCV.",
      image: "/news/monitoreo con ia.png",
      technologies: ["Flask", "OpenCV", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/IamBlack0/MonitoreoPlayas-OpenCV",
    },
    {
      title: "ArteSano",
      description: "E-commerce para pequeños emprendedores con headless CMS. Proyecto ganador del primer lugar en Hackathon desarrollado en menos de 24 horas.",
      image: "/news/artesano.webp",
      technologies: ["Next.js", "Shadcn", "Strapi", "Tailwind CSS", "TypeScript", "React"],
      link: "https://github.com/ELperrocode/arteSano",
    },
  ]

  const skills = {
    frontend: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Tailwind" },
    ],
    backend: [
      { name: "Node.js" },
      { name: "PHP" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "SQL" },
      { name: "API RESTful" },
    ],
    tools: [
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Expo" },
      { name: "Supabase" },
      { name: "Android" },
    ],
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0E0E10' }}>
      {/* Header */}
      <header className="fixed top-0 right-0 z-50 p-6">
        <nav className="flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-zinc-300" style={{ color: '#A1A1AA' }}>
            Sobre mí
          </a>
          <a href="#projects" className="transition-colors hover:text-zinc-300" style={{ color: '#A1A1AA' }}>
            Proyectos
          </a>
          <a href="#skills" className="transition-colors hover:text-zinc-300" style={{ color: '#A1A1AA' }}>
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
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ color: '#D4D4D8' }}>Ruben Rivera</h1>
                <div className="w-20 h-1 bg-zinc-600 rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#A1A1AA' }}>
                Desarrollo de software con una pasión por aprender y crear. Busco constantemente nuevos desafíos para
                ampliar mis conocimientos. Me encanta explorar las últimas tecnologías y aplicarlas a proyectos
                prácticos para mejorar mis habilidades y contribuir a soluciones innovadoras.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 hover:bg-zinc-800 bg-transparent transition-colors"
                  style={{ color: '#D4D4D8' }}
                  asChild
                >
                  <a href="https://github.com/IamBlack0" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 hover:bg-zinc-800 bg-transparent transition-colors"
                  style={{ color: '#D4D4D8' }}
                  asChild
                >
                  <a href="https://www.linkedin.com/in/ruben-rivera-1238a8323/" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 hover:bg-zinc-800 bg-transparent transition-colors"
                  style={{ color: '#D4D4D8' }}
                  asChild
                >
                  <a href="mailto:rubenrivera319@gmail.com">
                    <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                    Contacto
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/rubenfoto-sinfondo.png"
                  alt="Ruben Rivera"
                  width={300}
                  height={300}
                  className="rounded-2xl border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
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
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#D4D4D8' }}>Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-zinc-600 rounded-full mx-auto"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Algunos de los proyectos en los que he trabajado recientemente
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="border border-zinc-800 hover:border-blue-500 transition-all duration-300 rounded-lg overflow-hidden bg-zinc-900/50">
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
                      <h3 className="text-lg font-semibold" style={{ color: '#D4D4D8' }}>{project.title}</h3>
                      <Button size="sm" variant="ghost" className="p-1 hover:bg-zinc-800" style={{ color: '#A1A1AA' }} asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-800/50">
                          <TechIcon name={tech} size={14} />
                          <span className="text-xs" style={{ color: '#A1A1AA' }}>{tech}</span>
                        </div>
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
              className="border-zinc-600 hover:bg-zinc-800 bg-transparent transition-colors"
              style={{ color: '#D4D4D8' }}
              asChild
            >
              <a href="https://github.com/IamBlack0?tab=repositories" target="_blank" rel="noopener noreferrer">
                Ver Más Proyectos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#D4D4D8' }}>Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-zinc-600 rounded-full mx-auto"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>Tecnologías y herramientas que domino</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-zinc-900/50 border-zinc-700 hover:border-zinc-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center" style={{ color: '#D4D4D8' }}>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <TechIcon name={skill.name} size={16} />
                      <span style={{ color: '#D4D4D8' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-700 hover:border-zinc-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center" style={{ color: '#D4D4D8' }}>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.backend.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <TechIcon name={skill.name} size={16} />
                      <span style={{ color: '#D4D4D8' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-700 hover:border-zinc-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center" style={{ color: '#D4D4D8' }}>
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {skills.tools.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                    >
                      <TechIcon name={skill.name} size={16} />
                      <span style={{ color: '#D4D4D8' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <Button size="sm" variant="ghost" className="hover:bg-zinc-800" style={{ color: '#A1A1AA' }} asChild>
                <a href="https://github.com/IamBlack0" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-zinc-800" style={{ color: '#A1A1AA' }} asChild>
                <a href="https://www.linkedin.com/in/ruben-rivera-1238a8323/" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-zinc-800" style={{ color: '#A1A1AA' }} asChild>
                <a href="mailto:rubenrivera319@gmail.com">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
            <p className="text-sm" style={{ color: '#71717A' }}>© 2025 Ruben Rivera. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
