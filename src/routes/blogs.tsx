import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { posts } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Chamet Agency Blog — Tips for Hosts and Agents" },
      { name: "description", content: "Guides, growth tips, and earnings strategies for Chamet hosts and agency owners." },
      { property: "og:title", content: "Chamet Agency Blog" },
      { property: "og:description", content: "Grow on Chamet faster — read our latest articles." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Blog"
        title="Insights for hosts and agents."
        intro="Practical guides from our top earners — no fluff, just what works."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blogs/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="text-xs uppercase tracking-wider text-primary">{p.category}</div>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
