import { motion } from 'framer-motion';

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="px-6 pb-12 pt-24 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 shadow-glow lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
