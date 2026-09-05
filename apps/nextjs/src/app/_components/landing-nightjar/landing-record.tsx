import {
  NIGHTJAR_RECORD_BODY,
  NIGHTJAR_RECORD_COLUMNS,
  NIGHTJAR_RECORD_ROWS,
  NIGHTJAR_RECORD_TITLE,
  NIGHTJAR_RECORD_TOTAL_LABEL,
  NIGHTJAR_TOTAL_CALLS,
  nightjarNightClock,
} from "@acme/constants";
import { cn } from "@acme/ui";

import { CallBar } from "~/app/_components/landing-nightjar/call-bar";

const LOUDEST = Math.max(...NIGHTJAR_RECORD_ROWS.map((row) => row.calls));
const FIGURE_CELL =
  "font-station-mono py-4 text-right text-sm tabular-nums whitespace-nowrap";
const CLOCK_CELL = "text-brand-dawn-foreground/55 hidden sm:table-cell";

export function LandingRecord() {
  return (
    <section
      id="record"
      className="bg-brand-dawn text-brand-dawn-foreground scroll-mt-8"
    >
      <div
        aria-hidden
        className="from-brand-night to-brand-dawn h-40 bg-linear-to-b lg:h-56"
      />

      <div className="container pb-24 lg:pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h2 className="font-display-grotesk text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              {NIGHTJAR_RECORD_TITLE}
            </h2>
          </div>
          <p className="text-brand-dawn-foreground/70 mt-6 max-w-prose leading-relaxed lg:col-span-5 lg:col-start-8 lg:mt-0">
            {NIGHTJAR_RECORD_BODY}
          </p>
        </div>

        <div className="mt-14 overflow-x-auto lg:mt-20">
          <table className="w-full text-left">
            <caption className="sr-only">{NIGHTJAR_RECORD_TITLE}</caption>
            <thead>
              <tr className="border-brand-dawn-foreground/20 border-b">
                {NIGHTJAR_RECORD_COLUMNS.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={cn(
                      "text-brand-dawn-foreground/50 py-3 text-xs font-normal",
                      index === 0 ? "pr-6" : "pr-0 pl-6 text-right",
                      index >= 2 && "hidden sm:table-cell",
                    )}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NIGHTJAR_RECORD_ROWS.map((row) => (
                <tr
                  key={row.species}
                  className="border-brand-dawn-foreground/12 border-b"
                >
                  <th scope="row" className="py-4 pr-6 font-normal">
                    <span className="block text-sm">{row.species}</span>
                    <span className="mt-2.5 block">
                      <CallBar calls={row.calls} ceiling={LOUDEST} />
                    </span>
                  </th>
                  <td className={cn(FIGURE_CELL, "pl-6")}>{row.calls}</td>
                  <td className={cn(FIGURE_CELL, CLOCK_CELL, "pl-6")}>
                    {nightjarNightClock(row.first)}
                  </td>
                  <td className={cn(FIGURE_CELL, CLOCK_CELL, "pl-6")}>
                    {nightjarNightClock(row.last)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  className="text-brand-dawn-foreground/60 py-5 pr-6 text-left text-sm font-normal"
                >
                  {NIGHTJAR_RECORD_TOTAL_LABEL}
                </th>
                <td className="font-station-mono py-5 pl-6 text-right text-lg tabular-nums">
                  {NIGHTJAR_TOTAL_CALLS}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
