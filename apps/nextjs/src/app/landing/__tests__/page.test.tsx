import { render, screen } from "@testing-library/react";
import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it, vi } from "vitest";

import type { LandingCatalogEntry } from "@acme/constants";
import {
  LANDING_INDEX_DESCRIPTION,
  LANDING_INDEX_ENTRIES,
  LANDING_INDEX_TITLE,
} from "@acme/constants";

import LandingIndexPage, { metadata } from "~/app/landing/page";

const handed = vi.hoisted(() => ({
  entries: [] as readonly LandingCatalogEntry[],
}));

vi.mock("~/app/_components/landing-index/landing-catalog", () => ({
  LandingCatalog: (props: { entries: readonly LandingCatalogEntry[] }) => {
    handed.entries = props.entries;
    return <div data-testid="landing-catalog" />;
  },
}));

const landingDir = resolve(process.cwd(), "src/app/landing");

describe("LandingIndexPage", () => {
  it("carries a title and a description", () => {
    expect(metadata.title).toBe(LANDING_INDEX_TITLE);
    expect(metadata.description).toBe(LANDING_INDEX_DESCRIPTION);
  });

  it("hands the catalog every entry it holds", () => {
    render(<LandingIndexPage />);

    expect(screen.getByTestId("landing-catalog")).toBeInTheDocument();
    expect(handed.entries).toStrictEqual(LANDING_INDEX_ENTRIES);
  });

  // nextjs.md § 7.9 — a landing page reaches a reader only through this index,
  // and a route folder is joined to its entry by a string that nothing else
  // checks.
  it("lists every landing route, and every entry points at a real route", () => {
    const routes = readdirSync(landingDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("__"))
      .map((entry) => `/landing/${entry.name}`);

    expect(routes.length).toBeGreaterThan(0);
    expect(new Set(LANDING_INDEX_ENTRIES.map((entry) => entry.href))).toEqual(
      new Set(routes),
    );

    for (const entry of LANDING_INDEX_ENTRIES) {
      expect(
        existsSync(resolve(process.cwd(), `src/app${entry.href}/page.tsx`)),
      ).toBe(true);
    }
  });
});
