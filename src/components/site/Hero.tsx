import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const AGENT_LINK = "https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=30596";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Official Chamet Partner Agency
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            Turn your hours into a <span className="text-gradient-gold">global income</span> with Chamet.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Join Chamet Agency to recruit hosts, lead an international team, and unlock weekly payouts. Whether you want to host or build your own agency — we give you the playbook, the support, and the network.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={AGENT_LINK}
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Register as an Agent
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/host"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3.5 text-sm font-semibold hover:bg-secondary"
            >
              Become a Host
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <a
              href="https://play.google.com/store/apps/details?id=com.hkfuliao.chamet"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 hover:border-primary/50"
            >
              <Download className="h-4 w-4 text-primary" />
              <span><span className="block text-[10px] uppercase tracking-wider">Download</span><span className="font-semibold text-foreground">Chamet App</span></span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bite.chillchat"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 hover:border-primary/50"
            >
              <Download className="h-4 w-4 text-primary" />
              <span><span className="block text-[10px] uppercase tracking-wider">Download</span><span className="font-semibold text-foreground">ChillChat</span></span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
          <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Today's earnings</div>
                <div className="mt-1 font-display text-3xl font-bold text-gradient-gold">$ 1,284.50</div>
              </div>
              <div className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">+24%</div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { k: "Active hosts", v: "142" },
                { k: "Countries", v: "18" },
                { k: "Stream hours", v: "3,210" },
                { k: "Top tier", v: "Diamond" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-background/60 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                  <div className="mt-1 font-display text-xl font-bold">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-primary/30 bg-primary/10 p-4">
              <div className="text-xs font-medium uppercase tracking-widest text-primary">Weekly payout</div>
              <div className="mt-1 text-sm text-foreground/90">Sent automatically every Monday to your bank or wallet.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
