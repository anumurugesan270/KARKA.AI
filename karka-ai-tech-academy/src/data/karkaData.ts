/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Comprehensive Data Architecture for Karka AI & Tech Academy Official Redesign
 * Preserves official Karka Academy programs, platforms (Spike AI, Infini AI),
 * headquarters contact details, and clearly marked editable placeholders where required.
 */

import heroStudioImg from '../assets/images/karka_official_mascot_3d_1791793590973.jpg';
import internshipTrioImg from '../assets/images/karka_3d_internship_trio_1791793600973.jpg';
import codingCohortImg from '../assets/images/karka_anime_3d_fullstack_coder_1791793611522.jpg';
import mentorSessionImg from '../assets/images/karka_3d_data_ai_scientist_1791793623630.jpg';
import infiniCompetitionImg from '../assets/images/karka_team_ai_mascot_squad_1791793634591.jpg';
import placementSuccessImg from '../assets/images/karka_3d_placement_celebration_1791793646864.jpg';
import biDashboardAnalystImg from '../assets/images/karka_3d_bi_dashboard_analyst_1791449883392.jpg';
import javaBackendArchitectImg from '../assets/images/karka_3d_java_backend_architect_1791449757479.jpg';
import animeUiuxCreatorImg from '../assets/images/karka_anime_uiux_cloud_creator_1791793658810.jpg';
import pythonAiEngineerImg from '../assets/images/karka_3d_python_ai_engineer_1791449864100.jpg';
import cloudDevopsEngineerImg from '../assets/images/karka_3d_cloud_devops_engineer_1791449797784.jpg';
import digitalMarketingGrowthImg from '../assets/images/karka_3d_digital_marketing_growth_1791449776564.jpg';
import qaTestingSpecialistImg from '../assets/images/karka_3d_qa_testing_specialist_1791449895282.jpg';
import mobileAppCreatorImg from '../assets/images/karka_3d_mobile_app_creator_1791449821025.jpg';
import graphicBrandArtistImg from '../assets/images/karka_3d_graphic_brand_artist_1791449909902.jpg';
import careerDiscoveryCompassImg from '../assets/images/karka_3d_career_discovery_compass_1791449839303.jpg';
import campusCounselorHqImg from '../assets/images/karka_3d_campus_counselor_hq_1791449923377.jpg';

export type PageRoute =
  | 'home'
  | 'career-paths'
  | 'programs'
  | 'projects'
  | 'internships'
  | 'placements'
  | 'pay-after-placement'
  | 'platforms'
  | 'faq'
  | 'contact'
  | 'enroll';

export const IMAGES = {
  heroStudio: heroStudioImg,
  internshipTrio: internshipTrioImg,
  codingCohort: codingCohortImg,
  mentorSession: mentorSessionImg,
  infiniCompetition: infiniCompetitionImg,
  placementSuccess: placementSuccessImg,
  aiAnalyticsWorkstation: biDashboardAnalystImg,
  fullstackPlatform: javaBackendArchitectImg,
  karkaTeamSquad: infiniCompetitionImg,
  animeUiuxCreator: animeUiuxCreatorImg,
  javaBackendArchitect: javaBackendArchitectImg,
  pythonAiEngineer: pythonAiEngineerImg,
  biDashboardAnalyst: biDashboardAnalystImg,
  cloudDevopsEngineer: cloudDevopsEngineerImg,
  digitalMarketingGrowth: digitalMarketingGrowthImg,
  qaTestingSpecialist: qaTestingSpecialistImg,
  mobileAppCreator: mobileAppCreatorImg,
  graphicBrandArtist: graphicBrandArtistImg,
  careerDiscoveryCompass: careerDiscoveryCompassImg,
  campusCounselorHq: campusCounselorHqImg,
};

export const BRAND_CONFIG = {
  name: 'Karka AI & Tech Academy',
  shortName: 'Karka Academy',
  websiteUrl: 'https://www.karka.academy/',
  instagramHandle: '@karka.ai',
  instagramUrl: 'https://www.instagram.com/karka.ai/',
  linkedinUrl: 'https://www.linkedin.com/company/karka-academy/',
  youtubeUrl: 'https://www.youtube.com/@karka.ai',
  phonePrimary: '+91 94875 30243',
  phoneAdmissions: '+91 84604 24646',
  whatsappNumber: '919487530243',
  whatsappDefaultMessage:
    'Hi Karka AI & Tech Academy! I would like to explore your AI-first Career Programs and Pay After Placement pathway.',
  emailPrimary: 'contact@karka.academy',
  emailSecondary: 'hi@karka.academy',
  addressHQ:
    'Ground Floor, SRV Towers, Muthamizh St, Near Girias, Veppamoodu, Nagercoil, Tamil Nadu 629001, India',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  context: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: 'programs-offered',
    value: '18+',
    label: 'AI-First Career & Internship Programs',
    context: 'Across Full Stack, AI/Data, Cloud, Design, Marketing & Business',
  },
  {
    id: 'placement-support',
    value: '100%',
    label: 'Lifetime Placement Support',
    context: '1:1 mentorship, resume optimization, mock interviews & referrals',
  },
  {
    id: 'infini-prize-pool',
    value: '₹1,00,000',
    label: 'Karka Infini AI Prize Pool',
    context: 'Inter-college technical & creative innovation competition',
  },
  {
    id: 'pay-model',
    value: '0 Upfront*',
    label: 'Pay After You Get Hired Option',
    context: 'Eligible career tracks governed by transparent program terms',
  },
];

export interface EcosystemJourneyStep {
  id: string;
  stepNumber: string;
  stage: string;
  title: string;
  whatHappens: string;
  whatStudentsReceive: string[];
  skillsDeveloped: string[];
  outputDeliverable: string;
}

export const ECOSYSTEM_JOURNEY_STEPS: EcosystemJourneyStep[] = [
  {
    id: 'discover',
    stepNumber: '01',
    stage: 'DISCOVER',
    title: 'Map Your Ideal AI & Tech Career Track',
    whatHappens:
      'Complete the Karka Career Path Finder and meet 1-on-1 with a Career Mentor to evaluate your background, interests, and career goals.',
    whatStudentsReceive: [
      'Personalized Career Roadmap Document',
      'Pay After Placement Eligibility Review',
      'Spike AI Onboarding Access',
    ],
    skillsDeveloped: ['Career Goal Clarity', 'Tech Domain Awareness', 'Learning Sprint Planning'],
    outputDeliverable: 'Custom Track Selection & Cohort Sprint Plan',
  },
  {
    id: 'learn',
    stepNumber: '02',
    stage: 'LEARN',
    title: 'Master AI-First Engineering & Domain Fundamentals',
    whatHappens:
      'Learn through mentor-led live sessions and Spike AI guided practice—combining foundational concepts with modern AI tooling and prompt workflows.',
    whatStudentsReceive: [
      'Daily Mentor-Led Interactive Sessions',
      'Spike AI Practice Labs & Code Challenges',
      'Structured Module Assessments',
    ],
    skillsDeveloped: ['Core Programming / Domain Logic', 'AI-Assisted Workflows', 'Problem Decomposition'],
    outputDeliverable: 'Verified Module Mastery & Technical Foundations',
  },
  {
    id: 'build',
    stepNumber: '03',
    stage: 'BUILD',
    title: 'Architect Real-World Projects From Scratch',
    whatHappens:
      'Translate concepts into functional production repositories—building full-stack apps, AI pipelines, analytics dashboards, or digital campaigns.',
    whatStudentsReceive: [
      'Line-by-Line Mentor Code Reviews',
      'Git & GitHub Version Control Workflows',
      'System Architecture Templates',
    ],
    skillsDeveloped: ['Full-Lifecycle Implementation', 'Debugging & Testing', 'API & Data Integration'],
    outputDeliverable: 'Multi-Project GitHub & Live Deployed Portfolio',
  },
  {
    id: 'intern',
    stepNumber: '04',
    stage: 'INTERN',
    title: 'Gain Real Project-Based Internship Experience',
    whatHappens:
      'Work in agile team sprints on real client or production-grade internal projects with issue tracking, daily standups, and deployment milestones.',
    whatStudentsReceive: [
      'Real Project Sprint Environment',
      'Senior Architect Supervision',
      'Official Internship Completion Certificate',
    ],
    skillsDeveloped: ['Agile Team Collaboration', 'Production Deployment', 'Stakeholder Communication'],
    outputDeliverable: 'Verified Internship Experience & Live Case Studies',
  },
  {
    id: 'get-job-ready',
    stepNumber: '05',
    stage: 'GET JOB READY',
    title: 'Resume Engineering, LinkedIn & Mock Interviews',
    whatHappens:
      'Our placement cell overhauls your technical resume, LinkedIn profile, and portfolio presentation while conducting iterative technical and HR mock interviews.',
    whatStudentsReceive: [
      'ATS-Optimized Technical Resume',
      'LinkedIn & GitHub Profile Optimization',
      '1-on-1 Technical & HR Mock Interviews',
    ],
    skillsDeveloped: ['Technical Interview Articulation', 'System Design Pitching', 'Behavioral Confidence'],
    outputDeliverable: 'Cleared Placement Readiness Scorecard',
  },
  {
    id: 'get-placed',
    stepNumber: '06',
    stage: 'GET PLACED',
    title: 'Placement Drives, Job Referrals & Offer Negotiation',
    whatHappens:
      'Access dedicated job referrals, curated interview drives with hiring companies, and continuous interview feedback until you land your role.',
    whatStudentsReceive: [
      'Curated Job Referrals & Interview Scheduling',
      'Company-Specific Interview Prep Packs',
      'Offer Evaluation Guidance',
    ],
    skillsDeveloped: ['Live Interview Execution', 'Role Alignment', 'Professional Onboarding'],
    outputDeliverable: 'Career Launch & Technology Job Offer',
  },
  {
    id: 'grow',
    stepNumber: '07',
    stage: 'GROW',
    title: 'Lifetime Placement Support & Alumni Network',
    whatHappens:
      'Stay connected to the Karka alumni community, receive post-placement mentorship, and access lifetime career transition support.',
    whatStudentsReceive: [
      'Lifetime Placement Cell Access',
      'Alumni Tech Meetups & Hackathons',
      'Advanced AI Upskilling Workshops',
    ],
    skillsDeveloped: ['Continuous Engineering Growth', 'Leadership & Mentorship', 'Cross-Domain Innovation'],
    outputDeliverable: 'Long-Term Career Acceleration',
  },
];

