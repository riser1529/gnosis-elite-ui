import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ | Gnosis Performance Football Academy" },
      { name: "description", content: "Answers to common questions about the academy, academic integration, and the selection process." },
    ],
  }),
});

const groups: Record<string, { q: string; a: string }[]> = {
  "About the Academy": [
    { q: "What is the Gnosis Performance Academy?", a: "A full-time Transition Year football and performance programme delivering nine months of professional training, academic alignment and personal development." },
    { q: "Who is the programme for?", a: "Serious Transition Year footballers (15-17) who want a full-time professional environment for the season." },
    { q: "What does a typical week look like?", a: "Five days a week of integrated football, S&C, video review, recovery and supervised independent study." },
    { q: "Do you provide kit and equipment?", a: "Yes — every player receives a full training kit pack, Catapult GPS access and recovery kit on arrival." },
  ],
  "Academic Integration": [
    { q: "How does this work with my school?", a: "We partner with each player's school to align an independent study plan that meets their TY learning objectives." },
    { q: "Do parents get progress updates?", a: "Yes — termly written reports plus end-of-block parent reviews covering football, S&C, academics and personal development." },
    { q: "Is there a coaching pathway?", a: "Yes. Players pursuing coaching can complete FAI Kickstart 1 / 2 and the UEFA C entry pathway during the year." },
    { q: "What happens at the end of the year?", a: "Players exit with a full performance dossier, video portfolio, references and direct introductions to partner clubs." },
  ],
  "Selection & Trials": [
    { q: "How do I apply?", a: "Submit the online application — player profile, parent details and consent. Our staff review every application personally." },
    { q: "Is there a trial process?", a: "Yes. Shortlisted applicants are invited to a structured assessment session covering technical, tactical and athletic profiling." },
    { q: "How many places are available?", a: "Places are strictly limited each intake to protect player-to-coach ratios. Early applications are strongly encouraged." },
    { q: "What does it cost?", a: "Fees are confirmed at the offer stage. A small number of performance-based bursaries are reviewed each intake." },
  ],
};

const tabs = Object.keys(groups);

function FAQPage() {
  const [tab, setTab] = useState(tabs[0]);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Help Centre</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Frequently Asked</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">Everything players and parents typically ask before applying.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-10 py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-2">
            {tabs.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  onClick={() => {
                    setTab(t);
                    setOpenIdx(0);
                  }}
                  className={`flex-1 min-w-[160px] rounded-xl px-4 py-3 text-[11px] font-black tracking-[0.22em] uppercase transition ${
                    active
                      ? "gradient-amber text-primary-foreground shadow-amber"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {groups[tab].map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={`${tab}-${item.q}`} delay={i * 60}>
                <div className={`group rounded-2xl border bg-white/[0.03] backdrop-blur-md transition ${isOpen ? "border-amber/40 shadow-amber" : "border-white/10 hover:border-white/20"}`}>
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-base sm:text-lg font-bold text-white">{item.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${isOpen ? "border-amber/60 gradient-amber text-primary-foreground" : "border-white/15 bg-white/5 text-white/70"}`}>
                      <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground border-t border-white/10 pt-4">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}