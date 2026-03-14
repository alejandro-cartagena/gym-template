"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bullets = [
  "Personal Training",
  "IFBB Pro Coaching",
  "Group Bootcamp",
  "Real Results, Guaranteed",
];

export interface HeroV2Props {
  titleLines?: string[];
  tagline?: string;
  imageUrl?: string;
  imageAlt?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}

export default function HeroV2({
  titleLines = ["Welcome to", "Iramis Gym"],
  tagline = "Home of IFBB Pro Iramis Portero. Real training. Real results.",
  imageUrl = "/images/iramis-gym.jpg",
  imageAlt = "Iramis Gym training floor in Miami",
  primaryCtaLabel = "Get Started Now",
  primaryCtaHref = "/#contact",
}: HeroV2Props) {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      {/* Background image with subtle zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative size-full animate-hero-zoom">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Gradient overlay — heavy on the left for readability, fades right */}
        <div
          className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/30"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col justify-center pb-16 pt-24">
        <Container className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

            {/* Left column — text content */}
            <div className="flex-1 max-w-2xl">

              {/* Overline badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                  aria-hidden
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  IFBB Pro Gym &middot; Miami, FL
                </span>
              </div>

              {/* Heading */}
              <h1
                className={`${mont.className} text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl`}
              >
                {titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Tagline */}
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                {tagline}
              </p>

              {/* Feature bullets */}
              <div className="mt-6 flex gap-x-6" role="list">
                {[bullets.slice(0, 2), bullets.slice(2)].map((col, colIdx) => (
                  <ul key={colIdx} className="flex flex-col gap-y-2">
                    {col.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <CheckCircle2
                          className="h-4 w-4 shrink-0"
                          style={{ color: "var(--accent-primary)" }}
                          aria-hidden
                        />
                        <span className="whitespace-nowrap text-sm text-white/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {/* CTA + social proof */}
              <div className="mt-8 flex flex-col gap-5">
                <div>
                  <Button
                    href={primaryCtaHref}
                    variant="primary"
                    className="px-7 py-3 text-sm sm:text-base"
                  >
                    {primaryCtaLabel}
                    <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden />
                  </Button>
                </div>

                {/* Google Rating row */}
                <div className="inline-flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2.5 backdrop-blur-sm w-fit">
                  <span className="text-xs font-semibold text-white/80">
                    Google Rating
                  </span>
                  <span className="text-sm font-bold text-white">4.9</span>
                  <div className="flex" aria-label="4.9 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/70">
                    Based on 150+ Reviews
                  </span>
                </div>
              </div>

            </div>

            {/* Right column — image card (hidden on mobile) */}
            <div className="hidden lg:block lg:w-96 xl:w-[28rem] shrink-0 self-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <Image
                  src="/images/iramis-hero-pic.jpg"
                  alt="Iramis Portero — IFBB Pro"
                  fill
                  sizes="(min-width: 1280px) 448px, 384px"
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom label overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                  <p className="text-sm font-semibold text-white">Iramis Portero</p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    IFBB Pro
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
