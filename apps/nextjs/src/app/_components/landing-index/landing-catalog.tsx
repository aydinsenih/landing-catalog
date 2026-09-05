import type { LandingCatalogEntry } from "@acme/constants";
import {
  LANDING_INDEX_DESCRIPTION,
  LANDING_INDEX_EMPTY,
  LANDING_INDEX_TITLE,
} from "@acme/constants";

export function LandingCatalog(props: {
  entries: readonly LandingCatalogEntry[];
}) {
  return (
    <div className="container py-24 lg:py-32">
      <h1 className="text-4xl font-semibold tracking-tight">
        {LANDING_INDEX_TITLE}
      </h1>
      <p className="text-muted-foreground mt-4 max-w-prose leading-relaxed">
        {LANDING_INDEX_DESCRIPTION}
      </p>

      {props.entries.length === 0 ? (
        <p className="text-muted-foreground mt-16 text-sm">
          {LANDING_INDEX_EMPTY}
        </p>
      ) : (
        <ul className="mt-16 border-t">
          {props.entries.map((entry) => (
            <li key={entry.href} className="border-b">
              <a
                href={entry.href}
                className="group focus-visible:ring-ring flex flex-col gap-2 rounded-sm py-8 focus-visible:ring-2 focus-visible:outline-none sm:flex-row sm:items-baseline sm:gap-12"
              >
                <span className="text-xl font-semibold tracking-tight underline-offset-4 group-hover:underline sm:w-56 sm:shrink-0">
                  {entry.name}
                </span>
                <span className="text-muted-foreground max-w-prose text-sm leading-relaxed">
                  {entry.summary}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
