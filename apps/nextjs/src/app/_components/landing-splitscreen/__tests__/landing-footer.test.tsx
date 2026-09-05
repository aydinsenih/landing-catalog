import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_BRAND,
  SPLITSCREEN_FOOTER_NOTE,
  SPLITSCREEN_NAV_LINKS,
} from "@acme/constants";

import { LandingFooter } from "~/app/_components/landing-splitscreen/landing-footer";

describe("LandingFooter", () => {
  it("signs off with the wordmark and the note", () => {
    render(<LandingFooter />);

    expect(screen.getByText(SPLITSCREEN_BRAND)).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_FOOTER_NOTE)).toBeInTheDocument();
  });

  // The footer repeats the links of the nav, so a section that the nav renames
  // has to keep working from down here too.
  it("repeats every section link the nav carries", () => {
    render(<LandingFooter />);

    for (const link of SPLITSCREEN_NAV_LINKS) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
    expect(screen.getAllByRole("link")).toHaveLength(
      SPLITSCREEN_NAV_LINKS.length,
    );
  });
});
