"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Pill, Video, Building2, Brain, Dna } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck, Pill, Video, Building2, Brain, Dna,
};

export function ServicesBar() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-wide mb-3">
            OUR SERVICES
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-navy mb-4">
            Comprehensive Psychiatric Care
          </h2>
          <p className="text-navy/50 text-lg leading-relaxed">
            From your first evaluation through ongoing treatment, we provide
            personalized care tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white p-8 hover:bg-[#FBFAF8] transition-colors h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-navy/20 group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy/45 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
