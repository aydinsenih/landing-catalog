import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_CLOSE_BODY,
  SPLITSCREEN_CLOSE_HEADLINE,
  SPLITSCREEN_PRICING_HREF,
  SPLITSCREEN_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingClose() {
  return (
    <section
      id={SPLITSCREEN_PRICING_HREF.slice(1)}
      className="bg-brand-ink text-brand-ink-foreground scroll-mt-8"
    >
      <div className="container grid gap-10 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <h2 className="font-display text-4xl leading-none font-semibold tracking-tight text-balance lg:col-span-7 lg:text-6xl">
          {SPLITSCREEN_CLOSE_HEADLINE}
        </h2>

        <div className="lg:col-span-5 lg:pt-2">
          <p className="text-brand-ink-foreground/80 max-w-prose leading-relaxed">
            {SPLITSCREEN_CLOSE_BODY}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-ink-foreground text-brand-ink hover:bg-brand-ink-foreground/90 mt-8"
          >
            <a href={SPLITSCREEN_APP_HREF}>{SPLITSCREEN_START}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