export interface KarkaAdvantageItem {
  id: string;
  index: string;
  title: string;
  shortHeadline: string;
  description: string;
  expandedDetails: string[];
  highlightMetric: string;
  iconName: 'Wallet' | 'Sparkles' | 'Briefcase' | 'Users' | 'Award' | 'CheckCircle2';
}

export const KARKA_ADVANTAGE_DATA: KarkaAdvantageItem[] = [
  {
    id: 'pay-after-placement',
    index: '01',
    title: 'Pay After Placement',
    shortHeadline: 'Learn Now. Pay After You Get Hired.',
    description:
      'Start your career transformation without heavy upfront financial pressure. Focus on mastering skills and pay program fees after placement as per program terms.',
    expandedDetails: [
      'Transparent onboarding assessment to match you with eligible career tracks',
      'Zero hidden clauses—program terms are explained clearly to students and parents before enrollment',
      'Aligns Karka’s success directly with your career outcome',
    ],
    highlightMetric: 'Student-Aligned Fee Model',
    iconName: 'Wallet',
  },
  {
    id: 'ai-first-curriculum',
    index: '02',
    title: 'AI-First Curriculum',
    shortHeadline: 'Learn With AI. Build With AI.',
    description:
      'Every Karka track—from Full Stack and Data Science to UI/UX and Digital Marketing—integrates modern AI tools, LLMs, and prompt workflows.',
    expandedDetails: [
      'Hands-on training with LLM APIs, AI coding assistants, and workflow automation',
      'Curriculum updated continuously to match how modern engineering teams ship products',
      'Powered by Spike AI for personalized practice and progress tracking',
    ],
    highlightMetric: '100% AI-Integrated Syllabus',
    iconName: 'Sparkles',
  },
  {
    id: 'real-internship-projects',
    index: '03',
    title: 'Real Internship Projects',
    shortHeadline: 'Experience Before You Graduate.',
    description:
      'Move beyond theoretical assignments. Build deployable applications and complete structured internship sprints with real-world workflows.',
    expandedDetails: [
      'Agile sprint execution with Git branches, pull requests, and mentor reviews',
      'Deploy live projects that recruiters can test and verify during interviews',
      'Earn an official internship certificate backed by a concrete project portfolio',
    ],
    highlightMetric: 'Live Deployed Portfolio',
    iconName: 'Briefcase',
  },
  {
    id: 'expert-mentorship',
    index: '04',
    title: 'Expert Mentorship',
    shortHeadline: '1:1 Guidance From Industry Practitioners.',
    description:
      'Learn directly from developers, data scientists, and product specialists who build real systems and mentor you through every roadblock.',
    expandedDetails: [
      'Dedicated code review sessions and architecture walkthroughs',
      'Personalized debugging support and weekly progress check-ins',
      'Career counseling tailored to your educational background and learning pace',
    ],
    highlightMetric: '1:1 Practitioner Reviews',
    iconName: 'Users',
  },
  {
    id: 'hiring-placement-support',
    index: '05',
    title: 'Hiring & Placement Support',
    shortHeadline: '100% Lifetime Placement Assistance.',
    description:
      'Our placement ecosystem supports you with job referrals, interview scheduling, and company-specific preparation until you succeed.',
    expandedDetails: [
      'Dedicated placement cell coordinating interviews and referrals',
      'Targeted preparation for product startups, IT services, and enterprise tech teams',
      'Continued post-graduation support for career growth',
    ],
    highlightMetric: '100% Placement Support',
    iconName: 'Award',
  },
  {
    id: 'job-readiness-system',
    index: '06',
    title: 'Job Readiness System',
    shortHeadline: 'Holistic Technical & Communication Polish.',
    description:
      'We transform how you present your engineering capabilities through ATS resumes, LinkedIn optimization, and rigorous mock interviews.',
    expandedDetails: [
      'Iterative technical and HR mock interviews with detailed feedback rubrics',
      'GitHub repository documentation and live demo pitching practice',
      'Workplace communication and agile collaboration readiness',
    ],
    highlightMetric: 'End-to-End Interview Prep',
    iconName: 'CheckCircle2',
  },
];

export type ProgramCategory =
  | 'ALL'
  | 'FULL STACK'
  | 'AI & GEN AI'
  | 'DATA & ML'
  | 'DESIGN'
  | 'DIGITAL MEDIA'
  | 'MARKETING'
  | 'NON-TECH'
  | 'OTHER TECH';

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  'ALL',
  'FULL STACK',
  'AI & GEN AI',
  'DATA & ML',
  'DESIGN',
  'DIGITAL MEDIA',
  'MARKETING',
  'NON-TECH',
  'OTHER TECH',
];

export interface KarkaProgram {
  id: string;
  title: string;
  category: Exclude<ProgramCategory, 'ALL'>;
  duration: string;
  mode: string;
  skillLevel: 'Beginner Friendly' | 'Intermediate' | 'Beginner to Advanced';
  popularityRank: number;
  isAiFocused: boolean;
  isCareerTrack: boolean;
  payAfterPlacementAvailable: boolean;
  shortDescription: string;
  overview: string;
  technologies: string[];
  curriculum: { phase: string; topics: string }[];
  projects: string[];
  internshipDetails: string;
  careerOutcomes: string[];
  eligibility: string;
  image: string;
}

