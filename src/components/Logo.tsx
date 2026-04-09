interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VG Statyba"
    >
      <defs>
        <linearGradient id="vg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#F5C842" />
        </linearGradient>
      </defs>

      {/* "VG" letters */}
      <text
        x="8"
        y="158"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="168"
        fill="url(#vg-gradient)"
        letterSpacing="-6"
      >
        VG
      </text>

      {/* Dark red rectangle for STATYBA */}
      <rect x="172" y="10" width="100" height="152" fill="#8B2000" rx="2" />

      {/* STATYBA text — rotated inside the rectangle */}
      <text
        x="222"
        y="148"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="white"
        letterSpacing="4"
        transform="rotate(-90, 222, 86)"
        textAnchor="middle"
      >
        STATYBA
      </text>

      {/* ANNO 2007 tagline */}
      {showTagline && (
        <text
          x="140"
          y="195"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="22"
          fill="#6B7280"
          letterSpacing="6"
          textAnchor="middle"
        >
          ANNO 2007
        </text>
      )}
    </svg>
  );
}
