import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl" />
              <BrandLogo />
            </motion.div>

            <div className="relative h-2 w-56 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '220%' }}
                transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-20 rounded-full bg-brand"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  animate={{ opacity: [0.25, 1, 0.25], y: [0, -6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: item * 0.14 }}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]"
                />
              ))}
            </div>

            <p className="text-xs uppercase tracking-[0.38em] text-white/55">Booting Digital Systems</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
