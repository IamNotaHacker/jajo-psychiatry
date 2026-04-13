"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { PRACTICE, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F4EC]/90 backdrop-blur-md border-b border-[#1F1A14]/8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/jajo-logo.webp"
              alt="Jajo Psychiatry"
              width={240}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in item ? setOpenDropdown(item.label) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 py-2 text-sm text-[#1F1A14]/60 hover:text-[#1F1A14] transition-colors"
                  )}
                >
                  {item.label}
                  {"children" in item && (
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  )}
                </Link>

                {"children" in item && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-[#F8F4EC] rounded-2xl shadow-2xl shadow-[#1F1A14]/10 border border-[#1F1A14]/8 py-3 z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center justify-between px-5 py-2.5 text-sm text-[#1F1A14]/70 hover:text-[#1F1A14] hover:bg-[#EADCC2]/40 transition-colors"
                      >
                        {child.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${PRACTICE.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm text-[#1F1A14]/60 hover:text-[#1F1A14] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {PRACTICE.phone}
            </a>
            <Link
              href={PRACTICE.bookingUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
            >
              Book Visit
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#1F1A14]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-[#F8F4EC] border-t border-[#1F1A14]/8"
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-base font-editorial text-[#1F1A14] rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {"children" in item && (
                    <div className="ml-4 space-y-0.5 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-1.5 text-sm text-[#1F1A14]/60 hover:text-[#1F1A14] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#1F1A14]/10 mt-4">
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#1F1A14]/20 text-sm text-[#1F1A14]"
                >
                  <Phone className="h-4 w-4" />
                  Call {PRACTICE.phone}
                </a>
                <Link
                  href={PRACTICE.bookingUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
