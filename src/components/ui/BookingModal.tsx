"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Check, Phone, Clock, Sparkles } from "lucide-react";
import { PRACTICE, SERVICES, INSURANCE_PROVIDERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

type VisitType = "telehealth" | "in-person";
type PatientStatus = "new" | "returning";

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [visitType, setVisitType] = useState<VisitType>("telehealth");
  const [patientStatus, setPatientStatus] = useState<PatientStatus>("new");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const input =
    "w-full rounded-xl border border-[#1B1F4B]/15 bg-white/60 px-4 py-3 text-sm text-[#1B1F4B] placeholder:text-[#1B1F4B]/35 focus:border-[#2D5DA1] focus:ring-2 focus:ring-[#2D5DA1]/20 outline-none transition";
  const label = "block text-[11px] tracking-[0.2em] uppercase text-[#1B1F4B]/55 mb-1.5";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            aria-label="Close booking"
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0E2A]/70 backdrop-blur-sm cursor-default"
          />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-full lg:max-w-[1100px] lg:mx-6 max-h-[95vh] lg:max-h-[90vh] overflow-hidden rounded-t-[2rem] lg:rounded-[2rem] shadow-2xl shadow-[#0B0E2A]/40 flex flex-col lg:flex-row bg-[#F8F4EC]"
          >
            {/* Left — brand panel */}
            <aside className="hidden lg:flex lg:w-[40%] relative bg-[#1B1F4B] text-[#F8F4EC] p-10 flex-col justify-between overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[#4DC9F6]/15 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 w-[320px] h-[320px] rounded-full bg-[#2D5DA1]/40 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#F8F4EC 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

              <div className="relative">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#4DC9F6] mb-4">
                  — Book Your Visit
                </p>
                <h2
                  id="booking-title"
                  className="font-editorial text-[2.75rem] leading-[1] mb-6"
                >
                  A calmer
                  <br />
                  step <em className="italic text-[#4DC9F6]">forward.</em>
                </h2>
                <p className="text-sm text-white/65 leading-relaxed max-w-[26ch]">
                  New patients are typically seen within one week. Your details
                  stay private — we only use them to confirm your visit.
                </p>
              </div>

              <div className="relative space-y-4 mt-10">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-[#4DC9F6]" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-white/45">
                      Appointments within
                    </p>
                    <p className="text-sm text-white font-medium">1 week of booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4 text-[#4DC9F6]" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-white/45">
                      Insurance-friendly
                    </p>
                    <p className="text-sm text-white font-medium">Most major plans accepted</p>
                  </div>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <p className="text-[11px] tracking-wider uppercase text-white/45 mb-1">
                    Prefer to call?
                  </p>
                  <a
                    href={`tel:${PRACTICE.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-[#4DC9F6] hover:text-white transition-colors font-medium"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {PRACTICE.phone}
                  </a>
                </div>
              </div>
            </aside>

            {/* Right — form */}
            <div className="flex-1 relative overflow-y-auto">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 h-9 w-9 rounded-full bg-[#1B1F4B]/5 hover:bg-[#1B1F4B]/10 text-[#1B1F4B] flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {submitted ? (
                <div className="p-10 lg:p-14 min-h-full flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 18 }}
                    className="h-14 w-14 rounded-full bg-[#1B1F4B] text-[#4DC9F6] flex items-center justify-center mb-6"
                  >
                    <Check className="h-6 w-6" />
                  </motion.div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[#2D5DA1] mb-3">
                    — Request Received
                  </p>
                  <h3 className="font-editorial text-3xl lg:text-4xl text-[#1B1F4B] leading-[1.1] mb-3 max-w-sm">
                    We&apos;ll be in touch within one business day.
                  </h3>
                  <p className="text-sm text-[#1B1F4B]/60 max-w-sm leading-relaxed mb-8">
                    A member of our team will reach out to confirm availability
                    and walk you through next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${PRACTICE.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1B1F4B] text-[#F8F4EC] text-sm font-medium hover:bg-[#0E1238] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call {PRACTICE.phone}
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#1B1F4B]/20 text-[#1B1F4B] text-sm hover:bg-[#1B1F4B]/5 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-7 lg:p-10 space-y-5">
                  <div className="lg:hidden mb-2">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-[#2D5DA1] mb-2">
                      — Book Your Visit
                    </p>
                    <h2 className="font-editorial text-[2rem] leading-[1.05] text-[#1B1F4B]">
                      A calmer step{" "}
                      <em className="italic text-[#2D5DA1]">forward.</em>
                    </h2>
                  </div>

                  {/* Patient status */}
                  <div>
                    <label className={label}>I am a</label>
                    <div className="grid grid-cols-2 gap-2 rounded-full bg-[#1B1F4B]/5 p-1">
                      {(["new", "returning"] as PatientStatus[]).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setPatientStatus(s)}
                          className={cn(
                            "py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all",
                            patientStatus === s
                              ? "bg-[#1B1F4B] text-[#F8F4EC] shadow-sm"
                              : "text-[#1B1F4B]/55 hover:text-[#1B1F4B]"
                          )}
                        >
                          {s === "new" ? "New patient" : "Returning"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Visit type */}
                  <div>
                    <label className={label}>Visit type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["telehealth", "in-person"] as VisitType[]).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setVisitType(v)}
                          className={cn(
                            "relative rounded-xl border px-4 py-3 text-left transition-all",
                            visitType === v
                              ? "border-[#2D5DA1] bg-[#E3F0FA]"
                              : "border-[#1B1F4B]/12 bg-white/40 hover:border-[#2D5DA1]/40"
                          )}
                        >
                          <span className="block text-sm font-medium text-[#1B1F4B]">
                            {v === "telehealth" ? "Telehealth" : "In-person"}
                          </span>
                          <span className="block text-[11px] text-[#1B1F4B]/55 mt-0.5">
                            {v === "telehealth"
                              ? "Anywhere in Michigan"
                              : "Farmington Hills, MI"}
                          </span>
                          {visitType === v && (
                            <span className="absolute top-2.5 right-2.5 h-4 w-4 rounded-full bg-[#2D5DA1] flex items-center justify-center">
                              <Check className="h-2.5 w-2.5 text-white" />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bm-first" className={label}>
                        First name
                      </label>
                      <input
                        id="bm-first"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className={input}
                      />
                    </div>
                    <div>
                      <label htmlFor="bm-last" className={label}>
                        Last name
                      </label>
                      <input
                        id="bm-last"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className={input}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bm-email" className={label}>
                        Email
                      </label>
                      <input
                        id="bm-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={input}
                      />
                    </div>
                    <div>
                      <label htmlFor="bm-phone" className={label}>
                        Phone
                      </label>
                      <input
                        id="bm-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(555) 555-5555"
                        className={input}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bm-dob" className={label}>
                        Date of birth
                      </label>
                      <input
                        id="bm-dob"
                        name="dob"
                        type="date"
                        required
                        className={input}
                      />
                    </div>
                    <div>
                      <label htmlFor="bm-insurance" className={label}>
                        Insurance
                      </label>
                      <select
                        id="bm-insurance"
                        name="insurance"
                        defaultValue=""
                        className={input}
                      >
                        <option value="" disabled>
                          Select provider
                        </option>
                        {INSURANCE_PROVIDERS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                        <option value="other">Other / not listed</option>
                        <option value="self-pay">Self-pay</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bm-reason" className={label}>
                      What brings you in?
                    </label>
                    <select
                      id="bm-reason"
                      name="reason"
                      defaultValue=""
                      className={input}
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bm-notes" className={label}>
                      Anything we should know? <span className="text-[#1B1F4B]/30 normal-case tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      id="bm-notes"
                      name="notes"
                      rows={3}
                      className={cn(input, "resize-none")}
                      placeholder="Preferred days, concerns, or questions…"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs text-[#1B1F4B]/65 leading-relaxed cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 rounded border-[#1B1F4B]/25 text-[#2D5DA1] focus:ring-[#2D5DA1]/30"
                    />
                    <span>
                      I&apos;m 18 or older and agree to the privacy policy. I
                      understand this form is a request, not a confirmed
                      appointment.
                    </span>
                  </label>

                  <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-[#1B1F4B]/50">
                      We respond within 1 business day.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1B1F4B] text-[#F8F4EC] text-sm font-medium hover:bg-[#0E1238] transition-colors shadow-lg shadow-[#1B1F4B]/20"
                    >
                      Request appointment
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
