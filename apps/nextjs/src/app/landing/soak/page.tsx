import type { Metadata } from "next";

import { SOAK_DESCRIPTION, SOAK_TITLE } from "@acme/constants";

import {
  LandingClose,
  LandingFooter,
  LandingHero,
  LandingHold,
  LandingLog,
  LandingNav,
  LandingPhases,
} from "~/app/landing/soak";

export const metadata: Metadata = {
  title: SOAK_TITLE,
  description: SOAK_DESCRIPTION,
};

export default function LandingSoakPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingHold />
        <LandingLog />
        <LandingPhases />
        <LandingClose />
      </main>
      <LandingFooter />
    </>
  );
}
