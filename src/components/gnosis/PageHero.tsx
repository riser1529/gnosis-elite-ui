import { ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  bg?: string;
};

/**
 * Shared page header used on every non-home route.
 * Provides hero background image, dark overlay, grid and centered intro.
 */
export function PageHero({ eyebrow, title, description, bg = heroBg }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-deep" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28 text-center">
        <Reveal>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em]"
            style={{
              border: "1px solid rgba(16,185,129,0.4)",
              background: "rgba(16,185,129,0.08)",
              color: "var(--amber)",
            }}
          >
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-[-0.01em] text-white break-words">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}