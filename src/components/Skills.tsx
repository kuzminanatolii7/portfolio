import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiN8N, SiZapier, SiPython, SiDjango, SiFastapi, SiFlask, SiSupabase, SiVuedotjs, SiAngular, SiPhp, SiLaravel,  SiExpress, SiMongodb, SiPrisma, SiRuby, SiElectron, SiRubyonrails, SiPostgresql, SiNeo4J, } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Python", icon: SiPython, color: "#306998" },
  { name: "PHP", icon: SiPhp, color: "#f3a95c" },
  { name: "Ruby", icon: SiRuby, color: "#d61b2f" },
  
  { name: "Django", icon: SiDjango, color: "#6d3e2f" },
  { name: "FastAPI", icon: SiFastapi, color: "#b3c9d4" },
  { name: "Flask", icon: SiFlask, color: "#d8b99b" },
  { name: "n8n", icon: SiN8N, color: "#9c24ba" },
  { name: "Zapier", icon: SiZapier, color: "#ff4f00" },

  { name: "Laravel", icon: SiLaravel, color: "#ea4335" },
  { name: "Ruby on Rails", icon: SiRubyonrails, color: "#c71377" },

  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
  { name: "Angular", icon: SiAngular, color: "#dd0031" },
  { name: "Electron", icon: SiElectron, color: "#8a2be2" },

  { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
  { name: "Express.js", icon: SiExpress, color: "#f4a261" },

  { name: "Prisma", icon: SiPrisma, color: "#186997" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#2c6e49" },
  { name: "Neo4J", icon: SiNeo4J, color: "#000000" },
  { name: "Supabase", icon: SiSupabase, color: "#3cb371" },
  { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28" }
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale.">Skills</SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
            ))}
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}