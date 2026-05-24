import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/coaches")({
  component: CoachesPage,
  head: () => ({
    meta: [
      { title: "Coaches | Gnosis Performance Football Academy" },
      { name: "description", content: "Meet the UEFA Pro-licensed coaching staff leading the Gnosis Transition Year Academy." },
      { property: "og:title", content: "Coaches | Gnosis Performance Football Academy" },
      { property: "og:description", content: "Elite UEFA-licensed coaches with first-team and international pedigree." },
    ],
  }),
});

const coaches = [
  {
    no: "01",
    name: "Daniel O'Connor",
    role: "Head Coach & Academy Director",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1200&q=80",
    bio: "Daniel brings over twenty years of elite coaching across League of Ireland senior football and elite academy environments, with extensive scouting work into the UK Championship system. He leads our football philosophy, methodology, and matchday programme. His position-specific work with central midfielders and attacking units has shaped multiple full-time pros.",
    badges: ["UEFA Pro Licence", "Former Premier League Player", "Republic of Ireland International", "29 Senior International Caps"],
  },
  {
    no: "02",
    name: "James Walsh",
    role: "Head of Football",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80",
    bio: "James is a UEFA Pro Licensed coach with over 20 years' experience developing elite youth and international players. As founder of the TY programme, he has guided numerous players to professional contracts and senior international football. For the past 15 years, he has also served as a national team coach with Ireland's U16, U18, and U21 squads.",
    badges: ["UEFA Pro Licence", "TY Programme Founder", "National Team Coach", "20+ Years Experience"],
  },
];

function CoachesPage() {
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Performance Staff</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Elite Coaching Console</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">UEFA Pro-licensed coaches with first-team, academy and senior international experience.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28 space-y-20 sm:space-y-28">
        {coaches.map((c, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={c.name}>
              <article
                className={`group grid items-stretch gap-8 lg:gap-12 lg:grid-cols-[5fr_7fr] ${flipped ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Portrait */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition ${flipped ? "lg:[direction:ltr]" : ""}`}
                  style={{ maxHeight: "560px", transition: "all .4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(16,185,129,0.22)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-[1400ms] ease-out scale-[1.03] group-hover:scale-110 filter saturate-[0.65] group-hover:saturate-125"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md">
                    COACH {c.no}
                  </div>
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>{c.role}</div>
                    <div className="mt-1 text-3xl sm:text-4xl font-black text-white leading-tight">{c.name}</div>
                  </div>
                </div>

                {/* Info console */}
                <div className={`flex flex-col gap-6 ${flipped ? "lg:[direction:ltr]" : ""}`}>
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 sm:p-8 transition hover:border-amber/40"
                    style={{ transition: "all .35s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(16,185,129,0.22)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Biography</span>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85">{c.bio}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Verification Vectors</span>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {c.badges.map((b) => (
                        <div
                          key={b}
                          className="flex items-center gap-3 rounded-xl border bg-black/30 px-4 py-3 transition"
                          style={{ borderColor: "rgba(16,185,129,0.30)", transition: "all .3s" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 18px rgba(16,185,129,0.30)";
                            e.currentTarget.style.borderColor = "rgba(16,185,129,0.6)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.borderColor = "rgba(16,185,129,0.30)";
                          }}
                        >
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border" style={{ borderColor: "rgba(16,185,129,0.5)" }}>
                            <ShieldCheck className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} />
                          </span>
                          <span className="text-sm font-bold text-white">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
