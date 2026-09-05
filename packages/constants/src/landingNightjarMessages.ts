export const NIGHTJAR_BRAND = "Nightjar";
export const NIGHTJAR_TITLE =
  "Nightjar, a listening station for night migration";
export const NIGHTJAR_DESCRIPTION =
  "Point a microphone at the sky and go to bed. Nightjar records all night, picks the flight calls out of the traffic and the rain, and has the night written down before you are awake.";

export const NIGHTJAR_HREF = "/landing/nightjar";
export const NIGHTJAR_SUMMARY =
  "A listening station for night bird migration, laid out the way a night sounds: hours of nothing, then a wave.";

export const NIGHTJAR_APP_HREF = "/";
export const NIGHTJAR_NIGHT_HREF = "#night";
export const NIGHTJAR_RECORD_HREF = "#record";
export const NIGHTJAR_PRICING_HREF = "#pricing";

export const NIGHTJAR_NAV_LABEL = "Primary";
export const NIGHTJAR_NAV_LINKS = [
  { href: NIGHTJAR_NIGHT_HREF, label: "Last night" },
  { href: NIGHTJAR_RECORD_HREF, label: "The record" },
  { href: NIGHTJAR_PRICING_HREF, label: "Pricing" },
] as const;

export const NIGHTJAR_SIGN_IN = "Sign in";
export const NIGHTJAR_START = "Set up a station";
export const NIGHTJAR_READ_LAST_NIGHT = "Read last night";

export const NIGHTJAR_HERO_HEADLINE = "The night sky over your house is loud.";
export const NIGHTJAR_HERO_BODY =
  "Thrushes, warblers and sparrows migrate in the dark, a few hundred metres up, calling to each other the whole way over. Nightjar listens from a microphone on your roof and has the night written down before you are awake.";

export const NIGHTJAR_NIGHT_START = 20 * 60;
export const NIGHTJAR_NIGHT_MINUTES = 10 * 60;
export const NIGHTJAR_BIN_MINUTES = 10;
export const NIGHTJAR_BIN_CEILING = 70;

