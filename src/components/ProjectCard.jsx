import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:border-brand/40 hover:shadow-glow"
    >
      <div className="mb-8 flex items-start justify-between">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
          {project.category}
        </span>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowUpRight className="text-brand transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.div>
      </div>
      <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
    </motion.article>
  );
}

export default ProjectCard;
