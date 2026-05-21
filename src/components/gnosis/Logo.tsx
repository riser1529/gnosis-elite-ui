export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-royal to-deep ring-1 ring-white/15">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" className="text-primary-foreground" style={{ color: 'var(--amber)' }} />
          <path d="M12 3v18M3 12h18M5.5 6l13 12M18.5 6l-13 12" className="text-white/70" strokeWidth="1" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-[13px] font-black tracking-[0.18em] text-white">GNOSIS PERFORMANCE</div>
        <div className="mt-0.5 text-[9px] font-medium tracking-[0.32em]" style={{ color: 'var(--amber)' }}>FOOTBALL ACADEMY</div>
      </div>
    </div>
  );
}
