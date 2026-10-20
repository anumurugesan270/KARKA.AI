import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import {
  PageRoute,
  SKILL_GRAPH_DATA,
  ECOSYSTEM_JOURNEY_STEPS,
  IMAGES,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';

interface CareerPathsViewProps {
  onNavigate: (page: PageRoute, selectedProgramId?: string) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

const QUIZ_QUESTIONS = [
  {
    id: 'background',
    question: '1. What is your current background?',
    options: [
      'College Student (Engineering / CS / IT)',
      'College Student / Graduate (Arts, Science, Commerce, Management)',
      'Recent Graduate Looking for First Tech Job',
      'Working Professional / Career Switcher',
    ],
  },
  {
    id: 'interest',
    question: '2. What do you enjoy the most?',
    options: [
      'AI, Machine Learning & Predictive Intelligence',
      'Coding Websites, Full-Stack Apps & Software Systems',
      'Analyzing Data, SQL & Business Intelligence Dashboards',
      'UI/UX Product Design, Branding & Visual Creativity',
      'Digital Marketing, Growth Campaigns & Business Strategy',
      'Cloud Servers, Linux, DevOps & Automation',
    ],
  },
  {
    id: 'goal',
    question: '3. What type of career outcome do you want?',
    options: [
      'High-Growth Software / AI Engineer Role (Pay After Placement)',
      'Data Scientist / Business Intelligence Analyst Role',
      'Creative Product Designer or Digital Marketing Specialist',
      'College Internship & Real Project Portfolio Before Graduation',
    ],
  },
  {
    id: 'time',
    question: '4. How much time can you dedicate to learning & building?',
    options: [
      'Full-Time Immersive Cohort (5–6 Months)',
      'Fast-Track / Flexible Hybrid Schedule (3–4 Months)',
      'Weekend / College-Aligned Internship Track',
    ],
  },
  {
    id: 'experience',
    question: '5. What is your current coding / technical level?',
    options: [
      'Complete Beginner — Starting From Scratch',
      'Know Basics (HTML/Python/SQL) — Need Real Projects',
      'Intermediate — Ready for Advanced AI/Full-Stack Architecture',
    ],
  },
];

interface RecommendationResult {
  trackTitle: string;
  programId: string;
  skillGraphKey: string;
  whyReasons: string[];
  duration: string;
  image: string;
}

export const CareerPathsView: React.FC<CareerPathsViewProps> = ({
  onNavigate,
  onOpenMentorModal,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({
    background: QUIZ_QUESTIONS[0].options[0],
    interest: QUIZ_QUESTIONS[1].options[0],
    goal: QUIZ_QUESTIONS[2].options[0],
    time: QUIZ_QUESTIONS[3].options[0],
    experience: QUIZ_QUESTIONS[4].options[0],
  });

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedSkillTrack, setSelectedSkillTrack] = useState<string>(
    'AI & Data Science'
  );

  const computeRecommendation = (): RecommendationResult => {
    const interest = answers.interest;
    if (interest.includes('AI, Machine Learning')) {
      return {
        trackTitle: 'AI & Data Science Career Program',
        programId: 'ai-data-science',
        skillGraphKey: 'AI & Data Science',
        duration: '6 Months · Pay After Placement Available',
        image: IMAGES.pythonAiEngineer,
        whyReasons: [
          `Directly matches your interest in ${interest}`,
          `Structured for ${answers.background} at the "${answers.experience}" level`,
          'Strong AI, Python, Machine Learning, and LLM RAG project component',
          'Includes real project-based internship and 100% placement support',
        ],
      };
    }
    if (interest.includes('Coding Websites')) {
      return {
        trackTitle: 'MERN / Java / Python Full Stack Development',
        programId: 'mern-fullstack',
        skillGraphKey: 'Full Stack Development',
        duration: '6 Months · Pay After Placement Available',
        image: IMAGES.javaBackendArchitect,
        whyReasons: [
          'Builds end-to-end frontend, backend, and database engineering mastery',
          `Tailored to ${answers.background} seeking ${answers.goal}`,
          'AI-assisted software engineering workflow with live Git code reviews',
          'Integrated full-stack team internship and lifetime placement support',
        ],
      };
    }
    if (interest.includes('Analyzing Data')) {
      return {
        trackTitle: 'Data Analytics with AI',
        programId: 'data-analytics-ai',
        skillGraphKey: 'Data Analytics & BI',
        duration: '5 Months · Pay After Placement Available',
        image: IMAGES.biDashboardAnalyst,
        whyReasons: [
          'Ideal blend of SQL, Python, Power BI, Tableau, and AI analytics',
          `Accessible for ${answers.background} (${answers.experience})`,
          'Focuses on executive BI dashboards and real business case studies',
          'Full placement readiness and mock interview support',
        ],
      };
    }
    if (interest.includes('UI/UX Product Design')) {
      return {
        trackTitle: 'UI/UX Design & AI Product Design',
        programId: 'ui-ux-design',
        skillGraphKey: 'UI/UX & Product Design',
        duration: '4 Months · Live Design Internship',
        image: IMAGES.animeUiuxCreator,
        whyReasons: [
          'Zero heavy coding required—focuses on Figma, UX research, and product systems',
          'Build a Behance/Dribbble portfolio with 2+ end-to-end UX case studies',
          'Collaborate with developers during the Karka Design Internship',
        ],
      };
    }
    if (interest.includes('Cloud Servers')) {
      return {
        trackTitle: 'Cloud & DevOps Engineering',
        programId: 'cloud-devops-engineering',
        skillGraphKey: 'Cloud & DevOps',
        duration: '6 Months · Pay After Placement Available',
        image: IMAGES.cloudDevopsEngineer,
        whyReasons: [
          'High-demand infrastructure track covering AWS, Docker, Kubernetes & CI/CD',
          'Hands-on Linux server labs and automated deployment pipelines',
          'Includes cloud architecture internship and placement support',
        ],
      };
    }
    return {
      trackTitle: 'AI-Powered Digital Marketing & Business Analytics',
      programId: 'digital-marketing-ai',
      skillGraphKey: 'Digital Marketing & Business',
      duration: '4 Months · Live Campaign Internship',
      image: IMAGES.digitalMarketingGrowth,
      whyReasons: [
        'Combines performance ads, SEO, GA4 analytics, and AI marketing tools',
        'Run real growth campaigns and build a quantifiable marketing portfolio',
        'Dedicated career preparation and agency/corporate placement assistance',
      ],
    };
  };

  const recommendation = computeRecommendation();

  const SKILL_TRACK_OPTIONS = [
    'AI & Data Science',
    'Full Stack Development',
    'Data Analytics & BI',
    'Cloud & DevOps',
    'UI/UX & Product Design',
    'Digital Marketing & Business',
  ];

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Page Hero Banner With 3D Anime & Mascot Visuals */}
      <section className="py-12 sm:py-18 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1C0940] to-[#0E0524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono font-bold text-[#D4FF00]">
              CAREER DISCOVERY WORKSPACE · LEARN → BUILD → INTERN → GET PLACED
            </p>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
              Find Your AI &amp; Tech Career Path
            </h1>
            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed">
              Answer 5 quick questions below and let our Karka AI Mascot match
              your background with the ideal career program, projects, and
              internship pathway.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-purple-500/60 shadow-2xl">
              <ResilientImage
                src={IMAGES.careerDiscoveryCompass}
                alt="3D Career Discovery Compass & Karka Mentor"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Interactive Career Discovery Quiz */}
      <section className="py-16 sm:py-20 border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Quiz Controls */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#160836] border border-purple-700/60 space-y-6">
              <div className="flex items-center justify-between border-b border-purple-800 pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#D4FF00]" />
                  <h2 className="text-xl font-display font-bold text-white">
                    Not Sure What To Learn?
                  </h2>
                </div>
                <span className="text-xs font-mono text-cyan-300">
                  5 Quick Steps
                </span>
              </div>

              <div className="space-y-5">
                {QUIZ_QUESTIONS.map((q) => (
                  <div key={q.id} className="space-y-2">
                    <label
                      htmlFor={`quiz-${q.id}`}
                      className="block text-sm font-bold text-purple-100"
                    >
                      {q.question}
                    </label>
                    <select
                      id={`quiz-${q.id}`}
                      value={answers[q.id]}
                      onChange={(e) => {
                        setAnswers({ ...answers, [q.id]: e.target.value });
                        setQuizCompleted(true);
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm focus:outline-none focus:border-fuchsia-400"
                    >
                      {q.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setQuizCompleted(true);
                    setSelectedSkillTrack(recommendation.skillGraphKey);
                  }}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-bold text-sm inline-flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-[#D4FF00]" />
                  <span>Generate My Recommended Career Path</span>
                </button>

                {quizCompleted && (
                  <button
                    type="button"
                    onClick={() => setQuizCompleted(false)}
                    className="px-4 py-2.5 rounded-full bg-purple-950 text-purple-200 border border-purple-700 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Live Recommendation Output Card With 3D Illustration */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#1A093D] border-2 border-fuchsia-500/60 space-y-6 shadow-2xl">
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-purple-700">
                <ResilientImage
                  src={recommendation.image}
                  alt={recommendation.trackTitle}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>

              <div>
                <p className="text-xs font-mono font-bold text-[#D4FF00] mb-1">
                  YOUR RECOMMENDED KARKA CAREER PATH
                </p>
                <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                  {recommendation.trackTitle}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyan-300">
                  {recommendation.duration}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800 space-y-3">
                <h4 className="text-xs font-mono text-purple-300">
                  Why This Matches Your Profile:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-purple-100">
                  {recommendation.whyReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('programs', recommendation.programId)
                  }
                  className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>View Career Path &amp; Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenMentorModal(recommendation.trackTitle)}
                  className="w-full py-3 px-5 rounded-full bg-[#0B0418] hover:bg-purple-950 text-white border border-purple-600 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>Book Free Career Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Skill Graph */}
      <section className="py-16 sm:py-20 bg-[#FAF5FF] text-slate-900 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono font-bold text-purple-700 mb-2">
              INTERACTIVE COMPETENCY MATRIX
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3B0736] tracking-tight">
              Interactive Karka Skill Graph
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select any career track below to highlight the core technical, AI,
              and career competencies you will master.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-10">
            {SKILL_TRACK_OPTIONS.map((trackName) => {
              const isSelected = selectedSkillTrack === trackName;
              return (
                <button
                  key={trackName}
                  type="button"
                  onClick={() => setSelectedSkillTrack(trackName)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#4A0B46] text-[#D4FF00] shadow-md'
                      : 'bg-white text-slate-700 border border-purple-200 hover:bg-purple-50'
                  }`}
                >
                  {trackName}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_GRAPH_DATA.map((node) => {
              const isHighlighted =
                node.tracksApplicable.includes(selectedSkillTrack);
              return (
                <div
                  key={node.id}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                    isHighlighted
                      ? 'bg-[#1A093D] text-white border-fuchsia-500 shadow-lg'
                      : 'bg-white text-slate-500 border-purple-100 opacity-65'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono mb-3">
                      <span
                        className={
                          isHighlighted ? 'text-cyan-300' : 'text-slate-400'
                        }
                      >
                        {node.category}
                      </span>
                      <span
                        className={
                          isHighlighted
                            ? 'text-[#D4FF00] font-bold'
                            : 'text-slate-400'
                        }
                      >
                        {isHighlighted ? '● Core Skill' : '○ Optional'}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-display font-bold mb-2 ${
                        isHighlighted ? 'text-white' : 'text-slate-800'
                      }`}
                    >
                      {node.name}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isHighlighted ? 'text-purple-100' : 'text-slate-500'
                      }`}
                    >
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Full 7-Stage Ecosystem Reference */}
      <section className="py-16 sm:py-20 bg-[#0B0418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                STEP-BY-STEP PROGRESSION
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Complete 7-Stage Karka Career Blueprint
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('enroll')}
              className="self-start sm:self-auto px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
            >
              Start Smart Enrollment →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOSYSTEM_JOURNEY_STEPS.map((step) => (
              <div
                key={step.id}
                className="p-5 rounded-2xl bg-[#160836] border border-purple-700/50 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    {step.stepNumber} · {step.stage}
                  </span>
                  <h3 className="mt-1.5 text-base font-display font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-purple-100/85 leading-relaxed">
                    {step.whatHappens}
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-800/60 text-xs text-[#D4FF00] font-bold">
                  Output: {step.outputDeliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
