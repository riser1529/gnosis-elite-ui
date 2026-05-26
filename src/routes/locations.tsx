import { createFileRoute } from "@tanstack/react-router";
import { Check, ExternalLink, MapPin } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Placeholder } from "@/components/gnosis/Placeholder";
import { PageHero } from "@/components/gnosis/PageHero";
import locationsHero from "@/assets/locations.jpg";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Locations | Gnosis Performance Football Academy" },
      { name: "description", content: "Train where the pros train. Our facilities provide everything a serious footballer needs to develop to their full potential." },
      { property: "og:title", content: "Locations — Gnosis Performance" },
      { property: "og:description", content: "TU Blanchardstown & Corduff Sports Centre — twin-site academy facilities." },
    ],
  }),
});

const facilities = [
  {
    num: "1",
    label: "Main Academic & Training Facility",
    name: "TU Blanchardstown",
    address: "Blanchardstown Road North, Dublin 15, D15 YV78",
    overview:
      "TU Blanchardstown serves as our primary training and academic base. The university campus provides state-of-the-art indoor and outdoor facilities, including full-size 3G pitches, indoor training halls, sports science labs, and classroom facilities for our education programme.",
    features: [
      "Full-size 3G artificial pitches",
      "Sports science and conditioning suite",
      "Classroom and presentation facilities",
      "Indoor sports hall",
      "Changing facilities and medical room",
      "Campus café and social areas",
    ],
    map: "https://www.google.com/maps/search/?api=1&query=TU+Blanchardstown+Dublin+15+D15+YV78",
    placeholderLabel: "TU Blanchardstown · Aerial Pitch View",
    placeholderTag: "Facility 01",
  },
  {
    num: "2",
    label: "Elite Training & Match Facility",
    name: "Corduff Sports Centre",
    address: "Corduff Road, Blanchardstown, D15 T861",
    overview:
      "Corduff Sports Centre is our dedicated high-performance training venue. A purpose-built facility with premium pitches and sports infrastructure, Corduff provides the professional match and training environment our players need to develop at the highest level.",
    features: [
      "New 4G state-of-the-art training pitch",
      "Professional changing and medical rooms",
      "Spectator areas for match days",
      "Full match facilities with floodlights",
      "Video analysis suite",
      "Adjacent community sports infrastructure",
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Corduff+Sports+Centre+Blanchardstown+D15+T861",
    placeholderLabel: "Corduff Sports Centre · Match Pitch",
    placeholderTag: "Facility 02",
  },
];

function LocationsPage() {
  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="Our Facilities"
        title={<>Academy <span className="gradient-amber bg-clip-text text-transparent">Facilities</span></>}
        description="Train where the pros train. Our facilities provide everything a serious footballer needs to develop to their full potential."
        bg={locationsHero}
      />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-24 space-y-16 sm:space-y-24">
          {facilities.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={f.name}>
                <article className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                  <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                    <span
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[10px] font-black tracking-[0.28em] uppercase"
                      style={{ borderColor: "rgba(16,185,129,0.4)", background: "rgba(16,185,129,0.06)", color: "var(--amber)" }}
                    >
                      {f.num}. {f.label}
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white break-words">{f.name}</h2>
                    <div className="mt-3 inline-flex items-start gap-2 text-sm text-white/80">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--amber)" }} />
                      <span className="min-w-0 break-words">{f.address}</span>
                    </div>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{f.overview}</p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {f.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-[13px] text-white/85">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "var(--amber)" }} />
                          <span className="min-w-0">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={f.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 rounded-md border border-amber/40 bg-amber/[0.06] px-4 py-2.5 text-[10px] font-black tracking-[0.24em] uppercase transition hover:bg-amber/15"
                      style={{ color: "var(--amber)" }}
                    >
                      View on Google Maps <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </a>
                  </div>
                  <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                    <Placeholder label={f.placeholderLabel} tag={f.placeholderTag} ratio="aspect-[4/3]" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
