export const CUTOFF_BRAND = "Cutoff";
export const CUTOFF_TITLE = "Cutoff, the last hour you can have a coffee";
export const CUTOFF_DESCRIPTION =
  "Caffeine leaves you slowly. Cutoff models what is still in your blood at bedtime and tells you the last hour you can drink and still fall asleep.";

export const CUTOFF_HREF = "/landing/cutoff";
export const CUTOFF_SUMMARY =
  "A caffeine tracker built around one number: the last hour you can drink coffee and still sleep that night.";

export const CUTOFF_APP_HREF = "/";
export const CUTOFF_DAY_HREF = "#day";
export const CUTOFF_BEDTIME_HREF = "#bedtime";
export const CUTOFF_PRICING_HREF = "#pricing";

export const CUTOFF_NAV_LABEL = "Primary";
export const CUTOFF_NAV_LINKS = [
  { href: CUTOFF_DAY_HREF, label: "A day" },
  { href: CUTOFF_BEDTIME_HREF, label: "Bedtime" },
  { href: CUTOFF_PRICING_HREF, label: "Pricing" },
] as const;

export const CUTOFF_SIGN_IN = "Sign in";
export const CUTOFF_START = "Start tracking";
export const CUTOFF_SEE_DAY = "See the whole day";

export const CUTOFF_HALF_LIFE_HOURS = 5.5;
export const CUTOFF_THRESHOLD_MG = 40;
export const CUTOFF_BEDTIME_MINUTE = 23 * 60;
export const CUTOFF_MINUTE = 820;
export const CUTOFF_AT_BEDTIME_MG = 116;
export const CUTOFF_DAY_TOTAL_MG = 493;
export const CUTOFF_LATE_MINUTE = 845;

export function cutoffClock(minute: number): string {
  const hour = Math.floor(minute / 60) % 24;
  return `${String(hour).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`;
}

export function cutoffMilligrams(mg: number): string {
  return `${mg} mg`;
}

export const CUTOFF_HERO_HEADLINE = `Your last coffee should have been at ${cutoffClock(CUTOFF_MINUTE)}.`;
export const CUTOFF_HERO_BODY = `Half of a flat white is still in your blood ${CUTOFF_HALF_LIFE_HOURS} hours after you drink it, and a quarter of it is there when you turn the light off. Cutoff runs that arithmetic all day and answers the one question you have before you order: is it too late.`;

export const CUTOFF_CURVE_START = 6 * 60;
export const CUTOFF_CURVE_END = 24 * 60;
export const CUTOFF_CURVE_CEILING = 320;
export const CUTOFF_CURVE_LABEL =
  "Caffeine in the blood through one day, in milligrams";
export const CUTOFF_CURVE_POINTS = [
  { minute: 360, mg: 0 },
  { minute: 390, mg: 0 },
  { minute: 420, mg: 0 },
  { minute: 450, mg: 93 },
  { minute: 480, mg: 88 },
  { minute: 510, mg: 82 },
  { minute: 540, mg: 167 },
  { minute: 570, mg: 157 },
  { minute: 600, mg: 148 },
  { minute: 630, mg: 203 },
  { minute: 660, mg: 190 },
  { minute: 690, mg: 179 },
  { minute: 720, mg: 168 },
  { minute: 750, mg: 236 },
  { minute: 780, mg: 221 },
  { minute: 810, mg: 208 },
  { minute: 840, mg: 195 },
  { minute: 870, mg: 306 },
  { minute: 900, mg: 288 },
  { minute: 930, mg: 298 },
  { minute: 960, mg: 280 },
  { minute: 990, mg: 263 },
  { minute: 1020, mg: 247 },
  { minute: 1050, mg: 232 },
  { minute: 1080, mg: 218 },
  { minute: 1110, mg: 204 },
  { minute: 1140, mg: 192 },
  { minute: 1170, mg: 180 },
  { minute: 1200, mg: 169 },
  { minute: 1230, mg: 159 },
  { minute: 1260, mg: 149 },
  { minute: 1290, mg: 140 },
  { minute: 1320, mg: 131 },
  { minute: 1350, mg: 123 },
  { minute: 1380, mg: 116 },
  { minute: 1410, mg: 109 },
  { minute: 1440, mg: 102 },
] as const;

