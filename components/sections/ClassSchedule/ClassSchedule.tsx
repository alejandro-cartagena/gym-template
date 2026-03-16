import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

// ── Types ──────────────────────────────────────────────────────────────────────

interface GymClass {
  name: string;
  time: string;
  duration: string;
  instructor: string;
  intensity: "Low" | "Medium" | "High";
}

interface DaySchedule {
  label: string;
  hours: string;
  classes: GymClass[];
}

// ── Schedule data ──────────────────────────────────────────────────────────────

const schedule: DaySchedule[] = [
  {
    label: "Monday",
    hours: "4:30 AM – 10:30 PM",
    classes: [
      { name: "Early Bird HIIT", time: "5:00 AM", duration: "45 min", instructor: "Alexandra Hayes", intensity: "High" },
      { name: "Core & Mobility", time: "9:00 AM", duration: "30 min", instructor: "Victoria Kensington", intensity: "Low" },
      { name: "Strength Training", time: "12:00 PM", duration: "60 min", instructor: "Nathaniel Montgomery", intensity: "High" },
      { name: "Evening Cardio Blast", time: "6:30 PM", duration: "45 min", instructor: "Alexandra Hayes", intensity: "Medium" },
    ],
  },
  {
    label: "Tuesday",
    hours: "4:30 AM – 10:30 PM",
    classes: [
      { name: "Spin Class", time: "6:00 AM", duration: "45 min", instructor: "Victoria Kensington", intensity: "High" },
      { name: "Yoga & Stretch", time: "10:00 AM", duration: "60 min", instructor: "Maximilian Lee", intensity: "Low" },
      { name: "Power Lifting", time: "1:00 PM", duration: "60 min", instructor: "Nathaniel Montgomery", intensity: "High" },
      { name: "Functional Fitness", time: "7:00 PM", duration: "45 min", instructor: "Alexandra Hayes", intensity: "Medium" },
    ],
  },
  {
    label: "Wednesday",
    hours: "4:30 AM – 10:30 PM",
    classes: [
      { name: "Morning HIIT", time: "5:30 AM", duration: "45 min", instructor: "Nathaniel Montgomery", intensity: "High" },
      { name: "Pilates & Core", time: "9:30 AM", duration: "45 min", instructor: "Victoria Kensington", intensity: "Low" },
      { name: "Circuit Training", time: "12:00 PM", duration: "50 min", instructor: "Alexandra Hayes", intensity: "Medium" },
      { name: "Kettlebell Power", time: "6:00 PM", duration: "45 min", instructor: "Nathaniel Montgomery", intensity: "High" },
    ],
  },
  {
    label: "Thursday",
    hours: "4:30 AM – 10:30 PM",
    classes: [
      { name: "Spin Class", time: "6:00 AM", duration: "45 min", instructor: "Victoria Kensington", intensity: "High" },
      { name: "Stretch & Recovery", time: "10:00 AM", duration: "30 min", instructor: "Maximilian Lee", intensity: "Low" },
      { name: "Strength & Conditioning", time: "1:00 PM", duration: "60 min", instructor: "Alexandra Hayes", intensity: "High" },
      { name: "Evening HIIT", time: "7:00 PM", duration: "45 min", instructor: "Nathaniel Montgomery", intensity: "High" },
    ],
  },
  {
    label: "Friday",
    hours: "4:30 AM – 10:30 PM",
    classes: [
      { name: "Early Cardio", time: "5:00 AM", duration: "40 min", instructor: "Alexandra Hayes", intensity: "Medium" },
      { name: "Core Blast", time: "9:00 AM", duration: "30 min", instructor: "Victoria Kensington", intensity: "Medium" },
      { name: "Full Body HIIT", time: "12:00 PM", duration: "50 min", instructor: "Nathaniel Montgomery", intensity: "High" },
      { name: "Weekend Kickoff Spin", time: "6:00 PM", duration: "45 min", instructor: "Victoria Kensington", intensity: "High" },
    ],
  },
  {
    label: "Saturday",
    hours: "8:00 AM – 5:00 PM",
    classes: [
      { name: "Saturday Bootcamp", time: "8:30 AM", duration: "60 min", instructor: "Nathaniel Montgomery", intensity: "High" },
      { name: "Yoga Flow", time: "10:00 AM", duration: "60 min", instructor: "Victoria Kensington", intensity: "Low" },
      { name: "Partner Training", time: "12:00 PM", duration: "45 min", instructor: "Alexandra Hayes", intensity: "Medium" },
      { name: "Stretch & Cool Down", time: "2:00 PM", duration: "30 min", instructor: "Maximilian Lee", intensity: "Low" },
    ],
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function ClassCell({ gymClass }: { gymClass: GymClass | null }) {
  const { branding } = siteConfig;

  if (!gymClass) {
    return (
      <td
        className="w-1/2 px-5 py-3"
        style={{ borderColor: branding.colors.border }}
      />
    );
  }

  return (
    <td
      className="w-1/2 px-5 py-3"
      style={{ borderColor: branding.colors.border }}
    >
      <p
        className="text-sm font-bold uppercase tracking-widest leading-snug"
        style={{ color: branding.colors.accent.primary }}
      >
        {gymClass.name}
      </p>
      <p
        className="text-xs font-medium"
        style={{ color: branding.colors.text.primary }}
      >
        {gymClass.instructor}
      </p>
      <p
        className="text-xs"
        style={{ color: branding.colors.text.secondary }}
      >
        {gymClass.time}
      </p>
    </td>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function ClassSchedule() {
  const { branding } = siteConfig;

  return (
    <section
      id="class-schedule"
      aria-labelledby="class-schedule-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: branding.colors.background.primary }}
    >
      {/* Header */}
      <Container>
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: branding.colors.accent.primary }}
          >
            Weekly Schedule
          </span>
          <h2
            id="class-schedule-heading"
            className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: branding.colors.text.primary }}
          >
            Class Schedule
          </h2>
          <p
            className="max-w-xl text-sm leading-relaxed sm:text-base"
            style={{ color: branding.colors.text.secondary }}
          >
            Monday through Saturday — we&apos;re closed on Sundays so our
            coaches can recover too.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: branding.colors.border }}>
          <table
            className="w-full min-w-[560px] border-collapse text-left"
            style={{ backgroundColor: branding.colors.background.primary }}
          >
            <tbody>
              {schedule.map((day, dayIdx) => {
                // Split classes into rows of 2
                const rows: (GymClass | null)[][] = [];
                for (let i = 0; i < day.classes.length; i += 2) {
                  rows.push([
                    day.classes[i] ?? null,
                    day.classes[i + 1] ?? null,
                  ]);
                }
                // Ensure at least one row
                if (rows.length === 0) rows.push([null, null]);

                return rows.map((row, rowIdx) => (
                  <tr
                    key={`${day.label}-${rowIdx}`}
                    style={{
                      borderTopWidth: "1px",
                      borderTopStyle: "solid",
                      borderTopColor: branding.colors.border,
                      backgroundColor:
                        rowIdx % 2 === 1
                          ? branding.colors.background.secondary
                          : branding.colors.background.primary,
                    }}
                  >
                    {/* Day name cell — only rendered on the first sub-row */}
                    {rowIdx === 0 && (
                      <td
                        rowSpan={rows.length}
                        className="w-[110px] border-r px-5 py-3 align-middle"
                        style={{
                          borderRightColor: branding.colors.border,
                          borderRightWidth: "1px",
                          borderRightStyle: "solid",
                          backgroundColor:
                            dayIdx % 2 === 0
                              ? `${branding.colors.accent.primary}18`
                              : branding.colors.background.secondary,
                        }}
                      >
                        <p
                          className="text-[11px] font-extrabold uppercase tracking-[0.2em]"
                          style={{ color: branding.colors.text.primary }}
                        >
                          {day.label}
                        </p>
                        <p
                          className="mt-0.5 text-[9px] font-medium leading-tight"
                          style={{ color: branding.colors.text.secondary }}
                        >
                          {day.hours}
                        </p>
                      </td>
                    )}
                    <ClassCell gymClass={row[0]} />
                    <td
                      className="w-px p-0"
                      style={{
                        borderLeftWidth: "1px",
                        borderLeftStyle: "solid",
                        borderLeftColor: branding.colors.border,
                      }}
                    />
                    <ClassCell gymClass={row[1]} />
                  </tr>
                ));
              })}

              {/* Sunday — closed row */}
              <tr
                style={{
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  borderTopColor: branding.colors.border,
                  backgroundColor: branding.colors.background.secondary,
                  opacity: 0.6,
                }}
              >
                <td
                  className="w-[110px] border-r px-5 py-3 align-middle"
                  style={{
                    borderRightColor: branding.colors.border,
                    borderRightWidth: "1px",
                    borderRightStyle: "solid",
                  }}
                >
                  <p
                    className="text-[11px] font-extrabold uppercase tracking-[0.2em]"
                    style={{ color: branding.colors.text.primary }}
                  >
                    Sunday
                  </p>
                </td>
                <td
                  colSpan={3}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: branding.colors.text.secondary }}
                >
                  Closed — Rest Day
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
