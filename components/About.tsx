import Avatar from "./Avatar";
import { personalInfo } from "@/lib";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar side */}
          <FadeInWhenVisible delay={0.2}>
            <div className="flex justify-center">
              <Avatar name={personalInfo.name} size="xl" />
            </div>
          </FadeInWhenVisible>

          {/* Content side */}
          <FadeInWhenVisible delay={0.4}>
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Core Focus
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Agentic AI, RAG, MCP, Multi-Agent Workflows, AI Governance
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Tech Stack
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Python, TypeScript, Pydantic AI, FastAPI, Streamlit, MCP
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Experience
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Enterprise analytics, data migration, AI/ML development
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Impact
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Building practical systems that deliver business value
                </p>
              </div>
            </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
