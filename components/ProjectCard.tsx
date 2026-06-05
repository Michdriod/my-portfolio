import { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-700">
      {/* Card content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons - Only show if URLs exist */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
