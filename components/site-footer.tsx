import { socials } from "@/lib/socials";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/60">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Nebula
          </span>
          <p className="text-sm text-slate-400">
            Curated technology and lifestyle essentials engineered to elevate your
            everyday rituals.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-400">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Company
          </h3>
          <a href="#collections" className="hover:text-accent">
            Collections
          </a>
          <a href="#stories" className="hover:text-accent">
            Journal
          </a>
          <a href="#experience" className="hover:text-accent">
            Experiences
          </a>
        </div>
        <div className="space-y-3 text-sm text-slate-400">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Support
          </h3>
          <a href="#" className="hover:text-accent">
            Shipping & Returns
          </a>
          <a href="#" className="hover:text-accent">
            Warranty
          </a>
          <a href="#" className="hover:text-accent">
            Contact
          </a>
        </div>
        <div className="space-y-5 text-sm text-slate-400">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Stay ahead
          </h3>
          <p>
            Subscribe for new drops, editorial stories, and early access events.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@nebula.design"
              className="h-11 flex-1 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent-soft px-6 text-sm font-semibold text-slate-950 transition hover:bg-accent"
            >
              Join
            </button>
          </form>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-slate-500 transition hover:text-accent"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/70 px-6 py-6 text-xs text-slate-600">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {currentYear} Nebula Commerce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent">
              Privacy
            </a>
            <a href="#" className="hover:text-accent">
              Terms
            </a>
            <a href="#" className="hover:text-accent">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
