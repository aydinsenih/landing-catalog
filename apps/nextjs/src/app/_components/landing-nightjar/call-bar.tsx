export function CallBar(props: { calls: number; ceiling: number }) {
  const share = Math.max(2, (props.calls / props.ceiling) * 100);

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      className="h-1 w-full"
    >
      <rect width={share} height="2" className="fill-brand-call" />
    </svg>
  );
}
