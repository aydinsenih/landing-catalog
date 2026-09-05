import {
  CUTOFF_BRAND,
  CUTOFF_HREF,
  CUTOFF_SUMMARY,
} from "./landingCutoffMessages";
import {
  NIGHTJAR_BRAND,
  NIGHTJAR_HREF,
  NIGHTJAR_SUMMARY,
} from "./landingNightjarMessages";
import { SOAK_BRAND, SOAK_HREF, SOAK_SUMMARY } from "./landingSoakMessages";
import {
  SPLITSCREEN_BRAND,
  SPLITSCREEN_HREF,
  SPLITSCREEN_SUMMARY,
} from "./landingSplitscreenMessages";
import { TURN_BRAND, TURN_HREF, TURN_SUMMARY } from "./landingTurnMessages";

export const LANDING_INDEX_TITLE = "Landing pages";
export const LANDING_INDEX_DESCRIPTION =
  "Every landing page in this catalog. Open one to read the design in full.";
export const LANDING_INDEX_EMPTY = "No landing pages yet.";

export const LANDING_INDEX_ENTRIES = [
  {
    href: CUTOFF_HREF,
    name: CUTOFF_BRAND,
    summary: CUTOFF_SUMMARY,
  },
  {
    href: NIGHTJAR_HREF,
    name: NIGHTJAR_BRAND,
    summary: NIGHTJAR_SUMMARY,
  },
  {
    href: SOAK_HREF,
    name: SOAK_BRAND,
    summary: SOAK_SUMMARY,
  },
  {
    href: SPLITSCREEN_HREF,
    name: SPLITSCREEN_BRAND,
    summary: SPLITSCREEN_SUMMARY,
  },
  {
    href: TURN_HREF,
    name: TURN_BRAND,
    summary: TURN_SUMMARY,
  },
] as const;

export interface LandingCatalogEntry {
  href: string;
  name: string;
  summary: string;
}
