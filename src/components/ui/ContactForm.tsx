"use client";

import { useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { CONTACT_REASONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  compact?: boolean;
}

export function ContactForm({ className, compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-[#1F1A14]/15 bg-[#F8F4EC] px-5 py-3.5 text-sm text-[#1F1A14] placeholder:text-[#1F1A14]/30 focus:border-[#1F1A14] focus:ring-1 focus:ring-[#1F1A14] outline-none transition-colors";

  const labelClass =
    "block text-xs tracking-[0.15em] uppercase text-[#1F1A14]/50 mb-2";

  if (submitted) {
    return (
      <div
        className={cn(
          "bg-[#EADCC2] rounded-2xl p-10 text-center",
          className
        )}
      >
        <div className="h-12 w-12 rounded-full bg-[#1F1A14] flex items-center justify-center mx-auto mb-4">
          <Send className="h-5 w-5 text-[#E8C9A0]" />
        </div>
        <h3 className="font-editorial text-2xl text-[#1F1A14] mb-2">
          Thank you.
        </h3>
        <p className="text-[#1F1A14]/60 text-sm">
          We&apos;ve received your message and will get back to you within 1
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div
        className={cn(
          "grid gap-5",
          compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        )}
      >
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClass}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClass}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div
        className={cn(
          "grid gap-5",
          compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        )}
      >
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className={labelClass}>
          Reason for Inquiry
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Choose one...
          </option>
          {CONTACT_REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          className={cn(inputClass, "resize-none")}
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
      >
        Send Message
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
