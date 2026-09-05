import {
  TURN_AGREEMENT_ITEMS,
  TURN_AGREEMENT_NOTE,
  TURN_AGREEMENT_TITLE,
} from "@acme/constants";

export function LandingAgreement() {
  return (
    <section
      id="agreement"
      className="bg-brand-bone text-brand-bone-foreground scroll-mt-8"
    >
      <div className="container pb-24 lg:pb-32">
        <h2 className="font-circle max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {TURN_AGREEMENT_TITLE}
        </h2>

        <dl className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {TURN_AGREEMENT_ITEMS.map((item) => (
            <div
              key={item.name}
              className="border-brand-bone-foreground/25 border-t pt-6"
            >
              <dt className="font-circle text-lg font-semibold tracking-tight">
                {item.name}
              </dt>
              <dd className="text-brand-bone-foreground/70 mt-3 max-w-prose text-sm leading-relaxed">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-brand-bone-foreground/55 mt-14 max-w-prose text-sm leading-relaxed">
          {TURN_AGREEMENT_NOTE}
        </p>
      </div>
    </section>
  );
}
