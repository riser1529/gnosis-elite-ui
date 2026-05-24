import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials | Gnosis Performance Football Academy" },
      { name: "description", content: "What players and parents say about the Gnosis Performance Transition Year programme." },
      { property: "og:title", content: "Testimonials | Gnosis Performance Football Academy" },
      { property: "og:description", content: "Real stories from professional players and parents who experienced the programme." },
    ],
  }),
});

const players = [
  {
    name: "Killian Phillips",
    role: "REP OF IRELAND SENIOR INTERNATIONAL · ST MIRREN FC",
    quote:
      "When I began working with Denis, my goal was to become a professional footballer. He helped me develop my weaknesses, improve my overall game, and gave me the belief and guidance needed to pursue that ambition. Completing the TY programme was one of the best decisions I made, and I'm very grateful for the support and standards he provided throughout my journey.",
  },
  {
    name: "Aidomo Emakhu",
    role: "PROFESSIONAL FOOTBALLER · MILLWALL FC",
    quote:
      "The TY programme played a huge role in improving my physical performance and preparing me for the demands of the next level. Denis' guidance and high standards pushed me to improve every day, teaching me the consistency and discipline required to perform and giving me a strong foundation to progress in my football career.",
  },
];

const parents = [
  {
    name: "Lorraine Cailloce",
    role: "PARENT · LUCA & KILLIAN CAILLOCE — UCD AFC",
    quote:
      "From day one, the TY programme with Denis provided a professional and supportive environment. We saw real improvements in our children's football ability, maturity, and discipline. Both of my boys represented their country and now successfully combine football and education with UCD. The programme genuinely prepares players for both their sporting and academic futures.",
  },
  {
    name: "Fran Sheridan",
    role: "PARENT · RYAN SHERIDAN — ST PATRICK'S ATHLETIC FC & ROI U17",
    quote:
      "Denis's TY programme was one of the best decisions we made for our son. From the very beginning, he stepped into a professional and supportive environment built on high standards. We saw tremendous progress in his football ability, along with real growth in his self-belief, discipline, and game awareness. The programme has been instrumental in preparing him for the next steps in both his football and educational journey.",
  },
];

const tabs = [
  { id: "players", label: "FROM THE PLAYERS", data: players },
  { id: "parents", label: "FROM THE PARENTS", data: parents },
] as const;

function TestimonialsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("players");
  const active = tabs.find((t) => t.id === tab)!;
  const idx = tabs.findIndex((t) => t.id === tab);

  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
          <Reveal>
            <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>
              Voices From The Pathway
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">What Our Players<br />& Parents Say</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">
              Real outcomes. Professional debuts, international caps, and university pathways — in their own words.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-10 py-16 sm:py-20">
        <Reveal>
          <div className="relative grid grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-1.5">
            <span
              aria-hidden
              className="absolute top-1.5 bottom-1.5 left-1.5 rounded-xl gradient-amber shadow-amber transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{
                width: "calc(50% - 0.375rem)",
                transform: `translateX(${idx * 100}%)`,
              }}
            />
            {tabs.map((t) => {
              const isActive = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative z-10 rounded-xl px-4 py-4 text-[11px] sm:text-xs font-black tracking-[0.24em] uppercase transition ${
                    isActive ? "text-primary-foreground" : "text-white/70 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={active.id} className="mt-10 grid gap-6 md:grid-cols-2">
          {active.data.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <article className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 sm:p-8 transition hover:border-amber/40" style={{ transition: "border-color .4s, box-shadow .4s, transform .4s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(16,185,129,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
                <Quote className="h-7 w-7" style={{ color: "var(--amber)" }} />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" style={{ color: "var(--amber)" }} />
                  ))}
                </div>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/85">"{item.quote}"</p>
                <div className="mt-7 pt-5 border-t border-white/10">
                  <div className="text-base font-black text-white">{item.name}</div>
                  <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-cyan-precision uppercase">{item.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
