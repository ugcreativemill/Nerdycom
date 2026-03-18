import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow">
      <div className="mb-8 flex items-start justify-between">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
          {project.category}
        </span>
        <ArrowUpRight className="text-brand transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
    </article>
  );
}

export default ProjectCard;
