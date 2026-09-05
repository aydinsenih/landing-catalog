import type { Metadata } from "next";

import { CUTOFF_DESCRIPTION, CUTOFF_TITLE } from "@acme/constants";

import {
  LandingBedtime,
  LandingClose,
  LandingDoses,
  LandingFooter,
  LandingHero,
  LandingLearn,
  LandingNav,
} from "~/app/landing/cutoff";

export const metadata: Metadata = {
  title: CUTOFF_TITLE,
  description: CUTOFF_DESCRIPTION,
};

export default function LandingCutoffPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingDoses />
        <LandingBedtime />
        <LandingLearn />
        <LandingClose />
      </main>
      <LandingFooter />
    </>
  );
}
