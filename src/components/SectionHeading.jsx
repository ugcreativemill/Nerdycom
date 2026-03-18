function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-muted md:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeading;
