function BrandLogo({ className = '', compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.28),transparent_68%)] blur-xl" />
        <svg
          viewBox="0 0 120 120"
          className="relative h-12 w-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M19 100V18H37L72 58C83 71 92 79 108 83V100C84 99 69 92 54 77L34 53V100H19Z"
            fill="url(#brandOrange)"
          />
          <path
            d="M79 23C95 23 108 29 116 40L105 51C100 44 91 40 81 40C67 40 58 49 58 62C58 75 67 84 81 84C89 84 96 82 103 78L100 93C94 98 86 100 77 100C52 100 41 82 41 62C41 40 57 23 79 23Z"
            fill="#2E2E2E"
          />
          <path
            d="M93 88L98 76L112 83L107 87L115 95L109 101L101 92L97 97L93 88Z"
            fill="#4A4A4A"
          />
          <defs>
            <linearGradient id="brandOrange" x1="20" y1="21" x2="108" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6A00" />
              <stop offset="1" stopColor="#FF8F3A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {!compact && (
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-white">Nerdycom</p>
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/45">Custom Systems</p>
        </div>
      )}
    </div>
  );
}

export default BrandLogo;
