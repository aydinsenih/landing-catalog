import {
  CUTOFF_APP_HREF,
  CUTOFF_CLOSE_BODY,
  CUTOFF_CLOSE_HEADLINE,
  CUTOFF_PRICE,
  CUTOFF_PRICE_NOTE,
  CUTOFF_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingClose() {
  return (
    <section
      id="pricing"
      className="bg-brand-paper text-brand-paper-foreground scroll-mt-8"
    >
      <div className="container pb-24 lg:pb-32">
        <div className="border-brand-paper-foreground/25 border-t pt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {CUTOFF_CLOSE_HEADLINE}
            </h2>
            <p className="text-brand-paper-foreground/70 mt-6 max-w-prose leading-relaxed">
              {CUTOFF_CLOSE_BODY}
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-dose text-brand-paper hover:bg-brand-dose/90 focus-visible:ring-brand-dose shadow-none"
              >
                <a href={CUTOFF_APP_HREF}>{CUTOFF_START}</a>
              </Button>
            </div>
          </div>

          <div className="mt-14 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-editorial text-4xl">{CUTOFF_PRICE}</p>
            <p className="text-brand-paper-foreground/60 mt-4 max-w-prose text-sm leading-relaxed">
              {CUTOFF_PRICE_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
