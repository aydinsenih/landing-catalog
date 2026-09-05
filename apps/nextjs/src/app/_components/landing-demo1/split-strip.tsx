import type { Demo1SplitRow, Demo1SplitTone } from "@acme/constants";
import { cn } from "@acme/ui";

const SEGMENT_TONE: Record<Demo1SplitTone, string> = {
  a: "bg-brand-split-a",
  b: "bg-brand-split-b",
  c: "bg-brand-split-c",
};

export function SplitStrip(props: {
  rows: readonly Demo1SplitRow[];
  className?: string;
}) {
  return (
    <div data-slot="split-strip" className={cn("flex gap-1", props.className)}>
      {props.rows.map((row) => (
        <div
          key={row.name}
          style={{ flexGrow: row.share }}
          className={cn("rounded-full", SEGMENT_TONE[row.tone])}
        />
      ))}
    </div>
  );
}
