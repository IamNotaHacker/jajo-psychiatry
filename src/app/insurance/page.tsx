import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE, INSURANCE_PROVIDERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insurance & Payment",
  description:
    "Jajo Psychiatry accepts Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, and more. Self-pay options available.",
};

const verifySteps = [
  {
    num: "01",
    title: "Contact our office",
    description:
      "Call us at (734) 331-6037 or provide your insurance information when scheduling online.",
  },
  {
    num: "02",
    title: "We verify benefits",
    description:
      "We contact your insurance provider to verify coverage, copay, and check for any pre-authorization requirements.",
  },
  {
    num: "03",
    title: "Know before you go",
    description:
      "Before your appointment, we let you know your expected out-of-pocket costs — no surprises.",
  },
];

const insuranceFAQs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, Priority Health, HAP, Molina Healthcare, and more. Call (734) 331-6037 to check your specific plan.",
  },
  {
    question: "How do I verify my insurance coverage?",
    answer:
      "Call our office at (734) 331-6037 with your insurance information. Our team will verify your benefits and let you know about copays, coinsurance, and deductibles.",
  },
  {
    question: "What if my insurance is not accepted?",
    answer:
      "We offer competitive self-pay rates and can provide a superbill (detailed receipt) you can submit to your insurance for potential out-of-network reimbursement.",
  },
  {
    question: "Do you offer self-pay options?",
    answer:
      "Yes, for patients without insurance or who prefer not to use their insurance. Contact us for current self-pay rates. Payment is collected at the time of your visit.",
  },
  {
    question: "When is payment due?",
    answer:
      "Copays and self-pay amounts are collected at the time of your visit. We accept cash, check, and all major credit and debit cards.",
  },
  {
    question: "Does insurance cover telehealth?",
    answer:
      "Most insurance plans cover telepsychiatry appointments the same as in-person visits. We verify your telehealth coverage when we check your benefits.",
  },
  {
    question: "Does insurance cover GeneSight testing?",
    answer:
      "Many plans cover GeneSight pharmacogenomic testing. GeneSight also offers a financial assistance program for eligible patients.",
  },
];

export default function InsurancePage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      <PageHero
        breadcrumbs={[{ name: "Insurance", href: "/insurance" }]}
        eyebrow="Insurance-Friendly"
        title="We accept most"
        titleEm="major plans."
        description="Our team helps verify your coverage before your first visit so you know exactly what to expect."
        image="/images/ai/insurance-hero.jpg"
      />

      {/* Accepted plans */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
              — Accepted Plans
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              Most major<br />
              <em className="italic text-[#8B6F4E]">insurance accepted.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {INSURANCE_PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="bg-[#EADCC2]/50 rounded-2xl p-5 text-center"
              >
                <p className="text-sm font-medium text-[#1F1A14]">
                  {provider}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#F8F4EC] border border-[#1F1A14]/10 rounded-2xl p-6">
            <p className="text-[#1F1A14]/70 text-sm">
              Don&apos;t see your plan?{" "}
              <span className="text-[#1F1A14] font-medium">
                Call us to check your coverage.
              </span>
            </p>
            <a
              href={`tel:${PRACTICE.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {PRACTICE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Verification steps */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
              — Simple Process
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              How to verify<br />
              <em className="italic text-[#8B6F4E]">your coverage.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {verifySteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#EADCC2]/50 rounded-2xl p-8"
              >
                <span className="font-editorial text-3xl text-[#1F1A14]/30 block mb-6">
                  {step.num}
                </span>
                <h3 className="font-editorial text-2xl mb-2">{step.title}</h3>
                <p className="text-sm text-[#1F1A14]/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-pay block */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1F1A14] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-4">
                  — Self-Pay
                </p>
                <h2 className="font-editorial text-3xl lg:text-5xl leading-[1.05] mb-6">
                  No insurance?<br />
                  <em className="italic text-[#E8C9A0]">No problem.</em>
                </h2>
                <p className="text-white/60 leading-relaxed mb-8 max-w-xl">
                  We believe everyone deserves access to quality psychiatric
                  care. If you don&apos;t have insurance or prefer not to use
                  it, we offer competitive self-pay rates for all services.
                </p>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E8C9A0] text-[#1F1A14] text-sm font-semibold hover:bg-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call for Self-Pay Rates
                </a>
              </div>
              <div className="lg:col-span-5 space-y-4">
                {[
                  "Transparent, competitive pricing",
                  "Superbills for out-of-network reimbursement",
                  "Cash, check, and major credit cards",
                  "Payment collected at time of service",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-3 border-b border-white/10"
                  >
                    <span className="text-[#E8C9A0] text-sm">—</span>
                    <span className="text-sm text-white/80 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={insuranceFAQs} />

      <CTASection
        headline="Questions about your coverage?"
        subheadline="Our team is happy to help verify your insurance and discuss payment options."
      />
    </div>
  );
}
