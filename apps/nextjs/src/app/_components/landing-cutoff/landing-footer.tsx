import {
  CUTOFF_BRAND,
  CUTOFF_FOOTER_NAV_LABEL,
  CUTOFF_FOOTER_NOTE,
  CUTOFF_NAV_LINKS,
} from "@acme/constants";

export function LandingFooter() {
  return (
    <footer className="bg-brand-paper text-brand-paper-foreground">
      <div className="container">
        <div className="border-brand-paper-foreground/25 flex flex-col gap-8 border-t py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-editorial text-xl">{CUTOFF_BRAND}</p>
            <p className="text-brand-paper-foreground/55 mt-2 max-w-sm text-sm leading-relaxed">
              {CUTOFF_FOOTER_NOTE}
            </p>
          </div>
          <nav
            aria-label={CUTOFF_FOOTER_NAV_LABEL}
            className="flex flex-wrap gap-6"
          >
            {CUTOFF_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-paper-foreground/60 hover:text-brand-paper-foreground focus-visible:ring-brand-dose rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none"
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
