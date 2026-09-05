import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SOAK_PHASES, SOAK_PHASES_TITLE } from "@acme/constants";

import { LandingPhases } from "~/app/_components/landing-soak/landing-phases";

describe("LandingPhases", () => {
  it("titles the section", () => {
    render(<LandingPhases />);

    expect(
      screen.getByRole("heading", { level: 2, name: SOAK_PHASES_TITLE }),
    ).toBeInTheDocument();
  });

  it("walks the firing from the load to the unload", () => {
    render(<LandingPhases />);

    for (const phase of SOAK_PHASES) {
      expect(
        screen.getByRole("heading", { level: 3, name: phase.label }),
      ).toBeInTheDocument();
      expect(screen.getByText(phase.body)).toBeInTheDocument();
    }
  });
});
