import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Chamet Agency" },
      { name: "description", content: "How Chamet Agency collects, uses, and protects your personal information." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <article className="prose-invert mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>
        <div className="mt-8 space-y-4 text-foreground/90">
          <p>Chamet Agency respects your privacy. We collect only the information needed to onboard you as a host or agent — name, contact details, ID for verification, and payout details.</p>
          <p>We never sell or share your personal information with third parties. Verification documents are stored encrypted and deleted upon request after offboarding.</p>
          <p>For any privacy questions, contact us through the contact form on this site.</p>
        </div>
      </article>
    </SiteLayout>
  ),
});
