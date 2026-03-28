"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[92vh] flex items-center">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
        {/* Decorative circles */}
        <div className="absolute top-[15%] right-[8%] w-80 h-80 rounded-full border border-white/[0.04]" />
        <div className="absolute top-[18%] right-[10%] w-64 h-64 rounded-full border border-white/[0.03]" />
        <div className="absolute bottom-[10%] left-[5%] w-40 h-40 rounded-full bg-primary/[0.06] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="accent-line" />
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
                Now Accepting New Patients
              </span>
            </motion.div>

            <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] text-white mb-6">
              Your Mind
              <br />
              Deserves
              <br />
              <span className="text-primary italic">Expert Care</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-3 max-w-lg">
              Personalized psychiatric treatment for ADHD, anxiety, depression,
              and bipolar disorder in Farmington Hills, MI.
            </p>

            <p className="text-base text-primary font-medium mb-10 max-w-lg flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-full" />
              New patient appointments often available within 1 week
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Button href={PRACTICE.bookingUrl} size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25">
                <Calendar className="h-5 w-5" />
                Book an Appointment
              </Button>
              <Button
                href={`tel:${PRACTICE.phoneRaw}`}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
              >
                <Phone className="h-5 w-5" />
                {PRACTICE.phone}
              </Button>
            </div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/40"
            >
              {["Insurance-Friendly", "Telehealth Available", "Same-Day Availability"].map((badge, i) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/images/office.png"
                  alt="Jajo Psychiatry office in Farmington Hills, MI"
                  width={500}
                  height={400}
                  className="w-full h-[420px] object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm font-medium">Farmington Hills, Michigan</p>
                  <p className="text-white/50 text-xs">In-Person &amp; Telehealth Across Michigan</p>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-6 -left-8 glass-card rounded-xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy">1 Week</p>
                    <p className="text-xs text-muted-foreground">Avg. New Patient Wait</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-primary rounded-xl p-4 shadow-lg"
              >
                <p className="text-white text-sm font-bold">6+ Conditions</p>
                <p className="text-white/70 text-xs">Specialized Treatment</p>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
