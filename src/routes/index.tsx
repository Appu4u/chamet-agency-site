import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Benefits } from "@/components/site/Benefits";
import { StepsList } from "@/components/site/StepsList";
import { EarningsTables } from "@/components/site/EarningsTables";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chamet Agency — Become an Agent or Host & Earn Online" },
      { name: "description", content: "Join Chamet Agency to recruit hosts, lead a global team, and earn weekly payouts. Pro training, 24/7 support, and bonus campaigns for hosts and agents." },
      { property: "og:title", content: "Chamet Agency — Become an Agent or Host & Earn Online" },
      { property: "og:description", content: "Join Chamet Agency to recruit hosts, lead a global team, and earn weekly payouts. Pro training, 24/7 support, and bonus campaigns for hosts and agents." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />

      <Section
        id="about"
        eyebrow="Who we are"
        title={<>A modern agency built for ambitious <span className="text-gradient-gold">creators</span>.</>}
        intro="We are an officially invited Chamet partner agency helping new and experienced creators earn from live streaming. Our promise: real income, real training, and real human support."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "1,000+", v: "Active hosts" },
            { k: "18", v: "Countries" },
            { k: "$2.4M", v: "Paid out in 2025" },
            { k: "4.9 / 5", v: "Host satisfaction" },
          ].map((s) => (
            <div key={s.v} className="rounded-3xl border border-border bg-card p-6 text-center">
              <div className="font-display text-3xl font-bold text-gradient-gold md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="agent"
        eyebrow="Become an Agent"
        title="Register your Chamet Agency in 4 simple steps."
        intro="No experience needed. Our team helps you set up your code, recruit your first hosts, and unlock your first payout."
      >
        <StepsList variant="agent" />
        <div className="mt-10 text-center">
          <a
            href="https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=30596"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90"
          >
            Start agent registration <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <Section
        id="host"
        eyebrow="Become a Host"
        title="Stream, connect, and get paid weekly."
        intro="Open your camera, share your personality, and build a global fanbase. We handle the rest — onboarding, support, growth coaching."
        className="bg-secondary/30"
      >
        <StepsList variant="host" />
        <div className="mt-10 text-center">
          <Link
            to="/host"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:border-primary/50"
          >
            Full host guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Why us"
        title="Everything you need to win on Chamet."
        intro="From your first stream to your first $10k month — our agency is wired to grow with you."
      >
        <Benefits />
      </Section>

      <Section
        eyebrow="Earnings"
        title="Transparent commission tiers."
        intro="No hidden cuts. Climb tiers as your hosts or your stream hours grow — payouts update automatically."
        className="bg-secondary/30"
      >
        <EarningsTables />
      </Section>

      <Section eyebrow="Questions" title="Frequently asked questions">
        <FAQ />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact us"
        title="Let's get you started."
        intro="Tell us a bit about yourself and we'll personally onboard you within 24 hours."
        className="bg-secondary/30"
      >
        <ContactForm />
      </Section>
    </SiteLayout>
  );
}
