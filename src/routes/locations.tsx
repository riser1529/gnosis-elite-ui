import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/gnosis/SiteHeader";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { MapPin, Flame, Dumbbell, Snowflake, Camera, Wifi, ShowerHead } from "lucide-react";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations | Gnosis Performance Football Academy" },
      { name: "description", content: "Our dual facility system: a floodlit technical pitch facility and an indoor elite performance centre." },
    ],
  }),
});

const facilities = [
  {
    tag: "Facility 01",
    name: "The Technical Pitch Facility",
    img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1600&q=80",
    blurb: "Our outdoor base of operations — full-size, floodlit and built for the daily demands of full-time training.",
    specs: [
      { icon: Flame, label: "Full-size 4G floodlit pitches" },
      { icon: MapPin, label: "Dedicated tactical & SSG zones" },
      { icon: Camera, label: "Elevated video analysis platform" },
      { icon: ShowerHead, label: "Pro-grade changing & recovery suites" },
    ],
  },
  {
    tag: "Facility 02",
    name: "The Indoor Elite Performance Center",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    blurb: "The strength, speed and recovery hub — engineered to mirror full-time professional environments.",
    specs: [
      { icon: Dumbbell, label: "Specialised football S&C gym" },
      { icon: Snowflake, label: "Cryo Pro Tech recovery suite" },
      { icon: Camera, label: "Catapult performance lab" },
      { icon: Wifi, label: "Video analysis & classroom space" },
    ],
  },
];

function LocationsPage() {
  return (
    <main className="bg-deep text-foreground">
      <SiteHeader />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-10 sm:py-32 text-center">
          <Reveal><span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]" style={{ border: "1px solid rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.08)", color: "var(--amber)" }}>Our Facilities</span></Reveal>
          <Reveal delay={100}><h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase tracking-[-0.01em] text-white">Locations</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">A two-site model: a technical outdoor base and a high-performance indoor centre.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-10 py-24 sm:py-32 space-y-20">
        {facilities.map((f, i) => (
          <Reveal key={f.name} delay={i * 120}>
            <article className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden shadow-deep transition hover:border-amber/30">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1400ms] ease-out scale-105 group-hover:scale-110 filter saturate-[0.7] group-hover:saturate-125"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(60% 40% at 50% 100%, rgba(16,185,129,0.20), transparent 70%)" }} />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5" style={{ color: "var(--amber)" }} /> {f.tag.toUpperCase()}
                </div>
                <div className="absolute left-6 right-6 bottom-6">
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">{f.name}</h2>
                </div>
              </div>

              <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <span className="text-[10px] font-bold tracking-[0.32em] text-cyan-precision uppercase">Overview</span>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.blurb}</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                  {f.specs.map((s) => (
                    <div key={s.label} className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/30 p-5 transition hover:border-amber/40 hover:bg-white/[0.04]">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg gradient-amber shadow-amber">
                        <s.icon className="h-4.5 w-4.5 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium text-white/90 leading-relaxed">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Footer />
    </main>
  );
}