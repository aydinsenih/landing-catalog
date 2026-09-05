import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_BRAND,
  SPLITSCREEN_NAV_LABEL,
  SPLITSCREEN_NAV_LINKS,
  SPLITSCREEN_SIGN_IN,
  SPLITSCREEN_START,
} from "@acme/constants";

import { LandingNav } from "~/app/_components/landing-splitscreen/landing-nav";

describe("LandingNav", () => {
  it("carries the wordmark inside a named landmark", () => {
    render(<LandingNav />);

    expect(
      screen.getByRole("navigation", { name: SPLITSCREEN_NAV_LABEL }),
    ).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_BRAND)).toBeInTheDocument();
  });

  // Each label addresses a section of the page by a string, and nothing else
  // checks that the two still agree.
  it("points every section link at the section it names", () => {
    render(<LandingNav />);

    for (const link of SPLITSCREEN_NAV_LINKS) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });

  it("sends both account actions to the app", () => {
    render(<LandingNav />);

    expect(
      screen.getByRole("link", { name: SPLITSCREEN_SIGN_IN }),
    ).toHaveAttribute("href", SPLITSCREEN_APP_HREF);
    expect(
      screen.getByRole("link", { name: SPLITSCREEN_START }),
    ).toHaveAttribute("href", SPLITSCREEN_APP_HREF);
  });
});
