import { useEffect, useRef } from "react";
import { ChevronRight, MapPin, Calendar, ShieldCheck, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { Logo } from "./Logo";
import heroAudio from "@/assets/audio.mp3"

export function Hero({ onApply }: { onApply: () => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const currentAudio = audioRef.current;
    if (!currentAudio) return;

    currentAudio.volume = 0.20; // Set professional ambient master volume (20%)

    // 1. Attempt immediate programmatic autoplay
    currentAudio.play().catch(() => {
      // 2. Browser blocked instant autoplay (expected behavior).
      // We set up a subtle, one-time listener for the user's first natural interaction.
      const handleUserInteraction = () => {
        if (currentAudio) {
          currentAudio.play()
            .then(() => cleanUpListeners())
            .catch((err) => console.log("Audio play deferred: ", err));
        }
      };

      const cleanUpListeners = () => {
        window.removeEventListener("click", handleUserInteraction);
        window.removeEventListener("touchstart", handleUserInteraction);
        window.removeEventListener("keydown", handleUserInteraction);
      };

      // Add listeners across mouse, touch, and keyboards for guaranteed engagement catch
      window.addEventListener("click", handleUserInteraction);
      window.addEventListener("touchstart", handleUserInteraction);
      window.addEventListener("keydown", handleUserInteraction);
    });
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-deep">
      {/* Invisible HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={heroAudio} // Ensure this file is inside your public/ folder
        loop
        playsInline
      />

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
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent_0%,oklch(0.08_0.04_260/0.7)_100%)]" />
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7">
        <Logo />
        <div className="hidden md:block">
          <p className="text-center text-[13px] font-medium tracking-[0.32em] text-white/80">
            Built with Elite {" "}
            <span className="text-amber">Architectural Specs.</span>
          </p>
        </div>
        
        <button
          onClick={onApply}
          className="group inline-flex items-center gap-1.5 rounded-md gradient-amber px-5 py-2.5 text-[11px] font-black tracking-[0.22em] text-primary-foreground shadow-amber transition hover:scale-[1.04] active:scale-[0.98]"
        >
          APPLY NOW
          <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </button>
      </nav>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 pb-24 pt-10 sm:px-10 sm:pt-16">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-amber">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
          </span>
          APPLICATIONS NOW OPEN FOR SEPTEMBER 2026 INTAKE
        </div>

        <h1 className="animate-fade-up mt-6 max-w-4xl text-balance text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white sm:text-7xl lg:text-[80px]" style={{ animationDelay: "0.1s" }}>
          Train Like a
          <br />
          <span className="bg-gradient-to-r from-amber via-amber-glow to-amber bg-clip-text text-transparent">
            Pro.
          </span>
          <br />
          Develop Like a <span className="bg-gradient-to-r from-amber via-amber-glow to-amber bg-clip-text text-transparent">Pro.</span>
        </h1>

        {/* Info pills */}
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
          <Pill icon={<MapPin className="h-3.5 w-3.5" />}>TU Blanchardstown & Corduff Sports Centre</Pill>
          <Pill icon={<Calendar className="h-3.5 w-3.5" />}>Sept 3 – May 28</Pill>
          <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />}>UEFA Pro & UEFA A Coaches</Pill>
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
            <Play className="h-4 w-4 text-amber" />
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
      <span className="text-amber">{icon}</span>
      {children}
    </div>
  );
}