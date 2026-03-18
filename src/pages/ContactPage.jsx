import { useState } from 'react';
import { MapPin, MessageCircleMore, PhoneCall, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Seo
        title="Contact | Nerdycom"
        description="Contact Nerdycom for custom software, hardware sales, website design, and IT support solutions."
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to Nerdycom about your next IT project"
        description="Tell us what you need and we&apos;ll help you shape the right mix of software, hardware, support, or web solutions."
      />

      <AnimatedSection className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <SectionHeading
              eyebrow="Send a Message"
              title="We usually reply quickly with a practical next step"
              description="Use the contact form for project discussions, pricing questions, or support requests."
            />
            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm text-white/70">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-brand/60"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm text-white/70">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-brand/60"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm text-white/70">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project or support need"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-brand/60"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-medium text-black transition hover:bg-brandSoft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
              {submitted && (
                <p className="rounded-2xl border border-brand/30 bg-brand/10 px-4 py-3 text-sm text-brandSoft">
                  Message queued successfully. Connect a backend or email service to make submissions live.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="font-display text-2xl font-semibold text-white">Direct Contact</h3>
              <div className="mt-8 space-y-5">
                <a
                  href="tel:+256771495252"
                  className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-white transition hover:border-brand/40"
                >
                  <PhoneCall className="text-brand" />
                  <span>+256 771 495 252</span>
                </a>
                <a
                  href="https://wa.me/256771495252"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-white transition hover:border-brand/40"
                >
                  <MessageCircleMore className="text-brand" />
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-white">
                  <MapPin className="text-brand" />
                  <span>Kabaka Kintu House, Kampala, Uganda</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel">
              <iframe
                title="Nerdycom location"
                src="https://www.google.com/maps?q=Kabaka%20Kintu%20House%2C%20Kampala%2C%20Uganda&z=16&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;
