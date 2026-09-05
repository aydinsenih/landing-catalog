import {
  TURN_CURRENT_ROUND,
  TURN_MEMBERS,
  TURN_ROUND_OPEN,
  TURN_ROUND_TO_COME,
  TURN_ROUNDS,
  TURN_ROUNDS_BODY,
  TURN_ROUNDS_COLUMNS,
  TURN_ROUNDS_TITLE,
  turnPaid,
} from "@acme/constants";
import { cn } from "@acme/ui";

import { PaidDots } from "~/app/_components/landing-turn/paid-dots";

export function LandingRounds() {
  return (
    <section
      id="rounds"
      className="bg-brand-bone text-brand-bone-foreground scroll-mt-8"
    >
      <div className="container py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <h2 className="font-circle text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:col-span-5">
            {TURN_ROUNDS_TITLE}
          </h2>
          <p className="text-brand-bone-foreground/70 mt-6 max-w-prose leading-relaxed lg:col-span-6 lg:col-start-7 lg:mt-0">
            {TURN_ROUNDS_BODY}
          </p>
        </div>

        <div className="mt-14 overflow-x-auto lg:mt-20">
          <table className="w-full text-left">
            <caption className="sr-only">{TURN_ROUNDS_TITLE}</caption>
            <thead>
              <tr className="border-brand-bone-foreground/25 border-b">
                {TURN_ROUNDS_COLUMNS.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={cn(
                      "text-brand-bone-foreground/50 py-3 pr-6 text-xs font-normal",
                      index === 0 && "w-16",
                      index === TURN_ROUNDS_COLUMNS.length - 1 &&
                        "pr-0 text-right",
                    )}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TURN_ROUNDS.map((round) => {
                const open = round.round === TURN_CURRENT_ROUND;
                const toCome = round.round > TURN_CURRENT_ROUND;

                return (
                  <tr
                    key={round.round}
                    className={cn(
                      "border-brand-bone-foreground/12 border-b",
                      toCome && "text-brand-bone-foreground/50",
                    )}
                  >
                    <th
                      scope="row"
                      className="py-4 pr-6 font-mono text-sm font-normal tabular-nums"
                    >
                      {round.round}
                    </th>
                    <td className="py-4 pr-6 text-sm whitespace-nowrap">
                      {round.month}
                    </td>
                    <td
                      className={cn(
                        "font-circle py-4 pr-6 text-lg whitespace-nowrap",
                        open && "text-brand-pot font-semibold",
                      )}
                    >
                      {round.member}
                    </td>
                    <td
                      className={cn(
                        "py-4 text-right text-sm whitespace-nowrap",
                        open && "text-brand-pot",
                      )}
                    >
                      <span className="mr-4 hidden align-middle sm:inline-flex">
                        <PaidDots paid={round.paid} />
                      </span>
                      {toCome
                        ? TURN_ROUND_TO_COME
                        : open
                          ? TURN_ROUND_OPEN
                          : turnPaid(round.paid, TURN_MEMBERS)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
