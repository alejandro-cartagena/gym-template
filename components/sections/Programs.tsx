"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { Montserrat } from "next/font/google";
import { Dumbbell, Trophy, TrendingUp, Sun, CalendarDays } from "lucide-react";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface ProgramFeature {
  text: string;
  withInfo?: boolean;
}

interface Program {
  id: string;
  title: string;
  tagline: string;
  price: string;
  pricePeriod: string;
  ctaText: string;
  ctaHref: string;
  isCurrentPlan?: boolean;
  isPopular?: boolean;
  icon: "monthly" | "yearly" | "sixmonths" | "daypass" | "weekly";
  features: ProgramFeature[];
}

const mainPlans: Program[] = [
  {
    id: "monthly",
    title: "Monthly",
    tagline: "Flexible month-to-month access",
    price: "50",
    pricePeriod: "/month",
    ctaText: "Get Started",
    ctaHref: "/#contact",
    isPopular: false,
    icon: "monthly",
    features: [
      { text: "Unlimited gym access" },
      { text: "Locker room & showers" },
      { text: "Access to all equipment" },
      { text: "Group fitness classes" },
    ],
  },
  {
    id: "yearly",
    title: "1 Year Upfront",
    tagline: "Best value — save big annually",
    price: "480",
    pricePeriod: "/year",
    ctaText: "Get Annual",
    ctaHref: "/#contact",
    isPopular: true,
    icon: "yearly",
    features: [
      { text: "Unlimited gym access" },
      { text: "Locker room & showers" },
      { text: "Access to all equipment" },
      { text: "Group fitness classes" },
      { text: "1 free personal training session/month" },
      { text: "Nutrition guidance" },
    ],
  },
  {
    id: "sixmonths",
    title: "6 Months Upfront",
    tagline: "Commit to 6 months & save",
    price: "270",
    pricePeriod: "/6 months",
    ctaText: "Get 6-Month Plan",
    ctaHref: "/#contact",
    isPopular: false,
    icon: "sixmonths",
    features: [
      { text: "Unlimited gym access" },
      { text: "Locker room & showers" },
      { text: "Access to all equipment" },
      { text: "Group fitness classes" },
      { text: "2 free personal training sessions" },
    ],
  },
];

const passPlans: Program[] = [
  {
    id: "daypass",
    title: "Day Pass",
    tagline: "Drop in for a single session",
    price: "15",
    pricePeriod: "/day",
    ctaText: "Get Day Pass",
    ctaHref: "/#contact",
    isPopular: false,
    icon: "daypass",
    features: [
      { text: "Full gym access for 1 day" },
      { text: "Locker room & showers" },
      { text: "Access to all equipment" },
    ],
  },
  {
    id: "weekly",
    title: "Weekly Pass",
    tagline: "Train all week, no commitment",
    price: "40",
    pricePeriod: "/week",
    ctaText: "Get Weekly Pass",
    ctaHref: "/#contact",
    isPopular: false,
    icon: "weekly",
    features: [
      { text: "Full gym access for 7 days" },
      { text: "Locker room & showers" },
      { text: "Access to all equipment" },
      { text: "Group fitness classes" },
    ],
  },
];

const iconMap = {
  monthly: Dumbbell,
  yearly: Trophy,
  sixmonths: TrendingUp,
  daypass: Sun,
  weekly: CalendarDays,
} as const;

function ProgramIcon({ type }: { type: Program["icon"] }) {
  const { accent, text } = siteConfig.branding.colors;
  const Icon = iconMap[type];

  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: accent.primary, color: text.inverse }}
      aria-hidden
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const { colors } = siteConfig.branding;
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative flex flex-col rounded-2xl border bg-white p-6 ring-1 ring-black/5 sm:p-8"
      style={{
        borderColor: hovered ? colors.accent.primary : colors.border,
        boxShadow: hovered
          ? `0 20px 40px -8px ${colors.accent.primary}55, 0 8px 20px -4px ${colors.accent.primary}30`
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {program.isPopular && (
        <div
          className="absolute -right-2 top-4 rotate-12 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow"
          style={{ backgroundColor: colors.accent.primary }}
        >
          Popular
        </div>
      )}

      <div className="flex items-start gap-3">
        <ProgramIcon type={program.icon} />
        <div className="min-w-0 flex-1">
          <h3
            className={`${mont.className} text-lg font-bold sm:text-xl`}
            style={{ color: colors.text.primary }}
          >
            {program.title}
          </h3>
          <p
            className="mt-0.5 text-sm"
            style={{ color: colors.text.secondary }}
          >
            {program.tagline}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-baseline gap-0">
        <span
          className={`${mont.className} text-3xl font-bold sm:text-4xl`}
          style={{ color: colors.text.primary }}
        >
          ${program.price}
        </span>
        <span
          className="text-sm"
          style={{ color: colors.text.secondary }}
        >
          {program.pricePeriod}
        </span>
      </div>

      <div className="mt-6">
        {program.isCurrentPlan ? (
          <button
            type="button"
            disabled
            className="w-full rounded-lg border py-2.5 px-4 text-sm font-semibold transition cursor-not-allowed opacity-70"
            style={{
              borderColor: colors.border,
              color: colors.text.secondary,
              backgroundColor: colors.background.secondary,
            }}
          >
            Current plan
          </button>
        ) : (
          <Button
            href={program.ctaHref}
            variant="primary"
            className="w-full justify-center rounded-lg py-2.5 text-sm font-semibold"
          >
            {program.ctaText}
          </Button>
        )}
      </div>

      <div className="mt-8 border-t pt-6" style={{ borderColor: colors.border }}>
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: colors.text.secondary }}
        >
          What&apos;s included
        </p>
        <ul className="flex flex-col gap-3">
          {program.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm"
              style={{ color: colors.text.secondary }}
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: colors.accent.primary }}
                aria-hidden
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{feature.text}</span>
              {feature.withInfo && (
                <button
                  type="button"
                  className="shrink-0 rounded-full p-0.5 transition hover:opacity-80"
                  style={{ color: colors.text.secondary }}
                  aria-label="More info"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Programs() {
  const { colors } = siteConfig.branding;

  return (
    <section
      id="programs"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background.primary }}
      aria-labelledby="programs-heading"
    >
      <Container>
        <header className="text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: colors.accent.primary }}
          >
            Membership
          </span>
          <h2
            id="programs-heading"
            className={`${mont.className} mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl`}
            style={{ color: colors.text.primary }}
          >
            Pricing
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base sm:text-lg"
            style={{ color: colors.text.secondary }}
          >
            Flexible membership options to fit your schedule and budget. No hidden fees — just results.
          </p>
        </header>

        {/* Row 1 — 3 main membership plans */}
        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {mainPlans.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Row 2 — 2 pass options, centered */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:max-w-2xl md:mx-auto">
          {passPlans.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
