import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ | Gnosis Performance Football Academy" },
      { name: "description", content: "Answers to common questions about the academy, applications, admissions, logistics, and the selection process." },
      { property: "og:title", content: "FAQ | Gnosis Performance Football Academy" },
      { property: "og:description", content: "Everything players and parents need to know before applying." },
    ],
  }),
});

const categories: { id: string; title: string; items: { q: string; a: string }[] }[] = [
  {
    id: "about",
    title: "About The Programme",
    items: [
      { q: "Who is the programme designed for?", a: "It is specifically designed for Transition Year students who are serious about balancing full-time technical football development with structured academic progression." },
      { q: "What age group is the programme for?", a: "The academy targets elite youth players entering their Transition Year cycle, typically aged 15-16." },
      { q: "Is the programme open to girls as well as boys?", a: "Yes, Gnosis Performance operates dedicated developmental frameworks for both male and female players across all tracks." },
    ],
  },
  {
    id: "apply",
    title: "Applications & Admissions",
    items: [
      { q: "When do applications open?", a: "Applications for our upcoming September intake open in February 2026. Spaces are limited and strictly application-based." },
      { q: "What do I need to apply?", a: "Applicants must submit their football background details, academic standings from junior cycles, and attend our official evaluation phases." },
      { q: "Is there a trial or interview process?", a: "Yes, all prospective candidates must undergo a rigorous technical trial day and a personal alignment interview with our admissions directors." },
      { q: "What happens after I apply?", a: "Our admissions board reviews the files, schedules trial criteria allocations within 14 days, and issues formal qualification offers systematically." },
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Practicalities",
    items: [
      { q: "Where does the programme take place?", a: "The programme utilises a premium twin-site operational structure across our technical base at TU Blanchardstown and our match day hub at Corduff Sports Centre." },
      { q: "What are the programme dates?", a: "The high-performance cycle spans a comprehensive 9-month schedule tracking directly from September 7th through May 28th annually." },
      { q: "How much does the programme cost?", a: "Complete fee profiles, registration structures, and educational kit allocations are thoroughly detailed during the interview phase." },
    ],
  },
];

function FAQPage() {
  const [openKey, setOpenKey] = useState<string>(`${categories[0].id}-0`);

  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Help Console</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Frequently Asked</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">Three categories. Every answer you need before applying.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-10 py-16 sm:py-24 space-y-14">
        {categories.map((cat, ci) => (
          <div key={cat.id}>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black" style={{ color: "var(--amber)" }}>{String(ci + 1).padStart(2, "0")}</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">{cat.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-amber/40 to-transparent" />
              </div>
            </Reveal>

            <div className="mt-6 space-y-3">
              {cat.items.map((item, i) => {
                const key = `${cat.id}-${i}`;
                const isOpen = openKey === key;
                return (
                  <Reveal key={key} delay={i * 60}>
                    <div
                      className="rounded-2xl border bg-white/[0.03] backdrop-blur-md transition"
                      style={{
                        borderColor: isOpen ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.1)",
                        boxShadow: isOpen ? "0 0 22px rgba(16,185,129,0.22)" : "none",
                        transition: "all .35s",
                      }}
                    >
                      <button
                        onClick={() => setOpenKey(isOpen ? "" : key)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      >
                        <span className="text-base sm:text-lg font-bold text-white">{item.q}</span>
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? "gradient-amber" : "bg-white/5"}`}
                          style={{ borderColor: isOpen ? "transparent" : "rgba(255,255,255,0.15)" }}
                        >
                          <Plus
                            className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-45 text-primary-foreground" : ""}`}
                            style={{ color: isOpen ? undefined : "var(--amber)" }}
                          />
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
          </div>
        ))}
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
