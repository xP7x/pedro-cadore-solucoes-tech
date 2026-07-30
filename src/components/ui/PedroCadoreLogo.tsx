import React from 'react';

interface PedroCadoreLogoProps {
  layout?: 'vertical' | 'horizontal' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  className?: string;
  iconClassName?: string;
  animated?: boolean;
}

export const PedroCadoreLogo: React.FC<PedroCadoreLogoProps> = ({
  layout = 'vertical',
  size = 'md',
  glow = true,
  className = '',
  iconClassName = '',
  animated = true,
}) => {
  // Size mapping for SVG emblem
  const sizeMap = {
    sm: { width: 48, height: 48, textPrimary: 'text-sm', textSecondary: 'text-[9px]' },
    md: { width: 80, height: 80, textPrimary: 'text-xl', textSecondary: 'text-[11px]' },
    lg: { width: 140, height: 140, textPrimary: 'text-3xl', textSecondary: 'text-sm' },
    xl: { width: 220, height: 220, textPrimary: 'text-4xl md:text-5xl', textSecondary: 'text-base md:text-lg' },
  };

  const currentSize = sizeMap[size];

  // Vector SVG Circuit Bug Emblem based on official Pedro Cadore Soluções Tech branding
  const EmblemSVG = (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full text-white transition-all duration-500 ${iconClassName}`}
    >
      <defs>
        {/* Glow Filters */}
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="intenseGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Neon Gradient */}
        <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>

      {/* 1. CENTRAL BUG / BEETLE EMBLEM */}
      <g className={animated ? "animate-pulse-subtle" : ""}>
        {/* Bug Head */}
        <path
          d="M 90 62 C 90 56, 110 56, 110 62 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="3"
        />

        {/* Antennae */}
        <path
          d="M 94 57 C 90 48, 86 46, 82 48"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 106 57 C 110 48, 114 46, 118 48"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Bug Main Body Shell (Split down the middle) */}
        {/* Left Shell Half */}
        <path
          d="M 98 67 C 82 67, 80 82, 80 98 C 80 114, 85 125, 98 125 Z"
          fill="currentColor"
        />
        {/* Right Shell Half */}
        <path
          d="M 102 67 C 118 67, 120 82, 120 98 C 120 114, 115 125, 102 125 Z"
          fill="currentColor"
        />

        {/* Vertical Center Division Gap */}
        <line x1="100" y1="65" x2="100" y2="127" stroke="#050505" strokeWidth="3" />

        {/* 6 Jointed Legs */}
        {/* Top Left Leg */}
        <path d="M 82 76 L 68 72 L 62 82" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Middle Left Leg */}
        <path d="M 80 96 L 64 96 L 58 104" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom Left Leg */}
        <path d="M 82 114 L 68 120 L 64 132" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Top Right Leg */}
        <path d="M 118 76 L 132 72 L 138 82" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Middle Right Leg */}
        <path d="M 120 96 L 136 96 L 142 104" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bottom Right Leg */}
        <path d="M 118 114 L 132 120 L 136 132" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* 2. SURROUNDING CIRCUIT TRACES & NODES */}

      {/* TOP CIRCUIT TRACES */}
      {/* Top Left vertical-diagonal trace */}
      <path d="M 60 48 L 60 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="34" r="5" fill="currentColor" />

      <path d="M 78 52 L 78 30 L 90 18 L 90 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="10" r="5.5" fill="currentColor" />

      <path d="M 100 48 L 100 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="100" cy="18" r="5.5" fill="currentColor" />

      <path d="M 122 52 L 122 30 L 110 18 L 110 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="110" cy="10" r="5.5" fill="currentColor" />

      <path d="M 140 48 L 140 38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="140" cy="34" r="5" fill="currentColor" />

      {/* LEFT CIRCUIT TRACES */}
      {/* Top Left Outer Angle */}
      <path d="M 44 60 L 30 46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="25" cy="41" r="5" fill="currentColor" />

      {/* Mid-Upper Left Trace */}
      <path d="M 48 76 L 36 76 L 28 68" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Mid Left Horizontal Trace */}
      <path d="M 46 96 L 22 96" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

      {/* Mid-Lower Left Trace */}
      <path d="M 48 116 L 36 124 L 28 124" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom Left Diagonal Trace */}
      <path d="M 52 134 L 30 156" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="25" cy="161" r="5.5" fill="currentColor" />

      {/* RIGHT CIRCUIT TRACES */}
      {/* Top Right Outer Angle */}
      <path d="M 156 60 L 170 46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="175" cy="41" r="5" fill="currentColor" />

      {/* Mid-Upper Right Trace */}
      <path d="M 152 76 L 164 76 L 172 68" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Mid Right Horizontal Trace */}
      <path d="M 154 96 L 178 96" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="184" cy="96" r="5" fill="currentColor" />

      {/* Mid-Lower Right Trace */}
      <path d="M 152 116 L 164 124 L 172 124" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom Right Diagonal Trace */}
      <path d="M 148 134 L 170 156" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="175" cy="161" r="5.5" fill="currentColor" />

      {/* BOTTOM CIRCUIT TRACES */}
      <path d="M 72 142 L 72 172" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="72" cy="178" r="5.5" fill="currentColor" />

      <path d="M 100 144 L 100 178" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

      <path d="M 128 142 L 128 172" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="128" cy="178" r="5.5" fill="currentColor" />

      {/* Extra ambient circuit dots */}
      <circle cx="100" cy="184" r="2" fill="currentColor" className="opacity-60" />
      <circle cx="100" cy="190" r="1.5" fill="currentColor" className="opacity-40" />
    </svg>
  );

  if (layout === 'icon') {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 ${glow ? 'drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]' : ''} ${className}`}
        style={{ width: currentSize.width, height: currentSize.height }}
      >
        {EmblemSVG}
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {/* Emblem on the Left */}
        <div
          className={`relative flex items-center justify-center shrink-0 ${glow ? 'drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]' : ''}`}
          style={{ width: currentSize.width, height: currentSize.height }}
        >
          {EmblemSVG}
        </div>

        {/* Text on the Right */}
        <div className="flex flex-col text-left justify-center">
          <span className={`font-display font-extrabold text-white tracking-tight leading-none uppercase ${currentSize.textPrimary}`}>
            PEDRO CADORE
          </span>
          <span className={`font-sans font-bold text-slate-300 tracking-[0.25em] md:tracking-[0.35em] uppercase mt-1 leading-none ${currentSize.textSecondary}`}>
            SOLUÇÕES TECH
          </span>
        </div>
      </div>
    );
  }

  // Vertical (Stacked) Layout - Default
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Emblem on Top */}
      <div
        className={`relative flex items-center justify-center shrink-0 mb-4 ${
          glow ? 'drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]' : ''
        }`}
        style={{ width: currentSize.width, height: currentSize.height }}
      >
        {EmblemSVG}
      </div>

      {/* Typography Centered Below */}
      <div className="flex flex-col items-center">
        <h2 className={`font-display font-black text-white tracking-tight leading-none uppercase ${currentSize.textPrimary}`}>
          PEDRO CADORE
        </h2>
        <p className={`font-sans font-bold text-slate-300 tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-2 leading-none ${currentSize.textSecondary}`}>
          SOLUÇÕES TECH
        </p>
      </div>
    </div>
  );
};
