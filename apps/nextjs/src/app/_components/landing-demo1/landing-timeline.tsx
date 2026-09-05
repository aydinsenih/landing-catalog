import {
  DEMO1_HOW_HREF,
  DEMO1_TIMELINE_BODY,
  DEMO1_TIMELINE_STAGES,
  DEMO1_TIMELINE_TITLE,
} from "@acme/constants";

export function LandingTimeline() {
  return (
    <section id={DEMO1_HOW_HREF.slice(1)} className="bg-background scroll-mt-8">
      <div className="container py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:col-span-5">
            {DEMO1_TIMELINE_TITLE}
          </h2>
          <p className="text-muted-foreground max-w-prose leading-relaxed lg:col-span-5 lg:col-start-7">
            {DEMO1_TIMELINE_BODY}
          </p>
        </div>

        <ol className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
          {DEMO1_TIMELINE_STAGES.map((stage) => (
            <li
              key={stage.label}
              className="border-foreground/25 relative border-t pt-8 lg:pr-10"
            >
              <span
                aria-hidden
                className="bg-foreground absolute -top-1 left-0 size-2 rounded-full"
              />
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {stage.label}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
