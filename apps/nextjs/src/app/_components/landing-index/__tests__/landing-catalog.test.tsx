import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  LANDING_INDEX_DESCRIPTION,
  LANDING_INDEX_EMPTY,
  LANDING_INDEX_ENTRIES,
  LANDING_INDEX_TITLE,
} from "@acme/constants";

import { LandingCatalog } from "~/app/_components/landing-index/landing-catalog";

describe("LandingCatalog", () => {
  it("titles the catalog and says what it holds", () => {
    render(<LandingCatalog entries={LANDING_INDEX_ENTRIES} />);

    expect(
      screen.getByRole("heading", { level: 1, name: LANDING_INDEX_TITLE }),
    ).toBeInTheDocument();
    expect(screen.getByText(LANDING_INDEX_DESCRIPTION)).toBeInTheDocument();
  });

  it("links every entry to its own route", () => {
    render(<LandingCatalog entries={LANDING_INDEX_ENTRIES} />);

    for (const entry of LANDING_INDEX_ENTRIES) {
      const link = screen.getByRole("link", { name: RegExp(entry.name) });

      expect(link).toHaveAttribute("href", entry.href);
      expect(link).toHaveTextContent(entry.summary);
    }
    expect(screen.getAllByRole("link")).toHaveLength(
      LANDING_INDEX_ENTRIES.length,
    );
  });

  it("says so when the catalog is empty", () => {
    render(<LandingCatalog entries={[]} />);

    expect(screen.getByText(LANDING_INDEX_EMPTY)).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
