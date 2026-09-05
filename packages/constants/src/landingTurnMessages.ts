export const TURN_BRAND = "Turn";
export const TURN_TITLE = "Turn, a savings circle that keeps its own books";
export const TURN_DESCRIPTION =
  "A group agrees one amount. Everybody pays in each month, and each month one member takes the whole pot. Turn holds the order, chases the payments, and shows all of you the same ledger.";

export const TURN_HREF = "/landing/turn";
export const TURN_SUMMARY =
  "A rotating savings circle — susu, tanda, chit, ekub — with the order, the reminders and the ledger in one place.";

export const TURN_APP_HREF = "/";
export const TURN_ROUNDS_HREF = "#rounds";
export const TURN_AGREEMENT_HREF = "#agreement";
export const TURN_PRICING_HREF = "#pricing";

export const TURN_NAV_LABEL = "Primary";
export const TURN_NAV_LINKS = [
  { href: TURN_ROUNDS_HREF, label: "The rounds" },
  { href: TURN_AGREEMENT_HREF, label: "The agreement" },
  { href: TURN_PRICING_HREF, label: "Pricing" },
] as const;

export const TURN_SIGN_IN = "Sign in";
export const TURN_START = "Start a circle";
export const TURN_SEE_ROUNDS = "See a full year";

export const TURN_CURRENCY = "£";
export const TURN_MEMBERS = 12;
export const TURN_CONTRIBUTION = 250;
export const TURN_POT = 3000;
export const TURN_CURRENT_ROUND = 5;
export const TURN_PAID_THIS_ROUND = 9;

export function turnMoney(amount: number): string {
  return `${TURN_CURRENCY}${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function turnPaid(paid: number, of: number): string {
  return `${paid} of ${of} paid`;
}

export const TURN_HERO_HEADLINE = `${TURN_MEMBERS} people, ${TURN_MEMBERS} months, and every one of you gets a lump sum.`;
export const TURN_HERO_BODY = `A savings circle is the oldest financial product there is. Everybody puts in ${turnMoney(TURN_CONTRIBUTION)} on the same day each month, and each month one member takes the whole ${turnMoney(TURN_POT)}. No interest, no credit check, no bank in the middle. Turn keeps the order, sends the reminders, and shows all of you the same ledger.`;

export const TURN_RING_LABEL = "The rotation, one seat for each member";
export const TURN_POT_LABEL = "This month's pot";
export const TURN_ROUND_LABEL = "Round";
export const TURN_TAKING_LABEL = "Taking it";

export const TURN_ROUNDS_TITLE = "A year, agreed in an afternoon.";
export const TURN_ROUNDS_BODY =
  "The order is drawn once, at the start, and nobody can move it afterwards. Everyone can see the whole year from the day they join, including the month they come up.";
export const TURN_ROUNDS_COLUMNS = [
  "Round",
  "Month",
  "Takes the pot",
  "Paid in",
] as const;
export const TURN_ROUNDS = [
  { round: 1, month: "January", member: "Amara", paid: 12 },
  { round: 2, month: "February", member: "Selin", paid: 12 },
  { round: 3, month: "March", member: "Dele", paid: 12 },
  { round: 4, month: "April", member: "Priya", paid: 12 },
  { round: 5, month: "May", member: "Marcus", paid: 9 },
  { round: 6, month: "June", member: "Fatou", paid: 0 },
  { round: 7, month: "July", member: "Joon", paid: 0 },
  { round: 8, month: "August", member: "Ines", paid: 0 },
  { round: 9, month: "September", member: "Tariq", paid: 0 },
  { round: 10, month: "October", member: "Grace", paid: 0 },
  { round: 11, month: "November", member: "Nikos", paid: 0 },
  { round: 12, month: "December", member: "Rukmini", paid: 0 },
] as const;
export const TURN_ROUND_OPEN = "Open";
export const TURN_ROUND_TO_COME = "To come";

export const TURN_AGREEMENT_TITLE = "What a circle settles before it starts.";
export const TURN_AGREEMENT_ITEMS = [
  {
    name: "The amount",
    body: `Everyone pays the same figure on the same day. Turn will not open a circle until all ${TURN_MEMBERS} have agreed it, in writing, in the app.`,
  },
  {
    name: "The order",
    body: "Whoever takes the pot first is borrowing from the group. Whoever takes it last has been lending to it. Turn shows both sides of that trade before anybody draws a seat.",
  },
  {
    name: "The miss",
    body: "If somebody cannot pay, the circle knows the same day instead of at the end of the month. The round stays open and the pot does not move until it is whole.",
  },
] as const;
export const TURN_AGREEMENT_NOTE =
  "Turn never holds your money. Payments go straight between members, and Turn keeps the record of them.";

export const TURN_CLOSE_HEADLINE = "Start with the people you already trust.";
export const TURN_CLOSE_BODY =
  "A circle works because everybody in it knows everybody else. Turn will not introduce you to strangers and will not lend you anything. It holds the order and the ledger for a group that already exists.";
export const TURN_PRICE = "Free for your first circle";
export const TURN_PRICE_NOTE = `${turnMoney(2)} a month per circle after that, split ${TURN_MEMBERS} ways. Turn takes nothing from the pot, ever.`;

export const TURN_FOOTER_NAV_LABEL = "Footer";
export const TURN_FOOTER_NOTE =
  "Susu, tanda, chit, ekub, hui, cundina, ayuuto. One idea, a hundred names.";

export interface TurnRound {
  round: number;
  month: string;
  member: string;
  paid: number;
}
