export const SOAK_BRAND = "Soak";
export const SOAK_TITLE = "Soak, a firing log for studio potters";
export const SOAK_DESCRIPTION =
  "Soak holds the program you set, what the kiln actually did, and what came out of the door. Every firing written down, and easy to find again years later.";

export const SOAK_HREF = "/landing/soak";
export const SOAK_SUMMARY =
  "A firing log for studio potters, laid out the way a firing runs: it climbs, it holds, it cools.";

export const SOAK_APP_HREF = "/";
export const SOAK_SCHEDULE_HREF = "#schedule";
export const SOAK_LOG_HREF = "#log";
export const SOAK_PRICING_HREF = "#pricing";

export const SOAK_NAV_LABEL = "Primary";
export const SOAK_NAV_LINKS = [
  { href: SOAK_SCHEDULE_HREF, label: "Schedules" },
  { href: SOAK_LOG_HREF, label: "The log" },
  { href: SOAK_PRICING_HREF, label: "Pricing" },
] as const;

export const SOAK_SIGN_IN = "Sign in";
export const SOAK_START = "Start a log";
export const SOAK_READ_LOG = "Read a real log";

export const SOAK_HERO_HEADLINE = "The kiln keeps no notes.";
export const SOAK_HERO_BODY =
  "Soak holds the program you set, what the kiln actually did, and what you said when you opened the door. Write a glaze down once and find it again three years and four hundred firings later.";

export const SOAK_CANDLE_C = 120;
export const SOAK_CLIMB_C = 1100;
export const SOAK_PEAK_C = 1222;
export const SOAK_CRASH_C = 900;
export const SOAK_COOL_C = 760;

export const SOAK_NO_HOLD = "—";

export function soakCelsius(degrees: number): string {
  return `${degrees} °C`;
}

export function soakRate(degreesPerHour: number): string {
  return `${degreesPerHour} °C/h`;
}

export function soakHold(minutes: number): string {
  if (minutes === 0) {
    return SOAK_NO_HOLD;
  }

  return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`;
}

export const SOAK_SCHEDULE_TITLE = "Cone 6, slow cool";
export const SOAK_SCHEDULE_NOTE =
  "The program as the controller reads it, top to bottom.";
export const SOAK_SCHEDULE_TOTAL = "15 h 25 m";
export const SOAK_SCHEDULE_TOTAL_LABEL = "Cold to the last hold";
export const SOAK_SCHEDULE_COLUMNS = [
  "Segment",
  "Rate",
  "Target",
  "Hold",
] as const;

export const SOAK_SCHEDULE_ROWS = [
  { label: "Candle", rate: 55, target: SOAK_CANDLE_C, holdMinutes: 60 },
  { label: "Climb", rate: 150, target: SOAK_CLIMB_C, holdMinutes: 0 },
  { label: "Approach", rate: 60, target: SOAK_PEAK_C, holdMinutes: 15 },
  { label: "Crash", rate: 250, target: SOAK_CRASH_C, holdMinutes: 0 },
  { label: "Slow cool", rate: 55, target: SOAK_COOL_C, holdMinutes: 20 },
] as const;

export type SoakScheduleRow = (typeof SOAK_SCHEDULE_ROWS)[number];

export const SOAK_CURVE_HOURS = 17.5;
export const SOAK_CURVE_CEILING_C = 1300;
export const SOAK_CURVE_LABEL =
  "One cone 6 glaze firing, plotted from the program beside it.";
export const SOAK_CURVE_POINTS = [
  { hour: 0, temp: 20 },
  { hour: 1.8, temp: SOAK_CANDLE_C },
  { hour: 2.8, temp: SOAK_CANDLE_C },
  { hour: 9.3, temp: SOAK_CLIMB_C },
  { hour: 11.4, temp: SOAK_PEAK_C },
  { hour: 11.7, temp: SOAK_PEAK_C },
  { hour: 12.6, temp: SOAK_CRASH_C },
  { hour: 15.1, temp: SOAK_COOL_C },
  { hour: 15.4, temp: SOAK_COOL_C },
  { hour: 17.5, temp: 520 },
] as const;

export type SoakCurvePoint = (typeof SOAK_CURVE_POINTS)[number];

export const SOAK_CURVE_PEAK = { hour: 11.4, temp: SOAK_PEAK_C } as const;
export const SOAK_PEAK_LABEL = "Peak";

export const SOAK_HOLD_REFRAIN =
  "A glaze you can't repeat is a glaze you don't have.";
export const SOAK_HOLD_BODY =
  "The kiln remembers nothing. Soak writes down what moved, so the next load starts from what the last one taught you.";

export const SOAK_LOG_TITLE = "Every firing, written down.";
export const SOAK_LOG_BODY =
  "A record holds the program, the peak the kiln actually reached, and the note you wrote at the unload. Search it by glaze, by shelf, or by the thing that went wrong.";
export const SOAK_LOG_ENTRIES = [
  {
    date: "14 March",
    program: "Cone 6, slow cool",
    peak: 1224,
    note: "Tenmoku broke on the rims again. It came down too fast under nine hundred. Add twenty minutes to the last hold and try the same load.",
  },
  {
    date: "2 March",
    program: "Bisque, cone 04",
    peak: 1063,
    note: "Full shelf, nothing cracked. The new clay wants the extra hour of candling, so keep it in the program.",
  },
  {
    date: "19 February",
    program: "Cone 6, fast glaze",
    peak: 1226,
    note: "Celadon went grey on the bottom shelf. The bottom thermocouple reads low. Call the tech before the next glaze load goes in.",
  },
] as const;

export type SoakLogEntry = (typeof SOAK_LOG_ENTRIES)[number];

export const SOAK_PHASES_TITLE = "One record, shelf to shelf.";
export const SOAK_PHASES = [
  {
    label: "Loading",
    body: "Build the program once and keep it. Soak checks the ramp against the cone you asked for, and says so when the two disagree.",
  },
  {
    label: "Firing",
    body: "The kiln reports as it climbs. When the peak drifts off the program you hear about it that evening, not at the unload.",
  },
  {
    label: "Unloading",
    body: "Photograph the shelf, name the glazes, write what went wrong. The note lands on the firing that made it, and stays there.",
  },
] as const;

export type SoakPhase = (typeof SOAK_PHASES)[number];

export const SOAK_CLOSE_HEADLINE = "Start with the next firing.";
export const SOAK_CLOSE_BODY =
  "Write the program tonight, load in the morning, and let the log fill itself. Nothing to install: the controller talks to Soak over the studio network.";
export const SOAK_PRICE = "$9 a month, per kiln";
export const SOAK_PRICE_NOTE =
  "Bring the firings you have already run, on paper or in a spreadsheet.";

export const SOAK_FOOTER_NOTE =
  "Soak is made in a shared studio, by people who have opened a cold kiln and learned the bad news too late.";
export const SOAK_FOOTER_NAV_LABEL = "Footer";
