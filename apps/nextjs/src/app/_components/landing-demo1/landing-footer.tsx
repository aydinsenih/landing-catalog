import {
  DEMO1_BRAND,
  DEMO1_FOOTER_NOTE,
  DEMO1_NAV_LINKS,
} from "@acme/constants";

export function LandingFooter() {
  return (
    <footer className="bg-brand-ink text-brand-ink-foreground">
      <div className="border-brand-ink-foreground/15 container flex flex-col gap-6 border-t py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display font-semibold tracking-tight">
            {DEMO1_BRAND}
          </p>
          <p className="text-brand-ink-foreground/65 mt-1 text-sm">
            {DEMO1_FOOTER_NOTE}
          </p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm">
          {DEMO1_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-ink-foreground/70 hover:text-brand-ink-foreground focus-visible:ring-brand-ink-foreground/70 rounded-sm underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
