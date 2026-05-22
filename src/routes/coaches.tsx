import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/coaches")({
  component: CoachesPage,
  head: () => ({
    meta: [
      { title: "Coaches | Gnosis Performance Football Academy" },
      { name: "description", content: "Meet the UEFA Pro-licensed coaches and performance specialists leading the Gnosis Transition Year Academy." },
    ],
  }),
});

const coaches = [
  {
    name: "Daniel O'Connor",
    role: "Head of Football",
    badge: "UEFA PRO LICENSE",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80",
    bio: [
      "Twenty years coaching across League of Ireland senior football and elite academy environments, with extensive scouting work into the UK Championship system.",
      "Daniel leads our football philosophy, methodology and matchday programme. His position-specific work with central midfielders and attacking units has shaped multiple full-time pros.",
    ],
  },
  {
    name: "Aoife Murphy",
    role: "Head of Performance",
    badge: "PRO PERFORMANCE ANALYST",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: [
      "MSc Sport & Exercise Science. Former S&C lead at an international youth federation, specialising in long-term athletic development for 15-19 year olds.",
      "Aoife designs the periodised S&C blocks, monitors Catapult GPS data, and integrates load management directly into the weekly football cycle.",
    ],
  },
  {
    name: "James Walsh",
    role: "Lead Technical Coach",
    badge: "UEFA A LICENCE",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    bio: [
      "Former full-time academy coach with a decade inside professional youth development pipelines across Ireland and the UK.",
      "James runs the daily technical block — ball mastery, pattern play and small-sided games designed to develop confident, composed footballers in tight spaces.",
    ],
  },
  {
    name: "Dr. Niamh Kelly",
    role: "Sports Psychologist",
    badge: "PSI ACCREDITED",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    bio: [
      "PhD in Sport Psychology with consulting experience across professional rugby, golf and football. Specialises in resilience and decision-making under pressure.",
      "Niamh delivers weekly 1:1 sessions, plus group workshops on mental skills, leadership, and managing the demands of full-time football at 15-17.",
    ],
  },
];

function CoachesPage() {
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Performance Staff</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Our Coaches</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">A unified staff of UEFA-licensed coaches, performance scientists and sport psychologists.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 120}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-deep transition-all duration-500 group-hover:-translate-y-2 group-hover:border-amber/40">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-[1200ms] ease-out scale-[1.03] group-hover:scale-110 filter saturate-[0.65] group-hover:saturate-125"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(60% 60% at 50% 100%, rgba(16,185,129,0.18), transparent 70%)" }} />

                  {/* Sliding credential badge */}
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-black/60 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <ShieldCheck className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} />
                      {c.badge}
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-bold tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>{c.role}</div>
                      <div className="mt-1 text-2xl sm:text-3xl font-black text-white">{c.name}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition hover:border-white/20">
                  {c.bio.map((p, idx) => (
                    <p key={idx} className={`text-sm leading-relaxed text-muted-foreground ${idx > 0 ? "mt-3" : ""}`}>{p}</p>
                  ))}
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