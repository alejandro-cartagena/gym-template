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
    <div className="w-full overflow-hidden bg-[var(--accent-primary)] py-6">
      <div className="flex w-max min-w-max items-center animate-marquee-ltr will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap font-bold uppercase tracking-widest text-base text-white">
              {item}
            </span>
            <span className="mx-4 text-white/50 text-base">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
