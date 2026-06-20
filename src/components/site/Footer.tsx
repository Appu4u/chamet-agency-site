import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent font-display font-bold text-primary-foreground">C</span>
            <span className="font-display text-lg font-bold">Chamet Agency</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The official partner agency for ambitious Chamet hosts and agents. Earn globally, supported locally.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/agent" className="hover:text-primary">Become an Agent</Link></li>
            <li><Link to="/host" className="hover:text-primary">Become a Host</Link></li>
            <li><Link to="/blogs" className="hover:text-primary">Blogs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms of Use</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get the apps</h4>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.hkfuliao.chamet"
              target="_blank" rel="noreferrer"
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:border-primary/50"
            >
              <div className="text-xs text-muted-foreground">Download on Play Store</div>
              <div className="font-semibold">Chamet App</div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bite.chillchat"
              target="_blank" rel="noreferrer"
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:border-primary/50"
            >
              <div className="text-xs text-muted-foreground">Download on Play Store</div>
              <div className="font-semibold">ChillChat App</div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chamet Agency. Not affiliated with Chamet's parent company; we are an official invited partner agency.
      </div>
    </footer>
  );
}
