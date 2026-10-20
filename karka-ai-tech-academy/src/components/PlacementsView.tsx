import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  PhoneCall,
} from 'lucide-react';
import {
  PLACEMENT_STORIES_DATA,
  PlacementStoryItem,
  MENTORS_DATA,
  MentorDomain,
  TESTIMONIALS_DATA,
  IMAGES,
  PageRoute,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';
import { Modal } from './Modal';

interface PlacementsViewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

const PLACEMENT_SYSTEM_STAGES = [
  {
    step: '01',
    title: 'Placement Preparation & Competency Audit',
    desc: 'Diagnostic evaluation of your coding, analytical, and domain fundamentals across your chosen Karka track.',
  },
  {
    step: '02',
    title: 'ATS Resume Building & Portfolio Structuring',
    desc: 'Crafting recruiter-tested technical resumes that highlight your deployed Karka projects and internship sprints.',
  },
  {
    step: '03',
    title: 'LinkedIn & GitHub Profile Optimization',
    desc: 'Structuring your GitHub repositories, README documentation, and LinkedIn headline to attract inbound tech recruiters.',
  },
  {
    step: '04',
    title: '1-on-1 Mock Technical & Coding Interviews',
    desc: 'Live simulated technical rounds covering data structures, system architecture, SQL queries, and project defense.',
  },
  {
    step: '05',
    title: 'HR & Behavioral Communication Readiness',
    desc: 'Polishing your career story, salary negotiation clarity, and workplace communication confidence.',
  },
  {
    step: '06',
    title: 'Curated Job Referrals & Lifetime Placement Support',
    desc: 'Direct interview scheduling with hiring companies and continued post-placement career support.',
  },
];

const MENTOR_DOMAINS: MentorDomain[] = [
  'ALL',
  'AI',
  'Development',
  'Data',
  'Design',
  'Career',
];

export const PlacementsView: React.FC<PlacementsViewProps> = ({
  onNavigate,
  onOpenMentorModal,
}) => {
  const [experienceFilter, setExperienceFilter] = useState<string>('ALL');
  const [selectedStory, setSelectedStory] =
    useState<PlacementStoryItem | null>(null);
  const [selectedMentorDomain, setSelectedMentorDomain] =
    useState<MentorDomain>('ALL');

  // Video/Story Testimonial Carousel with Play/Pause
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const filteredStories = PLACEMENT_STORIES_DATA.filter(
    (s) =>
      experienceFilter === 'ALL' || s.experienceLevel === experienceFilter
  );

  const filteredMentors = MENTORS_DATA.filter(
    (m) =>
      selectedMentorDomain === 'ALL' || m.domain === selectedMentorDomain
  );

  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Page Hero with 3D Placement Celebration Character */}
      <section className="py-12 sm:py-18 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1E0842] to-[#0E0524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-mono font-bold text-[#D4FF00] pt-1">
                100% LIFETIME PLACEMENT SUPPORT · 3D CAREER SUCCESS ECOSYSTEM
              </p>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
                FROM LEARNING TO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                  LANDING THE JOB
                </span>
              </h1>
              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed">
                Explore Karka’s 6-stage placement preparation engine, 3D student
                career transformation stories, and the industry mentors who
                guide your journey.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('pay-after-placement')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore Pay After Placement →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-2xl bg-[#160836] p-2.5">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                  <ResilientImage
                    src={IMAGES.placementSuccess}
                    alt="3D Cartoon Graduate Celebrating Tech Job Offer"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-[#0E0521]/90 backdrop-blur-md border border-purple-500/40 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#D4FF00]">
                      CAREER LAUNCHPAD
                    </span>
                    <span className="text-white font-semibold">
                      100% Lifetime Placement Cell
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Placement Dashboard-Style Readiness Pipeline */}
      <section className="py-16 sm:py-20 bg-[#12062C] border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
              STRUCTURED PLACEMENT ENGINE
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase italic">
              6-Stage Placement Readiness System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEMENT_SYSTEM_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-[#1A093D] border border-purple-700/50 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D4FF00] font-bold">
                    PHASE {stage.step}
                  </span>
                  <span className="text-cyan-300 font-bold">● Included</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-100/85 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Placement Wall: Where Karka Learners Are Working */}
      <section className="py-16 sm:py-20 bg-[#FAF5FF] text-slate-900 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono font-bold text-purple-700 mb-2">
                STUDENT SUCCESS WALL · CLICK ANY CARD FOR FULL CAREER STORY
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#3B0736] uppercase italic tracking-tight">
                Where Karka Learners Are Working
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Editable placement story slots structured to showcase verified
                before-and-after student transitions with 3D illustrations.
              </p>
            </div>

            {/* Experience Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {['ALL', 'Fresher', 'Final Year Student', 'Career Switcher'].map(
                (level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setExperienceFilter(level)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      experienceFilter === level
                        ? 'bg-[#5B0E55] text-[#D4FF00]'
                        : 'bg-white text-purple-900 border border-purple-200 hover:bg-purple-50'
                    }`}
                  >
                    {level}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-purple-200 hover:border-purple-600 transition-all flex flex-col justify-between space-y-5 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-300 shrink-0">
                      <ResilientImage
                        src={story.image}
                        alt={story.studentNamePlaceholder}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono font-bold text-purple-700">
                        {story.experienceLevel} · {story.batchPlaceholder}
                      </span>
                      <h3 className="text-lg font-display font-extrabold text-[#3B0736] truncate">
                        {story.studentNamePlaceholder}
                      </h3>
                      <p className="text-xs text-slate-600 truncate">
                        {story.course}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-purple-600 block">Placed Role</span>
                      <span className="font-bold text-slate-900">
                        {story.rolePlaceholder}
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-600 block">Company</span>
                      <span className="font-bold text-[#5B0E55]">
                        {story.companyPlaceholder}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {story.shortStory}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-700 font-bold">
                    6-Step Verified Journey
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B0E55] hover:text-purple-700 cursor-pointer"
                  >
                    <span>Read Full Career Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Video / Story Testimonial Carousel */}
      <section className="py-16 sm:py-20 bg-[#0B0418] border-b border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                LEARNER VOICE &amp; STORY CAROUSEL
              </p>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase italic">
                Student Experience Highlights
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={
                  isPlaying ? 'Pause story carousel' : 'Play story carousel'
                }
                className="px-3.5 py-2 rounded-full bg-purple-950 border border-purple-700 text-xs font-mono text-purple-200 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>Auto-Play</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx(
                    (prev) =>
                      (prev - 1 + TESTIMONIALS_DATA.length) %
                      TESTIMONIALS_DATA.length
                  )
                }
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-purple-950 border border-purple-700 flex items-center justify-center text-purple-200 hover:text-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonialIdx(
                    (prev) => (prev + 1) % TESTIMONIALS_DATA.length
                  )
                }
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-purple-950 border border-purple-700 flex items-center justify-center text-purple-200 hover:text-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-[#160836] border-2 border-purple-700/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto relative">
              <ResilientImage
                src={currentTestimonial.image}
                alt={currentTestimonial.namePlaceholder}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full min-h-[260px]"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#D4FF00]">
                  {currentTestimonial.focusHighlight}
                </span>
                <blockquote className="text-lg sm:text-xl font-display font-medium text-white leading-relaxed">
                  {currentTestimonial.quotePlaceholder}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-purple-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-display font-bold text-white">
                    {currentTestimonial.namePlaceholder}
                  </div>
                  <div className="text-xs text-cyan-300 mt-0.5 font-semibold">
                    {currentTestimonial.roleCompanyPlaceholder} ·{' '}
                    {currentTestimonial.careerTrack}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(idx)}
                      aria-label={`Select testimonial ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeTestimonialIdx
                          ? 'w-7 bg-[#D4FF00]'
                          : 'w-2 bg-purple-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mentors & Faculty Showcase */}
      <section className="py-16 sm:py-20 bg-[#12062C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                PRACTITIONER MENTORSHIP · 1:1 CODE &amp; CAREER REVIEWS
              </p>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white uppercase italic">
                Mentors &amp; Technical Faculty
              </h2>
            </div>

            {/* Domain Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {MENTOR_DOMAINS.map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setSelectedMentorDomain(dom)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    selectedMentorDomain === dom
                      ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white'
                      : 'bg-[#1A093D] text-purple-200 border border-purple-700/60 hover:text-white'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="rounded-3xl bg-[#1A093D] border border-purple-700/60 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-purple-800/60">
                    <ResilientImage
                      src={mentor.image}
                      alt={mentor.namePlaceholder}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-mono font-bold text-[#D4FF00]">
                      {mentor.domain} Domain · {mentor.role}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white">
                      {mentor.namePlaceholder}
                    </h3>
                    <p className="text-xs text-purple-200/85 leading-relaxed">
                      {mentor.experienceSummary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-purple-800/50">
                  <span className="text-xs font-mono text-purple-300 block mb-1">
                    Core Focus Areas:
                  </span>
                  <p className="text-xs text-cyan-300 font-mono">
                    {mentor.expertise.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Career Story Modal */}
      <Modal
        isOpen={Boolean(selectedStory)}
        onClose={() => setSelectedStory(null)}
        title={selectedStory?.studentNamePlaceholder || 'Student Career Story'}
        subtitle={
          selectedStory
            ? `${selectedStory.rolePlaceholder} · ${selectedStory.companyPlaceholder}`
            : undefined
        }
        maxWidthClass="max-w-2xl"
      >
        {selectedStory && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Karka Track:</strong>{' '}
              {selectedStory.course} ({selectedStory.batchPlaceholder})
            </div>

            <div className="space-y-3">
              {[
                {
                  label: '1. Before Joining Karka',
                  text: selectedStory.journey.beforeKarka,
                },
                {
                  label: '2. AI-First Learning Experience',
                  text: selectedStory.journey.learning,
                },
                {
                  label: '3. Portfolio Projects Built',
                  text: selectedStory.journey.projects,
                },
                {
                  label: '4. Internship Sprint Experience',
                  text: selectedStory.journey.internship,
                },
                {
                  label: '5. Mock Interviews & Resume Readiness',
                  text: selectedStory.journey.interviewPrep,
                },
                {
                  label: '6. Final Placement Outcome',
                  text: selectedStory.journey.placement,
                },
              ].map((step) => (
                <div
                  key={step.label}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90"
                >
                  <div className="text-xs font-mono font-semibold text-sky-400 mb-1">
                    {step.label}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  const courseName = selectedStory.course;
                  setSelectedStory(null);
                  onOpenMentorModal(courseName);
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Start a Similar Career Journey</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
