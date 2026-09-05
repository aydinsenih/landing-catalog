import type { Demo1SplitRow, Demo1SplitTone } from "@acme/constants";
import { splitShareLabel } from "@acme/constants";
import { cn } from "@acme/ui";

import { SplitStrip } from "~/app/_components/landing-demo1/split-strip";

const SHARE_TONE: Record<Demo1SplitTone, string> = {
  a: "text-brand-split-a",
  b: "text-brand-split-b",
  c: "text-brand-split-c",
};

export function SplitBar(props: {
  label: string;
  rows: readonly Demo1SplitRow[];
}) {
  return (
    <div data-slot="split-bar">
      <p className="text-brand-ink-foreground/70 text-sm">{props.label}</p>

      <SplitStrip rows={props.rows} className="split-wipe mt-4 h-3" />

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:gap-1">
        {props.rows.map((row) => (
          <div
            key={row.name}
            style={{ flexGrow: row.share }}
            data-slot="split-share"
            className="min-w-0 md:basis-0 md:pr-8"
          >
            <p
              className={cn(
                "font-display text-5xl leading-none font-semibold tracking-tight tabular-nums",
                SHARE_TONE[row.tone],
              )}
            >
              {splitShareLabel(row.share)}
            </p>
            <p className="mt-4 font-medium">{row.name}</p>
            <p className="text-brand-ink-foreground/65 text-sm">{row.role}</p>
            <p className="text-brand-ink-foreground/80 mt-3 text-sm leading-relaxed">
              {row.duty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
