import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SPLITSCREEN_SPLIT_ROWS } from "@acme/constants";

import { SplitStrip } from "~/app/_components/landing-splitscreen/split-strip";

function segmentsOf(container: HTMLElement) {
  return [
    ...container.querySelectorAll<HTMLElement>(
      "[data-slot='split-strip'] > div",
    ),
  ];
}

describe("SplitStrip", () => {
  it("draws one segment for each share", () => {
    const { container } = render(<SplitStrip rows={SPLITSCREEN_SPLIT_ROWS} />);

    expect(segmentsOf(container)).toHaveLength(SPLITSCREEN_SPLIT_ROWS.length);
  });

  it("weights each segment by the share it stands for", () => {
    const { container } = render(<SplitStrip rows={SPLITSCREEN_SPLIT_ROWS} />);

    expect(
      segmentsOf(container).map((segment) => segment.style.flexGrow),
    ).toStrictEqual(SPLITSCREEN_SPLIT_ROWS.map((row) => String(row.share)));
  });

  it("gives every share its own colour", () => {
    const { container } = render(<SplitStrip rows={SPLITSCREEN_SPLIT_ROWS} />);

    const tones = segmentsOf(container).map((segment) =>
      [...segment.classList].find((name) => name.startsWith("bg-brand-split-")),
    );

    expect(new Set(tones).size).toBe(SPLITSCREEN_SPLIT_ROWS.length);
  });

  it("takes the shape it is asked for, and holds its own without one", () => {
    const { container: sized } = render(
      <SplitStrip rows={SPLITSCREEN_SPLIT_ROWS} className="h-1.5" />,
    );
    expect(sized.querySelector("[data-slot='split-strip']")).toHaveClass(
      "h-1.5",
    );

    const { container: bare } = render(
      <SplitStrip rows={SPLITSCREEN_SPLIT_ROWS} />,
    );
    expect(bare.querySelector("[data-slot='split-strip']")).toHaveClass("flex");
  });
});
