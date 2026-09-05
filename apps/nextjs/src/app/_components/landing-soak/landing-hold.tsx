import { SOAK_HOLD_BODY, SOAK_HOLD_REFRAIN } from "@acme/constants";

export function LandingHold() {
  return (
    <section className="bg-brand-kiln text-brand-kiln-foreground">
      <div className="border-brand-kiln-foreground/15 container border-t py-24 lg:py-34">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <h2 className="font-display-serif text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:col-span-7 lg:text-6xl">
            {SOAK_HOLD_REFRAIN}
          </h2>
          <p className="text-brand-kiln-foreground/70 mt-13 max-w-prose leading-relaxed lg:col-span-4 lg:col-start-9 lg:mt-3">
            {SOAK_HOLD_BODY}
          </p>
        </div>
      </div>
    </section>
  );
}