export const KARKA_PROGRAMS_DATA: KarkaProgram[] = [
  {
    id: 'ai-data-science',
    title: 'AI & Data Science Career Program',
    category: 'AI & GEN AI',
    duration: '6 Months',
    mode: 'Offline (Nagercoil HQ) / Hybrid Live',
    skillLevel: 'Beginner to Advanced',
    popularityRank: 1,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Master Python, Machine Learning, Deep Learning, Generative AI, and MLOps through real-world datasets and live internship projects.',
    overview:
      'An intensive AI-first career track designed to take you from Python and statistical foundations to building production Machine Learning models, RAG pipelines, and autonomous AI workflows.',
    technologies: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'PyTorch / TensorFlow', 'LLM APIs & RAG', 'SQL', 'FastAPI'],
    curriculum: [
      { phase: 'Module 1: Python & Data Foundations', topics: 'Python Programming, Data Structures, SQL Querying, Exploratory Data Analysis' },
      { phase: 'Module 2: Statistical Modeling & Classical ML', topics: 'Supervised & Unsupervised Learning, Feature Engineering, Ensemble Models' },
      { phase: 'Module 3: Deep Learning, NLP & Generative AI', topics: 'Neural Networks, Transformers, Prompt Engineering, Vector Databases & RAG' },
      { phase: 'Module 4: Production Deployment & Internship', topics: 'FastAPI Model Serving, Capstone AI Project & Agile Internship Sprint' },
    ],
    projects: ['AI Resume Analyzer & Job Matcher', 'Enterprise RAG Knowledge Assistant', 'Predictive Customer Churn & Demand Forecaster'],
    internshipDetails: 'Includes a structured project-based AI internship working on real datasets, model deployment, and mentor code reviews.',
    careerOutcomes: ['AI / ML Engineer', 'Data Scientist', 'Generative AI Developer'],
    eligibility: 'College students, recent graduates (B.E/B.Tech/B.Sc/BCA/MCA), and analytical career switchers.',
    image: IMAGES.mentorSession,
  },
  {
    id: 'mern-fullstack',
    title: 'MERN Fullstack Development',
    category: 'FULL STACK',
    duration: '6 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 2,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Build scalable production web applications using MongoDB, Express.js, React, Node.js, TypeScript, and AI-assisted coding workflows.',
    overview:
      'Our flagship full-stack engineering program covering modern frontend architecture in React, RESTful APIs in Node/Express, database design, authentication, and cloud deployment.',
    technologies: ['HTML5 / CSS3 / Tailwind', 'JavaScript & TypeScript', 'React.js', 'Node.js & Express', 'MongoDB & SQL', 'Git & CI/CD'],
    curriculum: [
      { phase: 'Module 1: Responsive Web & Modern JavaScript', topics: 'Semantic HTML, Tailwind CSS, ES6+ JavaScript, DOM & Async Programming' },
      { phase: 'Module 2: Frontend Architecture with React', topics: 'Components, Hooks, State Management, API Integration & Routing' },
      { phase: 'Module 3: Backend Engineering & Databases', topics: 'Node.js, Express REST APIs, JWT Auth, MongoDB Aggregations & Security' },
      { phase: 'Module 4: AI-Assisted Dev & Full-Stack Internship', topics: 'AI Copilot Workflows, Cloud Deployment & Live Team Internship Project' },
    ],
    projects: ['Full-Stack E-Commerce & Payment Platform', 'Real-Time Project Management SaaS', 'AI-Integrated Customer Support Portal'],
    internshipDetails: 'Integrated full-stack internship where you collaborate on production web modules using Git pull requests and agile sprints.',
    careerOutcomes: ['Full Stack Developer', 'React Frontend Engineer', 'Node.js Backend Developer'],
    eligibility: 'Open to graduates and final-year students from any stream with a passion for software development.',
    image: IMAGES.codingCohort,
  },
  {
    id: 'react-java-fullstack',
    title: 'React + Java Full Stack Development',
    category: 'FULL STACK',
    duration: '6 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner to Advanced',
    popularityRank: 4,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Enterprise-grade full-stack engineering combining React frontend interfaces with Core Java, Spring Boot microservices, and SQL databases.',
    overview:
      'Engineered for learners targeting enterprise IT, fintech, and product engineering roles requiring strong Object-Oriented Programming in Java alongside modern React interfaces.',
    technologies: ['Core Java', 'Spring Boot', 'Hibernate / JPA', 'React.js', 'MySQL / PostgreSQL', 'Microservices', 'Docker Basics'],
    curriculum: [
      { phase: 'Module 1: Core Java & OOP Mastery', topics: 'Java Syntax, OOP Principles, Collections, Multithreading & Exception Handling' },
      { phase: 'Module 2: Relational Databases & Spring Boot', topics: 'SQL Design, JDBC, Spring Core, Spring Boot REST APIs & Spring Security' },
      { phase: 'Module 3: Modern React Frontend', topics: 'React Components, Hooks, State Management & Enterprise UI Dashboards' },
      { phase: 'Module 4: Enterprise Capstone & Internship', topics: 'End-to-End Banking/Retail System Build, Testing & Internship Delivery' },
    ],
    projects: ['Enterprise Inventory & Order Management System', 'Role-Based HR & Payroll Portal', 'Full-Stack FinTech Transaction Dashboard'],
    internshipDetails: 'Hands-on enterprise Java + React internship with code quality gates and mentor architecture reviews.',
    careerOutcomes: ['Java Full Stack Developer', 'Spring Boot Backend Engineer', 'Software Engineer'],
    eligibility: 'Engineering/Science graduates, MCA/BCA students, and aspiring enterprise developers.',
    image: IMAGES.javaBackendArchitect,
  },
  {
    id: 'react-python-fullstack',
    title: 'React + Python Full Stack Development',
    category: 'FULL STACK',
    duration: '6 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 5,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Combine the rapid backend power of Python (Django/FastAPI) and AI integration with dynamic React frontend web applications.',
    overview:
      'Ideal for developers who want to build modern web products while staying ready to integrate Python-based AI and machine learning capabilities directly into their backend services.',
    technologies: ['Python', 'Django / FastAPI', 'React.js', 'PostgreSQL', 'REST APIs', 'Tailwind CSS', 'LLM API Integration'],
    curriculum: [
      { phase: 'Module 1: Python Programming & Web Basics', topics: 'Python Core, OOP, HTML5, CSS3, Modern JavaScript Fundamentals' },
      { phase: 'Module 2: React Frontend Development', topics: 'Single Page Applications, React Hooks, API Consumption & Responsive UI' },
      { phase: 'Module 3: Python Web Frameworks & SQL', topics: 'Django ORM, FastAPI High-Performance Endpoints, PostgreSQL & Auth' },
      { phase: 'Module 4: AI-Powered Web Apps & Internship', topics: 'Embedding AI Features in Web Apps, Cloud Hosting & Live Internship' },
    ],
    projects: ['AI-Powered Content & SaaS Web Platform', 'Healthcare Appointment & Analytics Portal', 'Automated E-Learning Management System'],
    internshipDetails: 'Real-world sprint internship building Python + React web applications under mentor supervision.',
    careerOutcomes: ['Python Full Stack Developer', 'Backend Python Engineer', 'AI Web Application Developer'],
    eligibility: 'Beginners, college students, and graduates looking for a versatile Python + Web career path.',
    image: IMAGES.pythonAiEngineer,
  },
  {
    id: 'data-analytics-ai',
    title: 'Data Analytics with AI',
    category: 'DATA & ML',
    duration: '5 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 3,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Turn raw business data into executive insights using SQL, Python, Power BI, Tableau, Advanced Excel, and AI-assisted analytics.',
    overview:
      'A practical, business-focused analytics track that trains you to clean complex datasets, write advanced SQL queries, build interactive BI dashboards, and automate reporting with AI.',
    technologies: ['SQL', 'Power BI', 'Tableau', 'Python for Analytics', 'Advanced Excel', 'AI Data Copilots', 'KPI Modeling'],
    curriculum: [
      { phase: 'Module 1: Spreadsheet Modeling & SQL Mastery', topics: 'Advanced Excel Functions, Pivot Modeling, Relational Schemas & Complex SQL' },
      { phase: 'Module 2: Python for Data Wrangling', topics: 'Pandas, NumPy, Automated Data Cleaning & Visual Exploratory Analysis' },
      { phase: 'Module 3: Business Intelligence Dashboards', topics: 'Power BI Data Modeling, DAX Measures, Tableau Storytelling & KPI Design' },
      { phase: 'Module 4: AI Analytics & Live Internship', topics: 'AI-Assisted Insights, Business Case Presentations & Analytics Internship' },
    ],
    projects: ['Executive Revenue & Cohort Retention Dashboard', 'Supply Chain & Inventory Bottleneck Analyzer', 'E-Commerce Marketing Attribution Report'],
    internshipDetails: 'Work on multi-source business datasets to deliver interactive dashboards and stakeholder reports.',
    careerOutcomes: ['Data Analyst', 'Business Intelligence (BI) Analyst', 'Reporting & Operations Analyst'],
    eligibility: 'Open to both technical and non-technical graduates (B.Com, BBA, B.Sc, B.E, MBA) with analytical interest.',
    image: IMAGES.biDashboardAnalyst,
  },
  {
    id: 'data-engineering-big-data',
    title: 'Data Engineering & Big Data Pipelines',
    category: 'DATA & ML',
    duration: '6 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Intermediate',
    popularityRank: 7,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Architect resilient ETL/ELT data pipelines, cloud data warehouses, and distributed stream processing systems for AI and analytics.',
    overview:
      'Learn how modern data infrastructure is built. Master SQL optimization, Python ETL scripting, Apache Spark, workflow orchestration, and cloud data warehousing.',
    technologies: ['Python & Advanced SQL', 'Apache Spark', 'Airflow / Orchestration', 'Cloud Data Warehousing', 'Docker', 'ETL / ELT Pipelines'],
    curriculum: [
      { phase: 'Module 1: Advanced SQL & Data Modeling', topics: 'Dimensional Modeling, Star/Snowflake Schemas, Indexing & Query Tuning' },
      { phase: 'Module 2: Python ETL & Distributed Processing', topics: 'Data Ingestion APIs, PySpark, Batch Processing & Data Quality Checks' },
      { phase: 'Module 3: Cloud Data Warehouses & Orchestration', topics: 'Modern Data Stack, Automated Pipeline Scheduling & Streaming Basics' },
      { phase: 'Module 4: Production Data Pipeline Internship', topics: 'End-to-End Data Lakehouse Project & Mentored Internship' },
    ],
    projects: ['Automated Multi-Source E-Commerce Data Warehouse', 'Real-Time Event Log Ingestion Pipeline', 'AI Feature Store & Data Quality Monitor'],
    internshipDetails: 'Build and maintain scalable data pipelines during your project-based internship.',
    careerOutcomes: ['Data Engineer', 'ETL Developer', 'Analytics Engineer'],
    eligibility: 'Graduates and developers with basic programming or SQL familiarity.',
    image: IMAGES.heroStudio,
  },
  {
    id: 'cloud-devops-engineering',
    title: 'Cloud & DevOps Engineering',
    category: 'OTHER TECH',
    duration: '6 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner to Advanced',
    popularityRank: 6,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: true,
    shortDescription:
      'Master AWS/Cloud infrastructure, Linux, Docker, Kubernetes, Terraform, and automated CI/CD deployment pipelines.',
    overview:
      'Designed for engineers who want to power modern cloud infrastructure, automate deployments, and ensure high availability for web and AI platforms.',
    technologies: ['Linux & Bash', 'AWS Cloud', 'Docker', 'Kubernetes', 'Terraform (IaC)', 'GitHub Actions CI/CD', 'Prometheus & Grafana'],
    curriculum: [
      { phase: 'Module 1: Linux Systems, Networking & Git', topics: 'Linux Administration, Shell Scripting, Networking, Security & Git Workflows' },
      { phase: 'Module 2: Cloud Computing & Containers', topics: 'AWS Compute/Storage/VPC/IAM, Multi-Stage Dockerfiles & Container Registries' },
      { phase: 'Module 3: Kubernetes & Infrastructure as Code', topics: 'K8s Cluster Orchestration, Helm, Terraform Provisioning & Auto-Scaling' },
      { phase: 'Module 4: CI/CD Observability & Internship', topics: 'Automated Deployment Pipelines, Monitoring & Cloud DevOps Internship' },
    ],
    projects: ['Zero-Downtime Microservices CI/CD Pipeline', 'Terraform Multi-Tier Cloud Infrastructure', 'Kubernetes Cluster with Live Observability'],
    internshipDetails: 'Hands-on DevOps internship managing containerized deployments and cloud infrastructure labs.',
    careerOutcomes: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer (SRE)'],
    eligibility: 'B.E/B.Tech/BCA/MCA/B.Sc graduates and IT support professionals upgrading to Cloud/DevOps.',
    image: IMAGES.cloudDevopsEngineer,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & AI Product Design',
    category: 'DESIGN',
    duration: '4 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 8,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Design intuitive digital products, SaaS interfaces, and mobile apps using Figma, design systems, user research, and AI design tools.',
    overview:
      'Learn end-to-end digital product design—from user research, wireframing, and information architecture to high-fidelity interactive prototypes and design systems in Figma.',
    technologies: ['Figma', 'Design Systems', 'User Research & Personas', 'Interactive Prototyping', 'Usability Testing', 'AI Design Workflows'],
    curriculum: [
      { phase: 'Module 1: UX Research & Information Architecture', topics: 'Design Thinking, User Personas, Empathy Maps, User Flows & Wireframing' },
      { phase: 'Module 2: Visual UI Design & Figma Mastery', topics: 'Typography, Color Systems, Auto-Layout, Component Variants & Design Tokens' },
      { phase: 'Module 3: Prototyping & Usability Validation', topics: 'Micro-Interactions, Mobile & Web Responsive Grids, Developer Handoff' },
      { phase: 'Module 4: Portfolio Case Studies & Internship', topics: '2 End-to-End UX Case Studies, Behance/Dribbble Portfolio & Live Internship' },
    ],
    projects: ['FinTech Mobile App UX Case Study', 'Enterprise AI SaaS Dashboard Design System', 'E-Commerce Checkout Redesign'],
    internshipDetails: 'Includes a UI/UX Design Internship working alongside developers on real web and mobile interfaces.',
    careerOutcomes: ['UI/UX Designer', 'Product Designer', 'Interaction Designer'],
    eligibility: 'Creative learners, students, and graduates from any background—no coding required.',
    image: IMAGES.animeUiuxCreator,
  },
  {
    id: 'digital-marketing-ai',
    title: 'AI-Powered Digital Marketing',
    category: 'MARKETING',
    duration: '4 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 9,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Master Performance Marketing, Meta & Google Ads, Technical SEO, Social Media Growth, Content Strategy, and AI Marketing Automation.',
    overview:
      'A practical growth marketing program where you plan, launch, and optimize real digital campaigns using modern analytics and AI content/ad workflows.',
    technologies: ['Google Ads', 'Meta Ads Manager', 'Technical SEO', 'Google Analytics 4 (GA4)', 'AI Content & Ad Tools', 'CRM & Email Automation'],
    curriculum: [
      { phase: 'Module 1: Brand Positioning & Content Strategy', topics: 'Audience Funnels, Copywriting with AI, Social Media Calendars & Branding' },
      { phase: 'Module 2: Search Engine Optimization (SEO)', topics: 'Keyword Research, On-Page/Off-Page SEO, Technical Audits & Search Console' },
      { phase: 'Module 3: Performance Ads & Conversion Analytics', topics: 'Meta Ads, Google Search/Display Campaigns, Retargeting & GA4 Tracking' },
      { phase: 'Module 4: Live Campaign Internship', topics: 'Managing Real Campaign Budgets, ROAS Reporting & Agency Internship' },
    ],
    projects: ['Full-Funnel Lead Generation Campaign', 'Complete Technical SEO Website Audit & Growth Plan', 'AI-Automated Social & Email Funnel'],
    internshipDetails: 'Work on live brand campaigns, SEO audits, and social media growth metrics during your internship.',
    careerOutcomes: ['Digital Marketing Specialist', 'Performance Marketer', 'SEO & Growth Analyst'],
    eligibility: 'Students, graduates, entrepreneurs, and marketing enthusiasts from any stream.',
    image: IMAGES.digitalMarketingGrowth,
  },
  {
    id: 'qa-automation-testing',
    title: 'QA Automation Testing',
    category: 'OTHER TECH',
    duration: '4 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 10,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Ensure software reliability with Manual Testing, Selenium, Playwright, API Testing (Postman), Java/Python test scripts, and CI integration.',
    overview:
      'Master modern Quality Assurance engineering by writing automated end-to-end test suites for web applications and REST APIs.',
    technologies: ['Selenium / Playwright', 'Java / Python for QA', 'Postman API Testing', 'TestNG / PyTest', 'JIRA & Bug Tracking', 'CI Test Pipelines'],
    curriculum: [
      { phase: 'Module 1: Software Testing & Agile QA Foundations', topics: 'SDLC, STLC, Test Cases, Bug Life Cycle & JIRA Defect Management' },
      { phase: 'Module 2: Programming for Automation & Selenium', topics: 'Java/Python Basics, WebDriver Locators, Page Object Model & Cross-Browser Tests' },
      { phase: 'Module 3: API Testing & Automated Frameworks', topics: 'REST API Validation with Postman, Data-Driven Frameworks & CI Execution' },
      { phase: 'Module 4: Live QA Internship', topics: 'Testing Real Web Applications, Regression Suites & Internship Certification' },
    ],
    projects: ['Automated E-Commerce End-to-End Test Suite', 'REST API Security & Functional Test Pack', 'CI-Integrated Regression Dashboard'],
    internshipDetails: 'Test live web applications built in Karka sprint labs and document production test reports.',
    careerOutcomes: ['QA Automation Engineer', 'Software Development Engineer in Test (SDET)', 'Quality Analyst'],
    eligibility: 'Graduates from any science/engineering/computer stream looking for a structured entry into IT.',
    image: IMAGES.qaTestingSpecialist,
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development (Flutter / React Native)',
    category: 'OTHER TECH',
    duration: '5 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner to Advanced',
    popularityRank: 11,
    isAiFocused: true,
    isCareerTrack: true,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Build cross-platform iOS and Android mobile applications with smooth native performance, REST APIs, and Firebase backends.',
    overview:
      'Learn to design, build, test, and publish responsive mobile applications for Android and iOS using modern cross-platform frameworks.',
    technologies: ['Flutter / Dart', 'React Native', 'Firebase & Cloud Auth', 'REST APIs', 'Mobile State Management', 'Play Store Deployment'],
    curriculum: [
      { phase: 'Module 1: Mobile UI Architecture & Dart/JS', topics: 'Cross-Platform Fundamentals, Responsive Layouts, Navigation & State' },
      { phase: 'Module 2: API Integration & Real-Time Backends', topics: 'REST APIs, Firebase Authentication, Cloud Firestore & Push Notifications' },
      { phase: 'Module 3: Device Features & Performance', topics: 'Maps, Camera, Local Storage, Offline Sync & Smooth Animations' },
      { phase: 'Module 4: App Publishing & Internship', topics: 'Production App Build, Store Guidelines & Mobile Development Internship' },
    ],
    projects: ['On-Demand Delivery & Tracking Mobile App', 'AI Personal Finance & Expense Tracker App', 'Community Learning & Quiz Mobile App'],
    internshipDetails: 'Build and ship a functional cross-platform mobile application during your guided internship.',
    careerOutcomes: ['Mobile App Developer', 'Flutter / React Native Engineer', 'Cross-Platform App Developer'],
    eligibility: 'Students and graduates excited about building consumer and enterprise mobile apps.',
    image: IMAGES.mobileAppCreator,
  },
  {
    id: 'graphic-design-video-media',
    title: 'Graphic Designing, Branding & Digital Media',
    category: 'DIGITAL MEDIA',
    duration: '3 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 12,
    isAiFocused: true,
    isCareerTrack: false,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Create high-impact brand identities, social media visuals, motion graphics, and AI-enhanced creative assets.',
    overview:
      'A studio-style creative program covering visual identity systems, digital illustration, poster and ad design, video editing, and generative AI creative tools.',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro & Brand Kits', 'Video Editing & Reels', 'Generative AI Visual Tools'],
    curriculum: [
      { phase: 'Module 1: Visual Design Principles & Typography', topics: 'Color Theory, Layout Composition, Brand Identity & Logo Design' },
      { phase: 'Module 2: Social Media & Ad Campaign Creatives', topics: 'High-Converting Ad Banners, Event Posters, Packaging & Print Assets' },
      { phase: 'Module 3: Short-Form Video & AI Creative Workflows', topics: 'Video Cuts, Captions, Motion Graphics & AI Image Enhancement' },
      { phase: 'Module 4: Creative Studio Portfolio', topics: 'Complete Brand Identity Book & Real Campaign Asset Delivery' },
    ],
    projects: ['Complete Startup Brand Identity & Style Guide', '30-Day High-Impact Social Media & Video Campaign', 'Event & Hackathon Visual Kit'],
    internshipDetails: 'Create real branding and digital media campaigns with mentor art direction.',
    careerOutcomes: ['Graphic Designer', 'Brand Identity Designer', 'Digital Media Creator'],
    eligibility: 'Open to creative students, freelancers, and graduates from any discipline.',
    image: IMAGES.graphicBrandArtist,
  },
  {
    id: 'business-analyst-hr-finance',
    title: 'Business Analyst, HR & Tally Finance Management',
    category: 'NON-TECH',
    duration: '4 Months',
    mode: 'Offline / Hybrid Live',
    skillLevel: 'Beginner Friendly',
    popularityRank: 13,
    isAiFocused: true,
    isCareerTrack: false,
    payAfterPlacementAvailable: false,
    shortDescription:
      'Master Business Analysis, BRD documentation, Agile workflows, HR Operations, or Tally Prime & GST Accounting for corporate roles.',
    overview:
      'Designed for commerce, management, and non-coding graduates aiming for high-growth Business Analyst, HR Operations, or Corporate Finance roles.',
    technologies: ['BRD / FRD Documentation', 'JIRA & Agile Scrum', 'Power BI / Excel', 'Tally Prime & GST', 'HRMS & Payroll Workflows', 'AI Productivity'],
    curriculum: [
      { phase: 'Module 1: Business Process & Requirements Gathering', topics: 'Stakeholder Interviews, BRD/FRD Writing, Use Cases & Process Flowcharts' },
      { phase: 'Module 2: Agile Delivery & Data Reporting', topics: 'Scrum Ceremonies, JIRA User Stories, Excel Dashboards & KPI Tracking' },
      { phase: 'Module 3: Corporate Operations / Tally & HR Track', topics: 'Tally Prime Accounting, GST Filing, or End-to-End HR Recruitment & Payroll' },
      { phase: 'Module 4: Corporate Case Study & Placement Prep', topics: 'Live Business Case Simulation, Resume Polish & Mock Interviews' },
    ],
    projects: ['End-to-End SaaS Product Requirement Specification (BRD)', 'Corporate Financial & GST Audit Model', 'HR Talent Acquisition & Onboarding System'],
    internshipDetails: 'Hands-on business documentation, operations analysis, and mentor review.',
    careerOutcomes: ['Business Analyst', 'HR Executive / Operations Analyst', 'Finance & Accounts Executive'],
    eligibility: 'B.Com, BBA, MBA, Arts, Science, and Engineering graduates looking for non-coding corporate tracks.',
    image: IMAGES.placementSuccess,
  },
];

