import {
  CUTOFF_LEARN_ITEMS,
  CUTOFF_LEARN_NOTE,
  CUTOFF_LEARN_TITLE,
} from "@acme/constants";

export function LandingLearn() {
  return (
    <section className="bg-brand-paper text-brand-paper-foreground">
      <div className="container py-24 lg:py-32">
        <h2 className="font-editorial max-w-3xl text-3xl font-normal tracking-tight text-balance sm:text-4xl">
          {CUTOFF_LEARN_TITLE}
        </h2>

        <dl className="mt-14">
          {CUTOFF_LEARN_ITEMS.map((item) => (
            <div
              key={item.name}
              className="border-brand-paper-foreground/15 border-t py-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="font-editorial text-xl lg:col-span-4">
                {item.name}
              </dt>
              <dd className="text-brand-paper-foreground/70 mt-3 max-w-prose leading-relaxed lg:col-span-7 lg:col-start-6 lg:mt-0">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-brand-paper-foreground/55 border-brand-paper-foreground/15 max-w-prose border-t pt-8 text-sm leading-relaxed">
          {CUTOFF_LEARN_NOTE}
        </p>
      </div>
    </section>
  );
}
