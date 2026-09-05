import {
  NIGHTJAR_BRAND,
  NIGHTJAR_FOOTER_NAV_LABEL,
  NIGHTJAR_FOOTER_NOTE,
  NIGHTJAR_NAV_LINKS,
} from "@acme/constants";

export function LandingFooter() {
  return (
    <footer className="bg-brand-dawn text-brand-dawn-foreground">
      <div className="container">
        <div className="border-brand-dawn-foreground/20 flex flex-col gap-8 border-t py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display-grotesk text-lg font-medium tracking-tight">
              {NIGHTJAR_BRAND}
            </p>
            <p className="text-brand-dawn-foreground/55 mt-2 max-w-sm text-sm leading-relaxed">
              {NIGHTJAR_FOOTER_NOTE}
            </p>
          </div>

          <nav
            aria-label={NIGHTJAR_FOOTER_NAV_LABEL}
            className="flex flex-wrap gap-6"
          >
            {NIGHTJAR_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-dawn-foreground/60 hover:text-brand-dawn-foreground focus-visible:ring-brand-dawn-foreground rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none"
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
