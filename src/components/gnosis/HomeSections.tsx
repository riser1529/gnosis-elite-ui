import { Link } from "@tanstack/react-router";
import { Activity, Brain, Dumbbell, Check, ChevronRight, Quote, Star } from "lucide-react";
import kitImg from "@/assets/kit.jpg";
import treadmillVideo from "@/assets/treadmill.mp4";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

const pillars = [
  {
    step: "01",
    tag: "Player Development",
    title: "Player Development",
    icon: Activity,
    body:
      "The core of our programme. Every session is designed with purpose to develop technically superior, tactically intelligent footballers who can compete at the highest level.",
    items: [
      "UEFA Pro Licence Coaches",
      "Individual learning plans",
      "Tactical sessions - age appropriate curriculum",
      "Games v Premier League academy opposition",
      "Premier League specialist coaching",
      "Sports psychology support",
    ],
  },
  {
    step: "02",
    tag: "Education & Personal Growth",
    title: "Education & Personal Growth",
    icon: Brain,
    body:
      "We believe every player deserves the best possible future — in football and beyond. Our education and personal development strand ensures players leave our programme as rounded, confident young people.",
    items: [
      "ITEC Gym Instructor QQI Level 2",
      "Anatomy, Physiology, Diet & Nutrition",
      "Business Studies & Special Populations",
      "First Aid & Circuit Training",
      "Gym Instruction & Client Screening",
      "Premier League Guest Speakers",
    ],
  },
  {
    step: "03",
    tag: "Athletic Development",
    title: "Athletic Development",
    icon: Dumbbell,
    body:
      "Elite footballers are elite athletes first. Our athletic development programme is designed to build the physical platform players need to compete at professional level.",
    items: [
      "Strength & conditioning programme",
      "Speed, agility & explosiveness training",
      "Injury prevention & recovery protocols",
      "Nutrition education & hydration guidance",
      "Sports science monitoring",
      "Continuous testing and monitoring",
    ],
  },
];

const stats = [
  { v: "136", label: "Underage International Players (Boys & Girls Programme)" },
  { v: "67", label: "Players Receiving International Debuts (Boys & Girls Programme)" },
  { v: "4", label: "Senior International Players (Boys & Girls Programme)" },
  { v: "78", label: "Players Progressed to First Team LOI Football" },
  { v: "21", label: "Players Secured Professional Contracts Overseas" },
  { v: "25", label: "Players Earned USA College Scholarships" },
];

function hoverGlow(e: React.MouseEvent<HTMLElement>, on: boolean) {
  e.currentTarget.style.boxShadow = on ? "0 0 24px rgba(16,185,129,0.28)" : "none";
}

