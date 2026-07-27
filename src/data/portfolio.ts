export type ExternalLink = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Experience = {
  role: string;
  organisation: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  signals: string[];
};

export type Project = {
  title: string;
  period: string;
  status: "Completed" | "In progress";
  summary: string;
  outcome: string;
  tools: string[];
  link: ExternalLink;
};

export type ResearchItem = {
  title: string;
  period: string;
  fields: string[];
  link: ExternalLink;
};

export type Education = {
  qualification: string;
  institution: string;
  period: string;
  location: string;
  detail?: string;
};

export type Certification = {
  title: string;
  year: string;
  detail?: string;
  provider?: string;
  link: ExternalLink;
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const portfolio = {
  name: "Mohammad Jawadul Tashick",
  firstName: "Jawad",
  initials: "MJT",
  role: "Data Analytics-Focused Professional",
  location: "Chattogram, Bangladesh",
  email: "jawadtashick12@gmail.com",
  summary:
    "Computer Science graduate with hands-on experience in data analytics, reporting, prompt engineering, and machine learning research. I turn complex operational information into structured, decision-ready insights.",
  positioning:
    "Building a career across data analytics, business intelligence, and data engineering by combining technical foundations with practical reporting, operations, and stakeholder experience.",
  rotatingRoles: [
    "Data-driven problem solver",
    "BI and dashboard builder",
    "Computer Science graduate",
    "Analytics career builder",
  ],
  social: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jawad-tashick/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/JAWAD645",
    },
  },
  metrics: [
    {
      value: "2,736",
      label: "maritime records prepared",
      detail: "for a Power BI profitability analysis",
    },
    {
      value: "50+",
      label: "operational sheets standardised",
      detail: "with validation and reconciliation checks",
    },
    {
      value: "15+",
      label: "recurring reports streamlined",
      detail: "using reusable Excel templates",
    },
    {
      value: "4",
      label: "ML classifiers compared",
      detail: "in a breast-cancer prediction study",
    },
  ] satisfies Metric[],
  profile: [
    "My current role connects technical support with data quality, recurring reporting, issue tracking, and cross-department coordination in a maritime services environment.",
    "My project work spans Power BI dashboards, data cleaning, KPI analysis, machine learning, web systems, and applied AI research.",
    "That mix gives me a practical view of how data moves through real operations—and how clear analysis, documentation, and communication improve decisions.",
  ],
  careerDirection: [
    {
      label: "Professional foundation",
      title: "Operational data and reporting",
      text: "Hands-on work with MIS records, Excel reporting, data validation, issue tracking, documentation, and stakeholder follow-up.",
    },
    {
      label: "Technical foundation",
      title: "Analytics and software systems",
      text: "Computer Science training supported by Python, SQL, Power BI, KNIME, data visualisation, machine learning, and full-stack project work.",
    },
    {
      label: "Future direction",
      title: "Insight to data engineering",
      text: "Developing toward roles in data analytics and business intelligence, with a longer-term interest in reliable data systems and engineering.",
    },
  ],
  skillGroups: [
    {
      title: "Data analytics",
      description: "Turning raw information into reliable analytical outputs.",
      skills: [
        "Data cleaning",
        "KPI development",
        "Dashboard design",
        "Trend analysis",
        "Operational analysis",
        "Microsoft Excel",
      ],
    },
    {
      title: "BI and process tools",
      description: "Visual reporting and structured process thinking.",
      skills: ["Microsoft Power BI", "KNIME Analytics Platform", "Bizagi Modeler"],
    },
    {
      title: "Programming and data",
      description: "Core languages and libraries used across analysis and projects.",
      skills: [
        "Python",
        "SQL",
        "JavaScript",
        "PHP",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "MySQL",
      ],
    },
    {
      title: "Software and AI workflow",
      description: "Tools for building, documenting, and accelerating technical work.",
      skills: [
        "React",
        "Node.js",
        "Git",
        "LaTeX",
        "Figma",
        "Claude Code",
        "OpenAI Codex",
        "VS Code",
      ],
    },
  ],
  experience: [
    {
      role: "Technical Support Assistant",
      organisation: "Peninsula Marine Services",
      location: "Chattogram, Bangladesh",
      period: "Sep 2025 – Present",
      summary:
        "Supporting operational reporting, data quality, issue resolution, and cross-department coordination in a maritime services setting.",
      highlights: [
        "Improved management reporting across 50+ operational data sheets and MIS records by standardising formats, applying data-validation checks, and reconciling duplicate and inconsistent entries.",
        "Streamlined 15+ recurring operational reports with reusable Excel templates and structured tracking sheets, improving weekly and monthly reporting consistency.",
        "Resolved 10+ weekly reporting and data-support requests through troubleshooting, request tracking, and appropriate escalation.",
        "Maintained action and follow-up logs for 20+ client emails, schedules, and follow-ups each month to keep cross-department work aligned.",
      ],
      signals: ["Data quality", "Excel reporting", "MIS", "Issue tracking"],
    },
    {
      role: "Content Developer",
      organisation: "QED-Private University Admission Care and IELTS Academy",
      location: "Remote · Dhaka, Bangladesh",
      period: "Dec 2024 – Jun 2026",
      summary:
        "Created and quality-checked structured learning content in collaboration with an academic team.",
      highlights: [
        "Standardised 60+ study materials against curriculum requirements using consistent formatting and quality-control checks.",
        "Built reusable templates and documentation guidelines that reduced revision cycles across multiple subjects.",
        "Reviewed, validated, and refined materials with the academic team before publication.",
      ],
      signals: ["Quality control", "Structured content", "Documentation", "Collaboration"],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Ship Performance and Profitability Analysis Dashboard",
      period: "2026",
      status: "Completed",
      summary:
        "Prepared 2,736 maritime operational records and built an interactive Power BI dashboard covering revenue, operational cost, profitability, and vessel efficiency.",
      outcome:
        "Developed management KPIs and translated ship, route, and engine-type trends into recommendations for profitability, efficiency, and cost control.",
      tools: ["Power BI", "Excel", "Data cleaning", "KPI analysis"],
      link: {
        label: "View GitHub repository",
        href: "https://github.com/JAWAD645/Ship-Performance-and-Profitability-Analysis-Dashboard",
      },
    },
    {
      title: "Fraud Detection for E-commerce Chrome Extension",
      period: "Sep 2024 – Present",
      status: "In progress",
      summary:
        "Developing a Chrome extension that assesses e-commerce trustworthiness by analysing user-submitted reviews with OpenAI sentiment processing.",
      outcome:
        "The interface presents real-time safety indicators to support safer online purchasing decisions.",
      tools: ["React", "TypeScript", "JavaScript", "MongoDB", "Tailwind CSS"],
      link: {
        label: "View GitHub repository",
        href: "https://github.com/JAWAD645/Fraud--Detection--ecommerce-chrome-extension",
      },
    },
    {
      title: "Breast Cancer Detection Using Machine Learning",
      period: "Dec 2023",
      status: "Completed",
      summary:
        "Trained and compared KNN, SVM, Decision Tree, and Random Forest classifiers using Python data-science libraries.",
      outcome:
        "Evaluated accuracy and recall to select the strongest predictor, which reached 98% accuracy in the project evaluation.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      link: {
        label: "View GitHub repository",
        href: "https://github.com/JAWAD645/Breast-Cancer-Prediction-Model",
      },
    },
    {
      title: "Study Platform for BRAC University Students",
      period: "Sep 2023",
      status: "Completed",
      summary:
        "Built a searchable course-resource platform to organise study materials across 36+ BRAC University courses.",
      outcome:
        "Created a single preparation hub for junior students using a Laravel and MySQL application.",
      tools: ["Laravel", "MySQL", "PHP", "HTML", "CSS"],
      link: {
        label: "View GitHub repository",
        href: "https://github.com/JAWAD645/CSE470_Study_Hub",
      },
    },
  ] satisfies Project[],
  research: [
    {
      title:
        "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
      period: "2025 – Present",
      fields: ["Artificial Intelligence", "Machine Learning"],
      link: {
        label: "View research record",
        href: "https://ieeexplore.ieee.org/abstract/document/11526131",
      },
    },
    {
      title:
        "A User-centric Approach to Ensure Safe-browsing in E-commerce through Behavioral Economics",
      period: "2023 – Present",
      fields: ["HCI", "Web Security", "Web Development", "Machine Learning"],
      link: {
        label: "View repository record",
        href: "https://dspace.bracu.ac.bd/items/4eab8224-96d1-459f-9f11-2d4b9468f8ab",
      },
    },
    {
      title: "Federated Learning for Empowering Large Language Models",
      period: "2023 – Present",
      fields: ["Artificial Intelligence", "Machine Learning", "Large Language Models"],
      link: {
        label: "View preprint",
        href: "https://easychair.org/publications/preprint/LV6c",
      },
    },
  ] satisfies ResearchItem[],
  education: [
    {
      qualification: "Bachelor of Science in Computer Science",
      institution: "BRAC University",
      period: "Jul 2020 – Feb 2025",
      location: "Dhaka, Bangladesh",
      detail: "CGPA: 3.02/4.00",
    },
    {
      qualification: "Higher Secondary Certificate",
      institution: "Hajera Taju College",
      period: "2017 – 2019",
      location: "Chattogram, Bangladesh",
    },
    {
      qualification: "Secondary School Certificate",
      institution: "Chittagong Govt. High School",
      period: "2010 – 2017",
      location: "Chattogram, Bangladesh",
    },
  ] satisfies Education[],
  certifications: [
    {
      title: "English Proficiency Certificate",
      year: "2026",
      detail: "IELTS Band Score 7.0",
      link: {
        label: "View certificate",
        href: "https://drive.google.com/drive/folders/1bRTWqJMYOZ5Cn3K_0gR_aqk2jzas74yf?usp=sharing",
      },
    },
    {
      title: "Python and Data Science for Beginners",
      year: "2025",
      provider: "Bluelime Learning Solutions",
      link: {
        label: "View certificate",
        href: "https://www.udemy.com/certificate/UC-893cce07-2668-49cd-91f0-1c8ecd77a6e2/",
      },
    },
    {
      title: "Python Data Science with NumPy: Over 100 Exercises",
      year: "2025",
      provider: "Pawel Krakowiak and Tomasz Krakowiak",
      link: {
        label: "View certificate",
        href: "https://www.udemy.com/certificate/UC-b17838ea-dc3f-4f31-a6d5-6e668c33619e/",
      },
    },
    {
      title: "JavaScript, Bootstrap, & PHP - Certification for Beginners",
      year: "2024",
      link: {
        label: "View certificate",
        href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d4955f60-ce13-40b8-9830-ee4bf10cf54c.pdf",
      },
    },
  ] satisfies Certification[],
  leadership: [
    "BRACU Robotics Club — Executive, Event Management Department (Aug 2023 – Aug 2024)",
    "Amrai Bikolpo — Co-founder (Aug 2024 – Present)",
    "Volunteering Award — Disaster relief contribution (2024)",
  ],
} as const;
