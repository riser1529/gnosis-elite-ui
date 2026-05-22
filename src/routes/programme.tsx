import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Calendar, CalendarDays, Trophy, ShieldCheck, Users, Sparkles, Target } from "lucide-react";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { useApply } from "@/components/gnosis/ApplyContext";

export const Route = createFileRoute("/programme")({
  component: ProgrammePage,
  head: () => ({
    meta: [
      { title: "Programme | Gnosis Performance Football Academy" },
      { name: "description", content: "Full-time Transition Year football & performance programme. Pro environment, elite coaching, top-level exposure for September 2026." },
    ],
  }),
});

const stats = [
  { k: "5 / Week", v: "Training Days", icon: CalendarDays },
  { k: "9 Months", v: "Programme Length", icon: Calendar },
  { k: "Sept 2026", v: "Start Date", icon: Trophy },
];

const pillars = [
  { title: "Proven Foundation", body: "A structured curriculum built on UEFA Pro methodologies and modern performance science. Every block, every session, accountable to outcomes.", icon: ShieldCheck },
  { title: "Elite Coaching Staff", body: "Coaches with first-team, academy and international experience. Position-specific coaching from people who've operated at the highest levels.", icon: Users },
  { title: "Professional Environment", body: "Pro-style daily rhythm: gym, pitch, video analysis, recovery and academic alignment — engineered to mirror full-time football clubs.", icon: Sparkles },
  { title: "Top-Level Exposure", body: "Direct visibility to scouts, performance analysts and partner clubs across Ireland, the UK and Europe. We open doors that stay open.", icon: Target },
];

function ProgrammePage() {
  const { open } = useApply();
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]"
              style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>
              September 2026 Intake
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-balance text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-[-0.01em] text-white">
              The <span className="gradient-amber bg-clip-text text-transparent">Programme</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A full-time Transition Year football and performance pathway. Train, recover and study like a professional, nine months a year, five days a week.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={open} className="group inline-flex items-center gap-2 rounded-md gradient-amber px-7 py-4 text-sm font-black tracking-[0.2em] text-primary-foreground shadow-amber transition hover:scale-[1.03]">
                APPLY NOW <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS MATRIX */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-10 -mt-12">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-deep">
            {stats.map((s, i) => (
              <Reveal key={s.v} delay={i * 120} className="group relative bg-deep/80 p-8 sm:p-10 transition hover:bg-white/[0.04]">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ background: "radial-gradient(120% 80% at 50% 0%, rgba(16,185,129,0.10), transparent 70%)" }} />
                <s.icon className="h-6 w-6" style={{ color: "var(--amber)" }} />
                <div className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">{s.k}</div>
                <div className="mt-2 text-[10px] font-bold tracking-[0.32em] text-cyan-precision uppercase">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision uppercase">Our Pillars</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">Engineered around four foundations.</h2>
            <p className="mt-4 text-muted-foreground">Each pillar is delivered weekly, measured monthly and reviewed termly.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition hover:scale-[1.02] hover:border-amber/40 shadow-deep overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(16,185,129,0.14), transparent 70%)" }} />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-lg gradient-amber shadow-amber">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-black uppercase tracking-[0.12em] text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}