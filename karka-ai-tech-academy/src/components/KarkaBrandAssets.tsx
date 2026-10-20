import React from 'react';

interface KarkaBrandAssetsProps {
  variant?: 'dark-bg' | 'light-bg';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Official Karka AI & Tech Academy Logo (Matching Screenshot 4)
 * Features the dual computer monitors, central figure with mouse line,
 * and bold "AI & TECH" + "Academy" lockup.
 */
export const KarkaOfficialLogo: React.FC<KarkaBrandAssetsProps> = ({
  variant = 'dark-bg',
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark-bg';
  const strokeColor = isDarkBg ? '#FFFFFF' : '#3B0736';
  const screenFill = isDarkBg ? '#A855F7' : '#7E22CE';
  const aiTechColor = isDarkBg ? '#FFFFFF' : '#7E22CE';
  const academyColor = isDarkBg ? '#E9D5FF' : '#3F3F46';

  const dimensions =
    size === 'sm'
      ? 'h-9'
      : size === 'lg'
      ? 'h-12 sm:h-14'
      : 'h-10 sm:h-11';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${dimensions}`}>
      {/* Official Icon Graphic: Dual Monitors + Central Person + Mouse Cord */}
      <svg
        viewBox="0 0 130 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
        aria-hidden="true"
      >
        {/* Left Monitor Top Bracket */}
        <path
          d="M16 26L40 29V36"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left Monitor Frame */}
        <rect
          x="10"
          y="36"
          width="38"
          height="36"
          rx="7"
          stroke={strokeColor}
          strokeWidth="6"
        />
        {/* Left Monitor Purple Screen */}
        <rect x="16" y="42" width="26" height="24" rx="3" fill={screenFill} />

        {/* Right Monitor Top Bracket */}
        <path
          d="M92 28L114 26V36"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Monitor Frame */}
        <rect
          x="84"
          y="36"
          width="38"
          height="36"
          rx="7"
          stroke={strokeColor}
          strokeWidth="6"
        />
        {/* Right Monitor Purple Screen */}
        <rect x="90" y="42" width="26" height="24" rx="3" fill={screenFill} />

        {/* Central Person Head */}
        <circle
          cx="65"
          cy="17"
          r="11"
          stroke={strokeColor}
          strokeWidth="6"
        />

        {/* Central Person Shoulders / M-Arch */}
        <path
          d="M52 68V42C52 35 58 32 62 38L65 44L68 38C72 32 78 35 78 42V82L34 78"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mouse & Cord */}
        <ellipse cx="27" cy="83" rx="6" ry="3.5" fill={strokeColor} />
        <path
          d="M21 83C12 83 18 76 10 75"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography Lockup: AI & TECH / Academy */}
      <div className="flex flex-col justify-center leading-none">
        <span
          style={{ color: aiTechColor }}
          className="font-display font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap"
        >
          AI &amp; TECH
        </span>
        <span
          style={{ color: academyColor }}
          className="font-sans font-semibold text-xs sm:text-sm tracking-normal whitespace-nowrap mt-0.5"
        >
          Academy
        </span>
      </div>
    </div>
  );
};
