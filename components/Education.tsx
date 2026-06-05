import { education } from "@/lib";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {edu.institution}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Graduated: {edu.graduationDate}</span>
                    </div>
                  </div>

                  {/* Optional description */}
                  {edu.description && (
                    <p className="mt-4 text-slate-700 dark:text-slate-300">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
