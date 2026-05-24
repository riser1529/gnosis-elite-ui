import { Reveal } from "./Reveal";
import { useApply } from "./ApplyContext";
import { Activity, Brain, Dumbbell, ChevronRight, Check, CalendarDays, Calendar, Sparkles, Flag } from "lucide-react";
import kitImg from "@/assets/kit.jpg";
import treadmillVideo from "@/assets/treadmill.mp4";

const pillars = [
  {
    step: "01",
    tag: "Player Development",
    title: "Technical & Tactical Excellence",
    icon: Activity,
    body: "The core of our programme. Every session is designed with purpose to develop technically superior, tactically intelligent footballers who can compete at the highest level.",
    metrics: [
      "UEFA Pro Licence Coaches",
      "Individual learning plans",
      "Tactical sessions — age-appropriate curriculum",
      "Games v Premier League academy opposition",
      "Premier League specialist coaching",
      "Sports psychology support",
    ],
  },
  {
    step: "02",
    tag: "Athletic Development",
    title: "Physical Excellence & Injury Prevention",
    icon: Dumbbell,
    body: "Elite footballers are elite athletes first. Our athletic development programme is designed to build the physical platform players need to compete at professional level.",
    metrics: [
      "Strength & conditioning tailored to footballers",
      "Speed, agility, quickness (SAQ) training",
      "Explosive power — plyometrics & resistance",
      "Endurance base building & periodisation",
      "Injury prevention protocols",
      "Recovery sessions (ice bath, active recovery)",
    ],
  },
  {
    step: "03",
    tag: "Education & Growth",
    title: "Academic Achievement & Life Skills",
    icon: Brain,
    body: "We believe every player deserves the best possible future — in football and beyond. Our education and personal development strand ensures players leave our programme as rounded, confident young people.",
    metrics: [
      "ITEC Gym Instructor QQI Level 2",
      "Anatomy, Physiology, Diet & Nutrition",
      "Business Studies",
      "First Aid & Circuit Training",
      "Gym Instruction & Client Screening",
      "Premier League Guest Speakers",
    ],
  },
];

const stats = [
  { v: "136", label: "Underage International Players (Boys & Girls Programme)" },
  { v: "67", label: "Players Receiving International Debuts" },
  { v: "4", label: "Senior International Players" },
  { v: "78", label: "Players Progressed to First Team LOI Football" },
  { v: "21", label: "Players Secured Professional Contracts Overseas" },
  { v: "25", label: "Players Earned USA College Scholarships" },
];

const why = [
  { title: "UEFA-Licensed Head Coaches", body: "Daniel O'Connor and elite staff bring world-class professional playing and coaching experience to this programme." },
  { title: "Full-Time Programme", body: "Players train 5 days a week in a full-time professional environment." },
  { title: "Academic Integration", body: "Working alongside compliance boards to ensure players fulfil their Transition Year (TY) requirements while training at the highest level." },
  { title: "Small Group Sizes", body: "Deliberately small squads to ensure individual attention and detailed feedback." },
];

const synopsis = [
  { k: "5 / Week", v: "Training Days", icon: CalendarDays },
  { k: "9 Months", v: "Programme Length", icon: Calendar },
  { k: "Sept 2026", v: "Start Date", icon: Sparkles },
  { k: "Open Now", v: "Applications Status", icon: Flag },
];

function hoverGlow(e: React.MouseEvent<HTMLElement>, on: boolean) {
  e.currentTarget.style.boxShadow = on ? "0 0 20px rgba(16,185,129,0.25)" : "none";
}

