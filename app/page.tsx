'use client'

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechIcon } from "@/components/tech-icon"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function BentoPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
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
      {/* Floating Navigation */}
      <header className="fixed top-8 right-8 z-50">
        <nav className="backdrop-blur-md bg-zinc-900/30 border border-zinc-800/50 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-6 text-sm font-medium">
            <a 
              href="#bento" 
              className="transition-all duration-300 hover:text-white hover:scale-105" 
              style={{ color: '#A1A1AA' }}
            >
              Inicio
            </a>
            <a 
              href="https://github.com/IamBlack0?tab=repositories" 
              target="_blank"
              className="transition-all duration-300 hover:text-white hover:scale-105" 
              style={{ color: '#A1A1AA' }}
            >
              Proyectos
            </a>
            <a 
              href="mailto:rubenrivera319@gmail.com"
              className="transition-all duration-300 hover:text-white hover:scale-105" 
              style={{ color: '#A1A1AA' }}
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Bento Grid Layout */}
      <section id="bento" className="min-h-screen p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
            
            {/* Header - Name & Title */}
            <div 
              className="col-span-2 lg:col-span-4 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.1s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-6 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3">
                  Ruben Rivera
                </h1>
                <div className="w-16 h-1 bg-white rounded-full mb-4"></div>
                <p className="text-sm lg:text-lg text-zinc-400 leading-relaxed">
                  Desarrollo de software con una pasión por aprender y crear. Busco constantemente nuevos desafíos para ampliar mis conocimientos. Me encanta explorar las últimas tecnologías y aplicarlas a proyectos prácticos para mejorar mis habilidades y contribuir a 
                  <span className="text-white"> soluciones innovadoras</span>.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div 
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.2s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-4 flex items-center justify-center">
                <div className="relative group/img">
                  <Image
                    src="/rubenfoto-sinfondo.png"
                    alt="Ruben Rivera"
                    width={160}
                    height={160}
                    className="rounded-xl border border-zinc-700/50 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Skills - Frontend */}
            <div 
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.3s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-4">
                <h3 className="text-lg font-bold text-white mb-3">Frontend</h3>
                <div className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800/30 transition-all duration-300">
                      <TechIcon name={skill.name} size={16} />
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills - Backend */}
            <div 
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.4s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-4 overflow-y-auto">
                <h3 className="text-lg font-bold text-white mb-3">Backend</h3>
                <div className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800/30 transition-all duration-300">
                      <TechIcon name={skill.name} size={16} />
                      <span className="text-zinc-300 text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div 
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.5s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-4">
                <h3 className="text-lg font-bold text-white mb-3">Herramientas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-zinc-800/30 rounded-lg hover:bg-zinc-700/50 transition-all duration-300">
                      <TechIcon name={skill.name} size={14} />
                      <span className="text-zinc-300 text-xs">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 1 - Fazil */}
            <div 
              className="col-span-2 md:col-span-2 lg:col-span-2 row-span-3 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.6s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/news/FAZIL.png"
                    alt="Fazil App"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Fazil</h3>
                    <div className="relative">
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        App de finanzas personales con IA para controlar gastos usando tu voz
                      </p>
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0">
                        App de finanzas personales con IA que te ayuda a controlar gastos usando tu voz. Clasifica automáticamente ingresos y gastos, ofrece estadísticas visuales, presupuestos y soporte offline.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React Native", "Expo", "IA"].map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-zinc-800/70 text-zinc-300 rounded-md border border-zinc-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - AquaSense */}
            <div 
              className="col-span-2 md:col-span-2 lg:col-span-2 row-span-3 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.7s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <a href="https://github.com/IamBlack0/MonitoreoPlayas-OpenCV" target="_blank" className="relative h-full block overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/news/monitoreo con ia.png"
                    alt="AquaSense"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">AquaSense</h3>
                    <div className="relative">
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        Análisis de ecosistemas costeros con OpenCV
                      </p>
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0">
                        Aplicación web que permite evaluar la salud del ecosistema costero mediante análisis automatizado de imágenes de playas usando OpenCV.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Flask", "OpenCV", "IA"].map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-zinc-800/70 text-zinc-300 rounded-md border border-zinc-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Project 3 - ArteSano */}
            <div 
              className="col-span-2 md:col-span-2 lg:col-span-2 row-span-3 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.8s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <a href="https://github.com/ELperrocode/arteSano" target="_blank" className="relative h-full block overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/news/artesano.webp"
                    alt="ArteSano"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>
                <div className="relative h-full p-5 flex flex-col justify-end">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white">ArteSano</h3>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-md border border-yellow-500/30">
                        🏆 1er Lugar
                      </span>
                    </div>
                    <div className="relative">
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        E-commerce para emprendedores con headless CMS
                      </p>
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0">
                        E-commerce para pequeños emprendedores con headless CMS. Proyecto ganador del primer lugar en Hackathon desarrollado en menos de 24 horas.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Strapi", "TypeScript"].map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-zinc-800/70 text-zinc-300 rounded-md border border-zinc-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Card */}
            <div 
              className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 group relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800/50 hover:border-zinc-600/50 transition-all duration-500"
              style={{ animation: `fadeInUp 0.8s ease-out 0.9s both` }}
            >
              <div className="absolute -inset-1 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full p-6 flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">¿Trabajamos juntos?</h3>
                  <p className="text-zinc-400 text-sm">Siempre abierto a nuevas oportunidades</p>
                </div>
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://github.com/IamBlack0" 
                    target="_blank" 
                    className="p-3 rounded-xl bg-zinc-800/50 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                    style={{ color: '#A1A1AA' }}
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ruben-rivera-1238a8323/" 
                    target="_blank" 
                    className="p-3 rounded-xl bg-zinc-800/50 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                    style={{ color: '#A1A1AA' }}
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </a>
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="mailto:rubenrivera319@gmail.com">
                      Contactar
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: animate-fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0E0E10;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #27272A;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #3F3F46;
        }
      `}</style>
    </div>
  )
}
