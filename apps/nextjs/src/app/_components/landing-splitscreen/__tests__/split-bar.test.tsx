import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_SPLIT_LABEL,
  SPLITSCREEN_SPLIT_ROWS,
  splitShareLabel,
} from "@acme/constants";

import { SplitBar } from "~/app/_components/landing-splitscreen/split-bar";

function renderBar() {
  return render(
    <SplitBar label={SPLITSCREEN_SPLIT_LABEL} rows={SPLITSCREEN_SPLIT_ROWS} />,
  );
}

describe("SplitBar", () => {
  it("names the split it shows", () => {
    renderBar();

    expect(screen.getByText(SPLITSCREEN_SPLIT_LABEL)).toBeInTheDocument();
  });

  it("gives every collaborator a share, a name, a role, and a duty", () => {
    renderBar();

    for (const row of SPLITSCREEN_SPLIT_ROWS) {
      expect(screen.getByText(splitShareLabel(row.share))).toBeInTheDocument();
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.role)).toBeInTheDocument();
      expect(screen.getByText(row.duty)).toBeInTheDocument();
    }
  });

  // The roster sits under the strip, so a column has to carry the weight of its
  // segment or the two rows stop lining up.
  it("weights each collaborator column by the share it reads", () => {
    const { container } = renderBar();

    const columns = [
      ...container.querySelectorAll<HTMLElement>("[data-slot='split-share']"),
    ];

    expect(columns.map((column) => column.style.flexGrow)).toStrictEqual(
      SPLITSCREEN_SPLIT_ROWS.map((row) => String(row.share)),
    );
  });

  it("wipes the strip in as the one movement on the page", () => {
    const { container } = renderBar();

    expect(container.querySelector("[data-slot='split-strip']")).toHaveClass(
      "split-wipe",
    );
  });
});
