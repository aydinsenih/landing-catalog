import {
  soakCelsius,
  SOAK_APP_HREF,
  SOAK_HERO_BODY,
  SOAK_HERO_HEADLINE,
  SOAK_LOG_HREF,
  SOAK_PEAK_C,
  SOAK_PEAK_LABEL,
  SOAK_READ_LOG,
  SOAK_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

import { FiringCurve } from "~/app/_components/landing-soak/firing-curve";
import { FiringSchedule } from "~/app/_components/landing-soak/firing-schedule";

export function LandingHero() {
  return (
    <section className="bg-brand-kiln text-brand-kiln-foreground">
      <div className="container pt-13 pb-21 lg:pt-21 lg:pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="font-display-serif text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {SOAK_HERO_HEADLINE}
            </h1>
            <p className="text-brand-kiln-foreground/75 mt-8 max-w-prose leading-relaxed">
              {SOAK_HERO_BODY}
            </p>
            <div className="mt-13 flex flex-wrap items-center gap-5">
              <Button
                asChild
                size="lg"
                className="bg-brand-copper text-brand-kiln-foreground hover:bg-brand-copper/90"
              >
                <a href={SOAK_APP_HREF}>{SOAK_START}</a>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="text-brand-kiln-foreground/75 hover:text-brand-kiln-foreground px-0"
              >
                <a href={SOAK_LOG_HREF}>{SOAK_READ_LOG}</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div data-slot="firing-peak">
              <p className="text-brand-kiln-foreground/60 text-sm">
                {SOAK_PEAK_LABEL}
              </p>
              <p className="text-brand-copper mt-1 font-mono text-4xl tabular-nums">
                {soakCelsius(SOAK_PEAK_C)}
              </p>
            </div>
            <div className="mt-8">
              <FiringCurve />
            </div>
          </div>
        </div>

        <div
          id="schedule"
          className="border-brand-kiln-foreground/15 mt-16 border-t pt-13 lg:mt-21"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <FiringSchedule />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
