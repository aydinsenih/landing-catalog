import {
  CUTOFF_AXIS_MINUTES,
  CUTOFF_BEDTIME_MINUTE,
  CUTOFF_CURVE_CEILING,
  CUTOFF_CURVE_END,
  CUTOFF_CURVE_LABEL,
  CUTOFF_CURVE_POINTS,
  CUTOFF_CURVE_START,
  CUTOFF_MINUTE,
  CUTOFF_THRESHOLD_MG,
  cutoffClock,
} from "@acme/constants";

const SPAN = CUTOFF_CURVE_END - CUTOFF_CURVE_START;
const FLOOR = 310;
const PLOT = 300;

function x(minute: number) {
  return minute - CUTOFF_CURVE_START;
}

function y(mg: number) {
  return FLOOR - (mg / CUTOFF_CURVE_CEILING) * PLOT;
}

const LINE = CUTOFF_CURVE_POINTS.map((p) => `${x(p.minute)},${y(p.mg)}`).join(
  " ",
);
const AREA = `${x(CUTOFF_CURVE_START)},${FLOOR} ${LINE} ${x(CUTOFF_CURVE_END)},${FLOOR}`;
const AT_BEDTIME =
  CUTOFF_CURVE_POINTS.find((p) => p.minute === CUTOFF_BEDTIME_MINUTE) ??
  CUTOFF_CURVE_POINTS[CUTOFF_CURVE_POINTS.length - 1];

export function DecayCurve() {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">{CUTOFF_CURVE_LABEL}</figcaption>

      <svg
        aria-hidden
        viewBox={`0 0 ${SPAN} 320`}
        className="h-auto w-full overflow-visible"
      >
        <rect
          x={x(CUTOFF_BEDTIME_MINUTE)}
          y="0"
          width={CUTOFF_CURVE_END - CUTOFF_BEDTIME_MINUTE}
          height={FLOOR}
          className="fill-brand-bedtime/8"
        />

        <polygon points={AREA} className="fill-brand-dose/10" />
        <polyline
          points={LINE}
          fill="none"
          strokeWidth="2.5"
          className="stroke-brand-dose"
        />

        <line
          x1="0"
          x2={SPAN}
          y1={y(CUTOFF_THRESHOLD_MG)}
          y2={y(CUTOFF_THRESHOLD_MG)}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="stroke-brand-clear"
        />

        <line
          x1={x(CUTOFF_MINUTE)}
          x2={x(CUTOFF_MINUTE)}
          y1="0"
          y2={FLOOR}
          strokeWidth="1.5"
          className="stroke-brand-dose/45"
        />
        <line
          x1={x(CUTOFF_BEDTIME_MINUTE)}
          x2={x(CUTOFF_BEDTIME_MINUTE)}
          y1="0"
          y2={FLOOR}
          strokeWidth="1.5"
          className="stroke-brand-bedtime/40"
        />

        <line
          x1="0"
          x2={SPAN}
          y1={FLOOR}
          y2={FLOOR}
          strokeWidth="1"
          className="stroke-brand-paper-foreground/20"
        />

        {AT_BEDTIME ? (
          <circle
            cx={x(AT_BEDTIME.minute)}
            cy={y(AT_BEDTIME.mg)}
            r="6"
            className="fill-brand-dose"
          />
        ) : null}
      </svg>

      <div className="text-brand-paper-foreground/45 mt-3 flex justify-between font-mono text-xs tabular-nums">
        {CUTOFF_AXIS_MINUTES.map((minute) => (
          <span key={minute}>{cutoffClock(minute)}</span>
        ))}
      </div>
    </figure>
  );
}
