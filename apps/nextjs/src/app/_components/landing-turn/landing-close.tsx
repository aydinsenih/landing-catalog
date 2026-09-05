import {
  TURN_APP_HREF,
  TURN_CLOSE_BODY,
  TURN_CLOSE_HEADLINE,
  TURN_PRICE,
  TURN_PRICE_NOTE,
  TURN_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingClose() {
  return (
    <section
      id="pricing"
      className="bg-brand-bone text-brand-bone-foreground scroll-mt-8"
    >
      <div className="container pb-24 lg:pb-32">
        <div className="border-brand-bone-foreground/25 border-t pt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-circle text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {TURN_CLOSE_HEADLINE}
            </h2>
            <p className="text-brand-bone-foreground/70 mt-6 max-w-prose leading-relaxed">
              {TURN_CLOSE_BODY}
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-pot text-brand-bone hover:bg-brand-pot/90 focus-visible:ring-brand-pot shadow-none"
              >
                <a href={TURN_APP_HREF}>{TURN_START}</a>
              </Button>
            </div>
          </div>

          <div className="mt-14 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-circle text-3xl font-semibold tracking-tight">
              {TURN_PRICE}
            </p>
            <p className="text-brand-bone-foreground/60 mt-4 max-w-prose text-sm leading-relaxed">
              {TURN_PRICE_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
