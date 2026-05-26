import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Footer } from "@/components/gnosis/Footer";
import { Reveal } from "@/components/gnosis/Reveal";
import { ContactCTA } from "@/components/gnosis/ContactCTA";
import { Placeholder } from "@/components/gnosis/Placeholder";
import { PageHero } from "@/components/gnosis/PageHero";
import curriculumHero from "@/assets/curriculum.jpg";
import tactical from "@/assets/tactical.jpg";
import physical from "@/assets/physical.jpg";
import psych from "@/assets/psych.jpg";
import academic from "@/assets/academic.jpg";

export const Route = createFileRoute("/curriculum")({
  component: CurriculumPage,
  head: () => ({
    meta: [
      { title: "Curriculum | Gnosis Performance Football Academy" },
      { name: "description", content: "Four integrated tracks delivered every week across the 9-month programme." },
      { property: "og:title", content: "Curriculum — Gnosis Performance" },
      { property: "og:description", content: "Technical, physical, psychological and academic tracks for elite TY footballers." },
    ],
  }),
});

const tracks = [
  {
    num: "01",
    title: "Technical & Tactical Excellence",
    body:
      "Position-specific training for CM, CAM, fullbacks and forwards. Daily ball mastery, decision-making under pressure, and match video analysis with our performance analysts.",
    bullets: [
      "Position-specific units (CM / CAM / FB / FW)",
      "Match video review with performance analysts",
      "Small-sided games & tactical patterns",
      "Set piece architecture & in-possession principles",
    ],
    placeholderLabel: "Tactics Board · Ball Mastery",
    placeholderTag: "Track 01 · Technical",
  },
  {
    num: "02",
    title: "Physical & Athletic Development",
    body:
      "Periodised strength & conditioning, speed mechanics, robust injury prevention protocols and GPS-tracked load management — built around the demands of the elite game.",
    bullets: [
      "Periodised S&C programming",
      "Speed mechanics & change-of-direction",
      "Catapult GPS load monitoring",
      "Recovery, mobility & injury reduction",
    ],
    placeholderLabel: "Weightlifting Pit · S&C Floor",
    placeholderTag: "Track 02 · Physical",
  },
  {
    num: "03",
    title: "Psychological & Personal Growth",
    body:
      "Mental resilience, sports psychology, leadership and media training. We build the human first — confident, professional players who carry themselves like seniors.",
    bullets: [
      "1:1 sports psychology sessions",
      "Pressure & resilience workshops",
      "Leadership & captaincy modules",
      "Media training & personal brand",
    ],
    placeholderLabel: "Team Bicycles Drill · Cognitive Block",
    placeholderTag: "Track 03 · Psychological",
  },
  {
    num: "04",
    title: "Academic Compliance & Progression",
    body:
      "Independent study aligned with each player's Transition Year curriculum, plus structured FAI / UEFA foundation coaching tracks for those pursuing the coaching pathway.",
    bullets: [
      "Aligned independent study blocks",
      "FAI Kickstart 1 / 2 foundation tracks",
      "UEFA C entry-level pathway support",
      "Parent + school progress reviews",
    ],
    placeholderLabel: "Study Classroom · Academic Block",
    placeholderTag: "Track 04 · Academic",
  },
];

function CurriculumPage() {
  const trackImages = [tactical, physical, psych, academic];
  return (
    <main className="bg-deep text-foreground overflow-x-hidden">
      <PageHero
        eyebrow="The Framework"
        title={<span className="gradient-amber bg-clip-text text-transparent">Curriculum</span>}
        description="Four integrated tracks delivered every week across the 9-month programme."
        bg={curriculumHero}
      />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 py-16 sm:py-24 space-y-16 sm:space-y-24">
          {tracks.map((t, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={t.num}>
                <article className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg gradient-amber text-primary-foreground font-black text-sm shadow-amber">{t.num}</span>
                      <span className="text-[10px] font-black tracking-[0.32em] text-cyan-precision uppercase">Track {t.num}</span>
                    </div>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white break-words">{t.title}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{t.body}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[13px] sm:text-sm text-white/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--amber)" }} />
                          <span className="min-w-0">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                      <Placeholder label={t.placeholderLabel} tag={t.placeholderTag} ratio="aspect-[4/3]" imageSrc={trackImages[i]} />
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
