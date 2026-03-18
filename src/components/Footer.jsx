import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { shopUrl } from '../data/siteData';
import BrandLogo from './BrandLogo';

const socials = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-4">
          <Link to="/" className="inline-flex">
            <BrandLogo />
          </Link>
          <p className="text-sm leading-7 text-muted">
            Modern software, hardware, websites, and custom systems for businesses that want to move faster.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Company</p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <a href={shopUrl} target="_blank" rel="noreferrer">
                Shop
              </a>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contact</p>
            <div className="space-y-2 text-sm text-muted">
              <a href="tel:+256771495252" className="flex items-center gap-2">
                <Phone size={16} />
                +256 771 495 252
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Kabaka Kintu House, Kampala
              </p>
              <a href="mailto:info@nerdycom.io" className="flex items-center gap-2">
                <Mail size={16} />
                info@nerdycom.io
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Follow</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/10 p-3 text-muted transition hover:border-brand/40 hover:text-brand"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-muted">
        Copyright {new Date().getFullYear()} Nerdycom. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
