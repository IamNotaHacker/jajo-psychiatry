"use client";

import { Phone, Calendar } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_16px_rgba(10,16,74,0.08)]">
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href={`tel:${PRACTICE.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-navy hover:bg-primary-light transition-colors"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call Now
        </a>
        <a
          href={PRACTICE.bookingUrl}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors"
        >
          <Calendar className="h-4 w-4" />
          Book Appointment
        </a>
      </div>
    </div>
  );
}
