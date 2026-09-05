import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SOAK_CURVE_LABEL, SOAK_CURVE_POINTS } from "@acme/constants";

import { FiringCurve } from "~/app/_components/landing-soak/firing-curve";

function readPoints(container: HTMLElement) {
  const points =
    container.querySelector("polyline")?.getAttribute("points") ?? "";

  return points.split(" ");
}

function heightOf(pair: string) {
  return Number(pair.slice(pair.indexOf(",") + 1));
}

describe("FiringCurve", () => {
  it("names the firing it plots", () => {
    const { container } = render(<FiringCurve />);

    expect(container.querySelector("svg")).toHaveAttribute(
      "aria-label",
      SOAK_CURVE_LABEL,
    );
  });

  it("plots every point of the program", () => {
    const { container } = render(<FiringCurve />);

    expect(readPoints(container)).toHaveLength(SOAK_CURVE_POINTS.length);
  });

  // The line is hidden by a dash offset until the utility of globals.css draws
  // it, so the class is the only thing that makes the curve visible at all.
  it("draws itself once", () => {
    const { container } = render(<FiringCurve />);

    expect(container.querySelector("polyline")).toHaveClass("kiln-plot");
  });

  it("marks the peak, on the curve and at the top of it", () => {
    const { container } = render(<FiringCurve />);
    const marker = container.querySelector("circle");

    expect(marker).toBeInTheDocument();

    const pair = `${marker?.getAttribute("cx")},${marker?.getAttribute("cy")}`;

    expect(readPoints(container)).toContain(pair);
    expect(heightOf(pair)).toBe(
      Math.min(...readPoints(container).map(heightOf)),
    );
  });
});
