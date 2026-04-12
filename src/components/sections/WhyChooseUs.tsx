"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";
import { Calendar } from "lucide-react";

const stats = [
  { number: "1 Week", label: "Average new patient wait time", detail: "No months-long waitlists" },
  { number: "6+", label: "Conditions we specialize in", detail: "ADHD, anxiety, depression & more" },
  { number: "100%", label: "Personalized treatment plans", detail: "Tailored to your unique needs" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/50 to-navy" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.06] rounded-full -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold text-sm tracking-wide mb-4">
              WHY JAJO PSYCHIATRY
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight mb-6">
              Getting Quality Care
              <br />
              <span className="text-primary">Shouldn&apos;t Be Difficult</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              We built our practice around one idea: mental health care should be
              accessible, personal, and compassionate. No long wait times.
              No one-size-fits-all plans.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Same-day or next-day appointments sometimes available",
                "Insurance-friendly — we accept most major plans",
                "Telehealth available across all of Michigan",
                "GeneSight genetic testing for smarter prescribing",
                "Evidence-based, individualized treatment plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Button href={PRACTICE.bookingUrl} size="lg" className="bg-primary hover:bg-primary-dark shadow-lg shadow-primary/25">
              <Calendar className="h-5 w-5" />
              Schedule Your Visit
            </Button>
          </motion.div>

          {/* Right — Stats */}
          <div className="space-y-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.09] transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-bold text-primary leading-none shrink-0">
                    {stat.number}
                  </span>
                  <div>
                    <p className="text-white font-medium mb-1">{stat.label}</p>
                    <p className="text-white/40 text-sm">{stat.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
