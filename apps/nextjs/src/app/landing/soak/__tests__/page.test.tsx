import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SOAK_CLOSE_HEADLINE,
  SOAK_DESCRIPTION,
  SOAK_FOOTER_NOTE,
  SOAK_HERO_HEADLINE,
  SOAK_HOLD_REFRAIN,
  SOAK_LOG_TITLE,
  SOAK_PHASES_TITLE,
  SOAK_TITLE,
} from "@acme/constants";

import LandingSoakPage, { metadata } from "~/app/landing/soak/page";

describe("LandingSoakPage", () => {
  it("carries a title and a description", () => {
    expect(metadata.title).toBe(SOAK_TITLE);
    expect(metadata.description).toBe(SOAK_DESCRIPTION);
  });

  it("frames the page with a nav, a main, and a footer", () => {
    render(<LandingSoakPage />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText(SOAK_FOOTER_NOTE)).toBeInTheDocument();
  });

  it("runs the firing from the headline to the close", () => {
    render(<LandingSoakPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: SOAK_HERO_HEADLINE }),
    ).toBeInTheDocument();

    for (const headline of [
      SOAK_HOLD_REFRAIN,
      SOAK_LOG_TITLE,
      SOAK_PHASES_TITLE,
      SOAK_CLOSE_HEADLINE,
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: headline }),
      ).toBeInTheDocument();
    }
  });
});
