import {
  CUTOFF_DAY_TOTAL_MG,
  CUTOFF_DOSES,
  CUTOFF_DOSES_BODY,
  CUTOFF_DOSES_COLUMNS,
  CUTOFF_DOSES_TITLE,
  CUTOFF_DOSES_TOTAL_LABEL,
  CUTOFF_LATE_NOTE,
  CUTOFF_MINUTE,
  cutoffClock,
  cutoffMilligrams,
} from "@acme/constants";
import { cn } from "@acme/ui";

export function LandingDoses() {
  return (
    <section className="bg-brand-paper text-brand-paper-foreground">
      <div className="container pb-20 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <h2 className="font-editorial text-3xl font-normal tracking-tight text-balance sm:text-4xl lg:col-span-5">
            {CUTOFF_DOSES_TITLE}
          </h2>
          <p className="text-brand-paper-foreground/70 mt-6 max-w-prose leading-relaxed lg:col-span-6 lg:col-start-7 lg:mt-0">
            {CUTOFF_DOSES_BODY}
          </p>
        </div>

        <div className="mt-14 overflow-x-auto lg:mt-20">
          <table className="w-full text-left">
            <caption className="sr-only">{CUTOFF_DOSES_TITLE}</caption>
            <thead>
              <tr className="border-brand-paper-foreground/25 border-b">
                {CUTOFF_DOSES_COLUMNS.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={cn(
                      "text-brand-paper-foreground/50 py-3 text-xs font-normal",
                      index === 0 && "w-24",
                      index === CUTOFF_DOSES_COLUMNS.length - 1 && "text-right",
                    )}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CUTOFF_DOSES.map((dose) => {
                const late = dose.minute > CUTOFF_MINUTE;

                return (
                  <tr
                    key={dose.minute}
                    className="border-brand-paper-foreground/12 border-b"
                  >
                    <td
                      className={cn(
                        "py-5 font-mono text-sm whitespace-nowrap tabular-nums",
                        late
                          ? "text-brand-dose"
                          : "text-brand-paper-foreground/55",
                      )}
                    >
                      {cutoffClock(dose.minute)}
                    </td>
                    <th scope="row" className="py-5 pr-6 font-normal">
                      <span className="font-editorial block text-xl">
                        {dose.drink}
                      </span>
                      {late ? (
                        <span className="text-brand-dose mt-1 block text-xs">
                          {CUTOFF_LATE_NOTE}
                        </span>
                      ) : null}
                    </th>
                    <td
                      className={cn(
                        "font-editorial py-5 text-right text-xl whitespace-nowrap tabular-nums",
                        late && "text-brand-dose",
                      )}
                    >
                      {cutoffMilligrams(dose.mg)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={2}
                  className="text-brand-paper-foreground/60 py-5 pr-6 text-left text-sm font-normal"
                >
                  {CUTOFF_DOSES_TOTAL_LABEL}
                </th>
                <td className="font-editorial py-5 text-right text-2xl whitespace-nowrap tabular-nums">
                  {cutoffMilligrams(CUTOFF_DAY_TOTAL_MG)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
