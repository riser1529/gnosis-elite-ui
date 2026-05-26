import { Link } from "@tanstack/react-router";
import {
  Activity,
  Brain,
  Dumbbell,
  GraduationCap,
  Check,
  ChevronRight,
  Quote,
  Star,
  ShieldCheck,
  Award,
  Trophy,
  Sparkles,
  Compass,
} from "lucide-react";
import kitImg from "@/assets/kit.jpg";
import treadmillVideo from "@/assets/treadmill.mp4";
import { Reveal } from "./Reveal";

/** ---- 4 tracks (synced with /curriculum) ---- */
const tracks = [
  {
    num: "01",
    icon: Activity,
    tag: "Technical Track",
    title: "Technical & Tactical Excellence",
    body:
      "Position-specific units, daily ball mastery, video review and tactical patterns built for elite decision making.",
    items: ["Position-specific units", "Video analysis", "Set piece architecture"],
  },
  {
    num: "02",
    icon: Dumbbell,
    tag: "Physical Track",
    title: "Physical & Athletic Development",
    body:
      "Periodised strength, speed mechanics and GPS-tracked load management around the demands of the elite game.",
    items: ["S&C programming", "Speed mechanics", "GPS load monitoring"],
  },
  {
    num: "03",
    icon: Brain,
    tag: "Psychological Track",
    title: "Psychological & Personal Growth",
    body:
      "Sports psychology, leadership, resilience and media training — building the professional human behind the player.",
    items: ["1:1 psychology", "Leadership modules", "Media training"],
  },
  {
    num: "04",
    icon: GraduationCap,
    tag: "Academic Track",
    title: "Academic Compliance & Progression",
    body:
      "Independent study aligned with each player's TY curriculum plus FAI / UEFA foundation coaching pathways.",
    items: ["TY-aligned study", "FAI Kickstart", "UEFA C pathway"],
  },
];

/** ---- Stats (Proven Pipeline) ---- */
const stats = [
  { v: "136", label: "Underage International Players" },
  { v: "67", label: "International Debuts" },
  { v: "4", label: "Senior Internationals" },
  { v: "78", label: "LOI First Team Progressions" },
  { v: "21", label: "Professional Contracts Overseas" },
  { v: "25", label: "USA College Scholarships" },
];

/** ---- What Sets Us Apart (5 differentiators) ---- */
const differentiators = [
  {
    icon: Trophy,
    tag: "01",
    title: "Proven Foundation",
    body:
      "Our Head of Football has 20+ years producing elite players for domestic and international football.",
  },
  {
    icon: ShieldCheck,
    tag: "02",
    title: "Elite Coaching",
    body: "All sessions are led by UEFA Pro and A License coaches.",
  },
  {
    icon: Compass,
    tag: "03",
    title: "Pro Environment",
    body:
      "Train at TU Blanchardstown & Corduff Sports Centre in professional facilities.",
  },
  {
    icon: Award,
    tag: "04",
    title: "Top-Level Exposure",
    body:
      "Premier League & international club visits, trials and scouting opportunities.",
  },
  {
    icon: Sparkles,
    tag: "05",
    title: "Complete Development",
    body:
      "Balancing football excellence with academic achievement and personal growth.",
  },
];

/** ---- Lab images (use real photography URLs) ---- */
const labStadium =
  "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1400&q=80";
const labGym =
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80";
const labPitch =
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=80";
const labTactics =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80";

function hoverGlow(e: React.MouseEvent<HTMLElement>, on: boolean) {
  e.currentTarget.style.boxShadow = on ? "0 0 24px rgba(16,185,129,0.28)" : "none";
}

