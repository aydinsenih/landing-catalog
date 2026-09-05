import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_APP_HREF,
  DEMO1_CLOSE_BODY,
  DEMO1_CLOSE_HEADLINE,
  DEMO1_PRICING_HREF,
  DEMO1_START,
} from "@acme/constants";

import { LandingClose } from "~/app/_components/landing-demo1/landing-close";

describe("LandingClose", () => {
  it("closes on the price and what it buys", () => {
    render(<LandingClose />);

    expect(
      screen.getByRole("heading", { level: 2, name: DEMO1_CLOSE_HEADLINE }),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_CLOSE_BODY)).toBeInTheDocument();
  });

  // The nav addresses this section by a fragment.
  it("answers the fragment the nav links to", () => {
    const { container } = render(<LandingClose />);

    expect(container.querySelector(DEMO1_PRICING_HREF)).toBeInTheDocument();
  });

  it("leaves one way out, into the app", () => {
    render(<LandingClose />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAccessibleName(DEMO1_START);
    expect(links[0]).toHaveAttribute("href", DEMO1_APP_HREF);
  });
});