export function HomeSections() {
  const { open } = useApply();

  return (
    <>
      {/* ============ SECTION A: TRI-PILLAR ============ */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">The Operating System</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">A Complete Development System</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Three integrated pillars. One pathway. Engineered to produce technically elite, physically robust, intellectually rounded footballers.</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <article
                  className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 sm:p-8 transition hover:border-amber/40"
                  style={{ transition: "all .4s" }}
                  onMouseEnter={(e) => hoverGlow(e, true)}
                  onMouseLeave={(e) => hoverGlow(e, false)}
                >
                  {/* vertical step indicator */}
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="grid h-11 w-11 place-items-center rounded-lg gradient-amber shadow-amber text-primary-foreground font-black text-sm">{p.step}</div>
                      <div className="mt-2 w-px flex-1 bg-gradient-to-b from-amber/40 to-transparent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p.icon className="h-4 w-4" style={{ color: "var(--amber)" }} />
                        <span className="text-[10px] font-black tracking-[0.28em] text-cyan-precision uppercase">{p.tag}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-black text-white leading-tight">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-2.5 border-t border-white/10 pt-5">
                    {p.metrics.map((m) => (
                      <li key={m} className="flex items-start gap-2.5 text-[13px] text-white/85">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--amber)" }} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION B: STATS DASHBOARD ============ */}
      <section className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Performance Dashboard</span>
                <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">A Proven Pipeline.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.06] px-3 py-1.5 text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--amber)", boxShadow: "0 0 12px rgba(16,185,129,0.8)" }} />
                Live Metrics
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md">
              {stats.map((s, i) => (
                <div
                  key={s.v}
                  className="group relative bg-deep p-6 sm:p-7 transition hover:bg-white/[0.04]"
                  style={{ transition: "all .35s" }}
                  onMouseEnter={(e) => hoverGlow(e, true)}
                  onMouseLeave={(e) => hoverGlow(e, false)}
                >
                  <div className="text-[10px] font-bold tracking-[0.28em] text-cyan-precision">{String(i + 1).padStart(2, "0")}</div>
                  <div
                    className="mt-3 text-5xl sm:text-6xl font-black tracking-tight"
                    style={{ color: "var(--amber)", textShadow: "0 0 28px rgba(16,185,129,0.35)" }}
                  >
                    {s.v}
                  </div>
                  <div className="mt-3 text-[11px] font-bold leading-snug text-white/75 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
              Now, under <span className="font-bold text-white">Gnosis Performance Football Academy</span>, the programme is entering an exciting new chapter — building on this proven foundation and ready to take player development and education to the next level.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION C: WHY CHOOSE US + SYNOPSIS ============ */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left console */}
          <Reveal>
            <div>
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Operator Notes</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Why Choose Us?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Four reasons families across Ireland choose the Gnosis pathway over any other Transition Year option.</p>

              <ul className="mt-10 space-y-3.5">
                {why.map((w, i) => (
                  <Reveal key={w.title} delay={i * 90}>
                    <li
                      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 transition hover:border-amber/40"
                      style={{ transition: "all .35s" }}
                      onMouseEnter={(e) => hoverGlow(e, true)}
                      onMouseLeave={(e) => hoverGlow(e, false)}
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border" style={{ borderColor: "rgba(16,185,129,0.5)" }}>
                        <Check className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} />
                      </span>
                      <div>
                        <div className="text-sm font-black text-white tracking-wide">{w.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right synopsis grid */}
          <Reveal delay={150}>
            <div className="lg:sticky lg:top-24">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Programme Spec Sheet</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Programme Synopsis</h3>
              <div className="mt-6 grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-deep">
                {synopsis.map((s) => (
                  <div
                    key={s.v}
                    className="group relative bg-deep p-6 sm:p-7 transition hover:bg-white/[0.04]"
                    style={{ transition: "all .35s" }}
                    onMouseEnter={(e) => hoverGlow(e, true)}
                    onMouseLeave={(e) => hoverGlow(e, false)}
                  >
                    <s.icon className="h-5 w-5" style={{ color: "var(--amber)" }} />
                    <div className="mt-4 text-2xl sm:text-3xl font-black text-white tracking-tight">{s.k}</div>
                    <div className="mt-2 text-[10px] font-bold tracking-[0.28em] text-cyan-precision uppercase">{s.v}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={open}
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3.5 text-xs font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.03]"
              >
                APPLY FOR SEPT 2026 <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION D: HERO MEDIA ACTION GRID ============ */}
      <section className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Inside The Lab</span>
                <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Where The Work Happens.</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">From the biomechanical treadmill in the performance lab to the full kit pack on day one — every detail engineered for elite preparation.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-6 sm:grid-rows-2 sm:auto-rows-fr">
            {/* Treadmill video — large */}
            <Reveal className="sm:col-span-4 sm:row-span-2">
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black h-full min-h-[320px] sm:min-h-[420px] max-h-[520px] transition"
                style={{ transition: "all .4s" }}
                onMouseEnter={(e) => hoverGlow(e, true)}
                onMouseLeave={(e) => hoverGlow(e, false)}
              >
                <video
                  src={treadmillVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-black/50 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full animate-pulse-ring" style={{ background: "var(--amber)" }} />
                  BIOMECHANICAL LAB · LIVE
                </div>
                <div className="absolute left-5 right-5 bottom-5">
                  <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>Module 04 · Performance Diagnostics</div>
                  <div className="mt-1 text-xl sm:text-2xl font-black text-white">Biomechanical Treadmill Analysis</div>
                </div>
              </div>
            </Reveal>

            {/* Kit image — top right */}
            <Reveal delay={120} className="sm:col-span-2">
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black h-full min-h-[200px] max-h-[260px] transition"
                style={{ transition: "all .4s" }}
                onMouseEnter={(e) => hoverGlow(e, true)}
                onMouseLeave={(e) => hoverGlow(e, false)}
              >
                <img
                  src={kitImg}
                  alt="Gnosis Performance Football Academy full kit pack"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>Issue Kit</div>
                  <div className="mt-0.5 text-base font-black text-white">Day-One Player Pack</div>
                </div>
              </div>
            </Reveal>

            {/* Bottom-right stats card */}
            <Reveal delay={220} className="sm:col-span-2">
              <div
                className="group relative flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition hover:border-amber/40"
                style={{ transition: "all .4s" }}
                onMouseEnter={(e) => hoverGlow(e, true)}
                onMouseLeave={(e) => hoverGlow(e, false)}
              >
                <div>
                  <span className="text-[10px] font-black tracking-[0.28em] text-cyan-precision uppercase">// Squad Ratio</span>
                  <div className="mt-2 text-5xl font-black text-white" style={{ textShadow: "0 0 28px rgba(16,185,129,0.25)" }}>1:6</div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Coach to player ratio for maximum individual attention.</div>
                </div>
                <button
                  onClick={open}
                  className="mt-4 inline-flex items-center justify-between rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-[11px] font-black tracking-[0.22em] text-white transition hover:border-amber/50 hover:bg-white/5"
                >
                  RESERVE A TRIAL <ChevronRight className="h-4 w-4" style={{ color: "var(--amber)" }} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
