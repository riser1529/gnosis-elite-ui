import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Quote, Star } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { PageHero } from "@/components/gnosis/PageHero";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials | Gnosis Performance Football Academy" },
      { name: "description", content: "Hear directly from the players who've been through the programme and the parents who've seen the transformation first-hand." },
      { property: "og:title", content: "Testimonials — Gnosis Performance" },
      { property: "og:description", content: "What our players and parents say about the Gnosis pathway." },
    ],
  }),
});

type Card = { quote: string; name: string; tag: string };

const players: Card[] = [
  {
    quote:
      "When I began working with Denis, my goal was to become a professional footballer. He helped me develop my weaknesses, improve my overall game, and gave me the belief and guidance needed to pursue that ambition. Completing the TY programme was one of the best decisions I made, and I'm very grateful for the support and standards he provided throughout my journey.",
    name: "Killian Phillips",
    tag: "Rep of Ireland Senior International Player · St Mirren FC",
  },
  {
    quote:
      "The TY programme played a huge role in improving my physical performance and preparing me for the demands of the next level. Denis' guidance and high standards pushed me to improve every day, teaching me the consistency and discipline required to perform and giving me a strong foundation to progress in my football career.",
    name: "Aidomo Emakhu",
    tag: "Professional Footballer · Millwall FC",
  },
];

const parents: Card[] = [
  {
    quote:
      "From day one, the TY programme with Denis provided a professional and supportive environment. We saw real improvements in our children's football ability, maturity, and discipline. Both of my boys represented their country and now successfully combine football and education with UCD. The programme genuinely prepares players for both their sporting and academic futures.",
    name: "Lorraine Cailloce",
    tag: "Parent · Luca & Killian Cailloce — UCD AFC",
  },
  {
    quote:
      "Denis's TY programme was one of the best decisions we made for our son. From the very beginning, he stepped into a professional and supportive environment built on high standards. We saw tremendous progress in his football ability, along with real growth in his self-belief, discipline, and game awareness. The programme has been instrumental in preparing him for the next steps in both his football and educational journey.",
    name: "Fran Sheridan",
    tag: "Parent · Ryan Sheridan — St Patrick's Athletic FC & Rep of Ireland U17 International",
  },
];

const metrics = [
  { v: "100%", label: "Would Recommend" },
  { v: "20+", label: "Years Track Record" },
  { v: "136", label: "Internationals Produced" },
  { v: "25", label: "USA Scholarships" },
];

function TestimonialsPage() {
  const [tab, setTab] = useState<"players" | "parents">("players");
  const cards = tab === "players" ? players : parents;

  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="Testimonials"
        title={<>What Our Players & <span className="gradient-amber bg-clip-text text-transparent">Parents Say</span></>}
        description="Hear directly from the players who've been through the programme and the parents who've seen the transformation first-hand."
      />

      {/* TABS + CARDS */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-20">
          <Reveal>
            <div className="flex justify-center">
              <div className="relative inline-flex w-full max-w-md items-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md p-1">
              {(["players", "parents"] as const).map((t) => {
                const active = tab === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`relative flex-1 rounded-full px-4 py-2.5 text-[10px] sm:text-[11px] font-black tracking-[0.24em] uppercase transition ${active ? "text-primary-foreground" : "text-white/70 hover:text-white"}`}
                    style={active ? { background: "var(--gradient-amber)", boxShadow: "0 0 20px rgba(16,185,129,0.4)" } : undefined}
                  >
                    From The {t === "players" ? "Players" : "Parents"}
                  </button>
                );
              })}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <article className="group relative h-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 transition hover:border-amber/40">
                  <div className="flex items-center justify-between gap-4">
                    <Quote className="h-8 w-8 shrink-0" style={{ color: "var(--amber)" }} />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" style={{ color: "var(--amber)", filter: "drop-shadow(0 0 6px rgba(16,185,129,0.6))" }} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/90">"{c.quote}"</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="text-sm font-black text-white break-words">{c.name}</div>
                    <div className="text-[10px] font-bold tracking-[0.24em] text-cyan-precision uppercase mt-1 break-words">{c.tag}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRIC VERIFICATION BOARD */}
      <section className="relative border-t border-white/10 bg-black/40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-14 sm:py-16">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10">
              {metrics.map((m, i) => {
                const green = i % 2 === 0;
                return (
                  <div
                    key={m.v + i}
                    className="min-w-0 p-5 sm:p-6"
                    style={{
                      background: green
                        ? "linear-gradient(160deg, rgba(16,185,129,0.95), rgba(52,211,153,0.82))"
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
                      className="mt-2 text-4xl sm:text-5xl font-black tracking-tight break-words"
                      style={{
                        color: green ? "#04120a" : "var(--amber)",
                        textShadow: green ? "none" : "0 0 24px rgba(16,185,129,0.35)",
                      }}
                    >
                      {m.v}
                    </div>
                    <div
                      className="mt-2 text-[10px] sm:text-[11px] font-bold leading-snug uppercase tracking-wide break-words"
                      style={{ color: green ? "rgba(4,18,10,0.85)" : "rgba(255,255,255,0.75)" }}
                    >
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
