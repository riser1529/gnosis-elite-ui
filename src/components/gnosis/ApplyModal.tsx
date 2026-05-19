import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    playerName: "", dob: "", gender: "", school: "", county: "",
    club: "", position: "", level: "", history: "",
    parentName: "", parentEmail: "", parentMobile: "", referral: "", message: "",
    consent1: false, consent2: false,
  });

  if (!open) return null;

  const set = (k: keyof typeof form) => (e: any) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = () => {
    if (!form.consent1 || !form.consent2) {
      toast.error("Please confirm both consent declarations.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application submitted. Our team will be in touch.");
      onClose();
      setStep(1);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/75 backdrop-blur-sm p-4 sm:p-8 animate-fade-up">
      <div className="relative w-full max-w-2xl my-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[oklch(0.16_0.05_260)] to-[oklch(0.1_0.04_260)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-6 pt-8 sm:px-10 sm:pt-10 text-center">
          <span className="inline-block rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-amber">
            SEPTEMBER 2026 INTAKE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">APPLY NOW</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete the form below to apply for the Gnosis Performance Transition Year Programme. Places are strictly limited.
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-8 flex items-center justify-center gap-4 px-6">
          <StepDot n={1} active={step === 1} done={step > 1} label="PLAYER DETAILS" />
          <div className="h-px w-16 bg-white/15" />
          <StepDot n={2} active={step === 2} done={false} label="PARENT & CONSENT" />
        </div>

        <div className="p-6 sm:p-10">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            {step === 1 ? (
              <div className="space-y-5 animate-fade-up">
                <SectionTitle>PLAYER DETAILS</SectionTitle>
                <Field label="Player Full Name" required>
                  <input value={form.playerName} onChange={set("playerName")} className={inputCls} placeholder="e.g. Liam Murphy" />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Date of Birth" required>
                    <input type="date" value={form.dob} onChange={set("dob")} className={inputCls} />
                  </Field>
                  <Field label="Gender" required>
                    <select value={form.gender} onChange={set("gender")} className={inputCls}>
                      <option value="">Select…</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </Field>
                </div>
                <Field label="Current School" required>
                  <input value={form.school} onChange={set("school")} className={inputCls} />
                </Field>
                <Field label="County" required>
                  <input value={form.county} onChange={set("county")} className={inputCls} />
                </Field>
                <Field label="Current Club" required>
                  <input value={form.club} onChange={set("club")} className={inputCls} />
                </Field>
                <Field label="Playing Position(s)" required>
                  <input value={form.position} onChange={set("position")} className={inputCls} placeholder="e.g. CM, CAM" />
                </Field>
                <Field label="Current Level / League">
                  <input value={form.level} onChange={set("level")} className={inputCls} />
                </Field>
                <Field label="Playing History & Achievements (Optional)">
                  <textarea value={form.history} onChange={set("history")} rows={3} className={inputCls} />
                </Field>

                <div className="flex justify-end pt-2">
                  <button onClick={() => setStep(2)} className={ctaCls}>
                    NEXT: PARENT DETAILS <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5 animate-fade-up">
                <SectionTitle>PARENT / GUARDIAN DETAILS</SectionTitle>
                <Field label="Parent / Guardian Full Name" required>
                  <input value={form.parentName} onChange={set("parentName")} className={inputCls} placeholder="e.g. Mary Murphy" />
                </Field>
                <Field label="Parent / Guardian Email" required>
                  <input type="email" value={form.parentEmail} onChange={set("parentEmail")} className={inputCls} placeholder="mary@example.com" />
                </Field>
                <Field label="Parent / Guardian Mobile" required>
                  <input value={form.parentMobile} onChange={set("parentMobile")} className={inputCls} placeholder="+353 87 123 4567" />
                </Field>
                <Field label="How did you hear about us?">
                  <select value={form.referral} onChange={set("referral")} className={inputCls}>
                    <option value="">Select…</option>
                    <option>Coach / Club</option><option>Social Media</option>
                    <option>Friend / Family</option><option>Search Engine</option><option>Other</option>
                  </select>
                </Field>
                <Field label="Additional Message (Optional)">
                  <textarea value={form.message} onChange={set("message")} rows={3} className={inputCls} />
                </Field>

                <div className="mt-2 rounded-lg border border-white/10 bg-black/30 p-5">
                  <div className="text-xs font-bold tracking-[0.22em] text-white">CONSENT & DECLARATIONS</div>
                  <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" checked={form.consent1} onChange={set("consent1")} className="mt-1 h-4 w-4 accent-amber" />
                    <span>I confirm that I am the parent or legal guardian of the player named in this application and I consent to submitting this application on their behalf. <span className="text-amber">*</span></span>
                  </label>
                  <label className="mt-3 flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" checked={form.consent2} onChange={set("consent2")} className="mt-1 h-4 w-4 accent-amber" />
                    <span>I understand that Gnosis Performance Football Academy may contact me via email or phone regarding this application and the programme. <span className="text-amber">*</span></span>
                  </label>
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <button onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold tracking-[0.2em] text-white transition hover:bg-white/10">
                    <ChevronLeft className="h-4 w-4" /> BACK
                  </button>
                  <button onClick={submit} disabled={submitting} className={ctaCls + " disabled:opacity-60"}>
                    {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> SUBMITTING…</> : <>SUBMIT APPLICATION <Check className="h-4 w-4" /></>}
                  </button>
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            By submitting, you agree to our <a className="text-amber hover:underline" href="#">Privacy Policy</a> and <a className="text-amber hover:underline" href="#">Terms of Use</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-amber focus:ring-2 focus:ring-amber/30";
const ctaCls =
  "inline-flex items-center justify-center gap-2 rounded-md gradient-amber px-6 py-3 text-xs font-black tracking-[0.2em] text-primary-foreground shadow-amber transition hover:scale-[1.02] active:scale-[0.99]";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-black tracking-[0.18em] text-white">{children}</h3>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-bold tracking-[0.22em] text-cyan-precision">
        {label.toUpperCase()} {required && <span className="text-amber">*</span>}
      </span>
      {children}
    </label>
  );
}

function StepDot({ n, active, done, label }: { n: number; active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`grid h-9 w-9 place-items-center rounded-full text-xs font-bold transition ${
          active || done
            ? "gradient-amber text-primary-foreground shadow-amber"
            : "border border-white/15 bg-white/5 text-muted-foreground"
        }`}
      >
        {done ? <Check className="h-4 w-4" /> : n}
      </div>
      <span className={`text-[9px] font-bold tracking-[0.22em] ${active ? "text-white" : "text-muted-foreground"}`}>
        {label}
      </span>
    </div>
  );
}
