"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQSchema } from "@/components/seo/SchemaMarkup";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("px-6 lg:px-10 py-20", className)}>
      <FAQSchema faqs={faqs} />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
              — Questions
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] mb-4">
              {title.includes("Asked") ? (
                <>
                  Frequently<br />
                  <em className="italic text-[#2D5DA1]">asked.</em>
                </>
              ) : (
                title
              )}
            </h2>
            {subtitle && (
              <p className="text-[#1B1F4B]/60 leading-relaxed max-w-md">
                {subtitle}
              </p>
            )}
          </div>

          <div className="lg:col-span-7 space-y-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="bg-[#F8F4EC]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between px-6 py-5 text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-lg lg:text-xl text-[#1B1F4B] flex-1">
                      {faq.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-[#1B1F4B]/60 transition-transform duration-200 mt-1",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-[#1B1F4B]/60 leading-relaxed text-sm max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
