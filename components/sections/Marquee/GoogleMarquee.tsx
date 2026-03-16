"use client";

import { siteConfig } from "@/config/site";

// ── Types ─────────────────────────────────────────────────────────────────────

interface GoogleReview {
  id: string;
  name: string;
  initials: string;
  rating: number;
  timeAgo: string;
  text: string;
}

// ── Review data ───────────────────────────────────────────────────────────────

const reviewsRow1: GoogleReview[] = [
  {
    id: "1",
    name: "Francheska Hernandez",
    initials: "FH",
    rating: 5,
    timeAgo: "4 months ago",
    text: "I've been coming to this gym for a few months now and I'm really impressed! The equipment is always clean and well-maintained, and there's plenty of space even during peak hours. The trainers are super knowledgeable and motivating — they really help you reach your goals without feeling overwhelmed. I've noticed great results already. Highly recommend this gym to anyone serious about their fitness!",
  },
  {
    id: "2",
    name: "Yuly Murillo",
    initials: "YM",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Exelente el mejor gym de Allaphata se los recomiendo lo mejor gracias ala entrenadora por mis cambios",
  },
  {
    id: "3",
    name: "Osmany MG",
    initials: "OM",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Excelente lugar. Equipos y servicios al 100 por ciento. Muy recomendable.",
  },
  {
    id: "4",
    name: "Senen Delgado",
    initials: "SD",
    rating: 5,
    timeAgo: "11 months ago",
    text: "Excelente Gym. Horas impeccable ya que puedes entrenar desde las 430 am que estan abierto. Es un Gym old school. El Cual me encanta porque nunca a tenido aire condicionado. En un gym se viene a sudar no a tirase selfie. El servicio al cliente es excellent. Maquinas de la vieja escuela. The best in the area.",
  },
  {
    id: "9",
    name: "georgia Anderson",
    initials: "GA",
    rating: 5,
    timeAgo: "2 years ago",
    text: "I called this morning didn't get a answer. Within five minutes I got a call back. The person was very pleasant and answered all my questions. I asked could I stop by she said absolutely. I did and was very impressed, the visit was very welcoming and I will definitely be joining. First impressions are everything.",
  },
  {
    id: "10",
    name: "Ashanti Hernandez",
    initials: "AH",
    rating: 5,
    timeAgo: "6 years ago",
    text: "At Iramis fitness center I have recollected my mental and physical strength. Providing me with the proper fundamentals in training and supplying me with confidence and reassurance of my potential. I recommend this fitness center for any level you may be at. I have learned proper technique and the correct nutrition I need for my body. Get out there and prove to yourself you have what it takes. Iramis will take you there! It's not only a professional fitness center but also a wonderful and unique family community.",
  },
  {
    id: "11",
    name: "Milton Hernandez",
    initials: "MH",
    rating: 5,
    timeAgo: "7 months ago",
    text: "It's got all you need, nice people and the temperature is perfect for training.",
  },
];

const reviewsRow2: GoogleReview[] = [
  {
    id: "5",
    name: "Anaela Rosales",
    initials: "AR",
    rating: 5,
    timeAgo: "6 months ago",
    text: "I love it here , they have the best machines ,and the lady is really nice , good music too",
  },
  {
    id: "6",
    name: "Jacob Alvarez",
    initials: "JA",
    rating: 5,
    timeAgo: "11 months ago",
    text: "Buena buena gente íramis gym es un gimnasio espacioso bueno a mi personal me gusta el ambiente tiene de toda máquina me siento bien así que vamos hay que visitarlo el personal es calidad vamos hay que animarse a visitar le agradeceríamos muchísimo mucho",
  },
  {
    id: "7",
    name: "Dayana Suarez",
    initials: "DS",
    rating: 5,
    timeAgo: "a year ago",
    text: "Amazing gym owner Iramis is a very lovely person and will train you to meet your expectations. 100% recommended zero doubts.",
  },
  {
    id: "8",
    name: "Louis Hernandez",
    initials: "LH",
    rating: 5,
    timeAgo: "11 months ago",
    text: "First time coming here the vibes were good was well equipped with all types of gym equipment and the people were super nice",
  },
  {
    id: "12",
    name: "Aldo Castillo",
    initials: "AC",
    rating: 5,
    timeAgo: "2 years ago",
    text: "Great gym have the best music and the people that work there are amazing the atmosphere is very energetic and positive I wouldn't go to any other gym",
  },
  {
    id: "13",
    name: "Jose Hernandez",
    initials: "JH",
    rating: 5,
    timeAgo: "3 years ago",
    text: "An amazing place where I started as a 14 year old and it impressed me the people are so nice and the gym is very clean and organized I'm glad to have chosen Iramis.",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function GoogleLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
      role="img"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          // biome-ignore lint/suspicious/noArrayIndexKey: static list
          key={i}
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={i < rating ? "#FBBC04" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  const { colors } = siteConfig.branding;
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
      style={{
        backgroundColor: `${colors.accent.primary}22`,
        color: colors.accent.primary,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const { colors } = siteConfig.branding;
  return (
    <article
      className="flex w-[280px] shrink-0 flex-col rounded-2xl p-5 sm:w-[320px]"
      style={{
        backgroundColor: colors.background.primary,
        border: `1px solid ${colors.border}`,
        boxShadow:
          "0 1px 4px rgba(0,0,0,0.06), 0 4px 14px rgba(0,0,0,0.04)",
      }}
      aria-label={`Review by ${review.name}`}
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <StarRating rating={review.rating} />
        <GoogleLogo />
      </div>

      <p
        className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed"
        style={{ color: colors.text.secondary }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      <div
        className="mb-3 h-px"
        style={{ backgroundColor: colors.border }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-3">
        <Avatar initials={review.initials} />
        <div className="min-w-0">
          <p
            className="truncate text-sm font-semibold"
            style={{ color: colors.text.primary }}
          >
            {review.name}
          </p>
          <p className="text-xs" style={{ color: colors.text.secondary }}>
            {review.timeAgo} · Google Review
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeTrack({
  reviews,
  direction,
}: {
  reviews: GoogleReview[];
  direction: "rtl" | "ltr";
}) {
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div
        className={`flex w-max min-w-max gap-5 pr-5 will-change-transform ${
          direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
        }`}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function GoogleMarquee() {
  const { branding, name, location, rating, reviewCount } = siteConfig;
  const { colors } = branding;

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-20"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: colors.accent.primary }}
        >
          Member Reviews
        </span>
        <h2
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{ color: colors.text.primary }}
        >
          Trusted by Members in {location}
        </h2>
        <p
          className="mx-auto mt-3 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: colors.text.secondary }}
        >
          See why members choose {name} to crush their fitness goals — straight
          from Google Reviews.
        </p>

        {rating !== undefined && reviewCount !== undefined && (
          <div
            className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 shadow-sm"
            style={{
              backgroundColor: colors.background.primary,
              border: `1px solid ${colors.border}`,
            }}
          >
            <GoogleLogo />
            <div className="flex items-center gap-1.5">
              <StarRating rating={Math.round(rating)} />
              <span
                className="text-sm font-bold"
                style={{ color: colors.text.primary }}
              >
                {rating.toFixed(1)}
              </span>
            </div>
            <span
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              {reviewCount}+ reviews
            </span>
          </div>
        )}
      </div>

      <div className="mt-10 w-full">
        <MarqueeTrack reviews={reviewsRow1} direction="rtl" />
      </div>

      <div className="w-full">
        <MarqueeTrack reviews={reviewsRow2} direction="ltr" />
      </div>
    </section>
  );
}
