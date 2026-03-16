const items = [
  "Train Hard",
  "IFBB Pro",
  "Bodybuilding",
  "Real Results",
  "No Excuses",
  "Personal Training",
  "Bootcamp",
  "Heavy Iron",
  "Miami Gym",
  "Champions",
  "Strength",
];

export default function TextMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[var(--accent-primary)] py-8">
      <div className="flex w-max min-w-max items-center animate-marquee-ltr will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap font-bold uppercase tracking-widest text-lg text-white">
              {item}
            </span>
            <span className="mx-4 text-white/50 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
