import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Patient Information",
  description:
    "Everything you need to know before your first visit to Jajo Psychiatry. Steps to get started, what to bring, intake forms, insurance, and FAQs.",
};

const steps = [
  {
    num: "01",
    title: "Schedule",
    description:
      "Call us at (734) 331-6037, book online, or fill out our contact form. Most new patients are seen within one week.",
  },
  {
    num: "02",
    title: "Complete Intake",
    description:
      "Before your first visit, you'll receive intake paperwork to complete online. This saves time on the day of your appointment.",
  },
  {
    num: "03",
    title: "First Visit",
    description:
      "Your initial psychiatric evaluation typically lasts 45-60 minutes. Your provider reviews your history and begins developing your plan.",
  },
  {
    num: "04",
    title: "Follow-up",
    description:
      "After your evaluation, we schedule follow-up visits as needed. Continuity of care with the same provider who knows your history.",
  },
];

const whatToBring = [
  "Valid photo ID (driver's license, passport, or state ID)",
  "Insurance card (front and back)",
  "Complete list of current medications with dosages",
  "Any prior psychiatric records if available",
  "List of your main concerns and questions",
  "Any recent lab work or test results",
];

const faqs = [
  {
    question: "How quickly can I get my first appointment?",
    answer:
      "Most new patients are seen within one week of reaching out. Same-day or next-day appointments are sometimes available. Call (734) 331-6037 to check current openings.",
  },
  {
    question: "Do I need a referral from my primary care doctor?",
    answer:
      "Most insurance plans do not require a referral. Some HMO plans may. We can help verify any referral requirements when you schedule.",
  },
  {
    question: "What should I expect at my first visit?",
    answer:
      "An initial evaluation typically lasts 45-60 minutes. Your psychiatrist will review your history, discuss current symptoms, and work with you to develop a personalized treatment plan.",
  },
  {
    question: "Can I have my first visit via telehealth?",
    answer:
      "Yes. First-time evaluations can be conducted via telepsychiatry for patients anywhere in Michigan, following the same thorough clinical process as in-person visits.",
  },
  {
    question: "What if I've never seen a psychiatrist before?",
    answer:
      "That's completely okay. Many of our patients are new to psychiatric care. We'll walk you through the process and answer any questions you have.",
  },
  {
    question: "How much does a first visit cost?",
    answer:
      "Costs depend on your insurance plan and deductible. When you schedule, we verify your benefits and let you know what to expect for out-of-pocket costs.",
  },
];

export default function NewPatientsPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1B1F4B]">
      <PageHero
        breadcrumbs={[{ name: "New Patients", href: "/new-patients" }]}
        eyebrow="Getting Started"
        title="Your first visit,"
        titleEm="made simple."
        description="Everything you need to know before your first appointment. Most new patients are seen within one week."
        image="/images/ai/office-detail.jpg"
      />

      {/* Quick actions */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href={PRACTICE.bookingUrl}
              className="flex items-center justify-between bg-[#1B1F4B] text-[#F8F4EC] rounded-2xl p-8 hover:bg-[#0E1238] transition-colors"
            >
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#4DC9F6] mb-2">
                  — Book Online
                </p>
                <p className="font-editorial text-2xl">Schedule your visit</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-[#4DC9F6]" />
            </Link>
            <a
              href={PRACTICE.patientFormsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#EADCC2] text-[#1B1F4B] rounded-2xl p-8 hover:bg-[#D4C4A8] transition-colors"
            >
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#2D5DA1] mb-2">
                  — Intake Paperwork
                </p>
                <p className="font-editorial text-2xl">Complete forms</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-[#2D5DA1]" />
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
              — The Process
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              Four steps to<br />
              <em className="italic text-[#2D5DA1]">get started.</em>
            </h2>
          </div>
          <div className="space-y-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#F8F4EC] p-8 lg:p-10 grid lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-2">
                  <span className="font-editorial text-3xl text-[#1B1F4B]/25">
                    {step.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-editorial text-2xl">{step.title}</h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[#1B1F4B]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
                — Preparation
              </p>
              <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05] mb-6">
                What to<br />
                <em className="italic text-[#2D5DA1]">bring.</em>
              </h2>
              <p className="text-[#1B1F4B]/60 leading-relaxed">
                A little preparation helps your first visit go smoothly. Bring
                these items (or have them ready for your telehealth visit).
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
                {whatToBring.map((item, i) => (
                  <div
                    key={item}
                    className="bg-[#F8F4EC] p-5 flex items-center gap-5"
                  >
                    <span className="font-editorial text-sm text-[#2D5DA1] w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#1B1F4B]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call us / insurance helper */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#1B1F4B] text-[#F8F4EC] rounded-[2rem] p-10 lg:p-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[#4DC9F6] mb-4">
              — Questions Before Booking?
            </p>
            <h2 className="font-editorial text-3xl lg:text-5xl leading-[1.05] mb-6">
              Give us a call.<br />
              <em className="italic text-[#4DC9F6]">We&apos;re happy to help.</em>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Our team can answer questions about insurance, services, and
              what to expect. Call (734) 331-6037 during office hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${PRACTICE.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F8F4EC] text-[#1B1F4B] text-sm font-semibold hover:bg-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PRACTICE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white text-sm hover:bg-white/5 transition-colors"
              >
                Send a Message
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Ready to take the first step?"
        subheadline="New patients are typically seen within one week. Book your first visit today."
      />
    </div>
  );
}
