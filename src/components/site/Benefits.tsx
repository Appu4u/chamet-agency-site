import { motion } from "framer-motion";
import { GraduationCap, Headphones, Wallet, Trophy, Globe2, TrendingUp } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Pro training", body: "Onboarding playbooks, streaming tips, and growth coaching from top-tier agents." },
  { icon: Headphones, title: "24 / 7 support", body: "Direct line to our team in English, Hindi, Urdu, Spanish, and Arabic." },
  { icon: Wallet, title: "Weekly payouts", body: "Get paid every Monday — bank transfer, wallets, or crypto where available." },
  { icon: Trophy, title: "Bonus campaigns", body: "Stack official Chamet bonuses with our agency-only top-up rewards." },
  { icon: Globe2, title: "Global community", body: "A network of 1000+ hosts across 18 countries to learn and collab with." },
  { icon: TrendingUp, title: "Real growth path", body: "Climb from host → senior host → sub-agent → agency partner with clear tiers." },
];

export function Benefits() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary">
            <it.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
