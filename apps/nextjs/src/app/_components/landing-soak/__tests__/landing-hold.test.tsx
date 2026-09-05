import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SOAK_HOLD_BODY, SOAK_HOLD_REFRAIN } from "@acme/constants";

import { LandingHold } from "~/app/_components/landing-soak/landing-hold";

describe("LandingHold", () => {
  it("holds the page on one claim, and explains it beside", () => {
    render(<LandingHold />);

    expect(
      screen.getByRole("heading", { level: 2, name: SOAK_HOLD_REFRAIN }),
    ).toBeInTheDocument();
    expect(screen.getByText(SOAK_HOLD_BODY)).toBeInTheDocument();
  });
});
