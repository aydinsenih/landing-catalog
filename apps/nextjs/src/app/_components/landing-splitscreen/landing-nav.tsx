import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_BRAND,
  SPLITSCREEN_NAV_LABEL,
  SPLITSCREEN_NAV_LINKS,
  SPLITSCREEN_SIGN_IN,
  SPLITSCREEN_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

export function LandingNav() {
  return (
    <header className="bg-brand-ink text-brand-ink-foreground">
      <nav
        aria-label={SPLITSCREEN_NAV_LABEL}
        className="container flex h-20 items-center gap-10"
      >
        <span className="font-display text-xl font-semibold tracking-tight">
          {SPLITSCREEN_BRAND}
        </span>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {SPLITSCREEN_NAV_LINKS.map((link) => (
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

        <div className="ml-auto flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-brand-ink-foreground/80 hover:text-brand-ink-foreground hover:bg-brand-ink-foreground/10 hidden sm:inline-flex"
          >
            <a href={SPLITSCREEN_APP_HREF}>{SPLITSCREEN_SIGN_IN}</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-brand-ink-foreground text-brand-ink hover:bg-brand-ink-foreground/90"
          >
            <a href={SPLITSCREEN_APP_HREF}>{SPLITSCREEN_START}</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