export function nightjarClock(minuteOfDay: number): string {
  const hour = Math.floor(minuteOfDay / 60) % 24;
  const minute = minuteOfDay % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function nightjarNightClock(offset: number): string {
  return nightjarClock(NIGHTJAR_NIGHT_START + offset);
}

export function nightjarCalls(calls: number): string {
  return calls === 1 ? `${calls} call` : `${calls} calls`;
}

export const NIGHTJAR_BINS = [
  { offset: 10, calls: 39 },
  { offset: 60, calls: 8 },
  { offset: 180, calls: 13 },
  { offset: 210, calls: 26 },
  { offset: 230, calls: 11 },
  { offset: 310, calls: 67 },
  { offset: 320, calls: 39 },
  { offset: 340, calls: 38 },
  { offset: 370, calls: 4 },
  { offset: 380, calls: 41 },
  { offset: 430, calls: 6 },
  { offset: 440, calls: 37 },
  { offset: 460, calls: 21 },
  { offset: 510, calls: 9 },
] as const;

export const NIGHTJAR_AXIS_OFFSETS = [0, 120, 240, 360, 480, 600] as const;

export const NIGHTJAR_STRIP_LABEL =
  "Calls per ten minutes, dusk to first light";
export const NIGHTJAR_STRIP_PLACE =
  "One night in May, over a garden in Ithaca, New York.";

export const NIGHTJAR_TOTAL_CALLS = 359;
export const NIGHTJAR_TOTAL_SPECIES = 10;
export const NIGHTJAR_PEAK_OFFSET = 310;

export const NIGHTJAR_TOTAL_CALLS_LABEL = "Calls";
export const NIGHTJAR_TOTAL_SPECIES_LABEL = "Species";
export const NIGHTJAR_PEAK_LABEL = "Busiest ten minutes";

export const NIGHTJAR_WAVE_TITLE = "It arrives in waves.";
export const NIGHTJAR_WAVE_CALLS = 144;
export const NIGHTJAR_WAVE_MINUTES = 40;
export const NIGHTJAR_WAVE_BODY = `For an hour there is nothing but a truck on the highway and a dog two gardens over. Then a wave crosses, and the station logs ${NIGHTJAR_WAVE_CALLS} calls in ${NIGHTJAR_WAVE_MINUTES} minutes. You are asleep for all of it.`;

export const NIGHTJAR_UNRESOLVED = "Not resolved";
export const NIGHTJAR_WAVE_ROWS = [
  { offset: 311, species: "Swainson's Thrush", calls: 14 },
  { offset: 316, species: "Veery", calls: 9 },
  { offset: 321, species: "Swainson's Thrush", calls: 22 },
  { offset: 324, species: "Gray-cheeked Thrush", calls: 6 },
  { offset: 329, species: "Ovenbird", calls: 17 },
  { offset: 333, species: NIGHTJAR_UNRESOLVED, calls: 8 },
  { offset: 338, species: "Swainson's Thrush", calls: 31 },
  { offset: 344, species: "Wood Thrush", calls: 12 },
  { offset: 349, species: "Bobolink", calls: 25 },
] as const;

export const NIGHTJAR_RECORD_TITLE = "In the morning it is a list.";
export const NIGHTJAR_RECORD_BODY =
  "Every call the station kept, gathered by what made it. Open a row to hear the clip and see the spectrogram it was scored on.";
export const NIGHTJAR_RECORD_COLUMNS = [
  "Species",
  "Calls",
  "First",
  "Last",
] as const;
export const NIGHTJAR_RECORD_ROWS = [
  { species: "Swainson's Thrush", calls: 118, first: 14, last: 513 },
  { species: "Veery", calls: 61, first: 62, last: 464 },
  { species: "Ovenbird", calls: 42, first: 184, last: 467 },
  { species: "Gray-cheeked Thrush", calls: 34, first: 211, last: 442 },
  { species: "Bobolink", calls: 30, first: 349, last: 511 },
  { species: "Wood Thrush", calls: 21, first: 344, last: 386 },
  { species: NIGHTJAR_UNRESOLVED, calls: 19, first: 16, last: 514 },
  { species: "Rose-breasted Grosbeak", calls: 14, first: 232, last: 381 },
  { species: "American Redstart", calls: 11, first: 312, last: 433 },
  { species: "Savannah Sparrow", calls: 9, first: 382, last: 461 },
] as const;
export const NIGHTJAR_RECORD_TOTAL_LABEL = "The whole night";

export const NIGHTJAR_STATION_TITLE = "What a station is.";
export const NIGHTJAR_STATION_ITEMS = [
  {
    name: "A microphone",
    body: "Any USB mic will do. Point it up, put a plastic bowl over it for the rain, and keep it away from the road.",
  },
  {
    name: "A computer that stays awake",
    body: "A Raspberry Pi is plenty. Nightjar runs the whole night on it and touches the network only to sync the morning.",
  },
  {
    name: "Somewhere to put the night",
    body: "Clips stay on your own disk. Nightjar keeps what it flagged and throws away the eight hours of nothing.",
  },
] as const;
export const NIGHTJAR_STATION_NOTE =
  "Audio never leaves the house. Identification runs on the machine under your desk, and it runs offline.";

export const NIGHTJAR_CLOSE_HEADLINE = "Tonight is already on its way.";
export const NIGHTJAR_CLOSE_BODY =
  "Set a station up this afternoon and you will have a night to read over breakfast. Migration runs from March to May and again from August to November, and it does not wait for you.";
export const NIGHTJAR_PRICE = "$6 a month";
export const NIGHTJAR_PRICE_NOTE =
  "One station, every night, no limit on how long you keep them. The identification model is free and stays free.";

export const NIGHTJAR_FOOTER_NAV_LABEL = "Footer";
export const NIGHTJAR_FOOTER_NOTE =
  "Named for a bird that calls in the dark and is almost never seen.";

export interface NightjarBin {
  offset: number;
  calls: number;
}

export interface NightjarWaveRow {
  offset: number;
  species: string;
  calls: number;
}

export interface NightjarRecordRow {
  species: string;
  calls: number;
  first: number;
  last: number;
}
