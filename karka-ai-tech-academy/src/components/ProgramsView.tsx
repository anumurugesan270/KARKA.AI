import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpRight,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';
import {
  KARKA_PROGRAMS_DATA,
  PROGRAM_CATEGORIES,
  ProgramCategory,
  KarkaProgram,
  PageRoute,
  IMAGES,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';
import { Modal } from './Modal';

interface ProgramsViewProps {
  initialSelectedProgramId?: string | null;
  onNavigate: (page: PageRoute, selectedProgramId?: string) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

type SortOption =
  | 'popular'
  | 'beginner'
  | 'ai-focused'
  | 'career-track';

export const ProgramsView: React.FC<ProgramsViewProps> = ({
  initialSelectedProgramId,
  onNavigate,
  onOpenMentorModal,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProgramCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  const [activeProgram, setActiveProgram] = useState<KarkaProgram | null>(
    () => {
      if (initialSelectedProgramId) {
        return (
          KARKA_PROGRAMS_DATA.find((p) => p.id === initialSelectedProgramId) ||
          null
        );
      }
      return null;
    }
  );

  React.useEffect(() => {
    if (initialSelectedProgramId) {
      const found = KARKA_PROGRAMS_DATA.find(
        (p) => p.id === initialSelectedProgramId
      );
      if (found) setActiveProgram(found);
    }
  }, [initialSelectedProgramId]);

  const filteredPrograms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const list = KARKA_PROGRAMS_DATA.filter((prog) => {
      const matchesCat =
        selectedCategory === 'ALL' || prog.category === selectedCategory;
      const matchesQuery =
        !query ||
        prog.title.toLowerCase().includes(query) ||
        prog.shortDescription.toLowerCase().includes(query) ||
        prog.technologies.some((t) => t.toLowerCase().includes(query)) ||
        prog.careerOutcomes.some((o) => o.toLowerCase().includes(query));

      return matchesCat && matchesQuery;
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'popular') return a.popularityRank - b.popularityRank;
      if (sortBy === 'beginner') {
        const aBeg = a.skillLevel === 'Beginner Friendly' ? 0 : 1;
        const bBeg = b.skillLevel === 'Beginner Friendly' ? 0 : 1;
        return aBeg - bBeg || a.popularityRank - b.popularityRank;
      }
      if (sortBy === 'ai-focused') {
        return (
          Number(b.isAiFocused) - Number(a.isAiFocused) ||
          a.popularityRank - b.popularityRank
        );
      }
      if (sortBy === 'career-track') {
        return (
          Number(b.isCareerTrack) - Number(a.isCareerTrack) ||
          a.popularityRank - b.popularityRank
        );
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Header With 3D Stylized Character Banner */}
      <section className="py-12 sm:py-18 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1E0944] to-[#110529]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono font-bold text-[#D4FF00]">
              OFFICIAL KARKA CATALOG · AI-FIRST CURRICULUM + LIVE INTERNSHIP
            </p>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
              Programs &amp; Career Tracks
            </h1>
            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed">
              Explore Karka’s 13+ job-ready career tracks across Full Stack, AI
              &amp; Data Science, Cloud, UI/UX Design, Digital Marketing, and
              Business—featuring 3D interactive labs and Pay After Placement.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenMentorModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to a Career Mentor</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-purple-500/50">
                <ResilientImage
                  src={IMAGES.karkaTeamSquad}
                  alt="Karka 3D Team & AI Mascot"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-cyan-400/50">
                <ResilientImage
                  src={IMAGES.careerDiscoveryCompass}
                  alt="3D Career Discovery Compass"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter, Search & Sort Controls */}
      <section className="py-6 bg-[#13062E]/90 border-b border-purple-800/60 sticky top-18 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-purple-300 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, technologies (React, Python, Power BI, AWS)..."
                aria-label="Search programs"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0B0418] border border-purple-700 text-sm text-white placeholder:text-purple-400 focus:outline-none focus:border-fuchsia-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-purple-200 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4FF00]" />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort programs"
                className="px-4 py-2.5 rounded-full bg-[#0B0418] border border-purple-700 text-xs sm:text-sm text-white focus:outline-none focus:border-fuchsia-400"
              >
                <option value="popular">Most Popular</option>
                <option value="beginner">Beginner Friendly</option>
                <option value="ai-focused">AI Focused</option>
                <option value="career-track">
                  Career Track (Pay After Placement)
                </option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {PROGRAM_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-md'
                      : 'bg-[#0B0418] text-purple-200 border border-purple-800 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="p-12 rounded-3xl bg-[#160836] border border-purple-700/60 text-center space-y-4">
              <p className="text-lg font-display font-bold text-white">
                No matching programs found for &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold text-xs sm:text-sm cursor-pointer"
              >
                Reset Program Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPrograms.map((prog) => (
                <article
                  key={prog.id}
                  className="rounded-3xl bg-[#160836] border border-purple-700/60 hover:border-fuchsia-400 transition-transform duration-150 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  <div>
                    <div className="aspect-[4/3] w-full relative border-b border-purple-800/60">
                      <ResilientImage
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full relative"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#160836] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-xs font-mono font-bold">
                        <span className="text-[#D4FF00]">{prog.category}</span>
                        <span className="text-cyan-300">{prog.duration}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-purple-300 mb-1">
                          <span>{prog.skillLevel}</span>
                          <span>·</span>
                          <span>{prog.mode}</span>
                        </div>
                        <h2 className="text-xl font-display font-bold text-white tracking-tight">
                          {prog.title}
                        </h2>
                        <p className="mt-2 text-sm text-purple-100/85 leading-relaxed">
                          {prog.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-800/60">
                        <p className="text-xs font-mono text-purple-300 mb-1">
                          Technologies Covered
                        </p>
                        <p className="text-xs text-white leading-relaxed">
                          {prog.technologies.join(' · ')}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-800/60">
                        <p className="text-xs font-mono text-purple-300 mb-1">
                          Career Outcomes
                        </p>
                        <p className="text-xs font-bold text-[#D4FF00]">
                          {prog.careerOutcomes.join(' / ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveProgram(prog)}
                      className="flex-1 py-3 px-4 rounded-full bg-purple-950 hover:bg-purple-900 text-white border border-purple-600 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('enroll', prog.id)}
                      className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Experience Modal */}
      <Modal
        isOpen={Boolean(activeProgram)}
        onClose={() => setActiveProgram(null)}
        title={activeProgram?.title || ''}
        subtitle={
          activeProgram
            ? `${activeProgram.category} · ${activeProgram.duration} · ${activeProgram.mode}`
            : ''
        }
        maxWidthClass="max-w-4xl"
      >
        {activeProgram && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-fuchsia-400 mb-1">
                  Course Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeProgram.overview}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono text-cyan-400 mb-2">
                  Technologies &amp; Tools
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeProgram.technologies.join('  ·  ')}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-display font-bold text-white mb-3">
                  Curriculum Breakdown
                </h4>
                <div className="space-y-2.5">
                  {activeProgram.curriculum.map((mod) => (
                    <div
                      key={mod.phase}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800"
                    >
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {mod.phase}
                      </p>
                      <p className="text-xs text-slate-300 mt-1">
                        {mod.topics}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-fuchsia-400">
                    Portfolio Projects
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {activeProgram.projects.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-[#D4FF00]">
                    Career Outcomes
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {activeProgram.careerOutcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00] shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-2 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-800">
                <ResilientImage
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white font-semibold">
                    {activeProgram.duration}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">Level:</span>
                  <span className="text-white font-semibold">
                    {activeProgram.skillLevel}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">Placement Support:</span>
                  <span className="text-[#D4FF00] font-semibold">
                    100% Lifetime
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const id = activeProgram.id;
                    setActiveProgram(null);
                    onNavigate('enroll', id);
                  }}
                  className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
                >
                  Apply / Enroll Now
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const title = activeProgram.title;
                    setActiveProgram(null);
                    onOpenMentorModal(title);
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-900 text-white border border-slate-700 font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
                >
                  Talk to a Career Mentor
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
