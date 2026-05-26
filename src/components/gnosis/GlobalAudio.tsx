import { useEffect, useRef } from "react";
import heroAudio from "@/assets/audio.mp3";

/**
 * Mounted once at the router root so the soundtrack persists across
 * client-side navigations and is never unmounted until the tab closes.
 */
export function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.2;

    const tryPlay = () => el.play().catch(() => undefined);
    tryPlay();

    const onInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);
    window.addEventListener("touchstart", onInteract);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };
  }, []);

  return <audio ref={audioRef} src={heroAudio} loop playsInline preload="auto" />;
}