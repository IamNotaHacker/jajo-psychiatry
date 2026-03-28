import type { Metadata } from "next";
import {
  CalendarCheck,
  Clock,
  Video,
  Shield,
  Dna,
  Brain,
  Heart,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose Jajo Psychiatry",
  description:
    "Fast scheduling, same-day availability, telehealth, insurance-friendly, GeneSight testing, ADHD evaluations, and personalized care. Discover why patients choose Jajo Psychiatry.",
};

const differentiators = [
  {
    icon: CalendarCheck,
    title: "Fast Scheduling",
    subtitle: "Appointments Within 1 Week",
    description:
      "We know that when you need psychiatric care, waiting weeks or months is not acceptable. Most new patients are seen within one week of reaching out, so you can start getting the help you need right away.",
  },
  {
    icon: Clock,
    title: "Same-Day Availability",
    subtitle: "When You Need Us Most",
    description:
      "Depending on scheduling, same-day or next-day appointments may be available. Call our office to check current openings and we will do our best to accommodate you as quickly as possible.",
  },
  {
    icon: Video,
    title: "Telehealth Available",
    subtitle: "Care From Anywhere in Michigan",
    description:
      "Access quality psychiatric care from the comfort of your home through secure video visits. Our telepsychiatry services provide the same thorough evaluations and ongoing care as in-person appointments.",
  },
  {
    icon: Shield,
    title: "Insurance-Friendly",
    subtitle: "We Accept Most Major Plans",
    description:
      "We accept Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, Priority Health, HAP, Molina Healthcare, and more. We will help verify your coverage before your visit.",
  },
  {
    icon: Dna,
    title: "GeneSight Testing",
    subtitle: "Precision Medication Selection",
    description:
      "Not sure which medication will work best for you? GeneSight pharmacogenomic testing analyzes how your genes affect your response to psychiatric medications, helping your provider choose the most effective treatment from the start.",
  },
  {
    icon: Brain,
    title: "ADHD Testing & Evaluations",
    subtitle: "Comprehensive Assessments",
    description:
      "We provide thorough ADHD evaluations using evidence-based clinical screening tools. Our comprehensive assessments help ensure an accurate diagnosis, so you receive the right treatment plan for your needs.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    subtitle: "No Cookie-Cutter Approach",
    description:
      "Every patient is unique, and your treatment should be too. We take the time to understand your specific symptoms, concerns, and goals to create a truly individualized care plan.",
  },
  {
    icon: Star,
    title: "Board-Certified Providers",
    subtitle: "Experienced Psychiatric Team",
    description:
      "Our psychiatrists are board-certified and bring extensive training and experience to every patient interaction. You can trust that you are receiving care from qualified, knowledgeable providers.",
  },
];

const comparisonPoints = [
  "New patients seen within 1 week, not months",
  "Same-day scheduling sometimes available",
  "Both telehealth and in-person options",
  "Most major insurance plans accepted",
  "GeneSight genetic testing for medication optimization",
  "Comprehensive ADHD testing and evaluations",
  "Personalized treatment plans for every patient",
  "Board-certified, experienced providers",
];

export default function WhyJajoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "About", href: "/about" },
              { name: "Why Jajo Psychiatry", href: "/about/why-jajo" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why Choose Jajo Psychiatry?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe psychiatric care should be accessible, personalized, and
              effective. Here is what sets Jajo Psychiatry apart from other
              practices.
            </p>
            <TrustBadges variant="inline" />
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From fast scheduling to advanced testing options, we go above and
              beyond to provide exceptional psychiatric care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-0.5">
                  {item.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Checklist */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The Jajo Psychiatry Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Finding the right psychiatrist can feel overwhelming. At Jajo
                Psychiatry, we have built our practice around what patients
                actually need: fast access, flexible options, and truly
                individualized care.
              </p>
              <ul className="space-y-3">
                {comparisonPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8 lg:p-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                  <Star className="h-4 w-4" />
                  Patient-Focused Care
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-foreground mb-3">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your appointment today. Most new patients are seen
                  within one week.
                </p>
                <div className="space-y-3">
                  <Button
                    href={PRACTICE.bookingUrl}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <CalendarCheck className="h-5 w-5" />
                    Book Appointment
                  </Button>
                  <Button
                    href={`tel:${PRACTICE.phoneRaw}`}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Call {PRACTICE.phone}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Or{" "}
                  <a
                    href="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    send us a message
                  </a>{" "}
                  and we will get back to you within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Mental Health Matters
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Whether you are seeking help for the first time or looking for a new
            psychiatric provider, Jajo Psychiatry is here for you. We combine
            advanced tools like GeneSight testing and comprehensive ADHD
            evaluations with genuine compassion and personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/new-patients" variant="primary" size="lg">
              New Patient Information
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/about/providers" variant="outline" size="lg">
              Meet Our Providers
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start Your Journey Today"
        subheadline="Experience personalized, evidence-based psychiatric care. New patients are often seen within one week."
      />
    </>
  );
}
