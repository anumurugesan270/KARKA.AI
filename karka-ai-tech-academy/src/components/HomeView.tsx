import React, { useState } from 'react';
import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Wallet,
  Briefcase,
  Users,
  Award,
  Compass,
  Zap,
  Layers,
  GraduationCap,
} from 'lucide-react';
import {
  PageRoute,
  IMAGES,
  STATS_DATA,
  ECOSYSTEM_JOURNEY_STEPS,
  KARKA_ADVANTAGE_DATA,
  KarkaAdvantageItem,
  KARKA_PROGRAMS_DATA,
  BRAND_CONFIG,
  LIFE_AT_KARKA_DATA,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';
import { Modal } from './Modal';
import { KarkaOfficialLogo } from './KarkaBrandAssets';

interface HomeViewProps {
  onNavigate: (page: PageRoute, selectedProgramId?: string) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

const ADVANTAGE_ICONS: Record<
  KarkaAdvantageItem['iconName'],
  React.ComponentType<{ className?: string }>
> = {
  Wallet,
  Sparkles,
  Briefcase,
  Users,
  Award,
  CheckCircle2,
};

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenMentorModal,
}) => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const currentJourney = ECOSYSTEM_JOURNEY_STEPS[activeJourneyStep];

  const [selectedAdvantage, setSelectedAdvantage] =
    useState<KarkaAdvantageItem | null>(null);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION — Styled directly after Screenshot 1 (Cosmic Purple-Indigo + Neon Yellow Subhead + Official 3D Karka Mascot) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0418] via-[#1B083B] to-[#0E0524] pt-10 pb-20 sm:pt-16 sm:pb-24 border-b border-purple-900/60">
        {/* Futuristic Holographic Grid & Glow Backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a855f718_1px,transparent_1px),linear-gradient(to_bottom,#38bdf818_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-10 w-[28rem] h-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: High-Impact TechRush-Inspired Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-fuchsia-400">
                <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>KARKA AI &amp; TECH ACADEMY · NEXT-GEN LAUNCHPAD</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight uppercase italic leading-[1.03]">
                BUILD SKILLS.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300">
                  BUILD PROJECTS.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-wide text-[#D4FF00]">
                BUILD YOUR CAREER. LEARN → INTERN → GET PLACED!
              </p>

              <p className="text-base sm:text-lg text-purple-100/90 max-w-2xl leading-relaxed italic">
                Think Fast. Build Real. Prove Your Tech Skills! Master AI, Full
                Stack, Data Science, Cloud &amp; UI/UX through 3D interactive
                labs, real client internships, and Pay After Placement support.
              </p>

              {/* 4 Outlined Feature Stat Boxes (Exact Screenshot 1 Style) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-purple-300 block">
                      Career Programs
                    </span>
                    <span className="text-xs font-bold text-white truncate block">
                      18+ AI Tracks
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-purple-300 block">
                      Experience
                    </span>
                    <span className="text-xs font-bold text-white truncate block">
                      Live Internships
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-purple-300 block">
                      Fee Model
                    </span>
                    <span className="text-xs font-bold text-white truncate block">
                      Pay After Hired
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-purple-300 block">
                      Placement Cell
                    </span>
                    <span className="text-xs font-bold text-white truncate block">
                      100% Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Dual Pill CTAs Matching Screenshot 1 */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-fuchsia-600/30 transition-all duration-150 whitespace-nowrap cursor-pointer"
                >
                  <span>Explore Career Paths</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenMentorModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#13072E]/90 hover:bg-purple-900/60 text-white border border-purple-500/50 font-bold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>Talk to a Career Mentor</span>
                </button>
              </div>
            </div>

            {/* Right Column: Official Karka 3D Mascot (Screenshot 3 in Screenshot 1 Hero Style) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border-2 border-purple-500/50 bg-gradient-to-b from-[#1F0B47] to-[#0D0420] p-3 shadow-2xl shadow-purple-900/50 overflow-hidden">
                <div className="aspect-square w-full rounded-2xl overflow-hidden relative">
                  <ResilientImage
                    src={IMAGES.heroStudio}
                    alt="Official Karka 3D AI Mascot in purple hoodie with glowing cyan eyes and AI emblem"
                    loading="eager"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0418] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#150734]/90 backdrop-blur-md border border-purple-500/40 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#D4FF00] block">
                        OFFICIAL KARKA AI MASCOT
                      </span>
                      <span className="text-sm font-bold text-white">
                        Powered by Spike AI &amp; Karka Infini AI
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('platforms')}
                      className="px-3.5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-xs font-bold whitespace-nowrap cursor-pointer"
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE DIAGONAL WAVE INTERNSHIP SPOTLIGHT — Styled directly after Screenshot 2 (White & Deep Plum Purple Diagonal Split + 3D Character Trio) */}
      <section className="relative bg-white text-slate-900 overflow-hidden border-b border-purple-100">
        {/* Deep Plum Purple Diagonal Wave Shape on the Right (Matching Screenshot 2) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] bg-gradient-to-br from-[#5B0E55] via-[#4A0B46] to-[#2E0530] rounded-bl-[14rem]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content: Exact Screenshot 2 Typography & Purple Icon Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <KarkaOfficialLogo variant="light-bg" size="sm" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-[0.12em] uppercase text-[#6B1D68]">
                I N T E R N S H I P
              </h2>

              <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-xl">
                Stop worrying about &ldquo;0 experience&rdquo; on your resume. At
                Karka, every student works on{' '}
                <strong className="text-[#5B0E55] font-extrabold">
                  real-time internship projects
                </strong>{' '}
                guided by industry mentors.
              </p>

              <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-xl">
                Gain the kind of{' '}
                <strong className="text-[#5B0E55] font-extrabold">
                  hands-on experience
                </strong>{' '}
                that employers crave — and build a{' '}
                <strong className="text-[#5B0E55] font-extrabold">
                  powerhouse portfolio
                </strong>{' '}
                before you even finish.
              </p>

              {/* 4 Purple Rounded Square Icons With Dotted Connectors (Screenshot 2 Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shadow-md shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="border-l-2 border-dotted border-purple-400 pl-3">
                    <span className="text-xs sm:text-sm text-slate-600 block">
                      Work on
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#5B0E55]">
                      real client projects
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shadow-md shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="border-l-2 border-dotted border-purple-400 pl-3">
                    <span className="text-xs sm:text-sm text-slate-600 block">
                      Build your
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#5B0E55]">
                      project portfolio
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shadow-md shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="border-l-2 border-dotted border-purple-400 pl-3">
                    <span className="text-xs sm:text-sm text-slate-600 block">
                      Learn
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#5B0E55]">
                      Collaboration
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shadow-md shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="border-l-2 border-dotted border-purple-400 pl-3">
                    <span className="text-xs sm:text-sm text-slate-600 block">
                      Receive
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#5B0E55]">
                      Internship Certificate
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('internships')}
                  className="px-7 py-3.5 rounded-full bg-[#4A0B46] hover:bg-[#6B1D68] text-white font-bold text-sm inline-flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <span>Explore Internship Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="px-7 py-3.5 rounded-full bg-purple-100 hover:bg-purple-200 text-[#4A0B46] font-bold text-sm transition-colors cursor-pointer"
                >
                  View Student Projects
                </button>
              </div>
            </div>

            {/* Right Column: 3D Cartoon/Pixar Student Trio Holding Laptops (Screenshot 2 Style) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#4A0B46]">
                <div className="aspect-[4/3] w-full relative">
                  <ResilientImage
                    src={IMAGES.internshipTrio}
                    alt="3D Pixar-style animated student developers holding laptops with code tags"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Karka Benchmarks + Career Path Finder CTA */}
      <section className="bg-[#12062C] py-16 border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-[#1B0940] border border-purple-700/50 flex flex-col justify-between"
              >
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#D4FF00] font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </p>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-white">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-2.5 text-xs text-purple-200/80 leading-relaxed">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>

          {/* Career Discovery Banner */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#250B54] via-[#3B0E6E] to-[#1E0845] border border-purple-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D4FF00]">
                <Compass className="w-4 h-4" />
                <span>INTERACTIVE CAREER PATH FINDER QUIZ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Not Sure Which Tech Track Fits You Best?
              </h2>
              <p className="text-sm sm:text-base text-purple-100 max-w-2xl leading-relaxed">
                Take our 60-second interactive Career Path Finder quiz to match
                your background and interests with AI, Full Stack, Data
                Analytics, Cloud, or UI/UX Design.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('career-paths')}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Take Career Path Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onOpenMentorModal()}
                className="w-full py-3 px-6 rounded-full bg-purple-950/90 hover:bg-purple-900 text-purple-100 border border-purple-600 font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Free Career Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured 3D Illustrated Career Programs */}
      <section className="bg-[#FAF5FF] text-slate-900 py-20 sm:py-24 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-bold text-purple-700 mb-2">
                AI-FIRST CAREER TRACKS · 3D CREATIVE LEARNING
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3B0736] tracking-tight">
                Choose Your Karka Career Program
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('programs')}
              className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A0B46] hover:bg-[#6B1D68] text-white text-sm font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Explore All 13+ Programs</span>
              <ArrowRight className="w-4 h-4 text-[#D4FF00]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {KARKA_PROGRAMS_DATA.slice(0, 3).map((prog) => (
              <article
                key={prog.id}
                className="rounded-3xl bg-white border-2 border-purple-200 hover:border-purple-600 shadow-lg overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1"
              >
                <div>
                  <div className="aspect-[4/3] w-full relative border-b border-purple-100">
                    <ResilientImage
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full relative"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B083B]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono font-bold text-white">
                      <span className="text-[#D4FF00]">{prog.category}</span>
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-display font-extrabold text-[#3B0736]">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prog.shortDescription}
                    </p>
                    <p className="text-xs font-semibold text-purple-800 pt-2 border-t border-purple-100">
                      {prog.technologies.slice(0, 5).join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onNavigate('programs', prog.id)}
                    className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore Track
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('enroll', prog.id)}
                    className="py-3 px-5 rounded-full bg-purple-100 hover:bg-purple-200 text-[#4A0B46] text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Enroll
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive 7-Stage Career Ecosystem Map */}
      <section className="bg-[#0B0418] text-white py-20 sm:py-24 border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
              YOUR 7-STAGE PRODUCT JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              DISCOVER → LEARN → BUILD → INTERN → GET PLACED
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
            {ECOSYSTEM_JOURNEY_STEPS.map((item, idx) => {
              const isSelected = idx === activeJourneyStep;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-fuchsia-600 to-purple-700 text-white border-fuchsia-400 shadow-lg'
                      : 'bg-[#160836] text-purple-200 border-purple-800/60 hover:border-purple-500'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-[#D4FF00] mb-1">
                    {item.stepNumber}
                  </span>
                  <p className="text-xs sm:text-sm font-display font-bold truncate">
                    {item.stage}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-[#160836] border border-purple-700/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono font-bold text-[#D4FF00]">
                STAGE {currentJourney.stepNumber} · {currentJourney.stage}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {currentJourney.title}
              </h3>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                {currentJourney.whatHappens}
              </p>
              <div className="p-4 rounded-2xl bg-[#0E0521] border border-purple-800">
                <span className="text-xs font-mono text-purple-300 block mb-1">
                  Stage Deliverable / Output
                </span>
                <span className="text-sm font-bold text-[#D4FF00]">
                  {currentJourney.outputDeliverable}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0E0521] border border-purple-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-300">
                  What Students Receive
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-purple-100">
                  {currentJourney.whatStudentsReceive.map((rec) => (
                    <li key={rec} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E0521] border border-purple-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#D4FF00]">
                  Skills Developed
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-purple-100">
                  {currentJourney.skillsDeveloped.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Karka Advantage Cards + 3D Visuals */}
      <section className="bg-[#12062C] text-white py-20 border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono font-bold text-fuchsia-400 mb-2">
              WHY KARKA AI &amp; TECH ACADEMY
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              6 Pillars of the Karka Career Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KARKA_ADVANTAGE_DATA.map((adv) => {
              const IconComp = ADVANTAGE_ICONS[adv.iconName];
              return (
                <article
                  key={adv.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#1A093D] border border-purple-700/50 hover:border-fuchsia-400 transition-transform duration-150 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-700 text-white flex items-center justify-center shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#D4FF00]">
                        {adv.index} · {adv.highlightMetric}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs font-bold text-cyan-300 mb-3">
                      {adv.shortHeadline}
                    </p>
                    <p className="text-sm text-purple-100/90 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-purple-800/60">
                    <button
                      type="button"
                      onClick={() => setSelectedAdvantage(adv)}
                      className="text-xs sm:text-sm font-bold text-[#D4FF00] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. 3D Stylized Visual Gallery (@karka.ai) */}
      <section className="bg-[#0B0418] text-white py-20 border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-bold text-cyan-400 mb-2">
                CREATIVE AI &amp; TECH COMMUNITY
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Life &amp; Innovation at Karka
              </h2>
            </div>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-xs sm:text-sm font-bold whitespace-nowrap"
            >
              <span>Follow {BRAND_CONFIG.instagramHandle}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFE_AT_KARKA_DATA.map((post) => (
              <div
                key={post.id}
                className="rounded-3xl bg-[#160836] border border-purple-700/50 overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full relative">
                  <ResilientImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0418] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono font-bold text-[#D4FF00]">
                    <span>{post.category}</span>
                    <span>{BRAND_CONFIG.instagramHandle}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-display font-bold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-purple-200/80 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karka Advantage Detail Modal */}
      <Modal
        isOpen={Boolean(selectedAdvantage)}
        onClose={() => setSelectedAdvantage(null)}
        title={selectedAdvantage?.title || ''}
        subtitle={
          selectedAdvantage
            ? `Karka Advantage ${selectedAdvantage.index} · ${selectedAdvantage.highlightMetric}`
            : ''
        }
        maxWidthClass="max-w-xl"
      >
        {selectedAdvantage && (
          <div className="space-y-5">
            <p className="text-base font-bold text-fuchsia-400">
              {selectedAdvantage.shortHeadline}
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {selectedAdvantage.description}
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <h4 className="text-xs font-mono text-slate-400">
                How This Powers Your Career:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {selectedAdvantage.expandedDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedAdvantage(null)}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedAdvantage(null);
                  onOpenMentorModal();
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs sm:text-sm cursor-pointer"
              >
                Talk to a Career Mentor
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
