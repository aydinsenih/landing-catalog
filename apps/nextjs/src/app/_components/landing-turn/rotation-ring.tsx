import {
  TURN_CURRENT_ROUND,
  TURN_MEMBERS,
  TURN_POT,
  TURN_POT_LABEL,
  TURN_RING_LABEL,
  TURN_ROUNDS,
  turnMoney,
} from "@acme/constants";

const CENTRE = 160;
const RADIUS = 120;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DONE = (CIRCUMFERENCE * (TURN_CURRENT_ROUND - 1)) / TURN_MEMBERS;
const TAKING = TURN_ROUNDS.find((round) => round.round === TURN_CURRENT_ROUND);

const SEATS = TURN_ROUNDS.map((round) => {
  const angle = ((round.round - 1) / TURN_MEMBERS) * 2 * Math.PI - Math.PI / 2;

  return {
    round: round.round,
    cx: CENTRE + RADIUS * Math.cos(angle),
    cy: CENTRE + RADIUS * Math.sin(angle),
  };
});

export function RotationRing() {
  return (
    <figure className="relative m-0 mx-auto max-w-sm">
      <figcaption className="sr-only">{TURN_RING_LABEL}</figcaption>

      <svg aria-hidden viewBox="0 0 320 320" className="h-auto w-full">
        <circle
          cx={CENTRE}
          cy={CENTRE}
          r={RADIUS}
          fill="none"
          strokeWidth="2"
          className="stroke-brand-marigold-foreground/25"
        />
        <circle
          cx={CENTRE}
          cy={CENTRE}
          r={RADIUS}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${DONE} ${CIRCUMFERENCE}`}
          transform={`rotate(-90 ${CENTRE} ${CENTRE})`}
          className="stroke-brand-pot"
        />

        {SEATS.map((seat) => {
          const done = seat.round < TURN_CURRENT_ROUND;
          const current = seat.round === TURN_CURRENT_ROUND;

          return current ? (
            <g key={seat.round}>
              <circle
                cx={seat.cx}
                cy={seat.cy}
                r="15"
                className="fill-brand-marigold stroke-brand-pot"
                strokeWidth="3"
              />
              <circle
                cx={seat.cx}
                cy={seat.cy}
                r="7"
                className="fill-brand-pot"
              />
            </g>
          ) : (
            <circle
              key={seat.round}
              cx={seat.cx}
              cy={seat.cy}
              r="8"
              className={
                done
                  ? "fill-brand-pot"
                  : "fill-brand-marigold stroke-brand-marigold-foreground/35"
              }
              strokeWidth="2"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-brand-marigold-foreground/65 text-xs">
          {TURN_POT_LABEL}
        </p>
        <p className="font-circle mt-1 text-4xl font-semibold tracking-tight">
          {turnMoney(TURN_POT)}
        </p>
        {TAKING ? (
          <p className="font-circle mt-1 text-lg">{TAKING.member}</p>
        ) : null}
      </div>
    </figure>
  );
}
