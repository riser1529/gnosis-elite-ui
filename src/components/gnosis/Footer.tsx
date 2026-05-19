import { Facebook, Instagram, Youtube, Send, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer({ onApply }: { onApply: () => void }) {
  return (
    <footer className="relative border-t border-white/10 bg-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-10 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Balancing footballing excellence with foundational academic validation and robust psychological/athletic personal growth architectures.
          </p>

          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-400">
      {/* Email Row */}
      <div className="flex items-center gap-3 group mt-5">
        <Mail 
          className="w-5 h-5 text-amber-500 transition-transform group-hover:scale-105" 
          aria-hidden="true" 
        />
        <a 
          href="mailto:admissions@gnosisperformance.ie" 
          className="transition-colors hover:text-white"
        >
          admissions@gnosisperformance.ie
        </a>
      </div>

      {/* Location Row */}
      <div className="flex items-start gap-3">
        <MapPin 
          className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" 
          aria-hidden="true" 
        />
        <span className="leading-relaxed">
          TU Blanchardstown & Corduff Sports Centre, Dublin.
        </span>
      </div>
    </div>
        </div>

        <div className="lg:justify-self-center">
          <h4 className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision mt-2">ADMISSIONS</h4>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Spaces are competitive and application-based.</p>
          <button onClick={onApply} className="mt-6 inline-flex items-center gap-1.5 rounded-md gradient-amber px-5 py-2.5 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.04]">
            APPLY NOW
          </button>
        </div>

        <div className="lg:justify-self-end">
          <h4 className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision">CONNECT</h4>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Social label="WhatsApp"><WhatsAppIcon /></Social>
            <Social label="YouTube"><Youtube className="h-4 w-4" /></Social>
            <Social label="Facebook"><Facebook className="h-4 w-4" /></Social>
            <Social label="Instagram"><Instagram className="h-4 w-4" /></Social>
            <Social label="Telegram"><Send className="h-4 w-4" /></Social>
            <Social label="X"><XIcon /></Social>
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

function Social({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a href="#" aria-label={label} className="group grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/80 transition hover:-translate-y-0.5 hover:border-amber/60 hover:bg-amber/10 hover:text-amber">
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.3A11 11 0 1020.5 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-.6-.3-1.3-.8-2-1.5-.5-.6-.9-1.2-1.2-1.7-.1-.2 0-.4.1-.5l.3-.4.2-.4c0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.9.9-1.1 2.2-.4 3.6.8 1.6 1.7 2.8 3.2 4.1 1 .8 2 1.3 3 1.5.9.2 1.6.1 2.2-.1.5-.2 1.1-.6 1.3-1.1.2-.5.2-1 .1-1.1z"/></svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-5.34-6.97L3.6 22H.84l6.98-7.98L1.5 2h6.964l4.83 6.39L18.244 2zm-1.196 18.27h1.88L7.05 3.62H5.05l11.998 16.65z"/></svg>
  );
}
