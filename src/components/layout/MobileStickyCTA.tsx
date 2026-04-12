"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#F8F4EC] border-t border-[#1F1A14]/10">
      <div className="grid grid-cols-2 divide-x divide-[#1F1A14]/10">
        <a
          href={`tel:${PRACTICE.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#1F1A14] hover:bg-[#EADCC2]/40 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={PRACTICE.bookingUrl}
          className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#F8F4EC] bg-[#1F1A14] hover:bg-[#3D2E1F] transition-colors"
        >
          Book Visit
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
