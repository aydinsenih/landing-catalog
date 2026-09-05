import {
  SOAK_CURVE_CEILING_C,
  SOAK_CURVE_HOURS,
  SOAK_CURVE_LABEL,
  SOAK_CURVE_PEAK,
  SOAK_CURVE_POINTS,
} from "@acme/constants";

const PLOT_WIDTH = 160;
const PLOT_HEIGHT = 90;

function plotX(hour: number) {
  return (hour / SOAK_CURVE_HOURS) * PLOT_WIDTH;
}

function plotY(temp: number) {
  return PLOT_HEIGHT - (temp / SOAK_CURVE_CEILING_C) * PLOT_HEIGHT;
}

export function FiringCurve() {
  const peakY = plotY(SOAK_CURVE_PEAK.temp);

  return (
    <svg
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- An inline SVG carries the plot itself, so an img tag cannot replace it, and role="img" is what exposes the label below to a screen reader.
      role="img"
      aria-label={SOAK_CURVE_LABEL}
      data-slot="firing-curve"
      viewBox={`0 0 ${PLOT_WIDTH} ${PLOT_HEIGHT}`}
      className="aspect-video w-full overflow-visible"
    >
      <line
        x1={0}
        y1={peakY}
        x2={PLOT_WIDTH}
        y2={peakY}
        strokeWidth={1}
        strokeDasharray="2 4"
        vectorEffect="non-scaling-stroke"
        className="stroke-brand-copper/45"
      />
      <line
        x1={0}
        y1={PLOT_HEIGHT}
        x2={PLOT_WIDTH}
        y2={PLOT_HEIGHT}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
        className="stroke-brand-kiln-foreground/20"
      />
      <polyline
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="stroke-brand-celadon kiln-plot"
        points={SOAK_CURVE_POINTS.map(
          (point) => `${plotX(point.hour)},${plotY(point.temp)}`,
        ).join(" ")}
      />
      <circle
        cx={plotX(SOAK_CURVE_PEAK.hour)}
        cy={peakY}
        r={2.6}
        className="fill-brand-copper"
      />
    </svg>
  );
}
