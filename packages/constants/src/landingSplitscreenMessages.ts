export const SPLITSCREEN_BRAND = "Splitscreen";
export const SPLITSCREEN_TITLE = "Splitscreen, a collab workspace for creators";
export const SPLITSCREEN_DESCRIPTION =
  "Splitscreen holds a creator collab together from the brief to the payout: one thread for the footage, the cut, the rights, and the split.";

export const SPLITSCREEN_HREF = "/landing/splitscreen";
export const SPLITSCREEN_SUMMARY =
  "A collab workspace for creators, built around an uneven three-way revenue split.";

export const SPLITSCREEN_APP_HREF = "/";
export const SPLITSCREEN_HOW_HREF = "#how-it-works";
export const SPLITSCREEN_SPLITS_HREF = "#splits";
export const SPLITSCREEN_PRICING_HREF = "#pricing";

export const SPLITSCREEN_NAV_LABEL = "Primary";
export const SPLITSCREEN_NAV_LINKS = [
  { href: SPLITSCREEN_HOW_HREF, label: "How it works" },
  { href: SPLITSCREEN_SPLITS_HREF, label: "Splits" },
  { href: SPLITSCREEN_PRICING_HREF, label: "Pricing" },
] as const;

export const SPLITSCREEN_SIGN_IN = "Sign in";
export const SPLITSCREEN_START = "Start a project";
export const SPLITSCREEN_SEE_SAMPLE = "See a sample project";

export const SPLITSCREEN_HERO_HEADLINE = "The handoff is the hard part.";
export const SPLITSCREEN_HERO_BODY =
  "Splitscreen keeps a collab in one place, from the brief to the payout. Everyone works from the same files, the same deadline, and the same split, agreed before anyone hits record.";

export const SPLITSCREEN_SPLIT_LABEL = "October sessions, a three-way split";
export const SPLITSCREEN_SPLIT_NOTE =
  "Agreed before the first shoot day. A share only moves when every collaborator signs off.";

export const SPLITSCREEN_HOST_SHARE = 45;
export const SPLITSCREEN_COHOST_SHARE = 40;
export const SPLITSCREEN_EDITOR_SHARE = 15;

export const SPLITSCREEN_SPLIT_ROWS = [
  {
    share: SPLITSCREEN_HOST_SHARE,
    tone: "a",
    name: "Mara Vance",
    role: "Host",
    duty: "On camera, owns the channel",
  },
  {
    share: SPLITSCREEN_COHOST_SHARE,
    tone: "b",
    name: "Dele Okonjo",
    role: "Co-host",
    duty: "Writes the brief, books the guests",
  },
  {
    share: SPLITSCREEN_EDITOR_SHARE,
    tone: "c",
    name: "Ines Roth",
    role: "Editor",
    duty: "Cuts, captions, delivers",
  },
] as const;

export type SplitscreenRow = (typeof SPLITSCREEN_SPLIT_ROWS)[number];
export type SplitscreenTone = SplitscreenRow["tone"];

export const SPLITSCREEN_TIMELINE_TITLE = "One thread, start to finish.";
export const SPLITSCREEN_TIMELINE_BODY =
  "A project runs in four moves. Nothing leaves the thread, and nothing starts before the money is written down.";
export const SPLITSCREEN_TIMELINE_STAGES = [
  {
    label: "Agree the split",
    body: "Shares and deliverables are set before work starts. Changing one asks everyone on the project to sign off.",
  },
  {
    label: "Drop the footage",
    body: "Raw files, notes, and reference live in the project. Nobody mails a zip file again.",
  },
  {
    label: "Cut and review",
    body: "A note lands on the frame it is about, and stays there through every re-export.",
  },
  {
    label: "Ship and get paid",
    body: "One approval releases the file and pays out each share the same day.",
  },
] as const;

export const SPLITSCREEN_FEATURES_TITLE =
  "Built around the split, not bolted onto it.";
export const SPLITSCREEN_CONTRACT_TITLE = "The split is the contract.";
export const SPLITSCREEN_CONTRACT_BODY =
  "Write the shares into the project and Splitscreen holds them. Nobody edits their own share after the work lands, and every change keeps the name of the person who agreed to it.";
export const SPLITSCREEN_FEATURES = [
  {
    title: "Notes that hold their timecode",
    body: "Leave a note on a frame and it stays on that frame, through every re-export and every recut.",
  },
  {
    title: "Usage rights in writing",
    body: "Say where a cut can run and for how long. The terms travel with the file.",
  },
  {
    title: "Briefs in, invoices out",
    body: "Sponsor deliverables become line items, so the invoice writes itself when the cut ships.",
  },
  {
    title: "Cut where you already cut",
    body: "Round-trip to Premiere, Resolve, and Final Cut without leaving the thread.",
  },
] as const;

export const SPLITSCREEN_CLOSE_HEADLINE =
  "Splitscreen takes nothing from the split.";
export const SPLITSCREEN_CLOSE_BODY =
  "A flat fee for each project, paid by whoever opens it. Free while a project has two collaborators.";

export const SPLITSCREEN_FOOTER_NOTE =
  "Made for people who make things with other people.";

export function splitShareLabel(share: number) {
  return `${share}%`;
}
