import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useApply } from "./ApplyContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/programme", label: "Programme" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/coaches", label: "Coaches" },
  { to: "/locations", label: "Locations" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const { open } = useApply();
  const [mobile, setMobile] = useState(false);

  return (
    <header
      className={`relative z-30 w-full ${
        transparent ? "" : "border-b border-white/10 bg-deep/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-10 sm:py-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 text-[11px] font-bold tracking-[0.24em] text-white/70 transition hover:text-white"
              activeProps={{ className: "!text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label.toUpperCase()}
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-px transition-all"
                    style={{
                      background: "var(--gradient-amber)",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={open}
            className="hidden sm:inline-flex group items-center gap-1.5 rounded-md gradient-amber px-5 py-2.5 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.04] active:scale-[0.98]"
          >
            APPLY NOW
            <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setMobile((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white"
            aria-label="Toggle menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobile && (
        <div className="lg:hidden border-t border-white/10 bg-deep/95 backdrop-blur-md animate-fade-up">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="py-3 text-sm font-bold tracking-[0.22em] text-white/80 border-b border-white/5"
                activeProps={{ className: "!text-amber" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobile(false);
                open();
              }}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-5 py-3 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber"
            >
              APPLY NOW <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}