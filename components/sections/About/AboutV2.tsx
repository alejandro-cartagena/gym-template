import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Dumbbell, Trophy } from "lucide-react";

// ── Data ───────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Dumbbell,
    title: "Serious Equipment",
    description:
      "A full gym floor loaded with free weights, machines, and everything serious lifters need to train hard and hit new PRs.",
  },
  {
    icon: Trophy,
    title: "IFBB Pro Guidance",
    description:
      "Train under the direct coaching of IFBB Pro Iramis Portero — championship experience you won't find at your average gym.",
  },
];

const stats = [
  { value: "IFBB", label: "Pro Certified Coach" },
  { value: "20+", label: "Years of Experience" },
];

// ── Section ────────────────────────────────────────────────────────────────────

export default function AboutV2() {
  const { branding } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-v2-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: branding.colors.background.primary }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:items-center">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: branding.colors.accent.primary }}
                aria-hidden="true"
              />
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: branding.colors.accent.primary }}
              >
                About The Gym
              </p>
            </div>

            {/* Heading */}
            <h2
              id="about-v2-heading"
              className="text-3xl font-extrabold uppercase tracking-tight leading-tight sm:text-4xl lg:text-5xl"
              style={{ color: branding.colors.text.primary }}
            >
              Train With Miami&apos;s IFBB Pro Coach
            </h2>

            {/* Description */}
            <p
              className="max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: branding.colors.text.secondary }}
            >
              Iramis Gym is built for people who are serious about results.
              Whether you&apos;re a first-time gym-goer or a seasoned competitor,
              you&apos;ll train in a no-nonsense environment led by an IFBB Pro
              with over two decades in the sport.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border p-5 shadow-md transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(145,23,31,0.18)]"
                  style={{
                    borderColor: branding.colors.border,
                    backgroundColor: branding.colors.background.primary,
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: branding.colors.accent.primary }}
                  >
                    <Icon size={18} color="#ffffff" />
                  </div>
                  <div>
                    <p
                      className="mb-1 text-base font-bold uppercase tracking-wide"
                      style={{ color: branding.colors.text.primary }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: branding.colors.text.secondary }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — image grid ────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            {/* Top image — gym floor */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/iramis-gym.jpg"
                alt="Inside Iramis Gym"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Bottom row: portrait image + stats card */}
            <div className="grid grid-cols-2 gap-3">
              {/* Portrait */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/iramis-hero-pic.jpg"
                  alt="Iramis Portero, IFBB Pro Coach"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Stats card */}
              <div
                className="flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl p-4 text-center"
                style={{ backgroundColor: branding.colors.accent.primary }}
              >
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-extrabold leading-none text-white sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-widest text-white/75">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
