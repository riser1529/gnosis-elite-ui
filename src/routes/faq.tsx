import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { PageHero } from "@/components/gnosis/PageHero";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ | Gnosis Performance Football Academy" },
      { name: "description", content: "Everything you need to know about the Gnosis Performance Transition Year Programme." },
      { property: "og:title", content: "FAQ — Gnosis Performance" },
      { property: "og:description", content: "Frequently asked questions about applications, logistics and the TY programme." },
    ],
  }),
});

type QA = { q: string; a: string };
type Category = { title: string; items: QA[] };

const categories: Category[] = [
  {
    title: "About The Programme",
    items: [
      { q: "Who is the programme designed for?", a: "It is specifically designed for Transition Year students who are serious about pursuing a career in the professional game and require a structured environment to balance technical training with academic completion." },
      { q: "What age group is the programme for?", a: "The academy targets elite youth football players entering their Transition Year window, typically aged 15-17." },
      { q: "Is the programme open to girls as well as boys?", a: "Yes, Gnosis Performance structures independent, full-time elite development pathways for both male and female players across all tracks." },
    ],
  },
  {
    title: "Applications & Admissions",
    items: [
      { q: "When do applications open?", a: "Applications for our upcoming September intake open in February 2026. Spaces are strictly limited and application-based." },
      { q: "What do I need to apply?", a: "Applicants must submit their football background histories, academic cycle reports, and undergo our physical performance tracking baseline assessment." },
      { q: "Is there a trial or interview process?", a: "Yes, all prospective candidates must successfully complete an intensive technical trial field day and a personal evaluation interview with our coaching panel." },
      { q: "What happens after I apply?", a: "Our technical staff reviews the application files, issues trial invitation slots within 14 days, and processes official entry selections systematically." },
    ],
  },
  {
    title: "Logistics & Practicalities",
    items: [
      { q: "Where does the programme take place?", a: "The academy operates a premium twin-site facility layout: our academic/technical training hub at TU Blanchardstown and our official matchday stadium facilities at Corduff Sports Centre." },
      { q: "What are the programme dates?", a: "The annual performance framework traces direct dates across a full 9-month runtime, kicking off September 7th and concluding on May 28th." },
      { q: "How much does the programme cost?", a: "Full registration cost breakdowns, kit hardware allocations, and available scholarship parameters are thoroughly detailed during the personal interview phase." },
    ],
  },
];

function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="FAQ"
        title={<>Frequently Asked <span className="gradient-amber bg-clip-text text-transparent">Questions</span></>}
        description="Everything you need to know about the Gnosis Performance Transition Year Programme."
      />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 sm:px-10 py-16 sm:py-20 space-y-12">
          {categories.map((cat, ci) => (
            <Reveal key={cat.title}>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-[0.32em] uppercase" style={{ color: "var(--amber)" }}>
                    Category {String(ci + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-amber/40 to-transparent" />
                </div>
                <h2 className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight text-white break-words">{cat.title}</h2>

                <div className="mt-5 space-y-2.5">
                  {cat.items.map((it, qi) => {
                    const key = `${ci}-${qi}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className="overflow-hidden rounded-xl border backdrop-blur-md transition"
                        style={{
                          borderColor: isOpen ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.10)",
                          boxShadow: isOpen ? "0 0 28px rgba(16,185,129,0.30)" : "none",
                          background: isOpen
                            ? "linear-gradient(160deg, rgba(16,185,129,0.97), rgba(52,211,153,0.88))"
                            : "rgba(255,255,255,0.03)",
                        }}
                      >
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span
                            className="min-w-0 text-sm sm:text-base font-bold break-words pr-2"
                            style={{ color: isOpen ? "#04120a" : "#fff" }}
                          >
                            {it.q}
                          </span>
                          <span
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-md border transition"
                            style={{
                              borderColor: isOpen ? "rgba(4,18,10,0.35)" : "rgba(255,255,255,0.15)",
                              background: isOpen ? "rgba(255,255,255,0.20)" : "transparent",
                            }}
                          >
                            {isOpen ? (
                              <X className="h-4 w-4" style={{ color: "#04120a" }} />
                            ) : (
                              <Plus className="h-4 w-4 text-white/70" />
                            )}
                          </span>
                        </button>
                        <div
                          className="grid transition-[grid-template-rows] duration-500 ease-out"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <p
                              className="px-5 pb-5 text-sm leading-relaxed pt-4 border-t"
                              style={{
                                color: isOpen ? "rgba(4,18,10,0.88)" : "var(--muted-foreground)",
                                borderColor: isOpen ? "rgba(4,18,10,0.18)" : "rgba(255,255,255,0.05)",
                              }}
                            >
                              {it.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
