"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { PRACTICE } from "@/lib/constants";
import { useBooking } from "@/components/ui/BookingProvider";

export function MobileStickyCTA() {
  const { open } = useBooking();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden bg-[#F8F4EC] border-t border-[#1B1F4B]/10"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 divide-x divide-[#1B1F4B]/10">
        <a
          href={`tel:${PRACTICE.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#1B1F4B] hover:bg-[#E3F0FA] transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <button
          type="button"
          onClick={open}
          className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#F8F4EC] bg-[#1B1F4B] hover:bg-[#0E1238] transition-colors"
        >
          Book Visit
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
