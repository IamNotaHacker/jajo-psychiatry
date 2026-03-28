import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Psychiatric Services | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Explore our full range of psychiatric services in Farmington Hills, Michigan, including psychiatric evaluations, medication management, telepsychiatry, ADHD testing, and GeneSight testing.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Psychiatric Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            At Jajo Psychiatry in Farmington Hills, Michigan, we offer a
            comprehensive range of psychiatric services designed to meet your
            individual mental health needs. Whether you are seeking an initial
            evaluation, ongoing medication management, or the convenience of
            virtual care, our experienced team is here to help.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Personalized Psychiatric Care in Michigan
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Every patient who walks through our doors in Farmington Hills
              receives a treatment plan tailored to their unique circumstances.
              We combine thorough clinical assessment with the latest
              evidence-based approaches to ensure you receive the highest
              standard of psychiatric care.
            </p>
            <p className="text-muted-foreground text-lg">
              Our practice serves patients across Michigan through both in-person
              visits at our Farmington Hills office and telepsychiatry
              appointments. We accept most major insurance plans and are
              committed to making quality psychiatric care accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            Conditions We Treat
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            Our services address a wide range of mental health conditions.
            Learn more about the conditions we specialize in.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "ADHD", href: "/conditions/adhd" },
              { name: "Anxiety Disorders", href: "/conditions/anxiety" },
              { name: "Depression", href: "/conditions/depression" },
              { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
              { name: "PTSD", href: "/conditions/ptsd" },
              { name: "Schizophrenia", href: "/conditions/schizophrenia" },
            ].map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="block bg-white border border-border rounded-lg p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 text-foreground font-medium hover:text-primary"
              >
                {condition.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        subheadline="Contact Jajo Psychiatry in Farmington Hills to schedule your first appointment."
      />
    </>
  );
}
