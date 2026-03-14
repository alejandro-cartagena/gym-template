import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  { number: "01", title: "Personal Training" },
  { number: "02", title: "Group Bootcamp" },
  { number: "03", title: "IFBB Pro Coaching" },
];

export default function WhyMeV3() {
  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — photo with overlay label */}
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "560px" }}>
            <Image
              src="/images/iramis-pose.jpg"
              alt="IFBB Pro Iramis Portero"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              className="absolute bottom-0 left-0 px-6 py-5"
              style={{ backgroundColor: "var(--accent-primary)" }}
            >
              <p className="font-montserrat text-lg font-bold leading-snug text-white">
                Train with<br />an IFBB Pro
              </p>
            </div>
          </div>

          {/* Right — copy block */}
          <div className="flex flex-col">
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent-primary)" }}
            >
              Why Choose Us
            </span>

            <h2
              className="font-montserrat mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              The Best Coaching<br />in Miami
            </h2>

            <p
              className="mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-primary)", opacity: 0.6 }}
            >
              Whether you&apos;re just starting out or pushing toward the stage,
              Iramis brings championship-level knowledge and real-world experience
              to every session.
            </p>

            <ol className="mt-8 flex flex-col" role="list">
              {services.map(({ number, title }) => (
                <li
                  key={number}
                  className="flex items-center gap-4 border-t py-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="font-montserrat text-sm font-bold tabular-nums"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {number}.
                  </span>
                  <span
                    className="font-montserrat text-base font-bold sm:text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </span>
                </li>
              ))}
              {/* closing border */}
              <li
                className="border-t"
                style={{ borderColor: "var(--border)" }}
                aria-hidden
              />
            </ol>

            <div className="mt-8">
              <Button href="#programs" variant="primary">
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
