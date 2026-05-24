import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { MapPin, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations | Gnosis Performance Football Academy" },
      { name: "description", content: "Two integrated facilities: TU Blanchardstown academic & training base and Corduff Sports Centre elite match venue." },
      { property: "og:title", content: "Locations | Gnosis Performance Football Academy" },
      { property: "og:description", content: "TU Blanchardstown and Corduff Sports Centre — our twin-site high-performance operation." },
    ],
  }),
});

const facilities = [
  {
    no: "01",
    name: "TU Blanchardstown",
    tag: "Main Academic & Training Facility",
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1600&q=80",
    address: "Blanchardstown Road North, Dublin 15, D15 YV78",
    map: "https://www.google.com/maps/search/?api=1&query=TU+Dublin+Blanchardstown+Campus",
    blurb: "TU Blanchardstown serves as our primary training and academic base. The university campus provides state-of-the-art indoor and outdoor facilities, including full-size 3G pitches, indoor training halls, sports science labs, and classroom facilities for our education programme.",
    grid: [
      "Full-size 3G artificial pitches",
      "Sports science and conditioning suite",
      "Classroom and presentation facilities",
      "Indoor sports hall",
      "Changing facilities and medical room",
      "Campus café and social areas",
    ],
  },
  {
    no: "02",
    name: "Corduff Sports Centre",
    tag: "Elite Training & Match Facility",
    img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1600&q=80",
    address: "Corduff Road, Blanchardstown, D15 T861",
    map: "https://www.google.com/maps/search/?api=1&query=Corduff+Sports+Centre+Blanchardstown",
    blurb: "Corduff Sports Centre is our dedicated high-performance training venue. A purpose-built facility with premium pitches and sports infrastructure, Corduff provides the professional match and training environment our players need to develop at the highest level.",
    grid: [
      "New 4G state-of-the-art training pitch",
      "Professional changing and medical rooms",
      "Spectator areas for match days",
      "Full match facilities with floodlights",
      "Video analysis suite",
      "Adjacent community sports infrastructure",
    ],
  },
];

function LocationsPage() {
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Integrated Twin-Site</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Operational Stations</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">A two-station operation. Academic and training base. Elite match-day venue. Both built for full-time pros.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-20 sm:py-28 space-y-16">
        {facilities.map((f, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={f.name}>
              <article
                className={`group grid gap-8 lg:gap-12 lg:grid-cols-2 items-stretch ${flipped ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Media */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black transition ${flipped ? "lg:[direction:ltr]" : ""}`}
                  style={{ maxHeight: "440px", transition: "all .4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 26px rgba(16,185,129,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div className="aspect-[16/10] w-full" style={{ maxHeight: "440px" }}>
                    <img
                      src={f.img}
                      alt={f.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-[1400ms] ease-out scale-105 group-hover:scale-110 filter saturate-[0.7] group-hover:saturate-125"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} /> STATION {f.no}
                  </div>
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="text-[10px] font-black tracking-[0.28em] uppercase" style={{ color: "var(--amber)" }}>{f.tag}</div>
                    <div className="mt-1 text-2xl sm:text-3xl font-black text-white">{f.name}</div>
                  </div>
                </div>

                {/* Data block */}
                <div className={`flex flex-col gap-5 ${flipped ? "lg:[direction:ltr]" : ""}`}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
                    <div className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Address</div>
                    <div className="mt-2 text-base font-bold text-white">{f.address}</div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.blurb}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6">
                    <div className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">// Anchor Facility Grid</div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {f.grid.map((g) => (
                        <div key={g} className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 transition hover:border-amber/40">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--amber)" }} />
                          <span className="text-xs sm:text-sm text-white/85">{g}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={f.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-between gap-3 rounded-xl border border-amber/40 bg-amber/[0.06] px-5 py-4 transition hover:border-amber/70"
                    style={{ transition: "all .3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 22px rgba(16,185,129,0.35)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg gradient-amber shadow-amber">
                        <MapPin className="h-4 w-4 text-primary-foreground" />
                      </span>
                      <span className="text-xs font-black tracking-[0.24em] uppercase" style={{ color: "var(--amber)" }}>View On Google Maps</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" style={{ color: "var(--amber)" }} />
                  </a>
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
