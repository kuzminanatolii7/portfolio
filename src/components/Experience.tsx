import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "FullStack Developer & AI Engineer",
    company: "Impro.AI",
    period: "Nov 2023 – May 2025",
    description: `Built intelligent RAG-based multi-agent systems for real-time coaching platforms.
                  Developed AI voice/chat agents with contextual memory using OpenAI, LangChain, and Supabase.
                  Implemented scalable APIs and orchestrated automation flows with n8n.`,
    skills: [
      "RAG Systems",
      "AI Voice/Chat Agents",
      "Contextual Memory",
      "OpenAI Integration",
      "LangChain",
      "Supabase",
      "n8n Automation",
      "Multi-Agent Systems",
      "Real-time Coaching Platforms",
      "Scalable API Design"
    ]
  },
  {
    title: "Senior Backend Developer",
    company: "Plurilock",
    period: "Jun 2022 – Apr 2023",
    description: `Led development of secure backend systems with FastAPI and PostgreSQL.
                  Built robust authentication layers and integrated AI-driven analytics.
                  Delivered APIs to support enterprise-grade real-time applications.`,
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Backend Security",
      "Authentication Systems",
      "AI-driven Analytics",
      "Enterprise APIs",
      "Real-time Application Support",
      "Data Privacy",
      "API Performance Tuning"
    ]
  },
  {
    title: "FullStack Developer",
    company: "Riipen",
    period: "Sep 2020 – Sep 2022",
    description: `Delivered full-stack platforms using React, Node.js, Supabase.
                  Implemented AI analytics modules and integrated CRM systems.
                  Spearheaded front-to-back automation and workflow enhancements.`,
    skills: [
      "React",
      "Node.js",
      "Supabase",
      "CRM Integrations",
      "AI Analytics Modules",
      "Automation Workflows",
      "Full-stack Development",
      "GraphQL & REST APIs",
      "CI/CD"
    ]
  },
  {
    title: "Frontend Developer",
    company: "MetalSoft",
    period: "May 2018 – Aug 2020",
    description: `Built UI components and dashboards using React and Vue.js.
                  Designed mobile-first layouts and performed performance optimization.
                  Introduced CI/CD pipelines and GitOps workflows.`,
    skills: [
      "React",
      "Vue.js",
      "UI Component Design",
      "Mobile-First Layouts",
      "Frontend Performance Optimization",
      "CI/CD Pipelines",
      "GitOps",
      "JavaScript (ES6+)",
      "Responsive Dashboards"
    ]
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most.">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
