import {
  TURN_BRAND,
  TURN_FOOTER_NAV_LABEL,
  TURN_FOOTER_NOTE,
  TURN_NAV_LINKS,
} from "@acme/constants";

export function LandingFooter() {
  return (
    <footer className="bg-brand-bone text-brand-bone-foreground">
      <div className="container">
        <div className="border-brand-bone-foreground/25 flex flex-col gap-8 border-t py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-circle text-lg font-semibold tracking-tight">
              {TURN_BRAND}
            </p>
            <p className="text-brand-bone-foreground/55 mt-2 max-w-sm text-sm leading-relaxed">
              {TURN_FOOTER_NOTE}
            </p>
          </div>
          <nav
            aria-label={TURN_FOOTER_NAV_LABEL}
            className="flex flex-wrap gap-6"
          >
            {TURN_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-bone-foreground/60 hover:text-brand-bone-foreground focus-visible:ring-brand-pot rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
