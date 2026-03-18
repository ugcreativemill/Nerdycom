import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle({ iconOnly = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink transition hover:border-brand/40 hover:text-brand ${
        iconOnly ? 'h-11 w-11' : 'gap-2 px-4 py-2.5 text-sm'
      }`}
    >
      {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
      {!iconOnly && <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>}
    </button>
  );
}

export default ThemeToggle;
