import React, { useState } from 'react';
import {
  ArrowUp,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  PhoneCall,
  Link2,
  Check,
  Download,
} from 'lucide-react';
import {
  BRAND_CONFIG,
  PageRoute,
  KARKA_PROGRAMS_DATA,
} from '../data/karkaData';
import { Modal } from './Modal';
import { KarkaOfficialLogo } from './KarkaBrandAssets';

interface FooterAndFloatingActionsProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, selectedProgramId?: string) => void;
  isMentorModalOpen: boolean;
  mentorPrefillTrack: string;
  onCloseMentorModal: () => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

export const FooterAndFloatingActions: React.FC<
  FooterAndFloatingActionsProps
> = ({
  currentPage,
  onNavigate,
  isMentorModalOpen,
  mentorPrefillTrack,
  onCloseMentorModal,
  onOpenMentorModal,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(
    null
  );
  const [urlCopied, setUrlCopied] = useState(false);

  const officialShareableUrl =
    currentPage === 'home'
      ? `${window.location.origin}/#karka`
      : `${window.location.origin}/#karka/${currentPage}`;

  const handleCopyOfficialLink = () => {
    navigator.clipboard?.writeText(officialShareableUrl);
    setUrlCopied(true);
    window.setTimeout(() => setUrlCopied(false), 2500);
  };

  // Career Mentor Consultation Form State
  const [mentorForm, setMentorForm] = useState({
    name: '',
    phone: '',
    email: '',
    education: '',
    careerTrack: mentorPrefillTrack || KARKA_PROGRAMS_DATA[0].title,
    preferredTime: 'Morning (10:00 AM – 1:00 PM IST)',
  });
  const [mentorSubmitted, setMentorSubmitted] = useState(false);

  React.useEffect(() => {
    if (mentorPrefillTrack) {
      setMentorForm((prev) => ({ ...prev, careerTrack: mentorPrefillTrack }));
    }
    setMentorSubmitted(false);
  }, [mentorPrefillTrack, isMentorModalOpen]);

  const handleMentorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mentorForm.name.trim() || !mentorForm.phone.trim()) return;
    setMentorSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BRAND_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <>
      {/* Contextual Global CTA Banner Before Footer */}
      <section className="bg-gradient-to-r from-[#2A0738] via-[#1B083B] to-[#0E0524] border-t border-purple-800/60 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono font-bold text-[#D4FF00] mb-1">
              PERSONALIZED CAREER GUIDANCE
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase italic tracking-tight">
              Not sure which path is right for you?
            </h2>
            <p className="text-sm text-purple-100 mt-1">
              Speak 1-on-1 with a Karka Career Mentor or take our 60-second
              Career Path Finder quiz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenMentorModal()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>TALK TO A CAREER MENTOR</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('career-paths')}
              className="px-5 py-3 rounded-full bg-[#0E0521] hover:bg-purple-950 text-white border border-purple-600 font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              Find My Career Path →
            </button>
          </div>
        </div>
      </section>

      {/* Multi-Column Sophisticated Footer */}
      <footer className="bg-[#080214] text-purple-200/80 py-16 border-t border-purple-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 pb-12 border-b border-purple-900/60 text-xs sm:text-sm">
            {/* Column 1: Karka Brand (Spans 2 cols on LG) */}
            <div className="col-span-2 space-y-3">
              {currentPage === 'home' ? (
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-left cursor-pointer"
                >
                  <KarkaOfficialLogo variant="dark-bg" size="sm" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-left font-display font-extrabold text-lg text-white hover:text-[#D4FF00] transition-colors cursor-pointer"
                >
                  {BRAND_CONFIG.name}
                </button>
              )}
              <p className="text-xs text-purple-200/80 leading-relaxed max-w-xs">
                {BRAND_CONFIG.addressHQ}
              </p>
              <p className="text-xs text-white font-semibold">
                Phone: {BRAND_CONFIG.phonePrimary}
              </p>
              <p className="text-xs text-[#D4FF00] font-mono">
                {BRAND_CONFIG.emailPrimary}
              </p>
            </div>

            {/* Column 2: Programs */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                Programs
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('programs', 'ai-data-science')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    AI &amp; Data Science
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('programs', 'mern-fullstack')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    MERN Fullstack
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('programs', 'react-java-fullstack')
                    }
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    React + Java Full Stack
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('programs', 'data-analytics-ai')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Data Analytics with AI
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('programs')}
                    className="text-sky-400 hover:underline cursor-pointer text-left"
                  >
                    All 13+ Programs →
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Career */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                Career
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('career-paths')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Career Path Finder
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('pay-after-placement')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Pay After Placement
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('placements')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Placement Readiness
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenMentorModal()}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Book Career Call
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Students */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                Students
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Project Showcase
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('internships')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Internship Experience
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('placements')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Student Success Wall
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('enroll')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Smart Enrollment
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Platforms */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                Platforms
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('platforms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Spike AI Learning
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('platforms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Karka Infini AI
                  </button>
                </li>
                <li>
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-sky-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND_CONFIG.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 6: Company & Support */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                Support
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact &amp; HQ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('faq')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    FAQ Search
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModal('privacy')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModal('terms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p>
                © {new Date().getFullYear()} {BRAND_CONFIG.name}. Official
                Website:{' '}
                <a
                  href={BRAND_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4FF00] font-semibold hover:underline"
                >
                  https://www.karka.academy/
                </a>{' '}
                · Instagram: {BRAND_CONFIG.instagramHandle}
              </p>
              <button
                type="button"
                onClick={handleCopyOfficialLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/90 hover:bg-purple-900 text-purple-100 border border-purple-700/60 font-mono text-[11px] transition-colors cursor-pointer"
                title="Copy Karka AI & Tech Academy Shareable App Link"
              >
                {urlCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span className="text-[#D4FF00] font-bold">
                      Copied: /#karka
                    </span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      Copy Link: /#karka
                      {currentPage === 'home' ? '' : `/${currentPage}`}
                    </span>
                  </>
                )}
              </button>
              <a
                href="/karka-ai-tech-academy.zip"
                download="karka-ai-tech-academy.zip"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-[11px] transition-colors cursor-pointer"
                title="Download Complete Karka AI & Tech Academy Website Source Code (ZIP)"
              >
                <Download className="w-3.5 h-3.5 text-[#D4FF00]" />
                <span>Download ZIP</span>
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Direct Connect */}
      <div className="fixed bottom-5 right-5 z-40 group flex items-center gap-2">
        <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-slate-900/95 border border-slate-800 text-xs font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Karka Admissions ({BRAND_CONFIG.phonePrimary})
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Karka on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl flex items-center justify-center transition-transform duration-150 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Global Career Mentor Consultation Modal */}
      <Modal
        isOpen={isMentorModalOpen}
        onClose={onCloseMentorModal}
        title="Talk to a Karka Career Mentor"
        subtitle="1-on-1 Career Roadmap, Curriculum & Pay After Placement Consultation"
        maxWidthClass="max-w-lg"
      >
        {mentorSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-display font-bold text-white">
              Consultation Scheduled!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Thank you, <strong className="text-white">{mentorForm.name}</strong>
              . A Karka Career Mentor will contact you during your preferred
              window (<strong className="text-sky-400">{mentorForm.preferredTime}</strong>
              ) regarding <strong className="text-white">{mentorForm.careerTrack}</strong>.
            </p>
            <button
              type="button"
              onClick={onCloseMentorModal}
              className="px-6 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs sm:text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleMentorSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="cm-name"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Full Name *
              </label>
              <input
                id="cm-name"
                type="text"
                required
                value={mentorForm.name}
                onChange={(e) =>
                  setMentorForm({ ...mentorForm, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cm-phone"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  id="cm-phone"
                  type="tel"
                  required
                  value={mentorForm.phone}
                  onChange={(e) =>
                    setMentorForm({ ...mentorForm, phone: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="cm-email"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Email *
                </label>
                <input
                  id="cm-email"
                  type="email"
                  required
                  value={mentorForm.email}
                  onChange={(e) =>
                    setMentorForm({ ...mentorForm, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cm-edu"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Current Education / Status *
              </label>
              <input
                id="cm-edu"
                type="text"
                required
                value={mentorForm.education}
                onChange={(e) =>
                  setMentorForm({ ...mentorForm, education: e.target.value })
                }
                placeholder="e.g., Final Year B.E, B.Sc, Graduate, Working Professional"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="cm-track"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Interested Career Track
                </label>
                <select
                  id="cm-track"
                  value={mentorForm.careerTrack}
                  onChange={(e) =>
                    setMentorForm({
                      ...mentorForm,
                      careerTrack: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                >
                  {KARKA_PROGRAMS_DATA.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="cm-time"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Preferred Contact Time
                </label>
                <select
                  id="cm-time"
                  value={mentorForm.preferredTime}
                  onChange={(e) =>
                    setMentorForm({
                      ...mentorForm,
                      preferredTime: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm"
                >
                  <option>Morning (10:00 AM – 1:00 PM IST)</option>
                  <option>Afternoon (2:00 PM – 5:00 PM IST)</option>
                  <option>Evening (5:00 PM – 7:30 PM IST)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onCloseMentorModal}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs sm:text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm cursor-pointer"
              >
                Book Mentor Call
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Legal Modals */}
      <Modal
        isOpen={legalModal !== null}
        onClose={() => setLegalModal(null)}
        title={
          legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'
        }
        subtitle={BRAND_CONFIG.name}
      >
        <div className="space-y-4 text-xs sm:text-sm">
          <p>
            {legalModal === 'privacy'
              ? 'Your personal contact and educational details submitted through Karka AI & Tech Academy forms are used strictly by our admissions and career counseling team to guide your enrollment, internship, and placement journey.'
              : 'Enrollment in Karka AI & Tech Academy programs and the Pay After Placement pathway is governed by the official program terms shared transparently during your admission onboarding at our Nagercoil headquarters or online counseling session.'}
          </p>
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="px-5 py-2 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
