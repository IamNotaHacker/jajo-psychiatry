import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ClipboardList,
  Calendar,
  Stethoscope,
  FileText,
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Shield,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Patient Information",
  description:
    "Everything you need to know before your first visit to Jajo Psychiatry. Steps to get started, what to bring, intake forms, insurance information, and FAQs.",
};

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Schedule Your Appointment",
    description:
      "Call us at (734) 331-6037, book online, or fill out our contact form. Our team will help you find a convenient appointment time. Most new patients are seen within one week.",
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "Complete Intake Forms",
    description:
      "Before your first visit, you will receive intake paperwork to complete. You can fill out forms online ahead of time to save time on the day of your appointment.",
    hasLink: true,
  },
  {
    number: "3",
    icon: Stethoscope,
    title: "Attend Your First Visit",
    description:
      "Your initial psychiatric evaluation typically lasts 45-60 minutes. Your provider will review your history, discuss your concerns, and begin developing a personalized treatment plan.",
  },
  {
    number: "4",
    icon: Calendar,
    title: "Follow-Up Care",
    description:
      "After your initial evaluation, your provider will schedule follow-up appointments to monitor your progress, adjust medications if needed, and ensure your treatment plan is working effectively.",
  },
];

const whatToBring = [
  "Valid photo ID (driver's license, state ID, or passport)",
  "Insurance card (front and back)",
  "List of current medications, including dosages",
  "Relevant medical records or previous psychiatric evaluations",
  "Completed intake forms (if not submitted online)",
  "List of questions or concerns you would like to discuss",
  "Payment for any copay or self-pay amount",
];

const firstVisitDetails = [
  {
    icon: Clock,
    title: "Duration",
    detail: "45-60 minutes for initial evaluation",
  },
  {
    icon: FileText,
    title: "What We Cover",
    detail: "Medical history, symptoms, concerns, and treatment goals",
  },
  {
    icon: CreditCard,
    title: "Payment",
    detail: "Copay or self-pay collected at time of visit",
  },
  {
    icon: Shield,
    title: "Insurance",
    detail: "Most major plans accepted; we verify before your visit",
  },
];

const newPatientFAQs = [
  {
    question: "How quickly can I be seen as a new patient?",
    answer:
      "Most new patients are seen within one week of contacting our office. Same-day or next-day appointments may be available depending on scheduling. Call us at (734) 331-6037 to check current availability.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your first visit is a comprehensive psychiatric evaluation lasting 45-60 minutes. Your provider will review your medical and psychiatric history, discuss your current symptoms and concerns, and work with you to develop a personalized treatment plan. This may include medication recommendations, follow-up scheduling, and additional testing if appropriate.",
  },
  {
    question: "Do I need a referral from my primary care doctor?",
    answer:
      "In most cases, a referral is not required. However, some insurance plans may require a referral for specialist visits. We recommend checking with your insurance provider or calling our office, and we can help you determine if a referral is needed.",
  },
  {
    question: "Can I do my first appointment via telehealth?",
    answer:
      "Yes, we offer telepsychiatry for initial evaluations and follow-up visits. Virtual appointments are conducted through a secure video platform and are available for patients located anywhere in Michigan.",
  },
  {
    question: "How do I submit my intake forms?",
    answer:
      "You can complete your intake forms online before your appointment using our secure patient portal. We will provide you with a link when you schedule your appointment. Completing forms in advance helps us make the most of your appointment time.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient who may be waiting for care. Please call our office at (734) 331-6037 to make any changes.",
  },
  {
    question: "Do you prescribe medications at the first visit?",
    answer:
      "In many cases, your provider may recommend and prescribe medication at your initial evaluation if it is clinically appropriate. Your provider will discuss all treatment options with you, including potential benefits and side effects, so you can make an informed decision together.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, Priority Health, HAP, Molina Healthcare, and more. Visit our Insurance & Payment page or call our office to verify your specific coverage.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "New Patient Information", href: "/new-patients" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              New Patient Information
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to Jajo Psychiatry. We are glad you are here. Below you
              will find everything you need to know to prepare for your first
              visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={PRACTICE.bookingUrl} variant="primary" size="lg">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button
                href={PRACTICE.patientFormsUrl}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5" />
                Patient Intake Forms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Get Started */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Getting Started Is Easy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow these simple steps to schedule and prepare for your first
              appointment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl border border-border p-6 relative"
              >
                <div className="absolute -top-3 -left-1 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 mt-2">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {step.hasLink && (
                  <a
                    href={PRACTICE.patientFormsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover:underline"
                  >
                    Complete Forms Online
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What to Bring to Your First Visit
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Being prepared helps us make the most of your appointment time.
                Please bring the following items to your initial evaluation.
              </p>
              <ul className="space-y-3">
                {whatToBring.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-foreground mb-6">
                Your First Visit at a Glance
              </h3>
              <div className="space-y-5">
                {firstVisitDetails.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Quick Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Insurance & Payment
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            We accept most major insurance plans and will help verify your
            coverage before your first visit. Self-pay options are also
            available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/insurance" variant="primary" size="md">
              View Insurance Details
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={`tel:${PRACTICE.phoneRaw}`}
              variant="outline"
              size="md"
            >
              <Phone className="h-4 w-4" />
              Call to Verify Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="New Patient FAQs"
        subtitle="Common questions about getting started at Jajo Psychiatry."
        faqs={newPatientFAQs}
        className="bg-muted"
      />

      <CTASection
        headline="Ready to Get Started?"
        subheadline="Schedule your first appointment today. Most new patients are seen within one week."
      />
    </>
  );
}
