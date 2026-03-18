import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { detailedServices } from '../data/siteData';

function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Nerdycom"
        description="Explore Nerdycom services including hardware sales, software development, website design, and managed IT support."
      />
      <PageHero
        eyebrow="What We Do"
        title="Business-focused technology services with modern execution"
        description="We combine technical depth with clean delivery across hardware, software, websites, and support operations."
      />

      <AnimatedSection className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Core Services"
            title="Built to support everyday operations and long-term growth"
            description="Each service is structured to solve a concrete business problem while staying scalable as your needs expand, including systems designed specifically around your workflow."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {detailedServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-24 pt-4 lg:px-8" delay={0.1}>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-panel p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand">Need A Solution?</p>
            <h2 className="font-display text-3xl font-semibold text-white">
              Let&apos;s map the right service mix for your business.
            </h2>
            <p className="text-lg leading-8 text-muted">
              We can help you combine hardware, software, digital presence, and support into one clear delivery plan.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <Link
              to="/contact"
              className="rounded-full bg-brand px-6 py-3.5 text-center font-medium text-black transition hover:bg-brandSoft"
            >
              Start a Project
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/10 px-6 py-3.5 text-center font-medium text-white transition hover:border-brand/40 hover:text-brand"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ServicesPage;
