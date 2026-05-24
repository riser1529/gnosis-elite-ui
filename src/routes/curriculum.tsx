import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Activity, Brain, Dumbbell, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/curriculum")({
  component: CurriculumPage,
  head: () => ({
    meta: [
      { title: "Curriculum | Gnosis Performance Football Academy" },
      { name: "description", content: "Technical, physical, psychological and academic curriculum tracks for the Transition Year programme." },
    ],
  }),
});

const blocks = [
  {
    icon: Activity,
    tag: "Track 01",
    title: "Technical & Tactical Excellence",
    body: "Position-specific training for CM, CAM, fullbacks and forwards. Daily ball mastery, decision-making under pressure, and match video analysis with our performance analysts.",
    bullets: ["Position-specific units (CM / CAM / FB / FW)", "Match video review with performance analysts", "Small-sided games & tactical patterns", "Set-piece architecture & in-possession principles"],
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Dumbbell,
    tag: "Track 02",
    title: "Physical & Athletic Development",
    body: "Periodised strength & conditioning, speed mechanics, robust injury prevention protocols and GPS-tracked load management — built around the demands of the elite game.",
    bullets: ["Periodised S&C programming", "Speed mechanics & change-of-direction", "Catapult GPS load monitoring", "Recovery, mobility & injury reduction"],
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Brain,
    tag: "Track 03",
    title: "Psychological & Personal Growth",
    body: "Mental resilience, sports psychology, leadership and media training. We build the human first — confident, professional players who carry themselves like seniors.",
    bullets: ["1:1 sports psychology sessions", "Pressure & resilience workshops", "Leadership & captaincy modules", "Media training & personal brand"],
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: GraduationCap,
    tag: "Track 04",
    title: "Academic Compliance & Progression",
    body: "Independent study aligned with each player's Transition Year curriculum, plus structured FAI / UEFA foundation coaching tracks for those pursuing the coaching pathway.",
    bullets: ["Aligned independent study blocks", "FAI Kickstart 1 / 2 foundation tracks", "UEFA C entry-level pathway support", "Parent + school progress reviews"],
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  },
];

function CurriculumPage() {
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>The Framework</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Curriculum</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">Four integrated tracks delivered every week across the 9-month programme.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32 space-y-24 sm:space-y-32">
        {blocks.map((b, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={b.title}>
              <div className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${flipped ? "lg:[direction:rtl]" : ""}`}>
                <div className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-deep ${flipped ? "lg:[direction:ltr]" : ""}`}>
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-[1200ms] ease-out scale-105 group-hover:scale-110 filter saturate-[0.7] group-hover:saturate-125"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(60% 50% at 50% 50%, rgba(16,185,129,0.18), transparent 70%)" }} />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold tracking-[0.28em] text-white backdrop-blur">
                    <b.icon className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} /> {b.tag.toUpperCase()}
                  </div>
                </div>

                <div className={flipped ? "lg:[direction:ltr]" : ""}>
                  <span className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision uppercase">{b.tag}</span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">{b.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{b.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {b.bullets.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--amber)", boxShadow: "0 0 12px rgba(16,185,129,0.7)" }} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}