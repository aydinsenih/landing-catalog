import {
  NIGHTJAR_AXIS_OFFSETS,
  NIGHTJAR_BIN_CEILING,
  NIGHTJAR_BIN_MINUTES,
  NIGHTJAR_BINS,
  NIGHTJAR_NIGHT_MINUTES,
  NIGHTJAR_STRIP_LABEL,
  nightjarNightClock,
} from "@acme/constants";

const BASELINE = 126;
const TALLEST = 108;
const STUB = 4;
const SLOTS = NIGHTJAR_NIGHT_MINUTES / NIGHTJAR_BIN_MINUTES;
const HALF_BIN = NIGHTJAR_BIN_MINUTES / 2;

export function NightStrip() {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">{NIGHTJAR_STRIP_LABEL}</figcaption>

      <svg
        aria-hidden
        viewBox={`0 0 ${NIGHTJAR_NIGHT_MINUTES} 132`}
        className="h-auto w-full overflow-visible"
      >
        <rect
          x="0"
          y={BASELINE}
          width={NIGHTJAR_NIGHT_MINUTES}
          height="1"
          className="fill-brand-quiet/40"
        />

        <g className="nightjar-sweep">
          {Array.from({ length: SLOTS }, (_, slot) => (
            <rect
              key={slot}
              x={slot * NIGHTJAR_BIN_MINUTES + HALF_BIN - 0.75}
              y={BASELINE - STUB}
              width="1.5"
              height={STUB}
              className="fill-brand-quiet/55"
            />
          ))}

          {NIGHTJAR_BINS.map((bin) => {
            const height = (bin.calls / NIGHTJAR_BIN_CEILING) * TALLEST;

            return (
              <rect
                key={bin.offset}
                x={bin.offset + HALF_BIN - 2}
                y={BASELINE - height}
                width="4"
                height={height}
                className="fill-brand-call"
              />
            );
          })}
        </g>
      </svg>

      <div className="text-brand-night-foreground/45 font-station-mono mt-3 flex justify-between text-xs tabular-nums">
        {NIGHTJAR_AXIS_OFFSETS.map((offset) => (
          <span key={offset}>{nightjarNightClock(offset)}</span>
        ))}
      </div>
    </figure>
  );
}
