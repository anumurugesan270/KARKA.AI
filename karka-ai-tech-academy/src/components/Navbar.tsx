import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, PhoneCall, Home } from 'lucide-react';
import { PageRoute } from '../data/karkaData';
import { KarkaOfficialLogo } from './KarkaBrandAssets';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenMentorModal: () => void;
}

const PRIMARY_NAV_LINKS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'career-paths', label: 'Career Paths' },
  { id: 'programs', label: 'Programs' },
  { id: 'projects', label: 'Projects' },
  { id: 'internships', label: 'Internships' },
];

const MORE_NAV_LINKS: { id: PageRoute; label: string; subtitle: string }[] = [
  {
    id: 'placements',
    label: 'Placements',
    subtitle: '3D Success Stories, Mentors & Readiness',
  },
  {
    id: 'pay-after-placement',
    label: 'Pay After Placement',
    subtitle: 'Learn Now, Pay After You Get Hired & Eligibility',
  },
  {
    id: 'platforms',
    label: 'Karka Platforms',
    subtitle: 'Spike AI Learning & Infini AI TechRush',
  },
  {
    id: 'faq',
    label: 'FAQ',
    subtitle: 'Searchable Questions & Answers',
  },
  {
    id: 'contact',
    label: 'Contact & Campus',
    subtitle: 'Nagercoil HQ & Career Counseling',
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenMentorModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    onNavigate(page);
  };

  const isMoreActive = MORE_NAV_LINKS.some((item) => item.id === currentPage);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E0521]/95 backdrop-blur-md border-b border-purple-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Official Karka AI & Tech Academy Logo ONLY on Home Page */}
        {currentPage === 'home' ? (
          <a
            href="#karka"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            aria-label="Karka AI & Tech Academy Home"
            className="py-1 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400"
          >
            <KarkaOfficialLogo variant="dark-bg" size="md" />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer shrink-0"
          >
            <Home className="w-4 h-4 text-[#D4FF00]" />
            <span>Back to Home</span>
          </button>
        )}

        {/* Zone 2: Clean Typography Multi-Page Navigation */}
        <nav
          aria-label="Primary Page Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-semibold text-purple-100"
        >
          {PRIMARY_NAV_LINKS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-1.5 whitespace-nowrap shrink-0 border-b-2 transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'border-[#D4FF00] text-[#D4FF00] font-bold'
                    : 'border-transparent text-purple-100 hover:text-white hover:border-purple-500'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              aria-expanded={moreDropdownOpen}
              className={`flex items-center gap-1 py-1.5 border-b-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                isMoreActive
                  ? 'border-[#D4FF00] text-[#D4FF00] font-bold'
                  : 'border-transparent text-purple-100 hover:text-white hover:border-purple-500'
              }`}
            >
              <span>Explore More</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  moreDropdownOpen ? 'rotate-180 text-[#D4FF00]' : ''
                }`}
              />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 pt-2 w-72 z-50">
                <div className="rounded-2xl bg-[#160836] border border-purple-700/60 p-2 shadow-2xl space-y-1">
                  {MORE_NAV_LINKS.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer block ${
                          isActive
                            ? 'bg-purple-600/30 text-[#D4FF00]'
                            : 'hover:bg-purple-900/50 text-purple-100'
                        }`}
                      >
                        <div className="text-sm font-bold whitespace-nowrap">
                          {item.label}
                        </div>
                        <div className="text-xs text-purple-300/80 truncate mt-0.5">
                          {item.subtitle}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions (No Login — Career Call + Enroll Now) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenMentorModal}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-purple-950/90 hover:bg-purple-900 border border-purple-600/60 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>Free Career Call</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('enroll')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>ENROLL NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-xl bg-purple-950 border border-purple-700/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12062C] border-b border-purple-800/60 px-4 pt-3 pb-6 space-y-4 max-h-[82vh] overflow-y-auto">
          <nav
            aria-label="Mobile Page Navigation"
            className="grid grid-cols-1 sm:grid-cols-2 gap-1.5"
          >
            {[
              ...PRIMARY_NAV_LINKS,
              ...MORE_NAV_LINKS.map((m) => ({ id: m.id, label: m.label })),
            ].map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-purple-600/30 text-[#D4FF00] border border-purple-500/40'
                      : 'text-purple-100 hover:bg-purple-900/40 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-purple-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMentorModal();
              }}
              className="w-full py-2.5 px-4 rounded-full bg-purple-950 text-white border border-purple-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Book Free Career Call</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('enroll')}
              className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>ENROLL NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
