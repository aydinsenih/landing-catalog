import { TURN_MEMBERS } from "@acme/constants";

export function PaidDots(props: { paid: number }) {
  return (
    <span aria-hidden className="flex gap-1">
      {Array.from({ length: TURN_MEMBERS }, (_, seat) => (
        <span
          key={seat}
          className={
            seat < props.paid
              ? "bg-brand-pot size-1.5 rounded-full"
              : "bg-brand-bone-foreground/20 size-1.5 rounded-full"
          }
        />
      ))}
    </span>
  );
}
