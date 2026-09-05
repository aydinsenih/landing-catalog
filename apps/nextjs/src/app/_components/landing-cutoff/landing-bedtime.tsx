import {
  CUTOFF_BEDTIME_BODY,
  CUTOFF_BEDTIME_READINGS,
  CUTOFF_BEDTIME_TITLE,
  cutoffMilligrams,
} from "@acme/constants";
import { cn } from "@acme/ui";

export function LandingBedtime() {
  return (
    <section
      id="bedtime"
      className="bg-brand-bedtime text-brand-bedtime-foreground scroll-mt-8"
    >
      <div className="container py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 className="font-editorial text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {CUTOFF_BEDTIME_TITLE}
            </h2>
            <p className="text-brand-bedtime-foreground/70 mt-6 max-w-prose leading-relaxed">
              {CUTOFF_BEDTIME_BODY}
            </p>
          </div>

          <dl className="mt-14 lg:col-span-5 lg:col-start-8 lg:mt-0">
            {CUTOFF_BEDTIME_READINGS.map((reading, index) => (
              <div
                key={reading.label}
                className="border-brand-bedtime-foreground/15 flex items-baseline justify-between gap-6 border-b py-5 first:border-t"
              >
                <dt
                  className={cn(
                    "text-sm",
                    index === CUTOFF_BEDTIME_READINGS.length - 1
                      ? "text-brand-bedtime-foreground"
                      : "text-brand-bedtime-foreground/55",
                  )}
                >
                  {reading.label}
                </dt>
                <dd
                  className={cn(
                    "font-editorial tabular-nums",
                    index === CUTOFF_BEDTIME_READINGS.length - 1
                      ? "text-4xl"
                      : "text-brand-bedtime-foreground/70 text-2xl",
                  )}
                >
                  {cutoffMilligrams(reading.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
