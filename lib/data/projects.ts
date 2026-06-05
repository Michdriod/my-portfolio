import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "queryai-db-assistant",
    title: "QueryAI - Natural Language Database Assistant",
    description:
      "Built an intelligent database query assistant that enables non-technical users to interact with databases using natural language, generate automated reports, and schedule report delivery to stakeholders.",
    technologies: [
      "Python",
      "Pydantic AI",
      "FastAPI",
      "SQL",
      "PostgreSQL",
      "AI Agents",
      "Task Scheduling",
    ],
    highlights: [
      "Natural language to SQL conversion for intuitive database querying",
      "Automated report generation and scheduled delivery to email/Slack",
      "Interactive schema visualization on frontend for knowledge accessibility",
      "Bridges technical gap between data teams and business users",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/QueryAI-Intelligent_Database_Query_Assistant",
  },
  {
    id: "advanced-rag-system",
    title: "Agentic RAG System with Knowledge Graphs",
    description:
      "Developed an advanced agentic RAG system combining semantic search, knowledge graphs, and multi-step retrieval to improve contextual accuracy and decision-support quality.",
    technologies: [
      "Python",
      "Pydantic AI",
      "Vector Databases",
      "Knowledge Graphs",
      "Neo4j",
    ],
    highlights: [
      "Multi-agent workflow for intelligent retrieval and reasoning",
      "Knowledge graph integration for enhanced context grounding",
      "Improved response relevance through structured and unstructured data fusion",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/Agentic-RAG_knowledge-graph",
  },
  {
    id: "document-kyc-extraction",
    title: "AI Document Extraction for KYC Workflows",
    description:
      "Built an AI-powered document extraction system using vision-capable LLMs to extract structured data from identity documents, forms, and scanned images for compliance workflows.",
    technologies: [
      "Python",
      "GPT-4 Vision",
      "OCR",
      "Pydantic AI",
      "JSON Processing",
      "FastAPI",
    ],
    highlights: [
      "Automated extraction of structured data from unstructured documents",
      "Reduced manual KYC processing time for onboarding workflows",
      "Handles diverse document formats with high accuracy",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/Document-Extractor-KYC-verification-agent",
  },
  {
    id: "root-cause-analysis-agent",
    title: "Root Cause Analysis Agent (5 Whys)",
    description:
      "Developed an AI-driven root cause analysis agent implementing the 5 Whys methodology to guide users through structured problem diagnosis and identify underlying causes.",
    technologies: [
      "Python",
      "Pydantic AI",
      "AI Agents",
      "Agentic Workflows",
    ],
    highlights: [
      "Guided questioning framework for systematic problem analysis",
      "Contextual follow-up questions based on user responses",
      "Supports faster issue resolution and data-informed decision-making",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/RCA_AI",
  },
  {
    id: "text-multimode-agent-itsm",
    title: "Multi-Mode AI Agent for ITSM",
    description:
      "Developed a multi-mode AI agent suite integrated into IT Service Management platforms with four specialized modes: text autocomplete, transaction payload generator, text enhancer, and intelligent assistance.",
    technologies: [
      "Python",
      "Pydantic AI",
      "AI Agents",
      "ITSM Integration",
      "FastAPI",
      "Multi-Agent Systems",
    ],
    highlights: [
      "Text autocomplete reduces ticket creation time by 60%+",
      "Automated transaction generation from natural language payloads",
      "Text enhancement for professional communication quality",
      "Deployed in production ITSM environment serving internal teams",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/Text-Autocompletion-Agent",
  },
  {
    id: "fraud-detection-ml",
    title: "Credit Card Fraud Detection System",
    description:
      "Built a machine learning fraud detection model using supervised learning techniques to identify fraudulent credit card transactions with high precision.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Feature Engineering",
    ],
    highlights: [
      "Handled highly imbalanced datasets with SMOTE and undersampling",
      "Optimized precision-recall tradeoff for financial risk management",
      "Applied feature engineering for improved model accuracy",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/AI-Fraud-Detect-System",
  },
  {
    id: "customer-support-rag",
    title: "Customer Support RAG Agent",
    description:
      "Developed a RAG-powered customer support agent that retrieves relevant knowledge base articles and provides contextual, accurate responses to customer inquiries.",
    technologies: [
      "Python",
      "Pydantic AI",
      "RAG",
      "Vector Databases",
      "FastAPI",
      "Semantic Search",
    ],
    highlights: [
      "Automated customer query resolution with knowledge base integration",
      "Reduced response time through intelligent retrieval and generation",
      "Contextual responses grounded in company documentation",
    ],
    featured: true,
    githubUrl: "https://github.com/Michdriod/Baz-Customer-Support-RAG-agent",
  },
];
