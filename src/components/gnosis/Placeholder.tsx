import { ImageIcon } from "lucide-react";

type Props = {
  label: string;
  tag?: string;
  className?: string;
  ratio?: string;
  imageSrc?: string;
};

/**
 * "Clean-Tech HUD" placeholder for upcoming photography.
 * Strict viewport boundaries: never overflows; uses object-cover idiom.
 */
export function Placeholder({ label, tag = "Asset Slot", className = "", ratio = "aspect-[4/3]", imageSrc }: Props) {
  return (
    <div
      className={`relative w-full ${ratio} max-h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-black ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(60% 60% at 50% 40%, rgba(16,185,129,0.18), transparent 70%), linear-gradient(135deg, #0a0a0a 0%, #0f1720 100%)",
      }}
    >
      {imageSrc && (
        <img src={imageSrc} alt={label} className="absolute inset-0 h-full w-full object-cover" />
      )}
      {/* grid lines */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      {/* corner ticks */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t" style={{ borderColor: "var(--amber)" }} />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t" style={{ borderColor: "var(--amber)" }} />
      <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b" style={{ borderColor: "var(--amber)" }} />
      <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b" style={{ borderColor: "var(--amber)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-white/5">
          <ImageIcon className="h-5 w-5" style={{ color: "var(--amber)" }} />
        </div>
        <div className="mt-4 text-[10px] font-black tracking-[0.32em] uppercase" style={{ color: "var(--amber)" }}>
          // {tag}
        </div>
        <div className="mt-2 text-sm sm:text-base font-bold tracking-wide text-white max-w-[26ch]">{label}</div>
      </div>
    </div>
  );
}
