import {
  SOAK_APP_HREF,
  SOAK_CLOSE_BODY,
  SOAK_CLOSE_HEADLINE,
  SOAK_HOLD_REFRAIN,
  SOAK_LOG_HREF,
  SOAK_PRICE,
  SOAK_PRICE_NOTE,
  SOAK_READ_LOG,
  SOAK_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingClose() {
  return (
    <section id="pricing" className="bg-brand-ash text-brand-ash-foreground">
      <div className="border-brand-ash-foreground/15 container border-t py-24 lg:py-34">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-display-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {SOAK_CLOSE_HEADLINE}
            </h2>
            <p className="text-brand-ash-foreground/75 mt-8 max-w-prose leading-relaxed">
              {SOAK_CLOSE_BODY}
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
                className="text-brand-ash-foreground/75 hover:text-brand-ash-foreground px-0"
              >
                <a href={SOAK_LOG_HREF}>{SOAK_READ_LOG}</a>
              </Button>
            </div>
          </div>

          <div className="mt-16 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-mono text-2xl tabular-nums">{SOAK_PRICE}</p>
            <p className="text-brand-ash-foreground/70 mt-3 text-sm leading-relaxed">
              {SOAK_PRICE_NOTE}
            </p>
            <p className="font-display-serif text-brand-ash-foreground/85 mt-13 text-xl leading-snug">
              {SOAK_HOLD_REFRAIN}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
