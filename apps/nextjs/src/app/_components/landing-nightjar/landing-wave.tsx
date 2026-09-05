import {
  NIGHTJAR_WAVE_BODY,
  NIGHTJAR_WAVE_ROWS,
  NIGHTJAR_WAVE_TITLE,
  nightjarCalls,
  nightjarNightClock,
} from "@acme/constants";

import { CallBar } from "~/app/_components/landing-nightjar/call-bar";

const LOUDEST = Math.max(...NIGHTJAR_WAVE_ROWS.map((row) => row.calls));

export function LandingWave() {
  return (
    <section className="bg-brand-night text-brand-night-foreground">
      <div className="container pb-24 lg:pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display-grotesk text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {NIGHTJAR_WAVE_TITLE}
            </h2>
            <p className="text-brand-night-foreground/70 mt-6 max-w-prose leading-relaxed">
              {NIGHTJAR_WAVE_BODY}
            </p>
          </div>

          <ul className="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {NIGHTJAR_WAVE_ROWS.map((row) => (
              <li
                key={row.offset}
                className="border-brand-night-foreground/10 flex items-center gap-4 border-b py-4 first:border-t sm:gap-6"
              >
                <span className="font-station-mono text-brand-night-foreground/50 w-12 shrink-0 text-sm tabular-nums">
                  {nightjarNightClock(row.offset)}
                </span>
                <span className="flex-1 text-sm">{row.species}</span>
                <span className="hidden w-28 shrink-0 sm:block">
                  <CallBar calls={row.calls} ceiling={LOUDEST} />
                </span>
                <span className="font-station-mono w-8 shrink-0 text-right text-sm tabular-nums">
                  <span className="sr-only">{nightjarCalls(row.calls)}</span>
                  <span aria-hidden>{row.calls}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
