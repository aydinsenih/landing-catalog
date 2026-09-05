import {
  TURN_APP_HREF,
  TURN_HERO_BODY,
  TURN_HERO_HEADLINE,
  TURN_ROUNDS_HREF,
  TURN_SEE_ROUNDS,
  TURN_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

import { RotationRing } from "~/app/_components/landing-turn/rotation-ring";

export function LandingHero() {
  return (
    <section className="bg-brand-marigold text-brand-marigold-foreground">
      <div className="container pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="items-center gap-8 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="font-circle text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {TURN_HERO_HEADLINE}
            </h1>
            <p className="text-brand-marigold-foreground/80 mt-8 max-w-prose leading-relaxed">
              {TURN_HERO_BODY}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-brand-pot text-brand-bone hover:bg-brand-pot/90 focus-visible:ring-brand-pot shadow-none"
              >
                <a href={TURN_APP_HREF}>{TURN_START}</a>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="text-brand-marigold-foreground/75 hover:text-brand-marigold-foreground focus-visible:ring-brand-pot px-0"
              >
                <a href={TURN_ROUNDS_HREF}>{TURN_SEE_ROUNDS}</a>
              </Button>
            </div>
          </div>

          <div className="mt-16 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <RotationRing />
          </div>
        </div>
      </div>
    </section>
  );
}