export function HomeSections() {
  return (
    <>
      {/* ============ A — 4 TRACK SYSTEM (synced to /curriculum) ============ */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">The Operating System</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">A Complete Development System</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Four integrated tracks. One pathway. Engineered to produce technically elite, physically robust, intellectually rounded footballers.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((t, i) => (
              <Reveal key={t.num} delay={i * 100}>
                <article
                  className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 transition hover:border-amber/40"
                  onMouseEnter={(e) => hoverGlow(e, true)}
                  onMouseLeave={(e) => hoverGlow(e, false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg gradient-amber shadow-amber text-primary-foreground font-black text-sm">
                      {t.num}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <t.icon className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--amber)" }} />
                        <span className="text-[9px] font-black tracking-[0.28em] text-cyan-precision uppercase truncate">{t.tag}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-black text-white leading-tight break-words">{t.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{t.body}</p>

                  <ul className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                    {t.items.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-[12px] text-white/85">
                        <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: "var(--amber)" }} />
                        <span className="min-w-0 break-words">{m}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/curriculum"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-md border border-amber/40 bg-amber/10 px-4 py-2.5 text-[10px] font-black tracking-[0.22em] uppercase transition hover:bg-amber/20"
                    style={{ color: "var(--amber)" }}
                  >
                    LEARN MORE
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ B — PROVEN PIPELINE (alternating green/black matrix) ============ */}
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
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden border border-white/10">
              {stats.map((s, i) => {
                const green = i % 2 === 0;
                return (
                  <div
                    key={s.v + i}
                    className="group relative min-w-0 p-5 sm:p-6 transition"
                    style={{
                      background: green
                        ? "linear-gradient(160deg, rgba(16,185,129,0.92), rgba(52,211,153,0.78))"
                        : "#000000",
                    }}
                  >
                    <div
                      className="text-[10px] font-bold tracking-[0.28em]"
                      style={{ color: green ? "rgba(4,18,10,0.7)" : "var(--cyan-precision)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="mt-3 text-4xl sm:text-5xl font-black tracking-tight break-words"
                      style={{
                        color: green ? "#04120a" : "var(--amber)",
                        textShadow: green ? "none" : "0 0 28px rgba(16,185,129,0.35)",
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      className="mt-3 text-[10px] sm:text-[11px] font-bold leading-snug uppercase tracking-wide break-words"
                      style={{ color: green ? "rgba(4,18,10,0.85)" : "rgba(255,255,255,0.75)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
              Now, under <span className="font-bold text-white">Gnosis Performance Football Academy</span>, the programme is entering an exciting new chapter, building on this proven foundation and ready to take player development and education to the next level.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ C — WHAT SETS US APART (5 differentiators) ============ */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="text-center">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Our Difference</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">What Sets Us Apart</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Five non-negotiables that define every day inside the academy.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => {
              const green = i % 2 === 0;
              return (
                <Reveal key={d.title} delay={i * 90}>
                  <article
                    className="group relative h-full min-w-0 rounded-2xl border p-6 sm:p-7 transition hover:scale-[1.02]"
                    style={{
                      borderColor: green ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.10)",
                      background: green
                        ? "linear-gradient(160deg, rgba(16,185,129,0.95), rgba(52,211,153,0.82))"
                        : "rgba(0,0,0,0.55)",
                      backdropFilter: green ? undefined : "blur(12px)",
                      boxShadow: green ? "0 0 28px rgba(16,185,129,0.22)" : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="grid h-11 w-11 place-items-center rounded-lg border"
                        style={{
                          borderColor: green ? "rgba(4,18,10,0.25)" : "rgba(16,185,129,0.4)",
                          background: green ? "rgba(255,255,255,0.18)" : "rgba(16,185,129,0.10)",
                        }}
                      >
                        <d.icon className="h-5 w-5" style={{ color: green ? "#04120a" : "var(--amber)" }} />
                      </div>
                      <span
                        className="text-[10px] font-black tracking-[0.28em]"
                        style={{ color: green ? "rgba(4,18,10,0.7)" : "var(--cyan-precision)" }}
                      >
                        // {d.tag}
                      </span>
                    </div>
                    <h3
                      className="mt-5 text-lg sm:text-xl font-black uppercase tracking-tight break-words"
                      style={{ color: green ? "#04120a" : "#fff" }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed break-words"
                      style={{ color: green ? "rgba(4,18,10,0.85)" : "var(--muted-foreground)" }}
                    >
                      {d.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ D — TESTIMONIALS PREVIEW (dedicated section) ============ */}
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="text-center">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Testimonials</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">From The Pathway</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Players and parents who lived the programme.</p>
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
              <p className="mt-6 text-base sm:text-xl leading-relaxed text-white">
                "When I began working with Denis, my goal was to become a professional footballer... Completing the TY programme was one of the best decisions I made."
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-5">
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

      {/* ============ E — INSIDE THE LAB (real images, tight responsive grid) ============ */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl min-w-0">
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Inside The Lab</span>
                <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Where The Work Happens.</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                From biomechanical analysis to tactical whiteboards and match-day pitches — every environment engineered for elite preparation.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-6 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
            {/* Treadmill — large hero tile */}
            <LabTile
              span="col-span-2 lg:col-span-4 lg:row-span-2"
              tag="Module 04 · Performance Diagnostics"
              title="Biomechanical Treadmill Analysis"
              videoSrc={treadmillVideo}
              live
            />

            {/* Kit */}
            <LabTile
              span="col-span-1 lg:col-span-2 lg:row-span-1"
              tag="Issue Kit"
              title="Green / Black Match Jersey"
              imageSrc={kitImg}
            />

            {/* Stadium */}
            <LabTile
              span="col-span-1 lg:col-span-2 lg:row-span-1"
              tag="Match Day"
              title="Stadium Environment"
              imageSrc={labStadium}
            />

            {/* Gym */}
            <LabTile
              span="col-span-1 lg:col-span-2"
              tag="S&C Floor"
              title="Strength & Conditioning"
              imageSrc={labGym}
            />
            {/* Pitch */}
            <LabTile
              span="col-span-1 lg:col-span-2"
              tag="Pitch Ops"
              title="Outdoor 4G Training Pitch"
              imageSrc={labPitch}
            />
            {/* Tactics */}
            <LabTile
              span="col-span-2 lg:col-span-2"
              tag="Tactical Block"
              title="Whiteboard & Video Review"
              imageSrc={labTactics}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/** ---- Reusable lab grid tile (image OR video) ---- */
function LabTile({
  span,
  tag,
  title,
  imageSrc,
  videoSrc,
  live,
}: {
  span: string;
  tag: string;
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  live?: boolean;
}) {
  return (
    <Reveal className={`${span} min-w-0`}>
      <div
        className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black transition"
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 28px rgba(16,185,129,0.32)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
          />
        ) : (
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {live && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-black/50 px-2.5 py-1 text-[9px] font-black tracking-[0.28em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse-ring" style={{ background: "var(--amber)" }} />
            LIVE
          </div>
        )}

        <div className="absolute left-3 right-3 bottom-3">
          <div className="text-[9px] sm:text-[10px] font-black tracking-[0.26em] uppercase" style={{ color: "var(--amber)" }}>
            {tag}
          </div>
          <div className="mt-1 text-sm sm:text-base lg:text-lg font-black text-white leading-tight break-words">{title}</div>
        </div>
      </div>
    </Reveal>
  );
}