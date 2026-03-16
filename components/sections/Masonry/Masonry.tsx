"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

const masonryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=1200&fit=crop&q=80",
    alt: "Gym floor with free weights and equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=1200&fit=crop&q=80",
    alt: "Athlete performing a heavy barbell lift",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=1200&fit=crop&q=80",
    alt: "Man training with dumbbells in the gym",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&h=600&fit=crop&q=80",
    alt: "Wide shot of a well-equipped gym interior",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&h=600&fit=crop&q=80",
    alt: "Athlete doing cardio training",
  },
  {
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=1200&fit=crop&q=80",
    alt: "Powerlifter pulling a heavy deadlift",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&h=1200&fit=crop&q=80",
    alt: "Athlete squatting heavy weight",
  },
  {
    src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=900&h=600&fit=crop&q=80",
    alt: "Row of treadmills and cardio machines",
  },
  {
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=900&h=600&fit=crop&q=80",
    alt: "Modern gym interior with cable machines",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=1200&fit=crop&q=80",
    alt: "Athlete working out with intensity",
  },
 
] as const;

export default function Masonry() {
  const { branding } = siteConfig;

  return (
    <section
      id="gym-gallery"
      aria-labelledby="gym-gallery-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `
          radial-gradient(circle at top, ${branding.colors.accent.primary}22 0, transparent 55%),
          linear-gradient(to bottom, ${branding.colors.background.primary}, ${branding.colors.background.secondary})
        `,
      }}
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: branding.colors.accent.primary }}
          >
            Inside the Gym
          </p>
          <h2
            id="gym-gallery-heading"
            className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: branding.colors.text.primary }}
          >
            Train Hard. Live Strong.
          </h2>
          <p
            className="max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{ color: branding.colors.text.secondary }}
          >
            A raw look at the training ground, the equipment, and the culture
            that makes results happen.
          </p>
        </div>
      </div>

      {/* Masonry grid — full bleed */}
      <div className="mt-10 columns-1 gap-4 px-4 sm:columns-2 sm:px-6 md:gap-5 lg:columns-3 lg:gap-6 lg:px-10">
        {masonryImages.map((image) => (
          <figure
            key={image.src}
            className="group mb-4 overflow-hidden rounded-2xl border shadow-[0_18px_45px_rgba(0,0,0,0.15)] break-inside-avoid"
            style={{
              borderColor: branding.colors.border,
              backgroundColor: branding.colors.background.primary,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
