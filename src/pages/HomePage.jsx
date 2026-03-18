import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LaptopMinimal, MoveRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { projects, services, shopUrl, stats, testimonials, whyChooseUs } from '../data/siteData';

function HomePage() {
  return (
    <>
      <Seo
        title="Nerdycom | Smart IT Solutions for Modern Businesses"
        description="Nerdycom provides software, hardware, website design, and reliable IT support for modern businesses."
      />

      <section className="relative px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand"
              >
                Future-ready IT partner
              </motion.span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/65"
              >
                Hardware . Software . Support
              </motion.span>
            </div>
            <div className="space-y-6">
              <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Smart IT Solutions for Modern Businesses
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                We provide cutting-edge software, hardware, websites, custom systems, and digital solutions built around how real businesses work.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-black transition hover:bg-brandSoft"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-brand/40 hover:text-brand"
              >
                View Services
                <MoveRight size={18} />
              </Link>
              <a
                href={shopUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/30 px-6 py-3.5 font-medium text-white transition hover:border-brand/40 hover:text-brand"
              >
                Visit Shop
                <ShoppingBag size={18} />
              </a>
            </div>
            <div className="grid gap-4 lg:max-w-2xl lg:grid-cols-2">
              <motion.a
                href={shopUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5"
              >
                <div className="flex items-center justify-between">
                  <LaptopMinimal className="text-brand" />
                  <span className="text-xs uppercase tracking-[0.24em] text-white/45">Laptop Shop</span>
                </div>
                <p className="mt-4 text-xl font-semibold text-white">Need laptops and business hardware?</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Browse the shop for laptops, accessories, and office-ready devices.
                </p>
              </motion.a>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-[1.5rem] border border-brand/20 bg-brand/10 p-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-brandSoft">Custom Build Flow</p>
                <p className="mt-4 text-xl font-semibold text-white">Shop products. Request custom systems. Get support.</p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  One brand, one digital experience, multiple ways to serve your business.
                </p>
              </motion.div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute inset-8 rounded-[2.5rem] border border-brand/20" />
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 top-6 z-10 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-brand">System Node</p>
              <p className="mt-1 text-sm text-white/75">Workflow sync active</p>
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 bottom-8 z-10 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-brand">Hardware Shop</p>
              <p className="mt-1 text-sm text-white/75">Laptops ready for dispatch</p>
            </motion.div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,106,0,0.18),rgba(255,255,255,0.06)_35%,rgba(255,255,255,0.01)_65%,rgba(255,106,0,0.12))] p-6 shadow-glow">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                  <span className="h-3 w-3 rounded-full bg-white/40" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                </div>
                <div className="mb-4 flex items-center gap-3 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <motion.div
                    animate={{ x: ['-120%', '180%'] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
                    className="h-1.5 w-20 rounded-full bg-brand"
                  />
                  <p className="text-sm text-white/65">Syncing shop inventory, support tickets, and business workflows</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5">
                    <p className="text-sm text-white/60">Deployment Status</p>
                    <p className="mt-8 font-display text-4xl font-semibold text-white">Live</p>
                    <p className="mt-2 text-sm text-muted">Secure systems delivered with measurable speed.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-brand/20 bg-[linear-gradient(160deg,rgba(255,106,0,0.24),rgba(255,106,0,0.08))] p-5">
                    <p className="text-sm text-brandSoft">Active Services</p>
                    <p className="mt-8 font-display text-4xl font-semibold text-white">04</p>
                    <p className="mt-2 text-sm text-white/70">Built around business growth and operational clarity.</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-white">System Performance</p>
                      <p className="text-brand">98%</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[98%] rounded-full bg-brand" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.28em] text-white/45">Focus</p>
                    <p className="mt-3 text-lg text-white">Clean delivery for teams that want less friction and better systems.</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/40 p-5">
                    <p className="text-sm text-white/60">Response Time</p>
                    <p className="mt-3 font-display text-3xl text-white">&lt; 2h</p>
                    <p className="mt-2 text-sm text-muted">Fast support for critical operational issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="Technology services designed to keep your business moving"
            description="From devices and websites to custom software, tailored systems, and daily support, Nerdycom covers the core systems modern teams rely on."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 lg:px-8" delay={0.08}>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,106,0,0.14),rgba(255,255,255,0.02))] p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand">Nerdycom Shop</p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Looking for laptops, accessories, and ready-to-buy hardware?
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/75">
              The main site handles your brand, services, and custom systems. The shop handles the products. We connect both so customers move cleanly between them.
            </p>
          </div>
          <motion.a
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-black transition hover:bg-brandSoft"
          >
            Open Shop
            <ShoppingBag size={18} />
          </motion.a>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 lg:px-8" delay={0.1}>
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="About Nerdycom"
              title="A practical IT partner with a modern product mindset"
              description="We help businesses replace friction with systems that are faster, clearer, and easier to scale. Our team blends technical execution with business understanding."
            />
          </div>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-brand/40 px-6 py-3 font-medium text-brand transition hover:bg-brand hover:text-black"
          >
            Learn More
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 lg:px-8" delay={0.1}>
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Portfolio"
            title="Websites, dashboards, POS tools, and custom systems built for real operations"
            description="A preview of the business platforms and digital experiences we design for teams that need better structure and cleaner execution."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div>
            <Link
              to="/portfolio"
              className="inline-flex rounded-full border border-brand/40 px-6 py-3 font-medium text-brand transition hover:bg-brand hover:text-black"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 lg:px-8" delay={0.15}>
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Reliable execution without unnecessary complexity"
            description="We focus on shipping the right solution fast, keeping systems dependable, and staying responsive when your business needs support."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-panelSoft p-5"
              >
                <motion.div
                  animate={{ x: ['-120%', '180%'] }}
                  transition={{ duration: 3.4 + index * 0.25, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-brand/10 to-transparent"
                />
                <div className="relative flex items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -4, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 2.8 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-brand/20 blur-md" />
                    <CheckCircle2 className="relative text-brand" />
                  </motion.div>
                  <p className="text-lg text-white transition duration-300 group-hover:text-brandSoft">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 lg:px-8" delay={0.18}>
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams that need practical technology results"
            description="A few examples of how clients describe working with Nerdycom."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-24 pt-20 lg:px-8" delay={0.2}>
        <motion.div
          animate={{ boxShadow: ['0 0 0 rgba(255,106,0,0)', '0 0 40px rgba(255,106,0,0.12)', '0 0 0 rgba(255,106,0,0)'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto max-w-7xl rounded-[2rem] border border-brand/20 bg-gradient-to-r from-brand/20 via-brand/10 to-transparent p-8 lg:flex lg:items-center lg:justify-between lg:p-10"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand">Let&apos;s Build</p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Ready to grow your business with Nerdycom?
            </h2>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 font-medium text-black transition hover:bg-brandSoft lg:mt-0"
          >
            Contact Us
          </Link>
        </motion.div>
      </AnimatedSection>
    </>
  );
}

export default HomePage;
