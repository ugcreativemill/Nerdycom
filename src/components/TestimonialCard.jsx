function TestimonialCard({ item }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20">
      <p className="text-base leading-8 text-white/85">"{item.quote}"</p>
      <div className="mt-6">
        <p className="font-display text-lg font-semibold text-white">{item.name}</p>
        <p className="text-sm text-muted">{item.role}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
