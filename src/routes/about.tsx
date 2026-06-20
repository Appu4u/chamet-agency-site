import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chamet Agency — Official Partner Agency" },
      { name: "description", content: "Learn about Chamet Agency: our mission, team, and why creators across 18 countries trust us with their live streaming careers." },
      { property: "og:title", content: "About Chamet Agency" },
      { property: "og:description", content: "Officially invited Chamet partner agency for ambitious global creators." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="About"
        title={<>An agency built by <span className="text-gradient-gold">creators</span>, for creators.</>}
        intro="We started Chamet Agency because we lived the problem: incredible hosts losing months of income to bad agencies, slow payouts, and zero support. We fixed every one of those."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-bold">Our mission</h3>
            <p className="mt-3 text-muted-foreground">
              Make live streaming a real, sustainable career for anyone with a phone and a dream. We invest in our hosts the way a great record label invests in artists — coaching, marketing, and uncapped upside.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-bold">What makes us different</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• Weekly payouts — no waiting a month for your money.</li>
              <li>• Dedicated agent + personal growth coach for every host.</li>
              <li>• Bonus campaigns layered on top of Chamet's official rewards.</li>
              <li>• Multi-app strategy: Chamet + ChillChat for max audience.</li>
            </ul>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
