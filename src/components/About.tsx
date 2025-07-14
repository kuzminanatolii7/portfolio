import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A Full Stack AI Engineer with a passion for software engineering.",
      "Thrive on solving complex problems and building scalable, AI-powered applications.",
      "Constantly learning and exploring new technologies to enhance my skill set and stay ahead in the field.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance web applications using Python, FastAPI, Django, and Flask.",
      "Automate AI-driven workflows and optimize processes with tools like n8n and Zapier.",
      "Solve complex technical challenges, building scalable and efficient systems that drive real-world impact.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Create innovative tech products that address real-world problems and scale efficiently.",
      "Advance my expertise as a Full Stack AI Engineer, mastering modern frameworks and AI technologies.",
      "Contribute to the development community by sharing knowledge and open-source projects.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should enhance lives by making things easier and more efficient.",
      "Great software goes beyond just writing code—it's about solving meaningful problems.",
      "Continuous learning and curiosity are essential to stay ahead in the ever-evolving tech landscape.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Anatolii</span>,
              a Full Stack AI Engineer with a passion for building cutting-edge applications that leverage AI to automate, optimize, and scale processes. With expertise in Python and frameworks like FastAPI, Django, and Flask, I specialize in creating robust web applications and API services that seamlessly integrate with AI-driven systems.
              I have hands-on experience with AI automation tools such as n8n and Zapier, enabling businesses to streamline workflows and enhance productivity without compromising on quality. My goal is to deliver innovative solutions that drive data-driven decisions and elevate user experiences.
              Whether it's developing complex backend services, implementing machine learning models, or automating workflows, I enjoy turning challenges into solutions that make a real impact.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I like to build products and solve problems
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
