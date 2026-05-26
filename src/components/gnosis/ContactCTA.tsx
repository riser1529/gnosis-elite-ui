import { Mail, ChevronRight } from "lucide-react";
import { useApply } from "./ApplyContext";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  const { open } = useApply();
  return (
    <section className="relative border-t border-white/10" style={{ background: 'var(--amber)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      {/* green background area */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal>
          {/* internal container — raised 3D black card */}
          <div
            className="mx-auto rounded-2xl bg-black/95 p-6 sm:p-8 shadow-2xl"
            style={{ transform: 'translateY(-12px)', boxShadow: '0 10px 40px rgba(2,6,23,0.6)' }}
          >
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Talk To Admissions</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Still Have Questions?</h2>
                <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed text-sm">
                  Our admissions team is happy to chat through any questions you might have — about the programme, the trial process, academic integration, or anything else.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="mailto:info@gnosisperformance.com"
                  className="group inline-flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black px-4 py-3 text-white transition hover:border-amber/50"
                  style={{ transition: 'all .18s' }}
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-md border border-white/8 bg-white/5">
                      <Mail className="h-4 w-4" style={{ color: 'var(--amber)' }} />
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-[10px] font-bold tracking-[0.28em] text-cyan-precision uppercase">Email Us</span>
                      <span className="text-sm font-bold text-white">info@gnosisperformance.com</span>
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 text-white/70 transition group-hover:translate-x-1" />
                </a>
                <button
                  onClick={open}
                  className="group inline-flex items-center justify-between gap-3 rounded-md gradient-amber px-4 py-3 text-sm font-black tracking-[0.18em] text-primary-foreground shadow-amber transition hover:scale-[1.02]"
                >
                  <span className="flex flex-col text-left">
                    <span className="text-[10px] font-black tracking-[0.22em] opacity-90 uppercase">Apply Now</span>
                    <span className="text-sm font-black tracking-[0.18em] uppercase">Start Application</span>
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
