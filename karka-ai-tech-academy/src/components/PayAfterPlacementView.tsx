import React, { useState } from 'react';
import { CheckCircle2, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  PAY_AFTER_PLACEMENT_STEPS,
  KARKA_PROGRAMS_DATA,
  IMAGES,
  PageRoute,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';

interface PayAfterPlacementViewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

const COST_COMPARISON_ROWS = [
  {
    feature: 'Upfront Financial Barrier',
    traditional:
      'High upfront course tuition required before placement outcomes are known.',
    karka:
      'Eligible career tracks offer the "Learn Now, Pay After You Get Hired" option governed by transparent program terms.',
  },
  {
    feature: 'Practical Real-World Projects',
    traditional: 'Mostly textbook or isolated classroom exercises.',
    karka:
      'Multi-project production portfolio hosted on GitHub and deployed live.',
  },
  {
    feature: 'Integrated Internship',
    traditional: 'Students must search for external internships independently.',
    karka:
      'Project-based team internship built directly into your career track.',
  },
  {
    feature: '1:1 Industry Mentorship',
    traditional: 'One-to-many lectures with minimal personal code review.',
    karka:
      'Direct code reviews, architecture guidance, and Spike AI tracking.',
  },
  {
    feature: 'Career & Interview Preparation',
    traditional: 'Generic resume tips at the end of the syllabus.',
    karka:
      'ATS resume engineering, LinkedIn polish, and iterative 1-on-1 mock interviews.',
  },
  {
    feature: 'Placement Support',
    traditional: 'Limited or time-bound placement assistance.',
    karka: '100% Lifetime Placement Support with curated job referrals.',
  },
  {
    feature: 'Alignment of Incentives',
    traditional:
      'Institute collects full fee regardless of student career transition.',
    karka:
      'Karka invests in your career readiness and succeeds when you get placed.',
  },
];

export const PayAfterPlacementView: React.FC<PayAfterPlacementViewProps> = ({
  onNavigate,
  onOpenMentorModal,
}) => {
  const [checkerState, setCheckerState] = useState({
    education: 'Final-Year Engineering / CS / Science Student',
    careerGoal: 'Secure a Full-Time Software / AI / Data Tech Role',
    preferredTrack: KARKA_PROGRAMS_DATA[0].title,
    experience: 'Fresher / Entry-Level Learner',
    location: 'Nagercoil / Tamil Nadu (Offline or Hybrid)',
  });

  const [eligibilityChecked, setEligibilityChecked] = useState(false);

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Page Hero with 3D Karka Mascot & Team Squad */}
      <section className="py-12 sm:py-18 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1E0842] to-[#0E0524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-mono font-bold text-[#D4FF00] pt-1">
                STUDENT-ALIGNED CAREER INVESTMENT · ZERO UPFRONT PRESSURE*
              </p>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
                LEARN NOW.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                  PAY AFTER YOU GET HIRED.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed">
                Focus 100% on mastering AI and engineering skills, building your
                portfolio, and completing your internship. Pay your course fees
                after placement in accordance with our transparent program
                terms.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-2xl bg-[#160836] p-2.5">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                  <ResilientImage
                    src={IMAGES.karkaTeamSquad}
                    alt="Official Karka 3D AI Mascot and Anime Tech Squad"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-[#0E0521]/90 backdrop-blur-md border border-purple-500/40 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#D4FF00]">
                      PAY AFTER PLACEMENT
                    </span>
                    <span className="text-white font-semibold">
                      Transparent Student Terms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. 7-Step Interactive Explainer */}
      <section className="py-16 sm:py-20 bg-[#12062C] border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
              HOW PAY AFTER PLACEMENT WORKS
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase italic">
              7-Step Journey From Enrollment to Placement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {PAY_AFTER_PLACEMENT_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-2xl bg-[#1A093D] border border-purple-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#D4FF00] font-bold mb-3">
                    <span>STEP {step.stepNumber}</span>
                    {idx < PAY_AFTER_PLACEMENT_STEPS.length - 1 && (
                      <span className="text-purple-400">→</span>
                    )}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300 mb-2">
                    {step.subtitle}
                  </p>
                </div>
                <p className="text-xs text-purple-200/80 leading-relaxed pt-3 border-t border-purple-800/60">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Eligibility Checker: "Is Pay After Placement Right For Me?" */}
      <section className="py-16 sm:py-20 bg-[#0B0418] border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#160836] border border-purple-700/60 space-y-6">
              <div>
                <p className="text-xs font-mono font-bold text-[#D4FF00] mb-1">
                  INTERACTIVE ELIGIBILITY CHECKER
                </p>
                <h2 className="text-2xl font-display font-extrabold text-white uppercase italic">
                  Is Pay After Placement Right For Me?
                </h2>
                <p className="text-xs sm:text-sm text-purple-200/85 mt-1">
                  Select your profile details below to check your pathway
                  alignment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="elig-edu"
                    className="block text-xs font-bold text-purple-200 mb-1.5"
                  >
                    1. Current Education
                  </label>
                  <select
                    id="elig-edu"
                    value={checkerState.education}
                    onChange={(e) =>
                      setCheckerState({
                        ...checkerState,
                        education: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700/70 text-white text-xs sm:text-sm"
                  >
                    <option>
                      Final-Year Engineering / CS / Science Student
                    </option>
                    <option>
                      Recent Graduate (B.E / B.Tech / B.Sc / BCA / MCA)
                    </option>
                    <option>Arts / Commerce / Management Graduate</option>
                    <option>
                      Working Professional Seeking Career Transition
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="elig-goal"
                    className="block text-xs font-bold text-purple-200 mb-1.5"
                  >
                    2. Primary Career Goal
                  </label>
                  <select
                    id="elig-goal"
                    value={checkerState.careerGoal}
                    onChange={(e) =>
                      setCheckerState({
                        ...checkerState,
                        careerGoal: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700/70 text-white text-xs sm:text-sm"
                  >
                    <option>
                      Secure a Full-Time Software / AI / Data Tech Role
                    </option>
                    <option>
                      Build Portfolio + Complete Industry Internship
                    </option>
                    <option>Switch From Non-IT Role to Tech Career</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="elig-track"
                    className="block text-xs font-bold text-purple-200 mb-1.5"
                  >
                    3. Preferred Career Track
                  </label>
                  <select
                    id="elig-track"
                    value={checkerState.preferredTrack}
                    onChange={(e) =>
                      setCheckerState({
                        ...checkerState,
                        preferredTrack: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700/70 text-white text-xs sm:text-sm"
                  >
                    {KARKA_PROGRAMS_DATA.filter(
                      (p) => p.payAfterPlacementAvailable
                    ).map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="elig-exp"
                    className="block text-xs font-bold text-purple-200 mb-1.5"
                  >
                    4. Current Experience Level
                  </label>
                  <select
                    id="elig-exp"
                    value={checkerState.experience}
                    onChange={(e) =>
                      setCheckerState({
                        ...checkerState,
                        experience: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700/70 text-white text-xs sm:text-sm"
                  >
                    <option>Fresher / Entry-Level Learner</option>
                    <option>Self-Taught / Basic Coding Knowledge</option>
                    <option>1–2 Years Work Experience</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="elig-loc"
                  className="block text-xs font-bold text-purple-200 mb-1.5"
                >
                  5. Preferred Learning Location / Mode
                </label>
                <input
                  id="elig-loc"
                  type="text"
                  value={checkerState.location}
                  onChange={(e) =>
                    setCheckerState({
                      ...checkerState,
                      location: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700/70 text-white text-xs sm:text-sm"
                />
              </div>

              <button
                type="button"
                onClick={() => setEligibilityChecked(true)}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold text-sm transition-all cursor-pointer"
              >
                Check My Pay After Placement Alignment
              </button>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#160836] border-2 border-purple-500/50 space-y-5">
              <div className="flex items-center gap-2 text-[#D4FF00] text-xs font-mono font-bold">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>
                  {eligibilityChecked
                    ? 'PROFILE ALIGNED FOR COUNSELING REVIEW'
                    : 'TRANSPARENT ELIGIBILITY EVALUATION'}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                {checkerState.preferredTrack}
              </h3>

              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                Based on your profile as a{' '}
                <strong className="text-white">{checkerState.education}</strong>{' '}
                aiming to{' '}
                <strong className="text-[#D4FF00]">
                  {checkerState.careerGoal}
                </strong>
                , you can schedule a 1-on-1 eligibility session with our Career
                Mentors to review the official Pay After Placement agreement and
                onboarding steps.
              </p>

              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800/70 space-y-2 text-xs text-purple-100">
                <p className="font-bold text-white">
                  What We Cover on the Eligibility Call:
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      Baseline aptitude &amp; track readiness walkthrough
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      Complete breakdown of official program terms (zero hidden
                      fees)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      Upcoming batch schedule at Nagercoil HQ or Hybrid
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenMentorModal(checkerState.preferredTrack)}
                  className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to a Career Mentor</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('enroll')}
                  className="w-full py-3 px-5 rounded-full bg-[#0B0418] hover:bg-purple-950 text-white border border-purple-600 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Proceed to 5-Step Smart Enrollment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transparent Cost & Value Comparison: Why Pay After Placement? */}
      <section className="py-16 sm:py-20 bg-[#FAF5FF] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono font-bold text-purple-700 mb-2">
              TRANSPARENT MODEL COMPARISON
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3B0736] uppercase italic tracking-tight">
              Why Pay After Placement?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A factual comparison between traditional upfront-fee courses and
              the Karka Career Launchpad model.
            </p>
          </div>

          <div className="rounded-3xl bg-white border-2 border-purple-200 overflow-hidden shadow-sm">
            <div className="hidden md:grid md:grid-cols-12 bg-[#2A0738] text-white px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider">
              <div className="col-span-3">Comparison Dimension</div>
              <div className="col-span-4 text-purple-300">
                Traditional Learning
              </div>
              <div className="col-span-5 text-[#D4FF00]">
                Karka Pay After Placement Model
              </div>
            </div>

            <div className="divide-y divide-purple-100">
              {COST_COMPARISON_ROWS.map((row) => (
                <div
                  key={row.feature}
                  className="p-6 md:px-6 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                >
                  <div className="md:col-span-3 font-display font-bold text-[#3B0736] text-sm sm:text-base">
                    {row.feature}
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="md:hidden font-mono text-xs text-slate-400 block mb-1">
                      Traditional Learning:
                    </span>
                    {row.traditional}
                  </div>
                  <div className="md:col-span-5 text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                    <span className="md:hidden font-mono text-xs text-purple-700 block mb-1">
                      Karka Model:
                    </span>
                    {row.karka}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
