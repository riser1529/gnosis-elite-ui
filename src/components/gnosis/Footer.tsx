import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useApply } from "./ApplyContext";

export function Footer() {
  const { open: onApply } = useApply();
  return (
    <footer className="relative border-t border-white/10 bg-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-10 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Creating a top-level football environment with professional training, strong academic support and personal development, for mental strength and physical fitness.
          </p>

    <div className="flex flex-col gap-4 text-sm font-medium text-neutral-400">
      {/* Email Row */}
      <div className="flex items-center gap-3 group mt-5">
        <Mail className="w-5 h-5 transition-transform group-hover:scale-105" aria-hidden="true" style={{ color: "var(--amber)" }} />
        <a href="mailto:admissions@gnosisperformance.ie" className="transition-colors hover:text-white">info@gnosisperformance.com</a>
      </div>

      {/* Location Row */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" style={{ color: "var(--amber)" }} />
        <span className="leading-relaxed">Locations to be announced.</span>
      </div>
    </div>
        </div>

        <div className="lg:justify-self-center">
          <h4 className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision mt-2">ADMISSIONS</h4>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Spaces are competitive and application-based.</p>
          <button onClick={onApply} className="mt-6 inline-flex items-center gap-1.5 rounded-md gradient-amber px-5 py-2.5 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.04]" style={{ backgroundImage: 'var(--gradient-amber)' }}>
            APPLY NOW
          </button>
        </div>

        <div className="lg:justify-self-end">
          <h4 className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision">PARTNERS</h4>
          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href="https://catapult.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white text-sm text-muted-foreground"
            >
              Catapult
            </a>

            <a
              href="https://cryoprotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white text-sm text-muted-foreground"
            >
              Cryo Pro Tech
            </a>

            <a
              href="https://gnosisperformance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white text-sm text-muted-foreground"
            >
              Gnosis Performance
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} Gnosis Performance Football Academy. All Rights Reserved.</p>
          <p>Built with Elite Architectural Specs.</p>
        </div>
      </div>
    </footer>
  );
}

// Partner links replaced social icons; no additional helper components required.