export function HomeSections() {
  return (
    <>
      {/* ============ SECTION A: TRI-PILLAR ============ */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">The Operating System</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">A Complete Development System</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Three integrated pillars. One pathway. Engineered to produce technically elite, physically robust, intellectually rounded footballers.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <article
                  className="group relative h-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-7 transition hover:border-amber/40"
                  onMouseEnter={(e) => hoverGlow(e, true)}
                  onMouseLeave={(e) => hoverGlow(e, false)}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg gradient-amber shadow-amber text-primary-foreground font-black text-sm">
                      {p.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p.icon className="h-4 w-4 shrink-0" style={{ color: "var(--amber)" }} />
                        <span className="text-[10px] font-black tracking-[0.28em] text-cyan-precision uppercase truncate">{p.tag}</span>
                      </div>
                      <h3 className="mt-3 text-lg sm:text-xl font-black text-white leading-tight break-words">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-2.5 border-t border-white/10 pt-5">
                    {p.items.map((m) => (
                      <li key={m} className="flex items-start gap-2.5 text-[13px] text-white/85">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--amber)" }} />
                        <span className="min-w-0 break-words">{m}</span>
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
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">The Proven Pathway</span>
                <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">A Proven Pipeline.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.06] px-3 py-1.5 text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--amber)", boxShadow: "0 0 12px rgba(16,185,129,0.8)" }} />
                Live Metrics
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md">
              {stats.map((s, i) => (
                <div
                  key={s.v + i}
                  className="group relative min-w-0 bg-deep p-5 sm:p-6 transition hover:bg-white/[0.04]"
                  onMouseEnter={(e) => hoverGlow(e, true)}
                  onMouseLeave={(e) => hoverGlow(e, false)}
                >
                  <div className="text-[10px] font-bold tracking-[0.28em] text-cyan-precision">{String(i + 1).padStart(2, "0")}</div>
                  <div
                    className="mt-3 text-4xl sm:text-5xl font-black tracking-tight break-words"
                    style={{ color: "var(--amber)", textShadow: "0 0 28px rgba(16,185,129,0.35)" }}
                  >
                    {s.v}
                  </div>
                  <div className="mt-3 text-[10px] sm:text-[11px] font-bold leading-snug text-white/75 uppercase tracking-wide break-words">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
              Now, under <span className="font-bold text-white">Gnosis Performance Football Academy</span>, the programme is entering an exciting new chapter, building on this proven foundation and ready to take player development and education to the next level.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION C: TESTIMONIAL HUD PREVIEW ============ */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="text-center">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">From The Pathway</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">What Sets Us Apart</h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <article
              className="group relative mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 transition hover:border-amber/40"
              onMouseEnter={(e) => hoverGlow(e, true)}
              onMouseLeave={(e) => hoverGlow(e, false)}
            >
              <div className="flex items-center justify-between gap-4">
                <Quote className="h-8 w-8 shrink-0" style={{ color: "var(--amber)" }} />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--amber)", filter: "drop-shadow(0 0 6px rgba(16,185,129,0.6))" }} />
                  ))}
                </div>
              </div>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white">
                "When I began working with Denis, my goal was to become a professional footballer... Completing the TY programme was one of the best decisions I made."
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="min-w-0">
                  <div className="text-sm font-black text-white truncate">Killian Phillips</div>
                  <div className="text-[10px] font-bold tracking-[0.28em] text-cyan-precision uppercase truncate">St Mirren FC · Rep of Ireland Senior International</div>
                </div>
                <Link
                  to="/testimonials"
                  className="group/cta inline-flex shrink-0 items-center gap-2 rounded-md border border-amber/40 bg-amber/10 px-4 py-2.5 text-[10px] font-black tracking-[0.24em] uppercase transition hover:bg-amber/20"
                  style={{ color: "var(--amber)" }}
                >
                  All Testimonials <ChevronRight className="h-3.5 w-3.5 transition group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION D: HERO MEDIA & BRANDING ============ */}
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl min-w-0">
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Inside The Lab</span>
                <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Where The Work Happens.</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">From the biomechanical treadmill in the performance lab to the full kit pack on day one — every detail engineered for elite preparation.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-6">
            {/* Treadmill — large */}
            <Reveal className="sm:col-span-4 min-w-0">
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black transition aspect-[16/10] max-h-[450px]"
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
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-black/50 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full animate-pulse-ring" style={{ background: "var(--amber)" }} />
                  BIOMECHANICAL LAB · LIVE
                </div>
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>Module 04 · Performance Diagnostics</div>
                  <div className="mt-1 text-lg sm:text-2xl font-black text-white">Biomechanical Treadmill Analysis</div>
                </div>
              </div>
            </Reveal>

            {/* Kit */}
            <Reveal delay={120} className="sm:col-span-2 min-w-0">
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-[4/5] max-h-[450px] transition"
                onMouseEnter={(e) => hoverGlow(e, true)}
                onMouseLeave={(e) => hoverGlow(e, false)}
              >
                <img
                  src={kitImg}
                  alt="Gnosis Performance Football Academy custom green/black match jersey kit"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>Issue Kit</div>
                  <div className="mt-0.5 text-base font-black text-white">Green / Black Match Jersey</div>
                </div>
              </div>
            </Reveal>

            {/* Digital brain placeholder */}
            <Reveal delay={200} className="sm:col-span-3 min-w-0">
              <Placeholder
                label="Digital Brain Graphic Loop"
                tag="Cognition · Neuroflow"
                ratio="aspect-[16/9]"
              />
            </Reveal>

            {/* Stat card */}
            <Reveal delay={280} className="sm:col-span-3 min-w-0">
              <div
                className="group relative flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition hover:border-amber/40"
                onMouseEnter={(e) => hoverGlow(e, true)}
                onMouseLeave={(e) => hoverGlow(e, false)}
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-black tracking-[0.28em] text-cyan-precision uppercase">// Squad Ratio</span>
                  <div className="mt-2 text-5xl sm:text-6xl font-black text-white break-words" style={{ textShadow: "0 0 28px rgba(16,185,129,0.25)" }}>1:6</div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Coach to player ratio for maximum individual attention.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
