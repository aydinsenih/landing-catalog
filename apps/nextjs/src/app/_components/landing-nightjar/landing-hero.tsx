import {
  NIGHTJAR_APP_HREF,
  NIGHTJAR_HERO_BODY,
  NIGHTJAR_HERO_HEADLINE,
  NIGHTJAR_PEAK_LABEL,
  NIGHTJAR_PEAK_OFFSET,
  NIGHTJAR_READ_LAST_NIGHT,
  NIGHTJAR_RECORD_HREF,
  NIGHTJAR_START,
  NIGHTJAR_STRIP_PLACE,
  NIGHTJAR_TOTAL_CALLS,
  NIGHTJAR_TOTAL_CALLS_LABEL,
  NIGHTJAR_TOTAL_SPECIES,
  NIGHTJAR_TOTAL_SPECIES_LABEL,
  nightjarNightClock,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

import { NightStrip } from "~/app/_components/landing-nightjar/night-strip";

const READINGS = [
  { label: NIGHTJAR_TOTAL_CALLS_LABEL, value: String(NIGHTJAR_TOTAL_CALLS) },
  {
    label: NIGHTJAR_TOTAL_SPECIES_LABEL,
    value: String(NIGHTJAR_TOTAL_SPECIES),
  },
  {
    label: NIGHTJAR_PEAK_LABEL,
    value: nightjarNightClock(NIGHTJAR_PEAK_OFFSET),
  },
];

export function LandingHero() {
  return (
    <section className="bg-brand-night text-brand-night-foreground">
      <div className="container pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="font-display-grotesk text-5xl leading-none font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {NIGHTJAR_HERO_HEADLINE}
            </h1>
            <p className="text-brand-night-foreground/70 mt-8 max-w-prose leading-relaxed">
              {NIGHTJAR_HERO_BODY}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-brand-night-foreground text-brand-night hover:bg-brand-night-foreground/85 focus-visible:ring-brand-quiet shadow-none"
              >
                <a href={NIGHTJAR_APP_HREF}>{NIGHTJAR_START}</a>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="text-brand-night-foreground/70 hover:text-brand-night-foreground focus-visible:ring-brand-quiet px-0"
              >
                <a href={NIGHTJAR_RECORD_HREF}>{NIGHTJAR_READ_LAST_NIGHT}</a>
              </Button>
            </div>
          </div>
        </div>

        <div id="night" className="mt-20 scroll-mt-8 lg:mt-28">
          <NightStrip />

          <div className="border-brand-night-foreground/15 mt-8 flex flex-col gap-8 border-t pt-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-brand-night-foreground/55 max-w-xs text-sm leading-relaxed">
              {NIGHTJAR_STRIP_PLACE}
            </p>
            <dl className="flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-14">
              {READINGS.map((reading) => (
                <div key={reading.label}>
                  <dt className="text-brand-night-foreground/45 text-xs">
                    {reading.label}
                  </dt>
                  <dd className="font-station-mono mt-1.5 text-2xl tabular-nums">
                    {reading.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
