import { projects } from "@/lib";
import ProjectCard from "./ProjectCard";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Practical AI/ML solutions built with Python, LangChain, and modern frameworks
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeInWhenVisible key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
