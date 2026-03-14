import Image from "next/image";
import Container from "@/components/ui/Container";
import { Trophy, Dumbbell, TrendingUp, Users, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Trophy,
    title: "IFBB Pro Coaching",
    description:
      "Train under the direct guidance of IFBB Pro Iramis Portero, a world-class competitor with proven championship credentials.",
  },
  {
    icon: Dumbbell,
    title: "Serious Training Floor",
    description:
      "No distractions, no nonsense. A professional environment built for athletes who come here to work.",
  },
  {
    icon: TrendingUp,
    title: "Real, Measurable Results",
    description:
      "Structured programming and accountability that drives real transformations — not just promises.",
  },
  {
    icon: Users,
    title: "Tight-Knit Community",
    description:
      "Surround yourself with driven, like-minded athletes who push each other to new levels every session.",
  },
];

export default function Credibility() {
  return (
    <section className="w-full py-20 bg-[var(--bg-secondary)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Why Train Here
          </h2>
          <p className="text-lg text-[var(--text-primary)]/60 max-w-xl mx-auto">
            A serious gym environment built for real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl min-h-[280px] p-8 bg-[var(--bg-primary)] transition-all duration-300 cursor-default flex flex-col"
            >
              {/* bg image layer — fades in on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src="/images/iramis-gym.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-black/65" />
              </div>

              {/* content layer */}
              <div className="relative z-10 flex flex-col h-full">
                {/* top row: icon badge + number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-[var(--accent-primary)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold tabular-nums text-[var(--text-primary)]/25 group-hover:text-white/40 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-white mb-3 transition-colors duration-300">
                  {title}
                </h3>

                {/* description */}
                <p className="text-[var(--text-primary)]/60 group-hover:text-white/70 leading-relaxed mb-6 flex-1 transition-colors duration-300">
                  {description}
                </p>

                {/* bottom link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] group-hover:text-white transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
