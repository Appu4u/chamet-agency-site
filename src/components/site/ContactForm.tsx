import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      whatsapp: String(fd.get("whatsapp") || "").trim(),
      role: (String(fd.get("role") || "agent") as "agent" | "host" | "other"),
      message: String(fd.get("message") || "").trim(),
    };
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await send({ data });
      toast.success("Thanks! We'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-border bg-card p-6 md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name" name="name" placeholder="Aisha Khan" required />
          <Field label="Email" type="email" name="email" placeholder="you@email.com" required />
          <Field label="WhatsApp (optional)" name="whatsapp" placeholder="+92 300 0000000" />
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">I want to join as</label>
            <select
              name="role"
              defaultValue="agent"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            >
              <option value="agent">Agent</option>
              <option value="host">Host</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about yourself and what you're hoping to achieve…"
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {loading ? "Sending…" : "Send message"}
        </button>
      </form>

      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-background p-6 md:p-8">
        <h3 className="font-display text-xl font-semibold">Prefer to chat?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team is online 7 days a week. Tap below to start a WhatsApp conversation.
        </p>
        <a
          href="https://wa.me/12342559343"
          target="_blank" rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>
        <div className="mt-6 space-y-3 text-sm">
          <Detail k="Response time" v="Under 1 hour" />
          <Detail k="Languages" v="EN · HI · UR · ES · AR" />
          <Detail k="Hours" v="24 / 7" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}
