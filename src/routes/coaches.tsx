import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Placeholder } from "@/components/gnosis/Placeholder";

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
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]"
              style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>
              Coaching Staff
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-[-0.01em] text-white">
              Learn From The <span className="gradient-amber bg-clip-text text-transparent">Best</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Our coaching team brings together UEFA Pro and UEFA A licensed coaches with decades of professional playing and coaching experience at the highest levels of the game.
            </p>
          </Reveal>
        </div>
      </section>

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

      {/* Media block */}
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// On The Training Ground</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">On The Training Ground</h2>
              <p className="mt-4 text-muted-foreground">The same elite-level coaching your son will receive.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-6">
            <Reveal className="sm:col-span-4 min-w-0">
              <Placeholder label="Pitch Drill · Live Session" tag="Scene 01" ratio="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={120} className="sm:col-span-2 min-w-0">
              <Placeholder label="Tactics Whiteboard" tag="Scene 02" ratio="aspect-[4/5]" />
            </Reveal>
            <Reveal delay={180} className="sm:col-span-6 min-w-0">
              <Placeholder label="Match-Day Huddle" tag="Scene 03" ratio="aspect-[21/9]" />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