export const CUTOFF_CURVE_NOTE = `The dashed line is ${cutoffMilligrams(CUTOFF_THRESHOLD_MG)}, where caffeine starts costing you sleep. The first upright is the cutoff, the second is lights out, and the dot sitting on it is where the day actually ended: ${cutoffMilligrams(CUTOFF_AT_BEDTIME_MG)}.`;

export const CUTOFF_AXIS_MINUTES = [
  360, 540, 720, 900, 1080, 1260, 1440,
] as const;

export const CUTOFF_THRESHOLD_LABEL = "Enough to cost you sleep";
export const CUTOFF_BEDTIME_LABEL = "Lights out";
export const CUTOFF_PEAK_LABEL = "Most in you at once";
export const CUTOFF_PEAK_MG = 307;

export const CUTOFF_DOSES_TITLE = "Six drinks, and two of them after the line.";
export const CUTOFF_DOSES_BODY = `Nothing here is unusual. The filter coffees are ordinary, the espresso is small, and the green tea barely counts even though it came late. It is the flat white, ordered ${CUTOFF_LATE_MINUTE - CUTOFF_MINUTE} minutes past the cutoff, that decides how the night goes.`;
export const CUTOFF_DOSES_COLUMNS = ["Time", "Drink", "Caffeine"] as const;
export const CUTOFF_DOSES = [
  { minute: 441, drink: "Filter coffee", mg: 95 },
  { minute: 516, drink: "Filter coffee", mg: 95 },
  { minute: 622, drink: "Espresso", mg: 65 },
  { minute: 739, drink: "Cortado", mg: 80 },
  { minute: 845, drink: "Flat white", mg: 130 },
  { minute: 930, drink: "Green tea", mg: 28 },
] as const;
export const CUTOFF_DOSES_TOTAL_LABEL = "Through the day";
export const CUTOFF_LATE_NOTE = "Ordered after the cutoff";

export const CUTOFF_BEDTIME_TITLE = "What is left when you lie down.";
export const CUTOFF_BEDTIME_BODY = `At lights out there was still ${cutoffMilligrams(CUTOFF_AT_BEDTIME_MG)} in the blood, against a threshold of ${cutoffMilligrams(CUTOFF_THRESHOLD_MG)}. That is not enough to keep you awake. It is enough to hold you out of deep sleep for the first two hours, which is the part you cannot make up.`;
export const CUTOFF_BEDTIME_READINGS = [
  { label: "In you at lights out", value: CUTOFF_AT_BEDTIME_MG },
  { label: "Threshold", value: CUTOFF_THRESHOLD_MG },
  { label: "Over by", value: CUTOFF_AT_BEDTIME_MG - CUTOFF_THRESHOLD_MG },
] as const;

export const CUTOFF_LEARN_TITLE = "Your half-life is not the textbook one.";
export const CUTOFF_LEARN_ITEMS = [
  {
    name: "It runs from four hours to nine",
    body: "Genetics, liver enzymes, the pill, pregnancy and smoking all move it. The textbook figure fits almost nobody exactly.",
  },
  {
    name: "Cutoff measures yours",
    body: "Log what you drink and let it read your sleep. After a few weeks it stops using the average and starts using you.",
  },
  {
    name: "The answer is one line",
    body: "No dashboard, no score out of a hundred. Open the app and it says the hour, or it says you are already past it.",
  },
] as const;
export const CUTOFF_LEARN_NOTE =
  "Cutoff reads sleep from a watch or a phone if you have one, and works from bedtime alone if you do not.";

export const CUTOFF_CLOSE_HEADLINE = "Tomorrow morning starts tonight.";
export const CUTOFF_CLOSE_BODY =
  "You are not going to stop drinking coffee, and Cutoff is not going to ask you to. It moves the last one earlier, which is the whole of the change.";
export const CUTOFF_PRICE = "$3 a month";
export const CUTOFF_PRICE_NOTE =
  "Everything on the device. Nothing sold, nothing shared, cancel from the app in one tap.";

export const CUTOFF_FOOTER_NAV_LABEL = "Footer";
export const CUTOFF_FOOTER_NOTE =
  "Not medical advice. A model of a chemical, honestly fitted, and no more than that.";

export interface CutoffPoint {
  minute: number;
  mg: number;
}

export interface CutoffDose {
  minute: number;
  drink: string;
  mg: number;
}
