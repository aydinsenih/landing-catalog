import {
  soakCelsius,
  SOAK_LOG_BODY,
  SOAK_LOG_ENTRIES,
  SOAK_LOG_TITLE,
  SOAK_PEAK_LABEL,
} from "@acme/constants";

export function LandingLog() {
  return (
    <section id="log" className="bg-brand-ash text-brand-ash-foreground">
      <div className="container py-24 lg:py-34">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <h2 className="font-display-serif text-4xl font-semibold tracking-tight text-balance lg:col-span-5 lg:text-5xl">
            {SOAK_LOG_TITLE}
          </h2>
          <p className="text-brand-ash-foreground/75 mt-8 max-w-prose leading-relaxed lg:col-span-5 lg:col-start-8 lg:mt-2">
            {SOAK_LOG_BODY}
          </p>
        </div>

        <ul className="border-brand-ash-foreground/15 mt-21 border-t">
          {SOAK_LOG_ENTRIES.map((entry) => (
            <li
              key={entry.date}
              className="border-brand-ash-foreground/15 border-b py-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <div className="font-mono text-sm tabular-nums lg:col-span-4">
                <p className="text-brand-ash-foreground/55">{entry.date}</p>
                <p className="mt-2">{entry.program}</p>
                <p className="text-brand-copper mt-2">
                  {`${SOAK_PEAK_LABEL} ${soakCelsius(entry.peak)}`}
                </p>
              </div>
              <p className="font-display-serif mt-5 max-w-prose text-lg leading-relaxed lg:col-span-7 lg:col-start-6 lg:mt-0">
                {entry.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
