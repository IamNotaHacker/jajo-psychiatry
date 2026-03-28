"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const conditions = [
  { slug: "adhd", title: "ADHD", image: "/images/conditions/adhd.jpg", description: "Expert evaluation and treatment for attention, focus, and hyperactivity challenges." },
  { slug: "anxiety", title: "Anxiety", image: "/images/conditions/anxiety.jpg", description: "Compassionate treatment for generalized anxiety, social anxiety, and panic disorder." },
  { slug: "depression", title: "Depression", image: "/images/conditions/depression.jpg", description: "Personalized medication management and care for depression and mood disorders." },
  { slug: "bipolar-disorder", title: "Bipolar Disorder", image: "/images/conditions/bipolar.jpg", description: "Comprehensive treatment for mood stabilization and ongoing monitoring." },
  { slug: "ptsd", title: "PTSD", image: "/images/conditions/ptsd.jpg", description: "Evidence-based treatment for trauma-related conditions." },
  { slug: "schizophrenia", title: "Schizophrenia", image: "/images/conditions/schizophrenia.jpg", description: "Ongoing psychiatric care and medication management." },
];

export function ConditionsGrid() {
  return (
    <section className="py-20 sm:py-28 bg-navy noise-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
                Specialized Treatment
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Conditions We Treat
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-sm leading-relaxed">
            Our psychiatrists specialize in diagnosing and treating a range of mental health conditions with compassion and clinical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((condition, i) => (
            <motion.div
              key={condition.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/conditions/${condition.slug}`}
                className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={condition.image}
                  alt={`${condition.title} treatment`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-1">
                    {condition.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">
                    {condition.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn About Treatment
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
