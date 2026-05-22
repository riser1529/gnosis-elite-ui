import { useState } from "react";
// Import the image directly so Vite processes it
import logoImg from "@/assets/logo.jpeg"; 

export function Logo({ className = "" }: { className?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-16 w-14 overflow-hidden rounded-md bg-gradient-to-br from-royal to-deep ring-1 ring-[#10b981]">
        {!imgError ? (
          <img
            src={logoImg} /* Use the variable here instead of a hardcoded string */
            alt="Gnosis Performance Logo"
            className="h-full w-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-[10px] font-black text-[#10b981]">
            GP
          </div>
        )}
      </div>
      <div className="leading-none">
        <div className="text-[13px] font-black tracking-[0.18em] text-white">GNOSIS PERFORMANCE</div>
        <div className="mt-0.5 text-[9px] font-medium tracking-[0.32em]" style={{ color: 'var(--amber)' }}>
          FOOTBALL ACADEMY
        </div>
      </div>
    </div>
  );
}