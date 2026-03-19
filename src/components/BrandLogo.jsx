import logo from '../assets/nerdycom-logo.png';

function BrandLogo({ className = '', compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.18),transparent_68%)] blur-xl" />
        <img
          src={logo}
          alt="Nerdycom logo"
          className="relative h-12 w-12 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
        />
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
