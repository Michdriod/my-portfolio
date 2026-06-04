"use client";

import Avatar from "./Avatar";
import { personalInfo } from "@/lib";
import { Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar */}
          <Avatar name={personalInfo.name} size="xl" className="animate-fade-in" />

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="max-w-3xl text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Building practical, scalable AI systems with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">RAG</span>,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Agentic AI
            </span>
            , and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Multi-Agent Workflows</span> to
            streamline workflows and deliver measurable business impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-blue-600 dark:border-blue-400 transition-all transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Location badge */}
          <div className="pt-4">
            <span className="inline-block px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 text-sm font-medium shadow-md">
              📍 {personalInfo.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
