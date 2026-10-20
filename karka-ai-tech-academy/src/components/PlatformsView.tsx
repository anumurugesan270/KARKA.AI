import React, { useState } from 'react';
import {
  Sparkles,
  Trophy,
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  Code2,
  Award,
  Calendar,
  Zap,
  Users,
  MapPin,
  ListChecks,
  Smartphone,
} from 'lucide-react';
import {
  INFINI_AI_EVENTS,
  BRAND_CONFIG,
  IMAGES,
  PageRoute,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';
import { Modal } from './Modal';

interface PlatformsViewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

export const PlatformsView: React.FC<PlatformsViewProps> = ({
  onNavigate,
  onOpenMentorModal,
}) => {
  const [selectedDashboardTrack, setSelectedDashboardTrack] = useState<
    'AI & Data Science' | 'MERN Fullstack' | 'Data Analytics'
  >('AI & Data Science');

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEventName, setSelectedEventName] = useState('TechRush');
  const [eventRegSubmitted, setEventRegSubmitted] = useState(false);
  const [eventForm, setEventForm] = useState({
    name: '',
    college: '',
    phone: '',
    email: '',
  });

  const handleEventRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.name.trim() || !eventForm.phone.trim()) return;
    setEventRegSubmitted(true);
  };

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* 1. EXACT SCREENSHOT 1 REPLICA HERO: KARKA INFINI AI — TECHRUSH TECHNICAL QUIZ + OFFICIAL 3D MASCOT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080214] via-[#1B083B] to-[#0D0422] py-12 sm:py-20 border-b border-purple-900/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a855f715_1px,transparent_1px),linear-gradient(to_bottom,#38bdf815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-1/4 w-96 h-96 rounded-full bg-fuchsia-600/20 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Exact Screenshot 1 Layout */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-mono font-extrabold tracking-widest uppercase text-[#D4FF00]">
                  KARKA AI &amp; TECH ACADEMY · OFFICIAL ARENA
                </p>
                <p className="text-[10px] font-mono tracking-widest uppercase text-purple-300">
                  A CONTEST BY KARKA AI &amp; TECH ACADEMY
                </p>
              </div>

              <p className="text-sm sm:text-base font-display font-bold italic tracking-widest uppercase text-fuchsia-400 pt-2">
                KARKA INFINI AI
              </p>

              <div className="flex items-center gap-2">
                <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white uppercase italic tracking-tight leading-none">
                  TECHRUSH
                </h1>
                <Zap className="w-10 h-10 sm:w-14 sm:h-14 text-cyan-400 fill-cyan-400 shrink-0" />
              </div>

              <p className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-wide text-[#D4FF00]">
                TECHNICAL QUIZ &amp; 6 INTER-COLLEGE ARENAS
              </p>

              <p className="text-base sm:text-xl text-white italic">
                Think Fast. Know More. Prove Your Tech Skills! Compete for the
                ₹1,00,000 Karka Infini AI Prize Pool.
              </p>

              {/* 4 Outlined Contest Spec Boxes (Exact Screenshot 1) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-300 block">
                      Team Size
                    </span>
                    <span className="text-xs font-bold text-white">
                      2 - 4 Members
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-300 block">
                      Mode
                    </span>
                    <span className="text-xs font-bold text-white">
                      Offline (At Your College)
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <ListChecks className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-300 block">
                      Format
                    </span>
                    <span className="text-xs font-bold text-white">
                      3 Rounds (10 Qs Each)
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-700/60 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-300 block">
                      Rules
                    </span>
                    <span className="text-xs font-bold text-white">
                      Phones Not Allowed
                    </span>
                  </div>
                </div>
              </div>

              {/* Dual Pill Buttons Matching Screenshot 1 */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEventName('TechRush');
                    setEventRegSubmitted(false);
                    setEventModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-fuchsia-600/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Register for TechRush →</span>
                </button>

                <a
                  href="#infini-contests"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#12062C]/90 hover:bg-purple-900/50 text-white border border-purple-500/50 font-bold text-sm sm:text-base transition-colors whitespace-nowrap"
                >
                  <span>Explore Other Contests</span>
                </a>
              </div>
            </div>

            {/* Right Column: Official Karka 3D Mascot (Screenshot 3 in Screenshot 1 Frame) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-purple-500/60 bg-[#140730] p-3 shadow-2xl">
                <div className="aspect-square w-full rounded-2xl overflow-hidden relative">
                  <ResilientImage
                    src={IMAGES.heroStudio}
                    alt="Official Karka 3D AI Mascot for TechRush and Infini AI"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. All 6 Karka Infini AI Contests Grid */}
      <section
        id="infini-contests"
        className="py-16 sm:py-20 bg-[#FAF5FF] text-slate-900 border-b border-purple-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono font-bold text-purple-700 mb-2">
                KARKA INFINI AI ARENAS · ₹1,00,000 PRIZE POOL
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3B0736] tracking-tight">
                Compete. Build. Get Recognized.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                setEventRegSubmitted(false);
                setEventModalOpen(true);
              }}
              className="self-start lg:self-auto px-6 py-3 rounded-full bg-[#4A0B46] hover:bg-[#6B1D68] text-white font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
            >
              Register College Team →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFINI_AI_EVENTS.map((ev) => (
              <article
                key={ev.id}
                className="p-6 rounded-3xl bg-white border-2 border-purple-200 hover:border-purple-600 shadow-md flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-purple-700 mb-2">
                    <span>{ev.category}</span>
                    <span>Campus → District Finale</span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#3B0736]">
                    {ev.name}
                  </h3>
                  <p className="text-xs font-bold text-fuchsia-700 mt-0.5 mb-2">
                    {ev.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    <span>2–4 Members</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEventName(ev.name);
                      setEventRegSubmitted(false);
                      setEventModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Register for {ev.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Spike AI Guided Learning Platform + 3D Illustrations */}
      <section className="py-16 sm:py-20 bg-[#12062C] border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4FF00]">
                <Sparkles className="w-4 h-4" />
                <span>AI-GUIDED LEARNING PLATFORM</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Spike AI by Karka Academy
              </h2>
              <p className="text-base text-purple-100/90 leading-relaxed">
                Spike AI combines interactive coding labs, AI-assisted hints,
                progress analytics, and 1:1 mentor reviews into a unified
                learning portal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  'AI-Guided Learning Pathways',
                  'Hands-On Coding & Query Practice',
                  'Real-Time Skill Progress Tracking',
                  'Mentor-Backed Code Reviews',
                ].map((feat) => (
                  <div
                    key={feat}
                    className="p-3.5 rounded-2xl bg-[#1B0940] border border-purple-700/60 flex items-center gap-2 text-white font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={BRAND_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <span>TRY SPIKE AI</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onOpenMentorModal('Spike AI Guided Track')}
                  className="px-6 py-3.5 rounded-full bg-purple-950 text-white border border-purple-600 font-bold text-xs sm:text-sm cursor-pointer"
                >
                  Request Demo Access
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-cyan-400/50">
                <ResilientImage
                  src={IMAGES.codingCohort}
                  alt="Spike AI 3D Full-Stack Lab"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-fuchsia-400/50">
                <ResilientImage
                  src={IMAGES.mentorSession}
                  alt="Spike AI 3D Data & AI Scientist"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Product Preview: "Your Karka Progress" Student Dashboard */}
      <section className="py-16 sm:py-20 bg-[#0B0418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                PRODUCT PREVIEW · COMING TO THE KARKA LEARNING EXPERIENCE
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Your Karka Progress Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-[#160836] p-1.5 rounded-full border border-purple-700/60">
              {(
                [
                  'AI & Data Science',
                  'MERN Fullstack',
                  'Data Analytics',
                ] as const
              ).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedDashboardTrack(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedDashboardTrack === t
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
                      : 'text-purple-200 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#160836] border border-purple-700/60 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-purple-800/60">
              <div>
                <span className="text-xs font-mono text-purple-300 block">
                  Active Learning Track Preview
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  {selectedDashboardTrack} Career Pathway
                </h3>
              </div>
              <span className="text-xs font-mono text-[#D4FF00]">
                ● Visual Product Preview — Coming to the Karka Learning
                Experience
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300">
                  <span>Learning Progress</span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-2xl font-display font-bold text-white font-mono tabular-nums">
                  Module 03 / 04
                </p>
                <div className="w-full h-2 rounded-full bg-purple-950 overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300">
                  <span>Projects Completed</span>
                  <Code2 className="w-4 h-4 text-fuchsia-400" />
                </div>
                <p className="text-2xl font-display font-bold text-white font-mono tabular-nums">
                  3 Deployed
                </p>
                <p className="text-xs text-[#D4FF00]">
                  ✓ GitHub &amp; Live Links Verified
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300">
                  <span>Internship Status</span>
                  <Trophy className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-2xl font-display font-bold text-white">
                  Sprint Active
                </p>
                <p className="text-xs text-purple-300">
                  Weekly Mentor Code Reviews
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0418] border border-purple-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-purple-300">
                  <span>Placement Readiness</span>
                  <Award className="w-4 h-4 text-[#D4FF00]" />
                </div>
                <p className="text-2xl font-display font-bold text-[#D4FF00]">
                  Mock Rounds Ready
                </p>
                <p className="text-xs text-purple-300">
                  ATS Resume + LinkedIn Cleared
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-purple-200">
              <span>
                Want to experience Karka’s AI-assisted learning workflow?
              </span>
              <button
                type="button"
                onClick={() => onNavigate('enroll')}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold cursor-pointer"
              >
                Start Smart Enrollment →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Karka Infini AI Event Registration Modal */}
      <Modal
        isOpen={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
        title={`Register for Karka Infini AI — ${selectedEventName}`}
        subtitle="Inter-College Competition · ₹1,00,000 Prize Pool"
        maxWidthClass="max-w-lg"
      >
        {eventRegSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4FF00] mx-auto" />
            <h4 className="text-xl font-display font-bold text-white">
              Infini AI Registration Interest Recorded!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our campus coordination team will reach out to{' '}
              <strong className="text-white">{eventForm.name}</strong> with
              upcoming campus round dates and rulebooks for{' '}
              <strong className="text-fuchsia-400">{selectedEventName}</strong>.
            </p>
            <button
              type="button"
              onClick={() => setEventModalOpen(false)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleEventRegister} className="space-y-4">
            <div>
              <label
                htmlFor="inf-event"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Competition Category
              </label>
              <select
                id="inf-event"
                value={selectedEventName}
                onChange={(e) => setSelectedEventName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
              >
                {INFINI_AI_EVENTS.map((ev) => (
                  <option key={ev.id} value={ev.name}>
                    {ev.name} ({ev.tagline})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="inf-name"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Student / Team Lead Name *
              </label>
              <input
                id="inf-name"
                type="text"
                required
                value={eventForm.name}
                onChange={(e) =>
                  setEventForm({ ...eventForm, name: e.target.value })
                }
                placeholder="Enter full name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="inf-college"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                College / Institution Name *
              </label>
              <input
                id="inf-college"
                type="text"
                required
                value={eventForm.college}
                onChange={(e) =>
                  setEventForm({ ...eventForm, college: e.target.value })
                }
                placeholder="Your college name & city"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inf-phone"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Phone / WhatsApp *
                </label>
                <input
                  id="inf-phone"
                  type="tel"
                  required
                  value={eventForm.phone}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, phone: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="inf-email"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Email *
                </label>
                <input
                  id="inf-email"
                  type="email"
                  required
                  value={eventForm.email}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, email: e.target.value })
                  }
                  placeholder="you@college.edu"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEventModalOpen(false)}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-xs sm:text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm cursor-pointer"
              >
                Submit Infini AI Registration
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
