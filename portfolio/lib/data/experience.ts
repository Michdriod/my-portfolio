import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "aiml-engineer-bazara",
    title: "AI/ML Engineer",
    company: "Bazara Tech Inc",
    location: "Lagos, Nigeria (Remote)",
    startDate: "January 2025",
    endDate: "Present",
    current: true,
    description:
      "Designing, building, and deploying AI-powered applications across retrieval-augmented generation (RAG), agentic workflows, and LLM orchestration systems.",
    achievements: [
      "Built QueryAI, a natural-language database assistant that converts plain English to SQL queries, generates automated reports, and schedules delivery to stakeholders—bridging the gap between technical and non-technical teams",
      "Developed an agentic RAG system combining semantic search and knowledge graphs to improve response grounding, retrieval quality, and decision-support accuracy for enterprise knowledge bases",
      "Built an AI document extraction pipeline for KYC workflows using vision-capable LLMs to transform unstructured documents and images into structured JSON for compliance processing",
      "Designed and implemented a multi-mode AI agent suite for ITSM platforms featuring text autocomplete (60%+ faster ticket creation), transaction payload generator, and text enhancement capabilities",
      "Developed a 5 Whys root-cause analysis agent that guides users through structured questioning to identify underlying causes of business problems and support data-informed decision-making",
    ],
  },
  {
    id: "technical-analyst-bazara",
    title: "Technical Analyst (Data Migration, Reporting & Data Analysis)",
    company: "Bazara Tech Inc",
    location: "Lagos, Nigeria (Remote)",
    startDate: "January 2024",
    endDate: "December 2024",
    current: false,
    description:
      "Contributed to core banking implementation and data migration initiatives, supporting high-volume data migration across Oracle and PostgreSQL systems.",
    achievements: [
      "Contributed to core banking implementation and data migration initiatives for two banks, supporting the migration of 4M+ records with 98% accuracy across Oracle and PostgreSQL systems",
      "Executed data mapping, profiling, validation, and reconciliation for 1M+ records to ensure high-quality migration and alignment with business rules",
      "Built PL/SQL transformation logic, Python-based loading workflows, and dbt transformation models to improve migration efficiency and reporting reliability",
      "Partnered with cross-functional teams to strengthen data consistency, refine reporting processes, and optimize scripts, resulting in a 30% improvement in report generation speed",
      "Built Power BI dashboards to monitor migration progress, highlight data quality issues, and provide stakeholders with real-time implementation visibility",
    ],
  },
  {
    id: "research-analyst-needartisan",
    title: "Research & Data Analyst",
    company: "NeedArtisan",
    location: "Gbagada, Lagos (Hybrid)",
    startDate: "January 2021",
    endDate: "December 2023",
    current: false,
    description:
      "Conducted research and data analysis to support product development, UX improvements, and business strategy.",
    achievements: [
      "Developed product and research analysis plans by defining business objectives, identifying data requirements, and supporting insight-driven decision-making",
      "Analyzed user testing and product feedback in collaboration with UX/UI teams to identify usability issues and support website and product improvements",
      "Conducted market and competitor analysis to identify trends, gaps, and growth opportunities, translating findings into actionable business recommendations",
      "Worked with QA and cross-functional teams to evaluate product performance, synthesize findings, and support improvements in functionality and customer experience",
    ],
  },
];