export type ProjectCategory =
  | 'ALL'
  | 'AI'
  | 'FULL STACK'
  | 'DATA'
  | 'UI/UX'
  | 'AUTOMATION'
  | 'DIGITAL PRODUCTS';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'ALL',
  'AI',
  'FULL STACK',
  'DATA',
  'UI/UX',
  'AUTOMATION',
  'DIGITAL PRODUCTS',
];

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  technologies: string[];
  shortDescription: string;
  studentTeamPlaceholder: string;
  projectType: string;
  problem: string;
  solution: string;
  whatWasBuilt: string[];
  learningOutcome: string[];
  image: string;
}

export const PROJECT_SHOWCASE_DATA: ProjectCaseStudy[] = [
  {
    id: 'ai-resume-intelligence',
    title: 'AI Resume Analyzer & Role Readiness Engine',
    category: 'AI',
    technologies: ['Python', 'FastAPI', 'LLM Embeddings', 'React', 'Tailwind CSS'],
    shortDescription:
      'Semantic document parser that evaluates candidate resumes against target job descriptions and generates actionable skill-gap roadmaps.',
    studentTeamPlaceholder: 'Karka AI & Data Science Cohort Team [Editable Team Placeholder]',
    projectType: 'Capstone & Internship Build',
    problem:
      'Job seekers struggle to understand why their resumes are filtered out by Applicant Tracking Systems (ATS) and which specific technical projects they are missing.',
    solution:
      'Engineered an NLP and vector-embedding pipeline that parses PDF resumes, compares competencies against job requirements, and outputs a structured readiness score.',
    whatWasBuilt: [
      'PDF & DOCX text extraction and entity normalization service in Python',
      'Semantic similarity engine matching candidate skills to engineering job descriptions',
      'Interactive React diagnostic dashboard showing missing skills and portfolio suggestions',
    ],
    learningOutcome: [
      'End-to-end deployment of Python FastAPI microservices with LLM embeddings',
      'Structured JSON schema validation and latency optimization',
      'Frontend-to-AI API integration with clean diagnostic visualizations',
    ],
    image: IMAGES.pythonAiEngineer,
  },
  {
    id: 'rag-campus-assistant',
    title: 'Multi-Source Enterprise RAG Knowledge Copilot',
    category: 'AI',
    technologies: ['Python', 'Vector Database', 'LLM APIs', 'TypeScript', 'Server-Sent Events'],
    shortDescription:
      'Context-grounded conversational AI assistant capable of answering technical and policy queries with verifiable document citations.',
    studentTeamPlaceholder: 'Karka Generative AI Sprint Team [Editable Team Placeholder]',
    projectType: 'AI Lab Project',
    problem:
      'Standard chatbots hallucinate facts when asked about internal organization policies, technical documentation, or course handbooks.',
    solution:
      'Implemented a Retrieval-Augmented Generation (RAG) architecture with chunking, hybrid vector search, and strict citation grounding.',
    whatWasBuilt: [
      'Automated document ingestion and semantic chunking pipeline',
      'Vector similarity retrieval layer with relevance threshold filtering',
      'Streaming chat UI displaying inline source document references',
    ],
    learningOutcome: [
      'Mastering vector embeddings, chunk sizing, and retrieval evaluation',
      'Preventing LLM hallucinations using system guardrails',
      'Building real-time streaming responses for modern AI UX',
    ],
    image: IMAGES.heroStudio,
  },
  {
    id: 'mern-commerce-hub',
    title: 'Full-Stack Multi-Vendor E-Commerce & Inventory Hub',
    category: 'FULL STACK',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    shortDescription:
      'Complete digital storefront and merchant inventory dashboard featuring role-based authentication, dynamic cart sync, and order tracking.',
    studentTeamPlaceholder: 'Karka MERN Fullstack Internship Team [Editable Team Placeholder]',
    projectType: 'Live Internship Project',
    problem:
      'Local retail businesses needed a unified platform to manage product variants, real-time stock levels, and online customer orders without manual spreadsheet errors.',
    solution:
      'Architected a responsive MERN stack application with separate customer storefront and admin merchant analytics portals.',
    whatWasBuilt: [
      'Dynamic product catalog with multi-attribute filtering, search, and pagination',
      'Secure JWT authentication with Role-Based Access Control (Customer vs. Admin)',
      'Order lifecycle state machine and merchant revenue analytics view',
    ],
    learningOutcome: [
      'Designing normalized & document schemas for transactional integrity',
      'Building scalable REST APIs with middleware security and error handling',
      'Collaborating via Git feature branches and pull request reviews',
    ],
    image: IMAGES.codingCohort,
  },
  {
    id: 'bi-executive-command',
    title: 'Omnichannel Retail & Cohort Retention BI Suite',
    category: 'DATA',
    technologies: ['SQL', 'Python', 'Power BI', 'DAX', 'Automated ETL'],
    shortDescription:
      'Interactive executive analytics command center tracking customer acquisition cost, monthly cohort retention, and regional profit margins.',
    studentTeamPlaceholder: 'Karka Data Analytics Cohort Team [Editable Team Placeholder]',
    projectType: 'Analytics Case Study',
    problem:
      'Leadership teams were relying on fragmented weekly spreadsheets, delaying visibility into customer churn and unprofitable product SKUs.',
    solution:
      'Built an automated Python + SQL data cleaning pipeline feeding a star-schema Power BI dashboard with live KPI drill-downs.',
    whatWasBuilt: [
      'SQL transformation scripts cleaning 100k+ rows of historical order records',
      'Star-schema data model with custom DAX time-intelligence measures',
      'Executive drill-down views for regional sales, churn cohorts, and SKU margins',
    ],
    learningOutcome: [
      'Writing production-grade SQL window functions and CTEs',
      'Designing clutter-free executive dashboards that drive business decisions',
      'Presenting data-backed recommendations during stakeholder reviews',
    ],
    image: IMAGES.biDashboardAnalyst,
  },
  {
    id: 'fintech-ux-design-system',
    title: 'Next-Gen Personal Finance & Micro-Investing UX System',
    category: 'UI/UX',
    technologies: ['Figma', 'Design Tokens', 'Auto-Layout', 'Interactive Prototyping', 'User Testing'],
    shortDescription:
      'End-to-end UX research and high-fidelity mobile design system built to simplify goal-based savings for Gen-Z first-time earners.',
    studentTeamPlaceholder: 'Karka UI/UX Design Internship Studio [Editable Team Placeholder]',
    projectType: 'Product Design Case Study',
    problem:
      'Young professionals find traditional banking and investment apps intimidating due to dense financial jargon and cluttered navigation.',
    solution:
      'Conducted user interviews and designed a clean, accessible mobile experience with visual goal trackers and a tokenized Figma component library.',
    whatWasBuilt: [
      'User research synthesis, persona mapping, and frictionless onboarding flows',
      'WCAG AA accessible dark and light mode Figma component library',
      'Interactive clickable prototype validated through 5 usability test sessions',
    ],
    learningOutcome: [
      'Translating user pain points into intuitive interface architecture',
      'Building scalable Figma design systems ready for developer handoff',
      'Documenting professional UX case studies for design interviews',
    ],
    image: IMAGES.animeUiuxCreator,
  },
  {
    id: 'cloud-cicd-workflow-engine',
    title: 'Automated Cloud CI/CD & Webhook Workflow Engine',
    category: 'AUTOMATION',
    technologies: ['Docker', 'GitHub Actions', 'AWS Cloud', 'Node.js', 'Linux', 'Terraform'],
    shortDescription:
      'Zero-downtime deployment pipeline and automated alert system that tests, containerizes, and ships web microservices on every Git push.',
    studentTeamPlaceholder: 'Karka Cloud & DevOps Cohort [Editable Team Placeholder]',
    projectType: 'Infrastructure Capstone',
    problem:
      'Manual server deployments caused frequent configuration drift, downtime during releases, and slow rollback recovery.',
    solution:
      'Provisioned reproducible cloud infrastructure using Terraform and automated multi-stage Docker builds via GitHub Actions.',
    whatWasBuilt: [
      'Multi-stage Dockerfiles optimizing container image size and security',
      'GitHub Actions workflow running automated lint, unit tests, and cloud deployment',
      'Real-time health check monitoring and instant rollback scripts',
    ],
    learningOutcome: [
      'Infrastructure as Code (IaC) best practices and state management',
      'Automating end-to-end software delivery pipelines',
      'Debugging Linux server environments and container networking',
    ],
    image: IMAGES.cloudDevopsEngineer,
  },
];

