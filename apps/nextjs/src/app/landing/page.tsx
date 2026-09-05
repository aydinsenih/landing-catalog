import type { Metadata } from "next";

import {
  LANDING_INDEX_DESCRIPTION,
  LANDING_INDEX_ENTRIES,
  LANDING_INDEX_TITLE,
} from "@acme/constants";

import { LandingCatalog } from "~/app/_components/landing-index/landing-catalog";

export const metadata: Metadata = {
  title: LANDING_INDEX_TITLE,
  description: LANDING_INDEX_DESCRIPTION,
};

export default function LandingIndexPage() {
  return (
    <main>
      <LandingCatalog entries={LANDING_INDEX_ENTRIES} />
    </main>
  );
}
