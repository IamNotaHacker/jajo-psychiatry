import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Users,
  Video,
  Building2,
  Brain,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Learn about Jajo Psychiatry in Farmington Hills, MI. We provide personalized, evidence-based psychiatric care through in-person and telehealth appointments.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is tailored to your unique needs, goals, and lifestyle. We take the time to listen and understand what matters most to you.",
  },
  {
    icon: Brain,
    title: "Evidence-Based Treatment",
    description:
      "Our approach is grounded in the latest psychiatric research and clinical guidelines, ensuring you receive the most effective care available.",
  },
  {
    icon: ShieldCheck,
    title: "Compassionate Approach",
    description:
      "We create a welcoming, judgment-free environment where you can feel comfortable discussing your mental health concerns openly.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We believe in working together with our patients to develop treatment plans that align with your values and preferences.",
  },
];

const services = [
  {
    icon: Video,
    title: "Telepsychiatry",
    description:
      "Convenient virtual appointments from anywhere in Michigan through secure video visits.",
  },
  {
    icon: Building2,
    title: "In-Person Visits",
    description:
      "Face-to-face psychiatric care at our comfortable Farmington Hills office.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Jajo Psychiatry
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Jajo Psychiatry, we are dedicated to providing personalized,
              evidence-based psychiatric care to adults throughout Michigan. Our
              practice combines clinical expertise with genuine compassion to
              help you achieve lasting mental wellness.
            </p>
            <TrustBadges variant="inline" count={4} />
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                <Heart className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Personalized Psychiatric Care That Puts You First
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We founded Jajo Psychiatry with a clear mission: to make
                high-quality psychiatric care accessible, personalized, and
                effective. We understand that every patient is unique, and
                cookie-cutter approaches simply do not work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our philosophy centers on building genuine therapeutic
                relationships, using the latest evidence-based treatments, and
                empowering patients to take an active role in their mental
                health. Whether you need help managing ADHD, anxiety,
                depression, or another condition, we are here to support you
                every step of the way.
              </p>
              <Button href="/about/providers" variant="primary" size="md">
                Meet Our Providers
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Practice photo placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What Guides Our Care
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values shape every interaction and treatment decision at
              Jajo Psychiatry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-border p-6"
              >
                <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Person + Telehealth */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Care on Your Terms
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the appointment format that works best for your schedule
              and comfort level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-border p-8 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-1">
              Located at{" "}
              <span className="text-foreground font-medium">
                {PRACTICE.address.full}
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              {PRACTICE.hours.weekdays} &bull; {PRACTICE.hours.weekends}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/about/providers"
              className="bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                Our Providers
              </h3>
              <p className="text-sm text-muted-foreground">
                Meet our board-certified psychiatric team.
              </p>
            </Link>
            <Link
              href="/about/why-jajo"
              className="bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <ShieldCheck className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                Why Jajo Psychiatry
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover what sets our practice apart.
              </p>
            </Link>
            <Link
              href="/new-patients"
              className="bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <ArrowRight className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                New Patients
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn what to expect at your first visit.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
