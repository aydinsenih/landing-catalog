import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_HERO_BODY,
  SPLITSCREEN_HERO_HEADLINE,
  SPLITSCREEN_SEE_SAMPLE,
  SPLITSCREEN_SPLIT_LABEL,
  SPLITSCREEN_SPLIT_NOTE,
  SPLITSCREEN_SPLIT_ROWS,
  SPLITSCREEN_SPLITS_HREF,
  SPLITSCREEN_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

import { SplitBar } from "~/app/_components/landing-splitscreen/split-bar";

export function LandingHero() {
  return (
    <section className="bg-brand-ink text-brand-ink-foreground">
      <div className="container pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h1 className="font-display text-5xl leading-none font-semibold tracking-tight text-balance sm:text-6xl lg:col-span-7 lg:text-7xl">
            {SPLITSCREEN_HERO_HEADLINE}
          </h1>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-brand-ink-foreground/80 max-w-prose leading-relaxed">
              {SPLITSCREEN_HERO_BODY}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                asChild
                size="lg"
                className="bg-brand-ink-foreground text-brand-ink hover:bg-brand-ink-foreground/90"
              >
                <a href={SPLITSCREEN_APP_HREF}>{SPLITSCREEN_START}</a>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="text-brand-ink-foreground/80 hover:text-brand-ink-foreground px-0"
              >
                <a href={SPLITSCREEN_SPLITS_HREF}>{SPLITSCREEN_SEE_SAMPLE}</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-brand-ink-foreground/15 mt-20 border-t pt-10 lg:mt-28">
          <SplitBar
            label={SPLITSCREEN_SPLIT_LABEL}
            rows={SPLITSCREEN_SPLIT_ROWS}
          />
          <p className="text-brand-ink-foreground/65 mt-12 max-w-prose text-sm leading-relaxed">
            {SPLITSCREEN_SPLIT_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
