import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  soakCelsius,
  SOAK_LOG_BODY,
  SOAK_LOG_ENTRIES,
  SOAK_LOG_HREF,
  SOAK_LOG_TITLE,
  SOAK_PEAK_LABEL,
} from "@acme/constants";

import { LandingLog } from "~/app/_components/landing-soak/landing-log";

describe("LandingLog", () => {
  it("titles the section and says what a record holds", () => {
    render(<LandingLog />);

    expect(
      screen.getByRole("heading", { level: 2, name: SOAK_LOG_TITLE }),
    ).toBeInTheDocument();
    expect(screen.getByText(SOAK_LOG_BODY)).toBeInTheDocument();
  });

  it("gives every firing its date, its program, its peak, and its note", () => {
    render(<LandingLog />);

    expect(screen.getAllByRole("listitem")).toHaveLength(
      SOAK_LOG_ENTRIES.length,
    );

    for (const entry of SOAK_LOG_ENTRIES) {
      expect(screen.getByText(entry.date)).toBeInTheDocument();
      expect(screen.getByText(entry.program)).toBeInTheDocument();
      expect(
        screen.getByText(`${SOAK_PEAK_LABEL} ${soakCelsius(entry.peak)}`),
      ).toBeInTheDocument();
      expect(screen.getByText(entry.note)).toBeInTheDocument();
    }
  });

  // Two links and the nav address this section by a fragment.
  it("holds the section the log links point at", () => {
    const { container } = render(<LandingLog />);

    expect(container.querySelector(SOAK_LOG_HREF)).toBeInTheDocument();
  });
});
