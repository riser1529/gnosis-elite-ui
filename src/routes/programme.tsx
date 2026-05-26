import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Calendar, CalendarDays, Flag, Sparkles, Check } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Placeholder } from "@/components/gnosis/Placeholder";
import { useApply } from "@/components/gnosis/ApplyContext";
import { PageHero } from "@/components/gnosis/PageHero";

export const Route = createFileRoute("/programme")({
  component: ProgrammePage,
  head: () => ({
    meta: [
      { title: "Programme | Gnosis Performance Football Academy" },
      { name: "description", content: "A full-time Transition Year football and performance pathway. Train, recover and study like a professional, nine months a year, five days a week." },
      { property: "og:title", content: "The Programme — Gnosis Performance" },
      { property: "og:description", content: "Full-time TY football and performance. September 2026 intake." },
    ],
  }),
});

const why = [
  {
    title: "UEFA-Licensed Head Coaches",
    body: "Andy Reid (UEFA PRO) and Denis Hyland (UEFA PRO) bring professional playing and coaching experience to this elite program.",
  },
  {
    title: "Full-Time Programme",
    body: "Players train 5 days a week in a full-time professional environment.",
  },
  {
    title: "Academic Integration",
    body: "We're an independent school working alongside Tulsa to ensure players fulfill their TY requirements while training at the highest level.",
  },
  {
    title: "Small Group Sizes",
    body: "We keep squad numbers deliberately small to ensure every player receives individual attention and detailed coaching feedback.",
  },
];

const metricBlocks = [
  { k: "5 / Week", v: "Training Days", icon: CalendarDays },
  { k: "9 Months", v: "Programme Length", icon: Calendar },
  { k: "Sept 3, 2026", v: "Start Date", icon: Sparkles },
  { k: "OPEN FEB 26", v: "Applications Status", icon: Flag },
];

function ProgrammePage() {
  const { open } = useApply();
  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="September 2026 Intake"
        title={<>The <span className="gradient-amber bg-clip-text text-transparent">Programme</span></>}
        description="A full-time Transition Year football and performance pathway. Train, recover and study like a professional, nine months a year, five days a week."
      />
      <div className="bg-deep">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 -mt-8 sm:-mt-10 flex justify-center pb-12">
          <button onClick={open} className="group inline-flex items-center gap-2 rounded-md gradient-amber px-7 py-4 text-sm font-black tracking-[0.2em] text-primary-foreground shadow-amber transition hover:scale-[1.03]">
            APPLY NOW <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* ===== SECTION B: OUR MISSION (split) ===== */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
            <Reveal className="min-w-0">
              <div>
                <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Our Mission</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">People-First Performance.</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  At Gnosis Performance Football Academy, our mission is people-first. We create a safe, inclusive, and high-performance environment where every player — regardless of background — is empowered to grow as an athlete, a student, and a human being. We believe that elite football and academic excellence are not mutually exclusive. Our programme has been designed from the ground up to develop the complete footballer: technically excellent, physically elite, tactically intelligent, and mentally resilient. With over 20 years of experience producing players who have gone on to represent Ireland at underage and senior international level, to sign professional contracts in the League of Ireland and overseas, and to earn full scholarships to US colleges, our track record speaks for itself.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="min-w-0">
              <Placeholder label="Premium Training Session" tag="Mission · On-Pitch" ratio="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION C: WHY CHOOSE US ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Why Choose Us</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Why Choose Us?</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Left: features */}
            <div className="grid gap-3 min-w-0">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 90}>
                  <div className="group rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 transition hover:border-amber/40">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border" style={{ borderColor: "rgba(16,185,129,0.5)" }}>
                        <Check className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-black text-white tracking-wide">{w.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right: 4 HUD metric blocks */}
            <div className="grid grid-cols-2 gap-3 min-w-0 self-start">
              {metricBlocks.map((b, i) => {
                const green = i % 2 === 0;
                return (
                <Reveal key={b.v} delay={i * 90}>
                  <div
                    className="group relative h-full rounded-xl border p-4 sm:p-5 transition hover:scale-[1.02]"
                    style={{
                      borderColor: green ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.10)",
                      background: green
                        ? "linear-gradient(160deg, rgba(16,185,129,0.95), rgba(52,211,153,0.82))"
                        : "rgba(0,0,0,0.55)",
                      boxShadow: green ? "0 0 24px rgba(16,185,129,0.22)" : "none",
                    }}
                  >
                    <b.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: green ? "#04120a" : "var(--amber)" }} />
                    <div
                      className="mt-3 text-base sm:text-xl font-black tracking-tight break-words"
                      style={{ color: green ? "#04120a" : "#fff", textShadow: green ? "none" : "0 0 18px rgba(16,185,129,0.25)" }}
                    >
                      {b.k}
                    </div>
                    <div
                      className="mt-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.24em] uppercase break-words"
                      style={{ color: green ? "rgba(4,18,10,0.75)" : "var(--cyan-precision)" }}
                    >
                      {b.v}
                    </div>
                  </div>
                </Reveal>
                );
              })}
            </div>
          </div>

          {/* Asset frame */}
          <Reveal delay={120}>
            <div className="mt-12">
              <Placeholder label="Academy Drills · Full-Pitch Session" tag="Asset Frame · Pitch Ops" ratio="aspect-[21/9]" />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
