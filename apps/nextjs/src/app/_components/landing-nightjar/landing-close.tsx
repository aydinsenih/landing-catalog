import {
  NIGHTJAR_APP_HREF,
  NIGHTJAR_CLOSE_BODY,
  NIGHTJAR_CLOSE_HEADLINE,
  NIGHTJAR_PRICE,
  NIGHTJAR_PRICE_NOTE,
  NIGHTJAR_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingClose() {
  return (
    <section
      id="pricing"
      className="bg-brand-dawn text-brand-dawn-foreground scroll-mt-8"
    >
      <div className="container pb-24 lg:pb-32">
        <div className="border-brand-dawn-foreground/20 border-t pt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-display-grotesk text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              {NIGHTJAR_CLOSE_HEADLINE}
            </h2>
            <p className="text-brand-dawn-foreground/70 mt-6 max-w-prose leading-relaxed">
              {NIGHTJAR_CLOSE_BODY}
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-night text-brand-night-foreground hover:bg-brand-night/90 focus-visible:ring-brand-dawn-foreground shadow-none"
              >
                <a href={NIGHTJAR_APP_HREF}>{NIGHTJAR_START}</a>
              </Button>
            </div>
          </div>

          <div className="mt-14 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-display-grotesk text-4xl font-medium tracking-tight">
              {NIGHTJAR_PRICE}
            </p>
            <p className="text-brand-dawn-foreground/65 mt-4 max-w-prose text-sm leading-relaxed">
              {NIGHTJAR_PRICE_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
