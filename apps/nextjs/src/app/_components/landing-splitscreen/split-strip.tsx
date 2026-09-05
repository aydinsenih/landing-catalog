import type { SplitscreenRow, SplitscreenTone } from "@acme/constants";
import { cn } from "@acme/ui";

const SEGMENT_TONE: Record<SplitscreenTone, string> = {
  a: "bg-brand-split-a",
  b: "bg-brand-split-b",
  c: "bg-brand-split-c",
};

export function SplitStrip(props: {
  rows: readonly SplitscreenRow[];
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
