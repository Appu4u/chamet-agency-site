export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "first-week-on-chamet",
    title: "Your first week on Chamet: a host playbook",
    category: "Hosting",
    excerpt: "Seven days, seven moves. Here is exactly what to do from the moment you sign up to your first payout.",
    body: [
      "Day 1: Install the app, sign in under our agency code, and complete KYC. Aim for two clear photos and a 30-second intro video — these decide whether viewers tap in.",
      "Days 2–3: Stream twice a day for 60 minutes — once in the afternoon, once at night. Smile in the first three seconds; that single habit doubles your retention.",
      "Days 4–5: Reply to every gift with the sender's name. Repeat fans become top fans, and top fans send 80% of your income.",
      "Days 6–7: Schedule one collab stream with another host in our agency. Cross-audience streams are the fastest way to hit Silver tier in week two.",
    ],
  },
  {
    slug: "how-agents-actually-earn",
    title: "How Chamet agents actually earn (with real numbers)",
    category: "Agent",
    excerpt: "We break down the override structure, monthly bonuses, and the realistic income from 5, 20, and 50 active hosts.",
    body: [
      "An agent earns an override percentage on every coin their recruited hosts generate. At the Starter tier (1–5 hosts), this is 8%.",
      "Average active host on our roster earns around $600–$1,200 per month. Five hosts at 8% override = roughly $300–$500 monthly — passive on top of any hosting you do yourself.",
      "Cross the Growth tier (6–20 hosts at 12% override) and the math compounds fast: 15 hosts at $900 average = $1,620/month, plus monthly bonuses.",
      "Elite agents (50+ hosts at 18%) commonly clear $10–25k/month — but that is a real business with hiring, retention, and coaching duties.",
    ],
  },
  {
    slug: "avoid-fake-agencies",
    title: "Red flags: how to avoid fake Chamet agencies",
    category: "Trust & safety",
    excerpt: "Not every agency is legit. Five warning signs to check before you give anyone your ID or stream coins.",
    body: [
      "1. They ask for money upfront. Real agencies, including ours, are free to join — we make money only when you make money.",
      "2. No verifiable agency code on the official Chamet invite domain. If the link does not start with h5.schamet.com, walk away.",
      "3. Vague payout schedule. Reputable agencies pay weekly or bi-weekly. 'Whenever the boss feels like it' is a no.",
      "4. No support channel. You should have a named agent on WhatsApp or Telegram from day one.",
      "5. Pressure to sign exclusivity contracts before you have streamed even once. Test the agency for two weeks before any commitment.",
    ],
  },
];
