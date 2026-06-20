import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { StepsList } from "@/components/site/StepsList";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/agent")({
  head: () => ({
    meta: [
      { title: "Become a Chamet Agent — Register Your Agency Today" },
      { name: "description", content: "Step-by-step guide to becoming a Chamet Agent. Recruit hosts, manage your team, and earn override commission weekly." },
      { property: "og:title", content: "Become a Chamet Agent" },
      { property: "og:description", content: "Open your Chamet agency in minutes with our official partner code." },
    ],
  }),
  component: AgentPage,
});

function AgentPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Agent registration"
        title={<>Open your <span className="text-gradient-gold">Chamet Agency</span> in minutes.</>}
        intro="Register under our official partner code and unlock full agency tools, training, and weekly override commissions on every host you recruit."
      >
        <StepsList variant="agent" />
        <div className="mt-10 text-center">
          <a
            href="https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=3338"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90"
          >
            Open registration link <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