export interface PlacementStoryItem {
  id: string;
  studentNamePlaceholder: string;
  course: string;
  rolePlaceholder: string;
  companyPlaceholder: string;
  batchPlaceholder: string;
  experienceLevel: 'Fresher' | 'Career Switcher' | 'Final Year Student';
  shortStory: string;
  journey: {
    beforeKarka: string;
    learning: string;
    projects: string;
    internship: string;
    interviewPrep: string;
    placement: string;
  };
  image: string;
}

export const PLACEMENT_STORIES_DATA: PlacementStoryItem[] = [
  {
    id: 'story-ai-ds',
    studentNamePlaceholder: '[Verified Student Name Placeholder 01]',
    course: 'AI & Data Science Career Program',
    rolePlaceholder: 'Junior AI & Data Science Engineer [Editable Role]',
    companyPlaceholder: '[Verified Hiring Partner Placeholder]',
    batchPlaceholder: '2025 Cohort (Editable)',
    experienceLevel: 'Fresher',
    shortStory:
      'Transitioned from textbook college theory to building end-to-end NLP and RAG systems, clearing technical rounds through live portfolio demonstrations.',
    journey: {
      beforeKarka:
        'Graduated with basic theoretical knowledge of programming but struggled to build complete projects or clear practical coding rounds.',
      learning:
        'Mastered Python, SQL, Machine Learning, and LLM workflows using Spike AI guided practice and daily mentor sessions.',
      projects:
        'Built an AI Resume Analyzer and a RAG Document Copilot hosted on GitHub with live API endpoints.',
      internship:
        'Completed a project-based AI internship sprint at Karka, learning Git workflows, code reviews, and production deployment.',
      interviewPrep:
        'Completed 6+ technical and HR mock interviews alongside ATS resume and LinkedIn optimization.',
      placement:
        'Secured an engineering role by walking interviewers through live deployed AI repositories rather than just a paper resume.',
    },
    image: IMAGES.placementSuccess,
  },
  {
    id: 'story-mern-fs',
    studentNamePlaceholder: '[Verified Student Name Placeholder 02]',
    course: 'MERN Fullstack Development',
    rolePlaceholder: 'Full Stack Web Developer [Editable Role]',
    companyPlaceholder: '[Verified Hiring Partner Placeholder]',
    batchPlaceholder: '2025 Cohort (Editable)',
    experienceLevel: 'Final Year Student',
    shortStory:
      'Built a production-ready multi-vendor e-commerce platform and completed a team internship before graduation.',
    journey: {
      beforeKarka:
        'Final-year student who knew basic HTML/CSS but lacked confidence in React, backend APIs, and system architecture.',
      learning:
        'Learned modern JavaScript, TypeScript, React hooks, Node.js, Express, and MongoDB through hands-on daily labs.',
      projects:
        'Engineered a full-stack e-commerce application and real-time task board from scratch.',
      internship:
        'Worked in an agile team sprint delivering frontend and API modules under senior developer code review.',
      interviewPrep:
        'Practiced live coding challenges, React state architecture questions, and behavioral storytelling.',
      placement:
        'Landed a Full Stack Developer role with verifiable internship experience already on their resume.',
    },
    image: IMAGES.codingCohort,
  },
  {
    id: 'story-data-analytics',
    studentNamePlaceholder: '[Verified Student Name Placeholder 03]',
    course: 'Data Analytics with AI',
    rolePlaceholder: 'Business Intelligence & Data Analyst [Editable Role]',
    companyPlaceholder: '[Verified Hiring Partner Placeholder]',
    batchPlaceholder: '2025 Cohort (Editable)',
    experienceLevel: 'Career Switcher',
    shortStory:
      'Pivoted from a non-CS commerce background into Data Analytics by mastering SQL, Power BI, Python, and business storytelling.',
    journey: {
      beforeKarka:
        'Commerce graduate looking to enter the technology sector without prior software engineering experience.',
      learning:
        'Started from foundational Excel and SQL before advancing to Python data wrangling and Power BI DAX modeling.',
      projects:
        'Created executive dashboards analyzing e-commerce revenue, supply chain bottlenecks, and customer retention.',
      internship:
        'Delivered real-world analytical reports and stakeholder presentations during the Karka analytics internship.',
      interviewPrep:
        'Focused on SQL query whiteboarding, business case problem-solving, and portfolio presentation.',
      placement:
        'Successfully transitioned into a Data Analyst role with strong SQL and BI dashboard proof.',
    },
    image: IMAGES.aiAnalyticsWorkstation,
  },
  {
    id: 'story-java-fullstack',
    studentNamePlaceholder: '[Verified Student Name Placeholder 04]',
    course: 'React + Java Full Stack Development',
    rolePlaceholder: 'Associate Software Engineer [Editable Role]',
    companyPlaceholder: '[Verified Hiring Partner Placeholder]',
    batchPlaceholder: '2025 Cohort (Editable)',
    experienceLevel: 'Fresher',
    shortStory:
      'Combined Spring Boot backend architecture with React interfaces through Karka’s Pay After Placement career track.',
    journey: {
      beforeKarka:
        'Needed structured mentorship and financial flexibility to pursue intensive full-stack training.',
      learning:
        'Built deep fluency in Core Java OOP, Spring Boot REST microservices, MySQL, and React frontend development.',
      projects:
        'Developed a role-based enterprise inventory and billing system with JWT security.',
      internship:
        'Participated in sprint deliveries, unit testing, and peer code reviews during the Karka internship phase.',
      interviewPrep:
        'Intensive Java OOP, SQL joins, and full-stack architecture mock rounds with Karka mentors.',
      placement:
        'Placed as an Associate Software Engineer supported by Karka’s placement cell.',
    },
    image: IMAGES.javaBackendArchitect,
  },
];

