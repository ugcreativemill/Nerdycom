import { motion } from 'framer-motion';

function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-[1.75rem] border border-white/10 bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
        <Icon size={28} />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
      {service.points && (
        <ul className="mt-6 space-y-3 text-sm text-white/80">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}

export default ServiceCard;
