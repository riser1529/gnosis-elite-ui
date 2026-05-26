import { Link } from "@tanstack/react-router";
import { ChevronRight, CalendarDays, Clock, Users, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  { icon: CalendarDays, k: "9-Month", v: "Full-time pathway" },
  { icon: Clock, k: "5 Days / Week", v: "Pro training rhythm" },
  { icon: Users, k: "Small Squads", v: "Individual attention" },
  { icon: Target, k: "TY-Integrated", v: "Football + academics" },
];

export function ProgrammeOverview() {
  return (
    <section className="relative border-t border-white/10 overflow-hidden bg-deep">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(70% 50% at 20% 0%, rgba(16,185,129,0.10), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 items-center">
          <Reveal className="min-w-0">
            <div>
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// The Programme</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.02]">
                Train Like A Pro. <span className="gradient-amber bg-clip-text text-transparent">Study Like A Scholar.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                A full-time, nine-month Transition Year pathway engineered around the daily rhythm of a professional footballer — technical mastery, athletic preparation, mental development and integrated academics, delivered five days a week under UEFA Pro licensed coaches.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/programme"
                  className="group inline-flex items-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.03]"
                >
                  LEARN MORE
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/curriculum"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-[11px] font-black tracking-[0.22em] text-white transition hover:border-amber/50 hover:bg-white/10"
                >
                  VIEW CURRICULUM
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="grid grid-cols-2 gap-3">
              {points.map((p, i) => {
                const green = i % 2 === 0;
                return (
                  <div
                    key={p.v}
                    className="group relative rounded-xl border p-5 transition hover:scale-[1.02]"
                    style={{
                      borderColor: green ? "rgba(16,185,129,0.35)" : "rgba(255,255,255,0.10)",
                      background: green
                        ? "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(16,185,129,0.04))"
                        : "rgba(0,0,0,0.55)",
                      boxShadow: green ? "0 0 24px rgba(16,185,129,0.18)" : "none",
                    }}
                  >
                    <p.icon className="h-5 w-5" style={{ color: green ? "#04120a" : "var(--amber)" }} />
                    <div
                      className="mt-4 text-xl sm:text-2xl font-black tracking-tight break-words"
                      style={{ color: green ? "#04120a" : "#fff" }}
                    >
                      {p.k}
                    </div>
                    <div
                      className="mt-1 text-[10px] font-bold tracking-[0.24em] uppercase break-words"
                      style={{ color: green ? "rgba(4,18,10,0.75)" : "var(--cyan-precision)" }}
                    >
                      {p.v}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}