import {
  soakCelsius,
  soakHold,
  soakRate,
  SOAK_SCHEDULE_COLUMNS,
  SOAK_SCHEDULE_NOTE,
  SOAK_SCHEDULE_ROWS,
  SOAK_SCHEDULE_TITLE,
  SOAK_SCHEDULE_TOTAL,
  SOAK_SCHEDULE_TOTAL_LABEL,
} from "@acme/constants";
import { cn } from "@acme/ui";

export function FiringSchedule() {
  return (
    <div className="overflow-x-auto">
      <table
        data-slot="firing-schedule"
        className="w-full border-collapse text-sm"
      >
        <caption className="mb-8 text-left">
          <span className="font-display-serif block text-3xl font-semibold tracking-tight">
            {SOAK_SCHEDULE_TITLE}
          </span>
          <span className="text-brand-kiln-foreground/60 mt-3 block">
            {SOAK_SCHEDULE_NOTE}
          </span>
        </caption>

        <thead>
          <tr className="border-brand-kiln-foreground/25 border-b">
            {SOAK_SCHEDULE_COLUMNS.map((column, index) => (
              <th
                key={column}
                scope="col"
                className={cn(
                  "text-brand-celadon/70 pb-3 font-normal",
                  index === 0 ? "text-left" : "text-right",
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {SOAK_SCHEDULE_ROWS.map((row) => (
            <tr
              key={row.label}
              className="border-brand-kiln-foreground/10 border-b"
            >
              <th scope="row" className="py-4 text-left font-medium">
                {row.label}
              </th>
              <td className="text-brand-kiln-foreground/65 py-4 text-right font-mono tabular-nums">
                {soakRate(row.rate)}
              </td>
              <td className="py-4 text-right font-mono tabular-nums">
                {soakCelsius(row.target)}
              </td>
              <td
                className={cn(
                  "py-4 text-right font-mono tabular-nums",
                  row.holdMinutes === 0
                    ? "text-brand-kiln-foreground/35"
                    : "text-brand-celadon",
                )}
              >
                {soakHold(row.holdMinutes)}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="text-brand-kiln-foreground/60">
            <th scope="row" colSpan={3} className="pt-5 text-left font-normal">
              {SOAK_SCHEDULE_TOTAL_LABEL}
            </th>
            <td className="pt-5 text-right font-mono tabular-nums">
              {SOAK_SCHEDULE_TOTAL}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
