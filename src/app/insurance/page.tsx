import type { Metadata } from "next";
import {
  Shield,
  Phone,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE, INSURANCE_PROVIDERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insurance & Payment",
  description:
    "Jajo Psychiatry accepts Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, and more. Learn about insurance, self-pay options, and billing.",
};

const verifySteps = [
  {
    number: "1",
    title: "Contact Our Office",
    description:
      "Call us at (734) 331-6037 or provide your insurance information when scheduling online. Our team will handle the rest.",
  },
  {
    number: "2",
    title: "We Verify Your Benefits",
    description:
      "We will contact your insurance provider to verify your coverage, confirm your copay amount, and check for any pre-authorization requirements.",
  },
  {
    number: "3",
    title: "Know Before You Go",
    description:
      "Before your appointment, we will let you know your expected out-of-pocket costs so there are no surprises at your visit.",
  },
];

const insuranceFAQs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, Priority Health, HAP, Molina Healthcare, and several other plans. If your plan is not listed, please call our office at (734) 331-6037 to check, as we are continually adding new insurance providers.",
  },
  {
    question: "How do I verify my insurance coverage?",
    answer:
      "The easiest way is to call our office at (734) 331-6037 with your insurance information. Our team will verify your benefits and let you know about any copays, coinsurance, or deductible amounts. You can also contact your insurance company directly and ask about coverage for outpatient psychiatric services.",
  },
  {
    question: "What if my insurance is not accepted?",
    answer:
      "If we do not accept your specific plan, we offer competitive self-pay rates. We can also provide you with a superbill (detailed receipt) that you can submit to your insurance company for potential out-of-network reimbursement.",
  },
  {
    question: "Do you offer self-pay options?",
    answer:
      "Yes, we offer self-pay options for patients without insurance or who prefer not to use their insurance. Please contact our office for current self-pay rates. Payment is collected at the time of your visit.",
  },
  {
    question: "When is payment due?",
    answer:
      "Copays and self-pay amounts are collected at the time of your visit. We accept cash, check, and all major credit and debit cards.",
  },
  {
    question: "Will I have a copay?",
    answer:
      "Copay amounts depend on your specific insurance plan. When we verify your insurance before your visit, we will let you know your expected copay amount so you can be prepared.",
  },
  {
    question: "Does insurance cover telehealth appointments?",
    answer:
      "Most insurance plans cover telepsychiatry appointments the same as in-person visits. We will verify your telehealth coverage when we check your benefits.",
  },
  {
    question: "Does insurance cover GeneSight testing?",
    answer:
      "Many insurance plans cover GeneSight pharmacogenomic testing, and GeneSight also offers a financial assistance program for eligible patients. Your provider can discuss coverage and cost options with you during your appointment.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, personal checks, and all major credit and debit cards (Visa, Mastercard, American Express, Discover).",
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Insurance & Payment", href: "/insurance" }]}
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Shield className="h-4 w-4" />
              Insurance-Friendly Practice
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Insurance & Payment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We accept most major insurance plans and offer self-pay options.
              Our team will help verify your coverage before your first visit so
              you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Accepted Insurance Plans
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with most major insurance providers. If you do not see your
              plan listed below, please call us to check.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {INSURANCE_PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="bg-white rounded-xl border border-border p-5 text-center flex items-center justify-center"
              >
                <div>
                  <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">
                    {provider}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Don&apos;t see your plan?{" "}
              <span className="text-foreground font-medium">
                Call us to check your coverage.
              </span>
            </p>
            <Button
              href={`tel:${PRACTICE.phoneRaw}`}
              variant="outline"
              size="md"
            >
              <Phone className="h-4 w-4" />
              Call {PRACTICE.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* How to Verify */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              How to Verify Your Insurance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We make the insurance verification process simple. Here is how it
              works.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {verifySteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl border border-border p-6 text-center relative"
              >
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Pay */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <CreditCard className="h-4 w-4" />
                Self-Pay Options
              </div>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
                No Insurance? No Problem.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe everyone deserves access to quality psychiatric care.
                If you do not have insurance or prefer not to use it, we offer
                competitive self-pay rates for all of our services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Transparent, competitive pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Superbills provided for out-of-network reimbursement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Cash, check, and all major credit cards accepted
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Payment collected at time of service
                  </span>
                </li>
              </ul>
              <Button
                href={`tel:${PRACTICE.phoneRaw}`}
                variant="primary"
                size="md"
              >
                <Phone className="h-4 w-4" />
                Call for Self-Pay Rates
              </Button>
            </div>
            <div className="bg-white rounded-xl border border-border p-8">
              <HelpCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Out-of-Network Benefits
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we are not in-network with your insurance plan, you may still
                have out-of-network benefits that cover a portion of your costs.
                Here is how it works:
              </p>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  You pay the self-pay rate at your visit.
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  We provide a superbill with all required codes and details.
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  You submit the superbill to your insurance for reimbursement.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Insurance & Payment FAQs"
        subtitle="Common questions about insurance coverage, billing, and payment options."
        faqs={insuranceFAQs}
        className="bg-muted"
      />

      <CTASection
        headline="Questions About Your Coverage?"
        subheadline="Our team is happy to help verify your insurance and discuss payment options. Give us a call."
        variant="light"
      />
    </>
  );
}
