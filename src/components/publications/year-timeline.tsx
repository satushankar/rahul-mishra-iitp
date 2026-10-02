import { perYearCounts } from "@/lib/works";

export function YearTimeline() {
  const data = perYearCounts();
  const max = Math.max(...data.map((d) => d.total), 1);

  return (
    <figure className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow-card)]">
      <figcaption className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-lg font-bold text-ink">
          Publications by Year
        </h2>
        <span className="flex items-center gap-4 text-xs font-semibold text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-primary" /> Journals
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-accent" /> Conferences
          </span>
        </span>
      </figcaption>

      {/* Visual bars (decorative; data table below for AT) */}
      <div aria-hidden className="flex items-stretch gap-2 sm:gap-3" style={{ height: 180 }}>
        {data.map((d) => (
          <div key={d.year} className="flex h-full flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 flex-col justify-end">
              <div
                className="w-full rounded-t-sm bg-accent transition-all"
                style={{ height: `${(d.conferences / max) * 100}%` }}
              />
              <div
                className="w-full bg-primary transition-all"
                style={{ height: `${(d.journals / max) * 100}%` }}
              />
            </div>
            <span className="text-[0.7rem] font-semibold tabular-nums text-faint">
              {String(d.year).slice(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Accessible data table */}
      <table className="sr-only">
        <caption>Publications by year, journals and conferences</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Journals</th>
            <th scope="col">Conferences</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.year}>
              <th scope="row">{d.year}</th>
              <td>{d.journals}</td>
              <td>{d.conferences}</td>
              <td>{d.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