export type MentorDomain = 'ALL' | 'AI' | 'Development' | 'Design' | 'Data' | 'Career';

export interface MentorItem {
  id: string;
  namePlaceholder: string;
  role: string;
  domain: Exclude<MentorDomain, 'ALL'>;
  industryFocus: string;
  expertise: string[];
  experienceSummary: string;
  image: string;
}

export const MENTORS_DATA: MentorItem[] = [
  {
    id: 'mentor-ai-lead',
    namePlaceholder: 'Principal AI & Data Science Mentor [Editable Profile]',
    role: 'AI Architecture & Machine Learning Lead',
    domain: 'AI',
    industryFocus: 'Applied Machine Learning, NLP & Generative AI Systems',
    expertise: ['Python & PyTorch', 'LLM RAG Pipelines', 'MLOps & FastAPI', 'Model Evaluation'],
    experienceSummary:
      'Guides Karka learners through mathematical intuition, clean Python architecture, and deploying production AI applications.',
    image: IMAGES.mentorSession,
  },
  {
    id: 'mentor-fullstack-lead',
    namePlaceholder: 'Senior Full-Stack Engineering Mentor [Editable Profile]',
    role: 'Full-Stack & Cloud Systems Architect',
    domain: 'Development',
    industryFocus: 'MERN Stack, Java Spring Boot & Distributed Web Systems',
    expertise: ['React & TypeScript', 'Node.js & Spring Boot', 'System Design', 'Cloud CI/CD'],
    experienceSummary:
      'Conducts line-by-line pull request reviews, architecture sessions, and agile sprint supervision during student internships.',
    image: IMAGES.codingCohort,
  },
  {
    id: 'mentor-data-analytics',
    namePlaceholder: 'Lead Data & BI Analytics Mentor [Editable Profile]',
    role: 'Business Intelligence & Data Strategy Specialist',
    domain: 'Data',
    industryFocus: 'Enterprise Data Warehousing, SQL & Executive BI',
    expertise: ['Advanced SQL', 'Power BI & Tableau', 'Python ETL', 'KPI Storytelling'],
    experienceSummary:
      'Helps students from both technical and non-technical backgrounds master analytical problem solving and dashboard design.',
    image: IMAGES.aiAnalyticsWorkstation,
  },
  {
    id: 'mentor-product-design',
    namePlaceholder: 'Senior UI/UX & Product Design Mentor [Editable Profile]',
    role: 'Digital Product & Design Systems Lead',
    domain: 'Design',
    industryFocus: 'SaaS UX, Mobile App Design & Design Systems',
    expertise: ['Figma Design Systems', 'User Research', 'Interactive Prototyping', 'Accessibility'],
    experienceSummary:
      'Mentors designers on crafting research-backed UX case studies and collaborating seamlessly with engineering teams.',
    image: IMAGES.animeUiuxCreator,
  },
  {
    id: 'mentor-career-placement',
    namePlaceholder: 'Head of Career Readiness & Placements [Editable Profile]',
    role: 'Technical Recruiting & Career Strategy Advisor',
    domain: 'Career',
    industryFocus: 'ATS Resume Engineering, Mock Interviews & Employer Relations',
    expertise: ['Technical Resume Polish', 'LinkedIn Optimization', 'HR & Behavioral Prep', 'Interview Referrals'],
    experienceSummary:
      'Works 1:1 with every Karka learner to transform their project portfolio into interview calls and job offers.',
    image: IMAGES.campusCounselorHq,
  },
];

