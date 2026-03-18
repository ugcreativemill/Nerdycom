import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { highlights } from '../data/siteData';

const team = [
  {
    name: 'Tech Strategy Lead',
    description: 'Shapes delivery plans, infrastructure decisions, and client technology roadmaps.',
  },
  {
    name: 'Product Engineer',
    description: 'Builds internal systems, dashboards, and customer-facing digital products.',
  },
  {
    name: 'Support Specialist',
    description: 'Keeps day-to-day operations stable with fast troubleshooting and maintenance.',
  },
];

function AboutPage() {
  return (
    <>
      <Seo
        title="About | Nerdycom"
        description="Learn about Nerdycom's company story, mission, vision, and the team behind its modern IT solutions."
      />
      <PageHero
        eyebrow="About Us"
        title="Technology support built around clarity, speed, and trust"
        description="Nerdycom was created to help businesses access modern IT solutions without the usual complexity, delays, and fragmented delivery."
      />

      <AnimatedSection className="px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <SectionHeading
              eyebrow="Our Story"
              title="From support requests to scalable solutions"
              description="We saw a common pattern: businesses needed reliable technology partners who could handle both urgent operational issues and long-term digital growth. Nerdycom was built to close that gap."
            />
            <p className="text-base leading-8 text-muted">
              Today, we deliver software systems, websites, device solutions, and responsive IT support with a practical approach. We focus on clean execution, measurable value, and relationships that last beyond launch day.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[2rem] border border-white/10 bg-panel p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-24 lg:px-8" delay={0.1}>
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Team"
            title="A lean team with product thinking and support discipline"
            description="We bring together business understanding, engineering execution, and dependable client support."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-[1.75rem] border border-white/10 bg-panelSoft p-6">
                <div className="mb-6 h-52 rounded-[1.5rem] bg-gradient-to-br from-brand/30 via-white/5 to-transparent" />
                <h3 className="font-display text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default AboutPage;
