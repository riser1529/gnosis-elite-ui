import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Placeholder } from "@/components/gnosis/Placeholder";
import { PageHero } from "@/components/gnosis/PageHero";

const trainingShots = [
  {
    src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
    tag: "Scene 01",
    title: "Pitch Drill · Live Session",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    tag: "Scene 02",
    title: "Tactics Whiteboard",
  },
  {
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80",
    tag: "Scene 03",
    title: "Match-Day Huddle",
  },
];

export const Route = createFileRoute("/coaches")({
  component: CoachesPage,
  head: () => ({
    meta: [
      { title: "Coaches | Gnosis Performance Football Academy" },
      { name: "description", content: "UEFA Pro and UEFA A licensed coaches with decades of professional experience at the highest levels of the game." },
      { property: "og:title", content: "Coaches — Gnosis Performance" },
      { property: "og:description", content: "Learn from former Premier League players and international coaches." },
    ],
  }),
});

const coaches = [
  {
    name: "Andy Reid",
    role: "Head Coach & Academy Director",
    bio: "Andy Reid is a former Republic of Ireland international midfielder and current academy coach at Premier League club Nottingham Forest. He enjoyed a successful professional career playing over 400 senior games, including spells with Nottingham Forest, Tottenham Hotspur, Charlton Athletic, Sunderland, and Blackpool. Andy earned 29 caps for Ireland, representing his country at senior international level for more than a decade. Since retiring, he has moved into elite coaching, helping develop the next generation of professional players.",
    badges: ["UEFA Pro Licence", "Former Premier League Player", "Republic of Ireland International", "29 Senior International Caps"],
    placeholderLabel: "Andy Reid · Profile Photo",
    placeholderTag: "Coach 01 · Director",
  },
  {
    name: "Denis Hyland",
    role: "Head of Football",
    bio: "Denis Hyland is a UEFA Pro Licensed coach with over 20 years' experience developing elite youth and international players. As founder of the TY programme, he has guided numerous players to professional contracts and senior international football. For the past 15 years, he has also served as a national team coach with Ireland's U16, U18, and U21 squads.",
    badges: ["UEFA Pro Licence", "TY Programme Founder", "National Team Coach", "20+ Years Experience"],
    placeholderLabel: "Denis Hyland · Training Photo",
    placeholderTag: "Coach 02 · Head of Football",
  },
];

function CoachesPage() {
  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="Coaching Staff"
        title={<>Learn From The <span className="gradient-amber bg-clip-text text-transparent">Best</span></>}
        description="Our coaching team brings together UEFA Pro and UEFA A licensed coaches with decades of professional playing and coaching experience at the highest levels of the game."
      />

      {/* Coach profile sheets */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-24 space-y-16 sm:space-y-24">
          {coaches.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={c.name}>
                <article className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                    <Placeholder label={c.placeholderLabel} tag={c.placeholderTag} ratio="aspect-[3/4]" />
                  </div>
                  <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                    <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Coach 0{i + 1}</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white break-words">{c.name}</h2>
                    <p className="mt-2 text-sm font-bold tracking-[0.18em] uppercase" style={{ color: "var(--amber)" }}>{c.role}</p>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{c.bio}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[10px] font-black tracking-[0.22em] uppercase"
                          style={{ borderColor: "rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.06)", color: "var(--amber)" }}
                        >
                          <ShieldCheck className="h-3 w-3" />
                          <span className="break-words">{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* On The Training Ground — real photography with hover zoom */}
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-14 sm:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// On The Training Ground</span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">On The Training Ground</h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">The same elite-level coaching your son will receive.</p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
            {trainingShots.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="min-w-0">
                <div
                  className="group relative aspect-[4/3] max-h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black transition"
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 26px rgba(16,185,129,0.30)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out scale-105 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition group-hover:border-amber/50 rounded-2xl" />
                  <div className="absolute left-3 right-3 bottom-3">
                    <div className="text-[9px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>
                      {s.tag}
                    </div>
                    <div className="mt-1 text-sm sm:text-base font-black text-white leading-tight break-words">
                      {s.title}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