export interface SkillNode {
  id: string;
  name: string;
  category: 'Engineering' | 'Data & AI' | 'Infrastructure' | 'Product & Career';
  description: string;
  tracksApplicable: string[];
}

export const SKILL_GRAPH_DATA: SkillNode[] = [
  {
    id: 'frontend',
    name: 'Frontend Architecture (React / TS / UI)',
    category: 'Engineering',
    description: 'Responsive component systems, state management, accessibility, and modern web interfaces.',
    tracksApplicable: ['Full Stack Development', 'UI/UX & Product Design'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs (Node / Java / Python)',
    category: 'Engineering',
    description: 'RESTful microservices, authentication, business logic, and high-concurrency server architecture.',
    tracksApplicable: ['Full Stack Development', 'AI & Data Science', 'Cloud & DevOps'],
  },
  {
    id: 'database',
    name: 'Databases & Data Warehousing (SQL / NoSQL)',
    category: 'Data & AI',
    description: 'Relational schema design, complex SQL window queries, MongoDB, and vector indexing.',
    tracksApplicable: ['Full Stack Development', 'AI & Data Science', 'Data Analytics & BI', 'Cloud & DevOps'],
  },
  {
    id: 'ai-llms',
    name: 'Applied AI, ML & LLM RAG Systems',
    category: 'Data & AI',
    description: 'Machine learning models, prompt engineering, RAG pipelines, and AI-assisted development.',
    tracksApplicable: ['AI & Data Science', 'Full Stack Development', 'Data Analytics & BI'],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud, Docker & CI/CD Automation',
    category: 'Infrastructure',
    description: 'Containerization, AWS cloud deployment, automated testing, and production monitoring.',
    tracksApplicable: ['Cloud & DevOps', 'Full Stack Development', 'AI & Data Science'],
  },
  {
    id: 'bi-analytics',
    name: 'Business Intelligence & KPI Storytelling',
    category: 'Data & AI',
    description: 'Power BI, Tableau, executive dashboards, and data-driven decision modeling.',
    tracksApplicable: ['Data Analytics & BI', 'AI & Data Science', 'Digital Marketing & Business'],
  },
  {
    id: 'communication',
    name: 'Agile Collaboration & Technical Communication',
    category: 'Product & Career',
    description: 'Sprint standups, Git pull request documentation, and stakeholder demo presentations.',
    tracksApplicable: ['AI & Data Science', 'Full Stack Development', 'Data Analytics & BI', 'Cloud & DevOps', 'UI/UX & Product Design', 'Digital Marketing & Business'],
  },
  {
    id: 'interview-skills',
    name: 'Portfolio Pitching & Interview Execution',
    category: 'Product & Career',
    description: 'System design walkthroughs, live coding confidence, ATS resume positioning, and HR readiness.',
    tracksApplicable: ['AI & Data Science', 'Full Stack Development', 'Data Analytics & BI', 'Cloud & DevOps', 'UI/UX & Product Design', 'Digital Marketing & Business'],
  },
];

export interface InfiniEventItem {
  id: string;
  name: string;
  category: 'Technical' | 'Non-Technical / Creative';
  tagline: string;
  description: string;
}

export const INFINI_AI_EVENTS: InfiniEventItem[] = [
  {
    id: 'paperpulse',
    name: 'PaperPulse',
    category: 'Technical',
    tagline: 'AI & Emerging Tech Idea Presentation',
    description: 'Pitch original research, AI architectures, and scalable technology solutions to an expert jury.',
  },
  {
    id: 'techrush',
    name: 'TechRush',
    category: 'Technical',
    tagline: 'High-Speed Technical & AI Quiz',
    description: 'Test your command of computer science, AI breakthroughs, logic, and software engineering.',
  },
  {
    id: 'bughunt',
    name: 'Bug Hunt',
    category: 'Technical',
    tagline: 'Competitive Code Debugging Arena',
    description: 'Identify, patch, and optimize broken codebases under time-pressured sprint conditions.',
  },
  {
    id: 'sitesprint',
    name: 'SiteSprint',
    category: 'Technical',
    tagline: 'Rapid Web & UI Building Challenge',
    description: 'Design and build a responsive, high-converting web interface from a live problem prompt.',
  },
  {
    id: 'graphix',
    name: 'Graphix',
    category: 'Non-Technical / Creative',
    tagline: 'Digital Poster & Brand Visual Design',
    description: 'Create striking visual communication and brand campaigns blending creativity with AI tools.',
  },
  {
    id: 'vibecut',
    name: 'VibeCut',
    category: 'Non-Technical / Creative',
    tagline: 'Short-Form Video & Storytelling Creation',
    description: 'Produce engaging, high-energy video edits and tech narratives for the digital generation.',
  },
];

export type FAQCategory =
  | 'ALL'
  | 'GENERAL'
  | 'PROGRAMS'
  | 'INTERNSHIP'
  | 'PLACEMENT'
  | 'PAY AFTER PLACEMENT'
  | 'ELIGIBILITY';

export const FAQ_CATEGORIES: FAQCategory[] = [
  'ALL',
  'GENERAL',
  'PROGRAMS',
  'INTERNSHIP',
  'PLACEMENT',
  'PAY AFTER PLACEMENT',
  'ELIGIBILITY',
];

export interface CategorizedFAQItem {
  id: string;
  category: Exclude<FAQCategory, 'ALL'>;
  question: string;
  answer: string;
}

export const CATEGORIZED_FAQ_DATA: CategorizedFAQItem[] = [
  {
    id: 'faq-gen-1',
    category: 'GENERAL',
    question: 'What makes Karka AI & Tech Academy different from traditional coaching institutes?',
    answer:
      'Karka operates as an AI-first career launchpad rather than a lecture-only institute. Every learner follows our core journey (LEARN → BUILD → INTERN → GET PLACED → GROW) supported by the Spike AI learning platform, real project portfolios, integrated internships, 1:1 practitioner mentorship, and lifetime placement support.',
  },
  {
    id: 'faq-gen-2',
    category: 'GENERAL',
    question: 'Where is Karka AI & Tech Academy located, and are hybrid options available?',
    answer:
      'Our headquarters is located at Ground Floor, SRV Towers, Muthamizh St, Near Girias, Veppamoodu, Nagercoil, Tamil Nadu 629001. We offer both immersive in-person studio cohorts at our Nagercoil campus and mentor-guided hybrid/online sessions.',
  },
  {
    id: 'faq-prog-1',
    category: 'PROGRAMS',
    question: 'What career programs and courses are available at Karka?',
    answer:
      'We offer career programs across AI & Data Science (6 Months), MERN Fullstack Development (6 Months), React + Java Full Stack (6 Months), React + Python Full Stack (6 Months), Data Analytics with AI (5 Months), Data Engineering (6 Months), Cloud & DevOps (6 Months), UI/UX Design (4 Months), Digital Marketing (4 Months), QA Automation Testing (4 Months), Mobile App Development (5 Months), Graphic Design (3 Months), and Business/HR/Finance tracks.',
  },
  {
    id: 'faq-prog-2',
    category: 'PROGRAMS',
    question: 'How is AI integrated into non-AI tracks like Full Stack, UI/UX, or Marketing?',
    answer:
      'Through our AI-First Curriculum, developers learn to use AI coding copilots and integrate LLM APIs into web apps; analysts use AI for automated data insights; designers utilize AI ideation workflows; and marketers master AI content and campaign optimization.',
  },
  {
    id: 'faq-int-1',
    category: 'INTERNSHIP',
    question: 'How does the internship experience at Karka work?',
    answer:
      'Instead of leaving you to hunt for an internship alone, Karka integrates a structured project-based internship directly into your program. You work in team sprints on real client or production-grade internal systems, undergo mentor code reviews, deploy live applications, and earn an official Internship Certificate.',
  },
  {
    id: 'faq-int-2',
    category: 'INTERNSHIP',
    question: 'Can college students join solely for 3-to-6 month internships?',
    answer:
      'Yes! We offer specialized internship tracks for college students—including Full Stack Developer Internships, Data Science Foundations, and UI/UX Design Internships—designed to give you real project experience before you graduate.',
  },
  {
    id: 'faq-place-1',
    category: 'PLACEMENT',
    question: 'What is included in Karka’s 100% Lifetime Placement Support?',
    answer:
      'Our placement ecosystem includes ATS-friendly technical resume writing, LinkedIn and GitHub profile optimization, 1:1 technical and HR mock interviews, curated job referrals, interview scheduling with hiring partners, and continued alumni career support.',
  },
  {
    id: 'faq-pap-1',
    category: 'PAY AFTER PLACEMENT',
    question: 'How does the "Learn Now, Pay After You Get Hired" model work?',
    answer:
      'In eligible career tracks, students can enroll, complete their technical training, build portfolio projects, finish their internship, and receive full placement support before paying the course fees after securing a job—governed by transparent program terms explained clearly during admission counseling.',
  },
  {
    id: 'faq-elig-1',
    category: 'ELIGIBILITY',
    question: 'Do I need prior coding experience to enroll?',
    answer:
      'No prior advanced coding experience is required for our beginner-friendly career tracks. We start from core logic and fundamentals, or help you choose tracks like Data Analytics, UI/UX Design, QA Testing, Digital Marketing, or Business Analysis if you prefer a low-code/non-coding path.',
  },
  {
    id: 'faq-elig-2',
    category: 'ELIGIBILITY',
    question: 'Who is eligible for Pay After Placement?',
    answer:
      'Final-year college students, recent graduates, and dedicated career switchers applying to eligible 5–6 month career tracks can check their eligibility using our interactive Eligibility Checker or by booking a free call with a Karka Career Mentor.',
  },
];

export interface PayAfterPlacementStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  detail: string;
}

