import {
  SOAK_BRAND,
  SOAK_FOOTER_NAV_LABEL,
  SOAK_FOOTER_NOTE,
  SOAK_NAV_LINKS,
} from "@acme/constants";

export function LandingFooter() {
  return (
    <footer className="bg-brand-ash text-brand-ash-foreground">
      <div className="border-brand-ash-foreground/15 container flex flex-col gap-8 border-t py-13 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display-serif text-xl font-semibold tracking-tight">
            {SOAK_BRAND}
          </p>
          <p className="text-brand-ash-foreground/70 mt-3 max-w-prose text-sm leading-relaxed">
            {SOAK_FOOTER_NOTE}
          </p>
        </div>

        <nav
          aria-label={SOAK_FOOTER_NAV_LABEL}
          className="flex flex-wrap gap-8 text-sm"
        >
          {SOAK_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-ash-foreground/70 hover:text-brand-ash-foreground focus-visible:ring-brand-copper rounded-sm focus-visible:ring-2 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
