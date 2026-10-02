import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";

const stats = [
  { value: profile.stats.totalOutputs, label: "Scholarly Outputs" },
  { value: profile.stats.journals, label: "Journal Articles" },
  { value: profile.stats.conferences, label: "Conference Papers" },
  { value: profile.stats.patents, label: "Patent Filed" },
];

export function StatStrip() {
  return (
    <section aria-label="Research output at a glance" className="bg-panel/50 py-12">
      <Container>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse items-center text-center"
            >
              <dt className="mt-1 text-sm font-semibold text-muted">
                {s.label}
              </dt>
              <dd className="font-display text-4xl font-bold tabular-nums text-primary sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-center text-sm text-faint">
          Published across top-tier IEEE Transactions and A*/A conferences
          including INFOCOM, SenSys, WoWMoM, and MSWIM.
        </p>
      </Container>
    </section>
  );
}
