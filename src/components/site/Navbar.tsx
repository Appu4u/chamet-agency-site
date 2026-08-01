import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/agent", label: "Agent" },
  { to: "/host", label: "Host" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold">
            C
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Chamet<span className="text-gradient-gold"> Agency</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=30596"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 lg:inline-flex"
        >
          Join as Agent
        </a>
        <button
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=30596"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Join as Agent
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
