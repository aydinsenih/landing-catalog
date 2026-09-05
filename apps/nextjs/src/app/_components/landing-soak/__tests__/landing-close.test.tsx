import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SOAK_APP_HREF,
  SOAK_CLOSE_BODY,
  SOAK_CLOSE_HEADLINE,
  SOAK_HOLD_REFRAIN,
  SOAK_LOG_HREF,
  SOAK_PRICE,
  SOAK_PRICE_NOTE,
  SOAK_PRICING_HREF,
  SOAK_READ_LOG,
  SOAK_START,
} from "@acme/constants";

import { LandingClose } from "~/app/_components/landing-soak/landing-close";

describe("LandingClose", () => {
  it("closes with the ask and the reason to take it", () => {
    render(<LandingClose />);

    expect(
      screen.getByRole("heading", { level: 2, name: SOAK_CLOSE_HEADLINE }),
    ).toBeInTheDocument();
    expect(screen.getByText(SOAK_CLOSE_BODY)).toBeInTheDocument();
  });

  it("names one price, and what comes with it", () => {
    render(<LandingClose />);

    expect(screen.getByText(SOAK_PRICE)).toBeInTheDocument();
    expect(screen.getByText(SOAK_PRICE_NOTE)).toBeInTheDocument();
  });

  it("says the claim of the page once more", () => {
    render(<LandingClose />);

    expect(screen.getByText(SOAK_HOLD_REFRAIN)).toBeInTheDocument();
  });

  // The nav addresses this section by a fragment, and nothing type-checks it.
  it("holds the section the pricing link points at", () => {
    const { container } = render(<LandingClose />);

    expect(container.querySelector(SOAK_PRICING_HREF)).toBeInTheDocument();
  });

  it("repeats both actions of the hero", () => {
    render(<LandingClose />);

    expect(screen.getByRole("link", { name: SOAK_START })).toHaveAttribute(
      "href",
      SOAK_APP_HREF,
    );
    expect(screen.getByRole("link", { name: SOAK_READ_LOG })).toHaveAttribute(
      "href",
      SOAK_LOG_HREF,
    );
  });
});
