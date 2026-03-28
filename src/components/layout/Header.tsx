"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/60 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PRACTICE.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="h-3 w-3" />
              {PRACTICE.phone}
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/60">Farmington Hills, MI</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span className="hidden md:inline">
              <span className="text-primary font-medium">Telehealth</span> Available Across Michigan
            </span>
            <span className="hidden lg:inline text-white/30">|</span>
            <span className="hidden lg:inline">
              New Patients Welcome
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.gif"
              alt="Jajo Psychiatry"
              width={140}
              height={77}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
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
                    "flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-navy/70 hover:text-primary transition-colors rounded-md"
                  )}
                >
                  {item.label}
                  {"children" in item && (
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  )}
                </Link>

                {"children" in item && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-xl shadow-navy/8 border border-border/60 py-2 z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-navy/70 hover:text-primary hover:bg-primary-light/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PRACTICE.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-medium text-navy/70 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PRACTICE.phone}
            </a>
            <Button href={PRACTICE.bookingUrl} size="sm" className="bg-primary hover:bg-primary-dark shadow-sm shadow-primary/20">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-navy"
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
            className="lg:hidden overflow-hidden bg-white border-t border-border/60"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-base font-medium text-navy/80 hover:text-primary hover:bg-primary-light/50 rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {"children" in item && (
                    <div className="ml-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <Button
                  href={`tel:${PRACTICE.phoneRaw}`}
                  variant="outline"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call {PRACTICE.phone}
                </Button>
                <Button href={PRACTICE.bookingUrl} className="w-full bg-primary hover:bg-primary-dark">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
