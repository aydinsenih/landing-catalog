import {
  CUTOFF_APP_HREF,
  CUTOFF_CURVE_NOTE,
  CUTOFF_DAY_HREF,
  CUTOFF_HERO_BODY,
  CUTOFF_HERO_HEADLINE,
  CUTOFF_SEE_DAY,
  CUTOFF_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

import { DecayCurve } from "~/app/_components/landing-cutoff/decay-curve";

export function LandingHero() {
  return (
    <section className="bg-brand-paper text-brand-paper-foreground">
      <div className="container pt-14 pb-20 lg:pt-20 lg:pb-28">
        <h1 className="font-editorial max-w-5xl text-5xl leading-tight font-normal tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {CUTOFF_HERO_HEADLINE}
        </h1>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <p className="text-brand-paper-foreground/75 max-w-prose leading-relaxed lg:col-span-6">
            {CUTOFF_HERO_BODY}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <Button
              asChild
              size="lg"
              className="bg-brand-dose text-brand-paper hover:bg-brand-dose/90 focus-visible:ring-brand-dose shadow-none"
            >
              <a href={CUTOFF_APP_HREF}>{CUTOFF_START}</a>
            </Button>
            <Button
              asChild
              variant="link"
              size="lg"
              className="text-brand-paper-foreground/70 hover:text-brand-paper-foreground focus-visible:ring-brand-dose px-0"
            >
              <a href={CUTOFF_DAY_HREF}>{CUTOFF_SEE_DAY}</a>
            </Button>
          </div>
        </div>

        <div id="day" className="mt-16 scroll-mt-8 lg:mt-24">
          <DecayCurve />
          <p className="border-brand-paper-foreground/15 text-brand-paper-foreground/60 mt-8 max-w-2xl border-t pt-6 text-sm leading-relaxed">
            {CUTOFF_CURVE_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
