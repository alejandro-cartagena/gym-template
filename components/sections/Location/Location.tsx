"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

const ADDRESS = "2711 NW 17th Ave, Miami, FL 33142";
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.808!2d-80.2234092!3d25.8013433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6d7e3831fad%3A0xa81e45158df49b4d!2sIramis%20Gym!5e0!3m2!1sen!2sus!4v1741897234567!5m2!1sen!2sus";

const infoCards = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["2711 NW 17th Ave", "Miami, FL 33142"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [siteConfig.phone],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Mon – Fri: 4:30 AM – 10:30 PM", "Sat: 8 AM – 5 PM"],
  },
];

export default function Location() {
  const { colors } = siteConfig.branding;

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: colors.accent.primary }}
          >
            Find Us
          </p>
          <h2
            id="location-heading"
            className={`${mont.className} text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl`}
            style={{ color: colors.text.primary }}
          >
            Our Location
          </h2>
          <p
            className="max-w-xl text-sm leading-relaxed sm:text-base"
            style={{ color: colors.text.secondary }}
          >
            Come train with us. We&apos;re conveniently located in Miami — stop
            by anytime during our open hours.
          </p>
        </div>

        {/* Content: map + info cards */}
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Map embed */}
          <div
            className="overflow-hidden rounded-2xl border shadow-md"
            style={{ borderColor: colors.border }}
          >
            <iframe
              title="Iramis Gym location map"
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              className="min-h-[320px] w-full sm:min-h-[420px] lg:min-h-[480px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map(({ icon: Icon, label, lines }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm"
                style={{ borderColor: colors.border }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: colors.accent.primary,
                    color: colors.text.inverse,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: colors.accent.primary }}
                  >
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Directions CTA */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.accent.primary }}
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
