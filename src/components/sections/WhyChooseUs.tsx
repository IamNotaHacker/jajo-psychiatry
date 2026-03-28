"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Video,
  Shield,
  Heart,
  Dna,
} from "lucide-react";

const reasons = [
  {
    icon: CalendarCheck,
    title: "Appointments Within 1 Week",
    description:
      "New patients are often seen within one week — no months-long wait lists.",
  },
  {
    icon: Clock,
    title: "Same-Day Availability",
    description:
      "Same-day or next-day appointments are sometimes available for urgent needs.",
  },
  {
    icon: Video,
    title: "Telehealth Across Michigan",
    description:
      "Receive expert psychiatric care from the comfort of your home, anywhere in Michigan.",
  },
  {
    icon: Shield,
    title: "Insurance-Friendly",
    description:
      "We accept most major insurance plans and work to make care accessible.",
  },
  {
    icon: Heart,
    title: "Personalized Treatment",
    description:
      "Every patient receives an individualized care plan based on their unique needs and goals.",
  },
  {
    icon: Dna,
    title: "GeneSight Testing",
    description:
      "Genetic testing available to guide medication choices for more effective treatment.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Why Patients Choose Us
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Why Jajo Psychiatry
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe getting quality psychiatric care shouldn&apos;t be
            difficult. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white rounded-xl p-6 border border-border/50"
              >
                <div className="h-11 w-11 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
