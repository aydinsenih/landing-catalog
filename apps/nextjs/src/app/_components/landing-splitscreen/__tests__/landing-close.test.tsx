import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_CLOSE_BODY,
  SPLITSCREEN_CLOSE_HEADLINE,
  SPLITSCREEN_PRICING_HREF,
  SPLITSCREEN_START,
} from "@acme/constants";

import { LandingClose } from "~/app/_components/landing-splitscreen/landing-close";

describe("LandingClose", () => {
  it("closes on the price and what it buys", () => {
    render(<LandingClose />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: SPLITSCREEN_CLOSE_HEADLINE,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_CLOSE_BODY)).toBeInTheDocument();
  });

  // The nav addresses this section by a fragment.
  it("answers the fragment the nav links to", () => {
    const { container } = render(<LandingClose />);

    expect(
      container.querySelector(SPLITSCREEN_PRICING_HREF),
    ).toBeInTheDocument();
  });

  it("leaves one way out, into the app", () => {
    render(<LandingClose />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAccessibleName(SPLITSCREEN_START);
    expect(links[0]).toHaveAttribute("href", SPLITSCREEN_APP_HREF);
  });
});
