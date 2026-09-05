import type { Metadata } from "next";

import { NIGHTJAR_DESCRIPTION, NIGHTJAR_TITLE } from "@acme/constants";

import {
  LandingClose,
  LandingFooter,
  LandingHero,
  LandingNav,
  LandingRecord,
  LandingStation,
  LandingWave,
} from "~/app/landing/nightjar";

export const metadata: Metadata = {
  title: NIGHTJAR_TITLE,
  description: NIGHTJAR_DESCRIPTION,
};

export default function LandingNightjarPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingWave />
        <LandingRecord />
        <LandingStation />
        <LandingClose />
      </main>
      <LandingFooter />
    </>
  );
}
