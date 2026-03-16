import Image from "next/image";
import Container from "@/components/ui/Container";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Coach {
  name: string;
  role: string;
  image: string;
}

// ── Coach data ────────────────────────────────────────────────────────────────

const coaches: Coach[] = [
  {
    name: "Iramis Portero",
    role: "Strength Coach",
    image:
      "/images/iramis-pose.jpg",
  },
  {
    name: "Nathaniel Montgomery",
    role: "Trainer & HIIT Specialist",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop&crop=top&q=80",
  },
  {
    name: "Victoria Kensington",
    role: "Fitness & Spin Class Trainer",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop&crop=top&q=80",
  },
  {
    name: "Maximilian Donovan Lee",
    role: "Nutrition & Fitness",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop&crop=top&q=80",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CoachCard({ name, role, image }: Coach) {
  return (
    <div className="group">
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-(--bg-primary)">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-(--text-primary)">
        {name}
      </p>
      <p className="text-xs text-(--text-primary)/60">{role}</p>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function OurCoaches() {
  return (
    <section className="w-full py-16 md:py-20 bg-(--bg-secondary)">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--accent-primary)">
            The Team
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl md:text-5xl">
            Meet Your Coaches
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-(--text-primary)/60 sm:text-lg">
            World-class trainers dedicated to pushing you beyond your limits and
            helping you become the best version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} {...coach} />
          ))}
        </div>
      </Container>
    </section>
  );
}
