import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { StepsList } from "@/components/site/StepsList";
import { Download } from "lucide-react";

export const Route = createFileRoute("/host")({
  head: () => ({
    meta: [
      { title: "Become a Chamet Host — Earn Weekly From Live Streams" },
      { name: "description", content: "Join Chamet Agency as a host. Daily streaming, global audience, and guaranteed weekly payouts with full support." },
      { property: "og:title", content: "Become a Chamet Host" },
      { property: "og:description", content: "Stream, connect, and earn — supported by a real agency every step of the way." },
    ],
  }),
  component: HostPage,
});

function HostPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Host program"
        title={<>Go live. Build fans. <span className="text-gradient-gold">Get paid weekly.</span></>}
        intro="Whether you've never streamed before or you're switching from another platform — we make joining Chamet effortless."
      >
        <StepsList variant="host" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://h5.schamet.com/webH5/agent/bind.html?companyId=30596"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Download Chamet
          </a>
          <a
            href="https://h5.schamet.com/webH5/agent/bind.html?companyId=30596"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:border-primary/50"
          >
            <Download className="h-4 w-4" /> Download ChillChat
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
