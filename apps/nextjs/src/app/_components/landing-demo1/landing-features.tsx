import {
  DEMO1_CONTRACT_BODY,
  DEMO1_CONTRACT_TITLE,
  DEMO1_FEATURES,
  DEMO1_FEATURES_TITLE,
  DEMO1_SPLIT_ROWS,
  DEMO1_SPLITS_HREF,
} from "@acme/constants";

import { SplitStrip } from "~/app/_components/landing-demo1/split-strip";

export function LandingFeatures() {
  return (
    <section
      id={DEMO1_SPLITS_HREF.slice(1)}
      className="bg-secondary scroll-mt-8 border-t"
    >
      <div className="container py-24 lg:py-32">
        <h2 className="font-display max-w-prose text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {DEMO1_FEATURES_TITLE}
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="bg-card flex flex-col rounded-xl border p-8 lg:col-span-7 lg:p-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {DEMO1_CONTRACT_TITLE}
            </h3>
            <p className="text-muted-foreground mt-5 max-w-prose leading-relaxed">
              {DEMO1_CONTRACT_BODY}
            </p>
            <SplitStrip
              rows={DEMO1_SPLIT_ROWS}
              className="mt-16 h-1.5 lg:mt-auto"
            />
          </div>

          <ul className="lg:col-span-5 lg:col-start-8">
            {DEMO1_FEATURES.map((feature) => (
              <li
                key={feature.title}
                className="border-foreground/15 border-t py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
