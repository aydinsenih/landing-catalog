import {
  NIGHTJAR_STATION_ITEMS,
  NIGHTJAR_STATION_NOTE,
  NIGHTJAR_STATION_TITLE,
} from "@acme/constants";

export function LandingStation() {
  return (
    <section className="bg-brand-dawn text-brand-dawn-foreground">
      <div className="container pb-24 lg:pb-32">
        <h2 className="font-display-grotesk text-3xl font-medium tracking-tight text-balance sm:text-4xl">
          {NIGHTJAR_STATION_TITLE}
        </h2>

        <dl className="border-brand-dawn-foreground/20 mt-12 grid gap-10 border-t pt-10 md:grid-cols-3 md:gap-8">
          {NIGHTJAR_STATION_ITEMS.map((item) => (
            <div key={item.name}>
              <dt className="font-display-grotesk text-lg font-medium tracking-tight">
                {item.name}
              </dt>
              <dd className="text-brand-dawn-foreground/70 mt-3 max-w-prose text-sm leading-relaxed">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-brand-dawn-foreground/55 mt-12 max-w-prose text-sm leading-relaxed">
          {NIGHTJAR_STATION_NOTE}
        </p>
      </div>
    </section>
  );
}
