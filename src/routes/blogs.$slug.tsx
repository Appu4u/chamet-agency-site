import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blogs/$slug")({
  head: ({ params }) => {
    const p = posts.find((x) => x.slug === params.slug);
    const title = p ? `${p.title} — Chamet Agency Blog` : "Article — Chamet Agency";
    const desc = p?.excerpt ?? "Read insights from Chamet Agency.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Article not found</h1>
        <Link to="/blogs" className="mt-4 inline-block text-primary">Back to blog</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <div className="mt-6 text-xs uppercase tracking-wider text-primary">{post.category}</div>
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
