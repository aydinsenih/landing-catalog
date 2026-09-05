import { SOAK_PHASES, SOAK_PHASES_TITLE } from "@acme/constants";
import { cn } from "@acme/ui";

export function LandingPhases() {
  return (
    <section className="bg-brand-ash text-brand-ash-foreground">
      <div className="container pb-24 lg:pb-34">
        <h2 className="font-display-serif max-w-prose text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
          {SOAK_PHASES_TITLE}
        </h2>

        <div className="mt-16 grid gap-13 md:grid-cols-3 md:gap-8">
          {SOAK_PHASES.map((phase, index) => (
            <div
              key={phase.label}
              className={cn(
                "border-brand-ash-foreground/25 border-t pt-8",
                index > 0 && "md:border-l md:pl-8",
              )}
            >
              <h3 className="font-display-serif text-2xl font-semibold tracking-tight">
                {phase.label}
              </h3>
              <p className="text-brand-ash-foreground/75 mt-5 leading-relaxed">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
