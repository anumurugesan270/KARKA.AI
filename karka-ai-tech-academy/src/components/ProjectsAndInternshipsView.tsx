import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Award,
  Layers,
  Briefcase,
  Users,
} from 'lucide-react';
import {
  PROJECT_SHOWCASE_DATA,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectCaseStudy,
  PageRoute,
  IMAGES,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';
import { Modal } from './Modal';

interface ProjectsAndInternshipsViewProps {
  mode: 'projects' | 'internships';
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

const INTERNSHIP_JOURNEY_STAGES = [
  {
    step: '01',
    title: 'REAL CLIENT PROJECT',
    subtitle: 'Problem Scoping & Architecture',
    desc: 'Receive a structured product specification or client problem statement. Break down user stories, database schemas, and API contracts before writing code.',
    deliverable: 'Approved System Design & Sprint Backlog',
  },
  {
    step: '02',
    title: 'TEAM COLLABORATION',
    subtitle: 'Agile Sprints & Git Workflows',
    desc: 'Collaborate in squad sprints using Git feature branches, pull requests, daily standups, and issue tracking boards—mirroring real tech teams.',
    deliverable: 'Multi-Contributor GitHub Repository',
  },
  {
    step: '03',
    title: 'MENTOR REVIEW',
    subtitle: 'Code Quality & Security Audits',
    desc: 'Senior Karka engineers review your pull requests line by line—checking performance, error handling, clean code standards, and UI responsiveness.',
    deliverable: 'Production-Approved Pull Requests',
  },
  {
    step: '04',
    title: 'DEPLOYMENT / DELIVERY',
    subtitle: 'Cloud Hosting & CI/CD',
    desc: 'Containerize and deploy your application to live cloud environments so recruiters and stakeholders can interact with your work.',
    deliverable: 'Live Hosted Application URL',
  },
  {
    step: '05',
    title: 'PORTFOLIO',
    subtitle: 'Case Study & Demo Readiness',
    desc: 'Document your problem-solution architecture, technical trade-offs, and live demonstration walkthrough for technical interviews.',
    deliverable: 'Employer-Ready Case Study Portfolio',
  },
  {
    step: '06',
    title: 'INTERNSHIP CERTIFICATE',
    subtitle: 'Verified Project Experience',
    desc: 'Graduate with an official Karka Internship Certificate validating your practical engineering contribution and project delivery.',
    deliverable: 'Official Verified Internship Credential',
  },
];

export const ProjectsAndInternshipsView: React.FC<
  ProjectsAndInternshipsViewProps
> = ({ mode, onNavigate, onOpenMentorModal }) => {
  const [selectedProjectCat, setSelectedProjectCat] =
    useState<ProjectCategory>('ALL');
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<ProjectCaseStudy | null>(null);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);
  const [activeInternshipStep, setActiveInternshipStep] = useState(0);

  const filteredProjects = PROJECT_SHOWCASE_DATA.filter(
    (p) => selectedProjectCat === 'ALL' || p.category === selectedProjectCat
  );

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Mode Switcher Sub-Header */}
      <section className="py-12 sm:py-16 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1E0842] to-[#0E0524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                {mode === 'projects'
                  ? 'STUDENT PORTFOLIO REPOSITORIES · 3D CASE STUDIES'
                  : 'EXPERIENCE BEFORE YOU GRADUATE · LIVE SPRINT ENVIRONMENT'}
              </p>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
                {mode === 'projects'
                  ? 'Built by Karka Learners'
                  : 'Experience Before You Graduate.'}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-purple-100/90 leading-relaxed">
                {mode === 'projects'
                  ? 'Inspect real-world AI, Full-Stack, Data Analytics, UI/UX, and Cloud Automation case studies engineered during Karka cohorts and internships.'
                  : 'Every Karka career program includes a structured, mentor-reviewed internship journey—turning classroom knowledge into verifiable work experience.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#160836] p-1.5 rounded-full border border-purple-700/60 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  mode === 'projects'
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
                    : 'text-purple-200 hover:text-white'
                }`}
              >
                Project Showcase
              </button>
              <button
                type="button"
                onClick={() => onNavigate('internships')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  mode === 'internships'
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
                    : 'text-purple-200 hover:text-white'
                }`}
              >
                Internship Experience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIPS PAGE CONTENT ONLY WHEN mode === 'internships' */}
      {mode === 'internships' && (
        <>
          <section className="relative bg-white text-slate-900 overflow-hidden border-b border-purple-200">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-0 right-0 bottom-0 w-[48%] bg-gradient-to-br from-[#5B0E55] via-[#4A0B46] to-[#2E0530] rounded-bl-[14rem]"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-purple-100 text-[#5B0E55] text-xs font-mono font-extrabold tracking-wider uppercase">
                    KARKA LIVE INTERNSHIP ECOSYSTEM
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-[0.12em] uppercase text-[#6B1D68]">
                    I N T E R N S H I P
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                    Stop worrying about &ldquo;0 experience&rdquo; on your resume. At
                    Karka, every student works on{' '}
                    <strong className="text-[#5B0E55] font-extrabold">
                      real-time internship projects
                    </strong>{' '}
                    guided by industry mentors.
                  </p>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 max-w-xl">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="border-l-2 border-dotted border-purple-400 pl-3">
                        <span className="text-xs text-slate-600 block">Work on</span>
                        <span className="text-sm font-extrabold text-[#5B0E55]">
                          real client projects
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div className="border-l-2 border-dotted border-purple-400 pl-3">
                        <span className="text-xs text-slate-600 block">
                          Build your
                        </span>
                        <span className="text-sm font-extrabold text-[#5B0E55]">
                          project portfolio
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="border-l-2 border-dotted border-purple-400 pl-3">
                        <span className="text-xs text-slate-600 block">Learn</span>
                        <span className="text-sm font-extrabold text-[#5B0E55]">
                          Collaboration
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-700 to-[#4A0B46] text-white flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="border-l-2 border-dotted border-purple-400 pl-3">
                        <span className="text-xs text-slate-600 block">Receive</span>
                        <span className="text-sm font-extrabold text-[#5B0E55]">
                          Internship Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setIsInternshipModalOpen(true)}
                      className="px-6 py-3 rounded-full bg-[#4A0B46] hover:bg-[#6B1D68] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>See How Internship Works</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenMentorModal('Internship Track')}
                      className="px-6 py-3 rounded-full bg-purple-100 hover:bg-purple-200 text-[#4A0B46] font-bold text-xs sm:text-sm cursor-pointer"
                    >
                      Apply for Internship
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('projects')}
                      className="px-6 py-3 rounded-full border-2 border-[#4A0B46] text-[#4A0B46] hover:bg-purple-50 font-bold text-xs sm:text-sm cursor-pointer"
                    >
                      Explore Project Showcase →
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#4A0B46]">
                    <div className="aspect-[4/3] w-full relative">
                      <ResilientImage
                        src={IMAGES.internshipTrio}
                        alt="3D Cartoon Student Trio Holding Laptops"
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6-Stage Interactive Internship Timeline */}
          <section className="py-16 sm:py-20 bg-[#12062C] border-b border-purple-900/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="max-w-2xl">
                <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                  6-STAGE AGILE INTERNSHIP WORKFLOW
                </p>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                  Interactive Internship Journey
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {INTERNSHIP_JOURNEY_STAGES.map((item, idx) => {
                  const isActive = idx === activeInternshipStep;
                  return (
                    <article
                      key={item.step}
                      onClick={() => setActiveInternshipStep(idx)}
                      className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#1D0A46] border-fuchsia-400 shadow-xl'
                          : 'bg-[#150734] border-purple-800/60 hover:border-purple-500'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono mb-4">
                          <span className="text-[#D4FF00] font-bold">
                            STAGE {item.step}
                          </span>
                          {idx < INTERNSHIP_JOURNEY_STAGES.length - 1 && (
                            <span className="text-purple-400">↓ NEXT</span>
                          )}
                        </div>
                        <h3 className="text-lg font-display font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-cyan-300 mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-5 border-t border-purple-800/60 text-xs text-[#D4FF00] font-bold">
                        Deliverable: {item.deliverable}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* PROJECTS PAGE CONTENT ONLY WHEN mode === 'projects' */}
      {mode === 'projects' && (
        <section className="py-16 sm:py-20 bg-[#0B0418]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-mono font-bold text-[#D4FF00] mb-2">
                  PROJECT CASE STUDIES · PROBLEM → SOLUTION → TECH STACK → OUTCOME
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  Real-World Project Showcase
                </h2>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {PROJECT_CATEGORIES.map((cat) => {
                  const isSelected = selectedProjectCat === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedProjectCat(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
                          : 'bg-[#160836] text-purple-200 border border-purple-800 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-3xl bg-[#160836] border border-purple-700/60 hover:border-fuchsia-400 transition-transform duration-150 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  <div>
                    <div className="aspect-[4/3] w-full relative border-b border-purple-800/60">
                      <ResilientImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full relative"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#160836] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono font-bold text-white">
                        <span className="text-[#D4FF00]">{project.category}</span>
                        <span className="text-cyan-300">{project.projectType}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs text-purple-300 truncate mb-1">
                          {project.studentTeamPlaceholder}
                        </p>
                        <h3 className="text-xl font-display font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-purple-100/85 leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-800/60">
                        <p className="text-xs font-mono text-purple-300 mb-1">
                          Tech Stack
                        </p>
                        <p className="text-xs font-semibold text-white">
                          {project.technologies.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(project)}
                      className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>View Project Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Modal */}
      <Modal
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
        title={selectedCaseStudy?.title || ''}
        subtitle={
          selectedCaseStudy
            ? `${selectedCaseStudy.category} · ${selectedCaseStudy.projectType}`
            : ''
        }
        maxWidthClass="max-w-3xl"
      >
        {selectedCaseStudy && (
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-slate-800">
              <ResilientImage
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <h4 className="text-xs font-mono text-[#D4FF00]">
                  01. PROBLEM STATEMENT
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <h4 className="text-xs font-mono text-cyan-400">
                  02. ENGINEERED SOLUTION
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-mono text-fuchsia-400 mb-1.5">
                03. TECH STACK
              </h4>
              <p className="text-xs sm:text-sm text-white font-medium">
                {selectedCaseStudy.technologies.join('  ·  ')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-cyan-400">
                  04. WHAT WAS BUILT
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedCaseStudy.whatWasBuilt.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-[#D4FF00]">
                  05. LEARNING OUTCOME
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedCaseStudy.learningOutcome.map((out) => (
                    <li key={out} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                {selectedCaseStudy.studentTeamPlaceholder}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-xs sm:text-sm cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onNavigate('enroll');
                  }}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
                >
                  Build Projects Like This →
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* See How Internship Works Detailed Modal */}
      <Modal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
        title="How the Karka Internship Ecosystem Works"
        subtitle="REAL CLIENT PROJECT → TEAM COLLABORATION → MENTOR REVIEW → CERTIFICATE"
        maxWidthClass="max-w-3xl"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <GitBranch className="w-5 h-5 text-cyan-400" />
              <h4 className="text-sm font-bold text-white">
                Git &amp; Agile Sprints
              </h4>
              <p className="text-xs text-slate-300">
                Work with sprint backlogs, branch protection rules, and peer pull
                requests.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <Layers className="w-5 h-5 text-fuchsia-400" />
              <h4 className="text-sm font-bold text-white">
                Production Deployment
              </h4>
              <p className="text-xs text-slate-300">
                Deploy working web apps, APIs, and dashboards to cloud servers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <Award className="w-5 h-5 text-[#D4FF00]" />
              <h4 className="text-sm font-bold text-white">
                Verified Certificate
              </h4>
              <p className="text-xs text-slate-300">
                Receive an official Karka Internship Certificate backed by live
                project links.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {INTERNSHIP_JOURNEY_STAGES.map((st) => (
              <div
                key={st.step}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="text-xs font-mono text-[#D4FF00] mr-2">
                    {st.step}.
                  </span>
                  <span className="text-sm font-bold text-white">
                    {st.title}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">{st.desc}</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 shrink-0">
                  {st.deliverable}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsInternshipModalOpen(false)}
              className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-xs sm:text-sm cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                setIsInternshipModalOpen(false);
                onOpenMentorModal('Internship & Career Track');
              }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply for Internship Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
