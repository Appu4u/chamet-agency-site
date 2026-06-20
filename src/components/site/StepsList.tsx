import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Open the agency invite link",
    body: "Tap our official Chamet agency registration link to begin onboarding instantly.",
  },
  {
    n: "02",
    title: "Verify your phone number",
    body: "Enter your mobile number and confirm the OTP — your account is created on the spot.",
  },
  {
    n: "03",
    title: "Complete your agency profile",
    body: "Add your name, ID, and payout details. Our team reviews within 24 hours.",
  },
  {
    n: "04",
    title: "Recruit hosts & start earning",
    body: "Invite hosts under your code. Track their performance and receive weekly commissions.",
  },
];

export function StepsList({
  variant = "agent",
}: { variant?: "agent" | "host" }) {
  const items =
    variant === "agent"
      ? steps
      : [
          { n: "01", title: "Download the Chamet app", body: "Install Chamet from Google Play and register with your phone." },
          { n: "02", title: "Join under our agency", body: "Use our agency invite code so you receive full support and bonuses." },
          { n: "03", title: "Upload verification", body: "Submit a clear selfie and ID for instant host approval." },
          { n: "04", title: "Go live & get paid", body: "Stream daily, build fans, and withdraw earnings every week." },
        ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40"
        >
          <div className="font-display text-6xl font-bold text-gradient-gold opacity-90">{s.n}</div>
          <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
        </motion.div>
      ))}
    </div>
  );
}