export const PAY_AFTER_PLACEMENT_STEPS: PayAfterPlacementStep[] = [
  {
    stepNumber: '01',
    title: 'Enroll',
    subtitle: 'Track & Eligibility Onboarding',
    detail:
      'Complete your baseline counseling and enroll in an eligible Karka career track.',
  },
  {
    stepNumber: '02',
    title: 'Learn',
    subtitle: 'AI-First Technical Mastery',
    detail:
      'Master core programming, data, and AI workflows through daily mentor sessions and Spike AI.',
  },
  {
    stepNumber: '03',
    title: 'Build',
    subtitle: 'Production Project Portfolio',
    detail:
      'Engineer full-lifecycle applications and deploy them to your GitHub and cloud portfolio.',
  },
  {
    stepNumber: '04',
    title: 'Intern',
    subtitle: 'Real Project Sprint Experience',
    detail:
      'Collaborate in team sprints with code reviews, issue tracking, and live project delivery.',
  },
  {
    stepNumber: '05',
    title: 'Get Job Ready',
    subtitle: 'Resume, LinkedIn & Mock Rounds',
    detail:
      'Polish your technical resume and complete 1-on-1 technical and HR mock interviews.',
  },
  {
    stepNumber: '06',
    title: 'Get Placed',
    subtitle: 'Curated Referrals & Job Offer',
    detail:
      'Attend placement drives and curated interviews supported by Karka’s placement cell.',
  },
  {
    stepNumber: '07',
    title: 'Pay According to Program Terms',
    subtitle: 'Post-Placement Fee Structure',
    detail:
      'Pay your course fees only after getting hired, strictly following the transparent program terms.',
  },
];

export interface TestimonialItem {
  id: string;
  namePlaceholder: string;
  careerTrack: string;
  roleCompanyPlaceholder: string;
  quotePlaceholder: string;
  focusHighlight: string;
  image: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    namePlaceholder: '[Verified Karka Learner Placeholder — AI & Data Science]',
    careerTrack: 'AI & Data Science Career Program',
    roleCompanyPlaceholder: 'AI / Data Science Role · [Hiring Partner Placeholder]',
    quotePlaceholder:
      '“Learning with Spike AI and building real RAG and Machine Learning projects with 1:1 mentor reviews gave me the confidence to demonstrate working code during my technical interviews.”',
    focusHighlight: 'AI-First Curriculum & Live Portfolio Proof',
    image: IMAGES.heroStudio,
  },
  {
    id: 'testimonial-2',
    namePlaceholder: '[Verified Karka Learner Placeholder — MERN Fullstack]',
    careerTrack: 'MERN Fullstack Development',
    roleCompanyPlaceholder: 'Full Stack Web Developer · [Hiring Partner Placeholder]',
    quotePlaceholder:
      '“The integrated internship at Karka felt like working inside a real software startup—daily standups, Git pull requests, and deploying full-stack apps before graduation.”',
    focusHighlight: 'Integrated Team Internship Experience',
    image: IMAGES.codingCohort,
  },
  {
    id: 'testimonial-3',
    namePlaceholder: '[Verified Karka Learner Placeholder — Data Analytics]',
    careerTrack: 'Data Analytics with AI',
    roleCompanyPlaceholder: 'Business Intelligence Analyst · [Hiring Partner Placeholder]',
    quotePlaceholder:
      '“Coming from a non-coding background, Karka’s step-by-step mentorship in SQL, Python, and Power BI alongside mock interviews helped me transition smoothly into analytics.”',
    focusHighlight: 'Non-CS to Tech Career Transition',
    image: IMAGES.placementSuccess,
  },
];

export interface LifeAtKarkaPost {
  id: string;
  category: string;
  title: string;
  caption: string;
  image: string;
}

export const LIFE_AT_KARKA_DATA: LifeAtKarkaPost[] = [
  {
    id: 'life-1',
    category: 'Karka Infini AI',
    title: 'Inter-College Tech & AI Competition',
    caption:
      'College teams competing across PaperPulse, TechRush, Bug Hunt, SiteSprint, Graphix, and VibeCut for the ₹1,00,000 prize pool.',
    image: IMAGES.karkaTeamSquad,
  },
  {
    id: 'life-2',
    category: 'Coding & AI Studio',
    title: 'Daily Full-Stack & AI Sprint Labs',
    caption:
      'Collaborative pair programming, system design whiteboarding, and Spike AI practice at our Nagercoil campus.',
    image: IMAGES.pythonAiEngineer,
  },
  {
    id: 'life-3',
    category: '1:1 Mentorship',
    title: 'Practitioner Code & Architecture Reviews',
    caption:
      'Senior engineers guiding students through real-world internship deliverables and mock interview preparation.',
    image: IMAGES.campusCounselorHq,
  },
];

