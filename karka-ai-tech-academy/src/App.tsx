/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { CareerPathsView } from './components/CareerPathsView';
import { ProgramsView } from './components/ProgramsView';
import { ProjectsAndInternshipsView } from './components/ProjectsAndInternshipsView';
import { PlacementsView } from './components/PlacementsView';
import { PayAfterPlacementView } from './components/PayAfterPlacementView';
import { PlatformsView } from './components/PlatformsView';
import { FAQContactAndEnrollmentView } from './components/FAQContactAndEnrollmentView';
import { FooterAndFloatingActions } from './components/FooterAndFloatingActions';
import { PageRoute, KARKA_PROGRAMS_DATA } from './data/karkaData';

const VALID_PAGES: PageRoute[] = [
  'home',
  'career-paths',
  'programs',
  'projects',
  'internships',
  'placements',
  'pay-after-placement',
  'platforms',
  'faq',
  'contact',
  'enroll',
];

const BRAND_URL_PREFIX = 'karka';

const parseRouteFromLocation = (): PageRoute => {
  const rawHash = window.location.hash
    .replace(/^#\/?/, '')
    .replace(/^karka-ai-tech-academy\/?/, '')
    .replace(/^karka-academy\/?/, '')
    .replace(/^karka\/?/, '') as PageRoute;
  if (VALID_PAGES.includes(rawHash)) {
    return rawHash;
  }
  return 'home';
};

const PAGE_TITLES: Record<PageRoute, string> = {
  home: 'Karka AI & Tech Academy | Official Website (karka.academy)',
  'career-paths': 'Career Path Finder | Karka AI & Tech Academy',
  programs: '13+ AI & Tech Career Programs | Karka AI & Tech Academy',
  projects: 'Student Project Showcase | Karka AI & Tech Academy',
  internships: 'Real-Time Internship Experience | Karka AI & Tech Academy',
  placements: '100% Placement Support & Stories | Karka AI & Tech Academy',
  'pay-after-placement': 'Pay After Placement | Karka AI & Tech Academy',
  platforms: 'Spike AI & Karka Infini AI | Karka AI & Tech Academy',
  faq: 'Frequently Asked Questions | Karka AI & Tech Academy',
  contact: 'Nagercoil Campus & Contact | Karka AI & Tech Academy',
  enroll: 'Smart Career Enrollment | Karka AI & Tech Academy',
};

export default function App() {
  // Always open on the Home page first when loading the application
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(
    null
  );

  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);
  const [mentorPrefillTrack, setMentorPrefillTrack] = useState(
    KARKA_PROGRAMS_DATA[0].title
  );

  // Sync browser URL and document title with short official Karka branding (#karka)
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    const brandedHash =
      currentPage === 'home'
        ? `#${BRAND_URL_PREFIX}`
        : `#${BRAND_URL_PREFIX}/${currentPage}`;
    if (window.location.hash !== brandedHash) {
      window.history.replaceState(null, '', brandedHash);
    }
  }, [currentPage]);

  // Sync browser back/forward buttons with currentPage
  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseRouteFromLocation();
      setCurrentPage(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute, programId?: string) => {
    if (programId) {
      setSelectedProgramId(programId);
    } else if (page !== 'programs' && page !== 'enroll') {
      setSelectedProgramId(null);
    }
    setCurrentPage(page);
    const targetHash =
      page === 'home'
        ? `#${BRAND_URL_PREFIX}`
        : `#${BRAND_URL_PREFIX}/${page}`;
    window.history.pushState(null, '', targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMentorModal = (prefillTrack?: string) => {
    if (prefillTrack) {
      setMentorPrefillTrack(prefillTrack);
    }
    setIsMentorModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0418] text-white overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
        onOpenMentorModal={() => handleOpenMentorModal()}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {currentPage === 'career-paths' && (
          <CareerPathsView
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsView
            initialSelectedProgramId={selectedProgramId}
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {(currentPage === 'projects' || currentPage === 'internships') && (
          <ProjectsAndInternshipsView
            mode={currentPage}
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {currentPage === 'placements' && (
          <PlacementsView
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {currentPage === 'pay-after-placement' && (
          <PayAfterPlacementView
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {currentPage === 'platforms' && (
          <PlatformsView
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}

        {(currentPage === 'faq' ||
          currentPage === 'contact' ||
          currentPage === 'enroll') && (
          <FAQContactAndEnrollmentView
            mode={currentPage}
            initialProgramId={selectedProgramId}
            onNavigate={handleNavigate}
            onOpenMentorModal={handleOpenMentorModal}
          />
        )}
      </main>

      <FooterAndFloatingActions
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isMentorModalOpen={isMentorModalOpen}
        mentorPrefillTrack={mentorPrefillTrack}
        onCloseMentorModal={() => setIsMentorModalOpen(false)}
        onOpenMentorModal={handleOpenMentorModal}
      />
    </div>
  );
}
