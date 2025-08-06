import { cn } from "@/lib/utils"
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaJava,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiSpringboot,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiAndroid,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiDart,
  SiGraphql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRedis,
  SiSqlite,
  SiFirebase,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiLaravel,
  SiRubyonrails,
  SiGo,
  SiRust,
  SiDotnet,
  SiKubernetes,
  SiGooglecloud,
  SiGitlab,
  SiBitbucket,
  SiAdobeillustrator,
  SiAdobexd,
  SiSketch,
  SiInsomnia,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiIonic,
  SiSass,
  SiCplusplus,
  SiRuby,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

interface TechIconProps {
  name: string
  className?: string
  size?: number
}

// Mapping de tecnologías a sus iconos de react-icons
const techIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  // Frontend
  "react": FaReact,
  "nextjs": SiNextdotjs,
  "next.js": SiNextdotjs,
  "javascript": FaJsSquare,
  "typescript": SiTypescript,
  "html": FaHtml5,
  "css": FaCss3Alt,
  "tailwind": SiTailwindcss,
  "tailwindcss": SiTailwindcss,
  "bootstrap": FaBootstrap,
  "sass": SiSass,
  "vue": SiVuedotjs,
  "angular": SiAngular,
  "svelte": SiSvelte,
  
  // Mobile
  "react native": FaReact, // Usando React como fallback
  "react-native": FaReact, // Usando React como fallback
  "flutter": SiFlutter,
  "expo": SiExpo,
  "ionic": SiIonic,
  "android": SiAndroid,
  "kotlin": SiKotlin,
  "swift": SiSwift,
  "dart": SiDart,
  
  // Backend
  "nodejs": FaNodeJs,
  "node.js": FaNodeJs,
  "express": SiExpress,
  "nestjs": SiNestjs,
  "spring boot": SiSpringboot,
  "spring": SiSpringboot,
  "django": SiDjango,
  "flask": SiFlask,
  "fastapi": SiFastapi,
  "laravel": SiLaravel,
  "php": FaPhp,
  "ruby": SiRuby,
  "rails": SiRubyonrails,
  "go": SiGo,
  "rust": SiRust,
  "dotnet": SiDotnet,
  ".net": SiDotnet,
  
  // Databases
  "mysql": SiMysql,
  "postgresql": SiPostgresql,
  "mongodb": SiMongodb,
  "redis": SiRedis,
  "sqlite": SiSqlite,
  "firebase": SiFirebase,
  "supabase": SiSupabase,
  
  // Cloud & Tools
  "aws": FaAws,
  "azure": FaAws, // Usando AWS como fallback
  "gcp": SiGooglecloud,
  "docker": FaDocker,
  "kubernetes": SiKubernetes,
  "vercel": SiVercel,
  "netlify": SiNetlify,
  
  // Languages
  "java": FaJava,
  "python": FaPython,
  "csharp": FaJava, // Usando Java como fallback
  "c#": FaJava, // Usando Java como fallback
  "cpp": SiCplusplus,
  "c++": SiCplusplus,
  
  // Tools
  "git": FaGitAlt,
  "github": FaGithub,
  "gitlab": SiGitlab,
  "bitbucket": SiBitbucket,
  "vscode": FaReact, // Usando React como fallback
  "figma": FaFigma,
  "photoshop": FaFigma, // Usando Figma como fallback
  "illustrator": SiAdobeillustrator,
  "xd": SiAdobexd,
  "sketch": SiSketch,
  
  // API & Others
  "api restful": TbApi,
  "api": TbApi,
  "restful": TbApi,
  "graphql": SiGraphql,
  "postman": SiPostman,
  "insomnia": SiInsomnia,
  "sql": SiMysql,
  "nosql": SiMongodb,
  "postgres": SiPostgresql,
  "shadcn": FaReact, // Usando React como fallback para Shadcn
  "opencv": FaPython, // Usando Python como fallback para OpenCV
  "strapi": SiNextdotjs, // Usando Next.js como fallback para Strapi
}

export function TechIcon({ name, className, size = 24 }: TechIconProps) {
  const IconComponent = techIcons[name.toLowerCase()]
  
  if (!IconComponent) {
    // Fallback para tecnologías no encontradas
    return (
      <div 
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-zinc-800 text-zinc-400 text-xs font-medium",
          className
        )}
        style={{ width: size, height: size }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    )
  }
  
  return (
    <IconComponent
      className={cn("inline-block", className)}
      size={size}
    />
  )
}
