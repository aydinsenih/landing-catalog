import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  soakCelsius,
  soakHold,
  soakRate,
  SOAK_NO_HOLD,
  SOAK_SCHEDULE_COLUMNS,
  SOAK_SCHEDULE_NOTE,
  SOAK_SCHEDULE_ROWS,
  SOAK_SCHEDULE_TITLE,
  SOAK_SCHEDULE_TOTAL,
  SOAK_SCHEDULE_TOTAL_LABEL,
} from "@acme/constants";

import { FiringSchedule } from "~/app/_components/landing-soak/firing-schedule";

describe("FiringSchedule", () => {
  it("titles the program and says what it is", () => {
    render(<FiringSchedule />);

    expect(screen.getByText(SOAK_SCHEDULE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(SOAK_SCHEDULE_NOTE)).toBeInTheDocument();
  });

  it("heads every column the controller prints", () => {
    render(<FiringSchedule />);

    for (const column of SOAK_SCHEDULE_COLUMNS) {
      expect(
        screen.getByRole("columnheader", { name: column }),
      ).toBeInTheDocument();
    }
  });

  it("gives each segment its rate, its target, and its hold", () => {
    render(<FiringSchedule />);

    for (const row of SOAK_SCHEDULE_ROWS) {
      const segment =
        screen.getByRole("rowheader", { name: row.label }).parentElement
          ?.textContent ?? "";

      expect(segment).toContain(soakRate(row.rate));
      expect(segment).toContain(soakCelsius(row.target));
      expect(segment).toContain(soakHold(row.holdMinutes));
    }
  });

  it("leaves a segment that never holds blank", () => {
    render(<FiringSchedule />);

    expect(screen.getAllByText(SOAK_NO_HOLD)).toHaveLength(
      SOAK_SCHEDULE_ROWS.filter((row) => row.holdMinutes === 0).length,
    );
  });

  it("closes with the length of the firing", () => {
    render(<FiringSchedule />);

    expect(
      screen.getByRole("rowheader", { name: SOAK_SCHEDULE_TOTAL_LABEL })
        .parentElement?.textContent,
    ).toContain(SOAK_SCHEDULE_TOTAL);
  });
});
