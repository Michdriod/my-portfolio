import { certifications } from "@/lib";
import { Award, Calendar } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Award className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
