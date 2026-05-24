import { Mail, ChevronRight } from "lucide-react";
import { useApply } from "./ApplyContext";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  const { open } = useApply();
  return (
    <section className="relative border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(16,185,129,0.10), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-24">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 sm:p-12 shadow-deep transition hover:border-amber/40" style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}>
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Talk To Admissions</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">Still Have Questions?</h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                  Our admissions team is happy to chat through any questions you might have — about the programme, the trial process, academic integration, or anything else.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="mailto:info@gnosisperformance.com"
                  className="group inline-flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-black/40 px-5 py-4 text-white transition hover:border-amber/50 hover:bg-white/5"
                  style={{ transition: "all .3s" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                      <Mail className="h-4 w-4" style={{ color: "var(--amber)" }} />
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-[10px] font-bold tracking-[0.28em] text-cyan-precision uppercase">Email Us</span>
                      <span className="text-sm font-bold text-white">info@gnosisperformance.com</span>
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-white/60 transition group-hover:translate-x-1" />
                </a>
                <button
                  onClick={open}
                  className="group inline-flex items-center justify-between gap-3 rounded-xl gradient-amber px-5 py-4 text-primary-foreground shadow-amber transition hover:scale-[1.02]"
                >
                  <span className="flex flex-col text-left">
                    <span className="text-[10px] font-black tracking-[0.28em] opacity-80 uppercase">Primary CTA</span>
                    <span className="text-sm font-black tracking-[0.22em] uppercase">Apply Now</span>
                  </span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
