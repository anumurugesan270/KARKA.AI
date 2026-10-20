import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';
import {
  FAQ_CATEGORIES,
  FAQCategory,
  CATEGORIZED_FAQ_DATA,
  BRAND_CONFIG,
  KARKA_PROGRAMS_DATA,
  PROGRAM_CATEGORIES,
  ProgramCategory,
  IMAGES,
  PageRoute,
} from '../data/karkaData';
import { ResilientImage } from './ResilientImage';

interface FAQContactAndEnrollmentViewProps {
  mode: 'faq' | 'contact' | 'enroll';
  initialProgramId?: string | null;
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: (prefillTrack?: string) => void;
}

export const FAQContactAndEnrollmentView: React.FC<
  FAQContactAndEnrollmentViewProps
> = ({ mode, initialProgramId, onNavigate, onOpenMentorModal }) => {
  // FAQ State
  const [selectedFaqCat, setSelectedFaqCat] = useState<FAQCategory>('ALL');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    CATEGORIZED_FAQ_DATA[0].id
  );

  // Smart 5-Step Enrollment State
  const [enrollStep, setEnrollStep] = useState<number>(1);
  const [selectedDomain, setSelectedDomain] =
    useState<Exclude<ProgramCategory, 'ALL'>>('AI & GEN AI');
  const [selectedProgramId, setSelectedProgramId] = useState<string>(
    initialProgramId || KARKA_PROGRAMS_DATA[0].id
  );

  React.useEffect(() => {
    if (initialProgramId) {
      const found = KARKA_PROGRAMS_DATA.find((p) => p.id === initialProgramId);
      if (found) {
        setSelectedDomain(found.category);
        setSelectedProgramId(found.id);
      }
    }
  }, [initialProgramId]);

  const [enrollProfile, setEnrollProfile] = useState({
    education: 'Final-Year Engineering / CS / Science Student',
    experience: 'Beginner / Entry-Level Learner',
    paymentPreference: 'Pay After Placement (Eligible Tracks)',
    preferredCallTime: 'Morning (10:00 AM – 1:00 PM IST)',
    preferredMode: 'Nagercoil Campus (Offline)',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [enrollError, setEnrollError] = useState('');
  const [enrollCompleted, setEnrollCompleted] = useState(false);

  // Contact Page Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    track: KARKA_PROGRAMS_DATA[0].title,
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const filteredFaqs = useMemo(() => {
    const q = faqSearch.trim().toLowerCase();
    return CATEGORIZED_FAQ_DATA.filter((item) => {
      const matchesCat =
        selectedFaqCat === 'ALL' || item.category === selectedFaqCat;
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedFaqCat, faqSearch]);

  const selectedProgramObj =
    KARKA_PROGRAMS_DATA.find((p) => p.id === selectedProgramId) ||
    KARKA_PROGRAMS_DATA[0];

  const handleFinalEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollError('');

    if (
      !enrollProfile.fullName.trim() ||
      !enrollProfile.phone.trim() ||
      !enrollProfile.email.trim()
    ) {
      setEnrollError('Please enter your Full Name, Phone Number, and Email.');
      return;
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem('karka_smart_enrollments') || '[]'
      );
      existing.push({
        ...enrollProfile,
        programTitle: selectedProgramObj.title,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(
        'karka_smart_enrollments',
        JSON.stringify(existing)
      );
    } catch {
      // Ignore storage errors
    }

    setEnrollCompleted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim()) return;
    setContactSubmitted(true);
  };

  const heroImage =
    mode === 'enroll'
      ? IMAGES.animeUiuxCreator
      : mode === 'faq'
      ? IMAGES.qaTestingSpecialist
      : IMAGES.campusCounselorHq;

  return (
    <div className="bg-[#0B0418] text-white min-h-screen">
      {/* Mode Navigation Header with 3D Character Art */}
      <section className="py-12 sm:py-16 border-b border-purple-900/60 bg-gradient-to-br from-[#0B0418] via-[#1E0842] to-[#0E0524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-mono font-bold text-[#D4FF00]">
                {mode === 'enroll'
                  ? '5-STEP SMART ENROLLMENT ONBOARDING'
                  : mode === 'faq'
                  ? 'CATEGORIZED & SEARCHABLE KNOWLEDGE BASE'
                  : 'NAGERCOIL HEADQUARTERS & ADMISSIONS SUPPORT'}
              </p>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white uppercase italic tracking-tight">
                {mode === 'enroll'
                  ? 'Smart Career Enrollment'
                  : mode === 'faq'
                  ? 'Frequently Asked Questions'
                  : 'Contact Karka AI & Tech Academy'}
              </h1>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('enroll')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    mode === 'enroll'
                      ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-purple-950/80 text-purple-200 border border-purple-700/60 hover:text-white'
                  }`}
                >
                  Smart Enroll
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    mode === 'faq'
                      ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-purple-950/80 text-purple-200 border border-purple-700/60 hover:text-white'
                  }`}
                >
                  FAQ Search
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    mode === 'contact'
                      ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-purple-950/80 text-purple-200 border border-purple-700/60 hover:text-white'
                  }`}
                >
                  Contact &amp; HQ
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-2xl bg-[#160836] p-2.5">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                  <ResilientImage
                    src={heroImage}
                    alt="Karka 3D Anime Tech Illustration"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIEW 1: SMART 5-STEP ENROLLMENT FLOW */}
      {mode === 'enroll' && (
        <section className="py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 5-Step Progress Indicator */}
            <div className="grid grid-cols-5 gap-2 mb-10">
              {[
                { step: 1, label: '1. Career Track' },
                { step: 2, label: '2. Program' },
                { step: 3, label: '3. Eligibility' },
                { step: 4, label: '4. Career Call' },
                { step: 5, label: '5. Apply / Enroll' },
              ].map((s) => {
                const isCurrent = enrollStep === s.step;
                const isDone = enrollStep > s.step || enrollCompleted;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => !enrollCompleted && setEnrollStep(s.step)}
                    className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white border-fuchsia-400 font-bold'
                        : isDone
                        ? 'bg-[#160836] text-[#D4FF00] border-purple-500/50'
                        : 'bg-[#160836] text-purple-300 border-purple-800/60'
                    }`}
                  >
                    <span className="text-xs font-mono block truncate">
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step Content Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#160836] border-2 border-purple-700/60">
              {enrollCompleted ? (
                <div className="py-10 text-center space-y-5">
                  <CheckCircle2 className="w-14 h-14 text-[#D4FF00] mx-auto" />
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    Smart Application Submitted Successfully!
                  </h2>
                  <p className="text-sm sm:text-base text-purple-100 max-w-lg mx-auto">
                    Thank you,{' '}
                    <strong className="text-white">
                      {enrollProfile.fullName}
                    </strong>
                    . Your enrollment request for{' '}
                    <strong className="text-[#D4FF00]">
                      {selectedProgramObj.title}
                    </strong>{' '}
                    ({enrollProfile.preferredMode}) has been registered. Our
                    admissions team will call you during your preferred slot (
                    {enrollProfile.preferredCallTime}).
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setEnrollCompleted(false);
                        setEnrollStep(1);
                      }}
                      className="px-5 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-white text-xs sm:text-sm font-bold cursor-pointer"
                    >
                      Start Another Application
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('programs')}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white text-xs sm:text-sm font-bold cursor-pointer"
                    >
                      Explore Programs
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* STEP 1: Choose Career Track Domain */}
                  {enrollStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#D4FF00]">
                          STEP 1 OF 5
                        </span>
                        <h2 className="text-2xl font-display font-bold text-white mt-1">
                          Choose Your Career Domain
                        </h2>
                        <p className="text-xs sm:text-sm text-purple-200/80 mt-1">
                          Select the technology or business domain you want to
                          specialize in.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PROGRAM_CATEGORIES.filter((c) => c !== 'ALL').map(
                          (cat) => {
                            const isSelected = selectedDomain === cat;
                            return (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => {
                                  setSelectedDomain(cat);
                                  const firstInCat = KARKA_PROGRAMS_DATA.find(
                                    (p) => p.category === cat
                                  );
                                  if (firstInCat)
                                    setSelectedProgramId(firstInCat.id);
                                }}
                                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-[#0B0418] border-[#D4FF00] text-white'
                                    : 'bg-[#0B0418]/60 border-purple-800/60 text-purple-200 hover:border-purple-500'
                                }`}
                              >
                                <span className="font-display font-bold text-sm">
                                  {cat}
                                </span>
                                <span
                                  className={`text-xs font-mono ${
                                    isSelected
                                      ? 'text-[#D4FF00] font-bold'
                                      : 'text-purple-400'
                                  }`}
                                >
                                  {isSelected ? '● Selected' : 'Select →'}
                                </span>
                              </button>
                            );
                          }
                        )}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setEnrollStep(2)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Continue to Step 2: Choose Program</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Choose Specific Karka Program */}
                  {enrollStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#D4FF00]">
                          STEP 2 OF 5
                        </span>
                        <h2 className="text-2xl font-display font-bold text-white mt-1">
                          Select Your Specific Karka Program
                        </h2>
                      </div>

                      <div className="space-y-3">
                        {KARKA_PROGRAMS_DATA.map((prog) => {
                          const isSelected = prog.id === selectedProgramId;
                          return (
                            <div
                              key={prog.id}
                              onClick={() => setSelectedProgramId(prog.id)}
                              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                isSelected
                                  ? 'bg-[#0B0418] border-[#D4FF00]'
                                  : 'bg-[#0B0418]/50 border-purple-800/60 hover:border-purple-500'
                              }`}
                            >
                              <div>
                                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                                  <span>{prog.category}</span>
                                  <span>·</span>
                                  <span>{prog.duration}</span>
                                </div>
                                <h3 className="text-base font-display font-bold text-white mt-0.5">
                                  {prog.title}
                                </h3>
                                <p className="text-xs text-purple-200/80 mt-1">
                                  {prog.shortDescription}
                                </p>
                              </div>
                              <span
                                className={`text-xs font-mono shrink-0 ${
                                  isSelected
                                    ? 'text-[#D4FF00] font-bold'
                                    : 'text-purple-400'
                                }`}
                              >
                                {isSelected ? '✓ Chosen' : 'Choose'}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setEnrollStep(1)}
                          className="px-4 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-purple-100 text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEnrollStep(3)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Continue to Step 3: Check Eligibility</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Check Eligibility */}
                  {enrollStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#D4FF00]">
                          STEP 3 OF 5
                        </span>
                        <h2 className="text-2xl font-display font-bold text-white mt-1">
                          Verify Eligibility &amp; Fee Pathway
                        </h2>
                        <p className="text-xs text-purple-200 mt-1">
                          Selected Program:{' '}
                          <strong className="text-white">
                            {selectedProgramObj.title}
                          </strong>
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="sm-edu"
                            className="block text-xs font-bold text-purple-200 mb-1.5"
                          >
                            Current Educational Qualification
                          </label>
                          <select
                            id="sm-edu"
                            value={enrollProfile.education}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                education: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          >
                            <option>
                              Final-Year Engineering / CS / Science Student
                            </option>
                            <option>
                              Recent Graduate (B.E / B.Tech / B.Sc / BCA / MCA)
                            </option>
                            <option>
                              Arts / Commerce / Management Student or Graduate
                            </option>
                            <option>
                              Working Professional / Career Switcher
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="sm-exp"
                            className="block text-xs font-bold text-purple-200 mb-1.5"
                          >
                            Prior Technical Experience
                          </label>
                          <select
                            id="sm-exp"
                            value={enrollProfile.experience}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                experience: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          >
                            <option>Beginner / Entry-Level Learner</option>
                            <option>
                              Know Basic Coding / Academic Projects
                            </option>
                            <option>
                              Intermediate — Seeking Production Internship
                            </option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="sm-pay"
                            className="block text-xs font-bold text-purple-200 mb-1.5"
                          >
                            Preferred Fee Model
                          </label>
                          <select
                            id="sm-pay"
                            value={enrollProfile.paymentPreference}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                paymentPreference: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          >
                            <option>
                              Pay After Placement (Eligible Tracks)
                            </option>
                            <option>Standard Upfront / Installment Plan</option>
                            <option>Need Mentor Guidance on Fee Options</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setEnrollStep(2)}
                          className="px-4 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-purple-100 text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEnrollStep(4)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Continue to Step 4: Book Career Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Book Career Call Preferences */}
                  {enrollStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#D4FF00]">
                          STEP 4 OF 5
                        </span>
                        <h2 className="text-2xl font-display font-bold text-white mt-1">
                          Select Career Call &amp; Campus Preference
                        </h2>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="sm-mode"
                            className="block text-xs font-bold text-purple-200 mb-1.5"
                          >
                            Preferred Learning Mode
                          </label>
                          <select
                            id="sm-mode"
                            value={enrollProfile.preferredMode}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                preferredMode: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          >
                            <option>Nagercoil Campus (Offline)</option>
                            <option>
                              Hybrid Live (Online + Campus Sprints)
                            </option>
                            <option>Mentor-Guided Online Cohort</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="sm-time"
                            className="block text-xs font-bold text-purple-200 mb-1.5"
                          >
                            Preferred Time for 1-on-1 Career Mentor Call
                          </label>
                          <select
                            id="sm-time"
                            value={enrollProfile.preferredCallTime}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                preferredCallTime: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          >
                            <option>Morning (10:00 AM – 1:00 PM IST)</option>
                            <option>Afternoon (2:00 PM – 5:00 PM IST)</option>
                            <option>Evening (5:00 PM – 7:30 PM IST)</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setEnrollStep(3)}
                          className="px-4 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-purple-100 text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setEnrollStep(5)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Continue to Step 5: Complete Enrollment</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Final Contact Details & Submit */}
                  {enrollStep === 5 && (
                    <form
                      onSubmit={handleFinalEnrollmentSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-[#D4FF00]">
                          STEP 5 OF 5
                        </span>
                        <h2 className="text-2xl font-display font-bold text-white mt-1">
                          Complete Your Application
                        </h2>
                        <p className="text-xs text-purple-200 mt-1">
                          Applying for:{' '}
                          <strong className="text-[#D4FF00]">
                            {selectedProgramObj.title}
                          </strong>{' '}
                          · {enrollProfile.preferredMode}
                        </p>
                      </div>

                      {enrollError && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                          {enrollError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="sm-name"
                            className="block text-xs font-bold text-purple-200 mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            id="sm-name"
                            type="text"
                            required
                            value={enrollProfile.fullName}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                fullName: e.target.value,
                              })
                            }
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="sm-phone"
                            className="block text-xs font-bold text-purple-200 mb-1"
                          >
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            id="sm-phone"
                            type="tel"
                            required
                            value={enrollProfile.phone}
                            onChange={(e) =>
                              setEnrollProfile({
                                ...enrollProfile,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="sm-email"
                          className="block text-xs font-bold text-purple-200 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          id="sm-email"
                          type="email"
                          required
                          value={enrollProfile.email}
                          onChange={(e) =>
                            setEnrollProfile({
                              ...enrollProfile,
                              email: e.target.value,
                            })
                          }
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setEnrollStep(4)}
                          className="px-4 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-purple-100 text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Submit Enrollment Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* VIEW 2: CATEGORIZED & SEARCHABLE FAQ */}
      {mode === 'faq' && (
        <section className="py-14 sm:py-20 bg-[#FAF5FF] text-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Search & Category Filter */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-purple-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search your question (e.g., Pay After Placement, Nagercoil, Internship)..."
                  aria-label="Search FAQs"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border-2 border-purple-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {FAQ_CATEGORIES.map((cat) => {
                  const isSelected = selectedFaqCat === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedFaqCat(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-[#5B0E55] text-[#D4FF00]'
                          : 'bg-white text-purple-900 border border-purple-200 hover:bg-purple-50'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-white border-2 border-purple-200/80 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaqId((prev) =>
                          prev === faq.id ? null : faq.id
                        )
                      }
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors cursor-pointer"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-purple-700 block mb-1">
                          {faq.category}
                        </span>
                        <span className="text-base font-display font-bold text-[#3B0736]">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-600 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#5B0E55]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-purple-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2A0738] to-[#160836] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display font-bold">
                  Still have questions about your career path?
                </h3>
                <p className="text-xs text-purple-200 mt-1">
                  Speak 1-on-1 with a Karka Career Mentor for personalized
                  guidance.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenMentorModal()}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-bold text-xs sm:text-sm cursor-pointer whitespace-nowrap"
              >
                Talk to a Career Mentor
              </button>
            </div>
          </div>
        </section>
      )}

      {/* VIEW 3: CONTACT & NAGERCOIL HQ */}
      {mode === 'contact' && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: Official Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#160836] border border-purple-700/60 space-y-5">
                  <h2 className="text-xl font-display font-bold text-white">
                    Official Campus &amp; Contact Details
                  </h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-purple-300 block">
                          Academy HQ (Nagercoil)
                        </span>
                        <span className="text-white">
                          {BRAND_CONFIG.addressHQ}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-purple-300 block">
                          Admissions &amp; Career Helpline
                        </span>
                        <span className="text-white font-bold block">
                          {BRAND_CONFIG.phonePrimary}
                        </span>
                        <span className="text-purple-200 text-xs block">
                          Alt Admissions: {BRAND_CONFIG.phoneAdmissions}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-purple-300 block">
                          Official Email
                        </span>
                        <span className="text-white block">
                          {BRAND_CONFIG.emailPrimary}
                        </span>
                        <span className="text-purple-300 text-xs block">
                          {BRAND_CONFIG.emailSecondary}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-purple-300 block">
                          Working Hours
                        </span>
                        <span className="text-white">
                          {BRAND_CONFIG.workingHours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Book Free Career Call Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#160836] border border-purple-700/60">
                {contactSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#D4FF00] mx-auto" />
                    <h3 className="text-2xl font-display font-bold text-white">
                      Career Call Request Received!
                    </h3>
                    <p className="text-sm text-purple-200">
                      Our Nagercoil admissions &amp; mentorship team will reach
                      out to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-purple-950 border border-purple-700 text-white text-xs sm:text-sm cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="text-xl font-display font-bold text-white">
                      Book Free Career Call / Campus Visit
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="ct-name"
                          className="block text-xs font-bold text-purple-200 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="ct-name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="ct-phone"
                          className="block text-xs font-bold text-purple-200 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="ct-phone"
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="ct-email"
                          className="block text-xs font-bold text-purple-200 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          id="ct-email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="ct-track"
                          className="block text-xs font-bold text-purple-200 mb-1"
                        >
                          Interested Track
                        </label>
                        <select
                          id="ct-track"
                          value={contactForm.track}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              track: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm"
                        >
                          {KARKA_PROGRAMS_DATA.map((p) => (
                            <option key={p.id} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="ct-msg"
                        className="block text-xs font-bold text-purple-200 mb-1"
                      >
                        Message / Questions
                      </label>
                      <textarea
                        id="ct-msg"
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Ask about batch timings, Pay After Placement, or Nagercoil campus visits..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0418] border border-purple-700 text-white text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 text-white font-bold text-sm cursor-pointer"
                    >
                      Book Free Career Call
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
