import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, shopUrl } from '../data/siteData';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link to="/" className="shrink-0">
          <BrandLogo className="gap-4" />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-brand text-black'
                      : 'text-white/75 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={shopUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
            >
              Shop
            </a>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <ThemeToggle iconOnly />
          <a
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink transition hover:border-brand/40 hover:text-brand"
          >
            Shop
          </a>
          <Link
            to="/contact"
            className="rounded-full border border-brand/50 bg-brand px-5 py-2.5 text-sm font-medium text-black transition hover:bg-brandSoft"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-3 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/90 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-sm text-white/70">Theme</span>
                <ThemeToggle iconOnly />
              </div>
              {navLinks.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl border px-4 py-3 text-sm ${
                      isActive
                        ? 'border-brand/30 bg-brand/10 text-brand'
                        : 'border-white/10 text-white/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={shopUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/80"
              >
                Shop
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-black"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
