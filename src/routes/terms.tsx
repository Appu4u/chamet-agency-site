import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Chamet Agency" },
      { name: "description", content: "The terms that govern your use of Chamet Agency services and partnership." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-4xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-muted-foreground">Last updated: June 2026</p>
        <div className="mt-8 space-y-4 text-foreground/90">
          <p>By joining Chamet Agency as a host or agent you agree to follow Chamet's official platform rules in addition to our agency code of conduct.</p>
          <p>Earnings depend on your activity and audience. We make no guaranteed-income promises. Payouts are processed weekly subject to KYC verification.</p>
          <p>Either party may end the partnership at any time with written notice via our contact channels.</p>
        </div>
      </article>
    </SiteLayout>
  ),
});
