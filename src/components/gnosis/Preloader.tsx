import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 6);
      setProgress(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setHiding(true), 250);
        setTimeout(onDone, 850);
      }
    }, 120);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border border-cyan-precision/30 animate-spin-slow" />
  <div className="absolute inset-2 rounded-full border-2 animate-spin-slow" style={{ borderColor: 'rgba(52,211,153,0.7)', borderTopColor: 'transparent', animationDirection: 'reverse', animationDuration: '2s' }} />
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-9 w-9 rounded-full gradient-amber animate-pulse-ring shadow-amber" />
        </div>
      </div>
      <div className="mt-10 w-56">
        <div className="h-[2px] w-full overflow-hidden bg-white/10">
          <div className="h-full gradient-amber transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
          <span>GNOSIS PERFORMANCE</span>
          <span>{Math.floor(progress).toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
