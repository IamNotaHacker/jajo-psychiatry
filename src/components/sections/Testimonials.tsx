"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";
import { PRACTICE } from "@/lib/constants";

const testimonials = [
  {
    text: "The team at Jajo Psychiatry made me feel heard from day one. My treatment plan has been life-changing.",
    initials: "S.M.",
    condition: "ADHD Patient",
  },
  {
    text: "I was able to get an appointment within a week. The telehealth option made it so convenient to get the help I needed.",
    initials: "R.K.",
    condition: "Anxiety Patient",
  },
  {
    text: "GeneSight testing helped us find the right medication much faster. I finally feel like myself again.",
    initials: "A.J.",
    condition: "Depression Patient",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-wide mb-3">
            PATIENT STORIES
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-navy">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative bg-white rounded-2xl border border-border/50 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-primary/15 mb-4" />

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-navy/70 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.initials}</p>
                  <p className="text-xs text-navy/40">{t.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={PRACTICE.social.psychologyToday}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            View Our Profile on Psychology Today
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
