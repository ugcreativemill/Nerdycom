import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { designProcess, portfolioProjects } from '../data/siteData';

function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio | Nerdycom"
        description="See Nerdycom projects across websites, POS systems, dashboards, and custom business systems."
      />
      <PageHero
        eyebrow="Portfolio"
        title="Websites, business systems, and custom platforms designed around real operations"
        description="We do more than build pretty interfaces. Nerdycom designs systems that fit the way teams sell, serve clients, manage operations, and grow."
      />

      <AnimatedSection className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Built for businesses that need structure, speed, and flexibility"
            description="Our portfolio spans customer-facing websites, internal systems, operational dashboards, and tailored software built from the ground up."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.name}
                  className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <span className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-brand">
                        {project.type}
                      </span>
                      <h3 className="font-display text-3xl font-semibold text-white">{project.name}</h3>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                      <Icon size={26} />
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-8 text-muted">{project.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 lg:px-8" delay={0.08}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <SectionHeading
              eyebrow="Custom Systems"
              title="We design systems around your business, not around templates"
              description="If your company has unique approvals, workflows, team roles, or service operations, we map that logic into a clean system instead of forcing you into generic software."
            />
          </div>
          <div className="grid gap-4">
            {designProcess.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.16),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-brand/80 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-brand">Step 0{index + 1}</p>
                    <p className="mt-3 text-lg leading-8 text-white/85 transition duration-300 group-hover:text-white">
                      {item}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-1 text-brand"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-24 lg:px-8" delay={0.12}>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-brand/20 bg-[linear-gradient(135deg,rgba(255,106,0,0.18),rgba(255,255,255,0.03),rgba(255,106,0,0.1))] p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand">Need Something Custom?</p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s design a system that actually fits your workflow.
            </h2>
            <p className="text-lg leading-8 text-white/75">
              From system planning to final interface design and development, Nerdycom can shape a platform around your business model.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-brand px-6 py-3.5 font-medium text-black transition hover:bg-brandSoft lg:mt-0"
          >
            Start Your Project
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}

export default PortfolioPage;
