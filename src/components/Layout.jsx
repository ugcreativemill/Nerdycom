import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Preloader from './Preloader';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface text-ink transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:80px_80px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-80 h-80 w-80 rounded-full bg-white/5 blur-[130px]" />
      <div className="pointer-events-none absolute left-16 top-96 h-64 w-64 rounded-full bg-brand/10 blur-[140px]" />
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
