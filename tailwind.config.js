/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        panelSoft: 'rgb(var(--panel-soft) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        brandSoft: 'rgb(var(--brand-soft) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,106,0,0.25), 0 12px 60px rgba(255,106,0,0.15)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
