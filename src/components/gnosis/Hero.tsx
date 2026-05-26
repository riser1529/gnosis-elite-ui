import { ChevronRight, MapPin, Calendar, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { useApply } from "./ApplyContext";

export function Hero() {
  const { open: onApply } = useApply();

  return (
    <section className="relative w-full overflow-hidden bg-deep" style={{ minHeight: "min(100svh, 760px)" }}>
      {/* Background image/video with subtle Ken Burns */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover scale-105 animate-[fade-up_1.4s_ease-out_both]"
        />
        <div className="absolute inset-0 hero-overlay" />
  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(60% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 pb-24 pt-10 sm:px-10 sm:pt-16">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full" style={{ border: '1px solid rgba(16,185,129,0.4)', background: 'rgba(16,185,129,0.08)', padding: '0.375rem 0.875rem' }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ backgroundColor: 'rgba(16,185,129,0.75)' }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--amber)' }} />
          </span>
          APPLICATIONS NOW OPEN FOR SEPTEMBER 2026 INTAKE
        </div>

        <div className="space-y-4 mt-6">
  {/* Maximized Academy Headline */}
  <h2 
    className="animate-fade-up max-w-5xl text-balance text-3xl font-black uppercase leading-[0.92] tracking-[-0.01em] text-white sm:text-5xl lg:text-[68px]"
    style={{ animationDelay: "0.05s" }}
  >
    Kerry's 1st Full Time 
    <br />
    <span className="gradient-amber bg-clip-text text-transparent">Transition Year</span> Soccer Academy
  </h2>

  {/* Supporting Sub-Line (Kept Perfect) */}
  <p 
    className="animate-fade-up text-[11px] font-black tracking-[0.25em] text-white uppercase sm:text-xs border-l-2 border-amber pl-3" 
    style={{ animationDelay: "0.1s" }}
  >
    Experience training and developing Like a <span className="gradient-amber bg-clip-text text-transparent">Pro.</span>
  </p>
</div>

        {/* Info pills */}
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
          <Pill icon={<MapPin className="h-3.5 w-3.5" />}>Locations to be announced</Pill>
          <Pill icon={<Calendar className="h-3.5 w-3.5" />}>Sept 7 – May 28</Pill>
          <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />}>UEFA LICENCED COACHES & PERFORMANCE SPECIALISTS</Pill>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={onApply}
            className="group inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-7 py-4 text-sm font-black tracking-[0.2em] text-primary-foreground shadow-amber transition hover:scale-[1.03] active:scale-[0.98]"
          >
            APPLY NOW
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          {/* <a
            href="#programme"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold tracking-[0.2em] text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10"
          >
            <Play className="h-4 w-4" style={{ color: 'var(--amber)' }} />
            VIEW PROGRAMME
          </a> */}
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-deep" />
    </section>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/90">
      <span style={{ color: 'var(--amber)' }}>{icon}</span>
      {children}
    </div>
  );
}