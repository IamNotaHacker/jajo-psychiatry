"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Phone, MapPin, Video, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F1] via-white to-[#EDF7FA]" />

      {/* Subtle decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0E8DC]/60 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-primary font-semibold text-sm tracking-wide mb-5"
            >
              PSYCHIATRIC CARE IN MICHIGAN
            </motion.p>

            <h1 className="font-[var(--font-heading)] text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.08] text-navy mb-6">
              Your Mental Health
              <br />
              <span className="text-primary">Deserves Attention</span>
            </h1>

            <p className="text-lg text-navy/60 leading-relaxed mb-8 max-w-lg">
              Personalized, compassionate psychiatric care for ADHD, anxiety,
              depression, and bipolar disorder. In-person in Farmington Hills
              and telehealth across Michigan.
            </p>

            {/* Key highlights */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-2.5 text-sm text-navy/70">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Appointments within <strong className="text-navy">1 week</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy/70">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Video className="h-4 w-4 text-primary" />
                </div>
                <span><strong className="text-navy">Telehealth</strong> across Michigan</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button href={PRACTICE.bookingUrl} size="lg">
                <Calendar className="h-5 w-5" />
                Book an Appointment
              </Button>
              <Button
                href={`tel:${PRACTICE.phoneRaw}`}
                variant="secondary"
                size="lg"
              >
                <Phone className="h-5 w-5" />
                {PRACTICE.phone}
              </Button>
            </div>
          </motion.div>

          {/* Right — Image composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main image with rounded frame */}
            <div className="relative">
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl shadow-navy/10 border border-white/80">
                <Image
                  src="/images/office.png"
                  alt="Jajo Psychiatry office in Farmington Hills, MI"
                  width={560}
                  height={440}
                  className="w-full h-[440px] object-cover"
                  priority
                />
              </div>

              {/* Location card - bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg shadow-navy/8 border border-border/40"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Farmington Hills, MI</p>
                    <p className="text-xs text-navy/50">In-Person &amp; Telehealth</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats badge - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-primary text-white rounded-xl px-5 py-3 shadow-lg shadow-primary/20"
              >
                <p className="text-2xl font-bold leading-none">5★</p>
                <p className="text-[10px] text-white/70 mt-0.5">Patient Rated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
