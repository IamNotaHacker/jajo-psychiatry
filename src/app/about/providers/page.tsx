import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  Heart,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Providers",
  description:
    "Meet the board-certified psychiatrists at Jajo Psychiatry. Our experienced providers offer compassionate, evidence-based psychiatric care in Farmington Hills, MI.",
};

const providers = [
  {
    name: "Dr. Jane Doe, MD",
    title: "Board-Certified Psychiatrist",
    credentials: [
      "Doctor of Medicine (MD)",
      "Board-Certified in Psychiatry (ABPN)",
      "Residency in Psychiatry",
    ],
    specialties: [
      "ADHD in Adults",
      "Anxiety Disorders",
      "Depression",
      "Bipolar Disorder",
      "Medication Management",
      "GeneSight Pharmacogenomic Testing",
    ],
    approach:
      "Dr. Doe takes a collaborative, patient-centered approach to psychiatric care. She believes in combining evidence-based medication management with a thorough understanding of each patient's unique circumstances. With years of experience in adult psychiatry, she specializes in creating personalized treatment plans that address the full spectrum of her patients' mental health needs.",
    education: [
      "MD, University of Michigan Medical School",
      "Psychiatry Residency, University of Michigan Health System",
      "B.S. in Neuroscience, University of Michigan",
    ],
    memberships: [
      "American Psychiatric Association (APA)",
      "Michigan Psychiatric Society",
    ],
  },
  {
    name: "Dr. John Smith, DO",
    title: "Board-Certified Psychiatrist",
    credentials: [
      "Doctor of Osteopathic Medicine (DO)",
      "Board-Certified in Psychiatry (ABPN)",
      "Residency in Psychiatry",
    ],
    specialties: [
      "PTSD",
      "Anxiety Disorders",
      "Schizophrenia",
      "Bipolar Disorder",
      "Telepsychiatry",
      "ADHD Testing & Evaluations",
    ],
    approach:
      "Dr. Smith brings a holistic, whole-person approach to psychiatric treatment. He is committed to helping patients understand their conditions and feel empowered in their treatment journey. His practice philosophy emphasizes open communication, shared decision-making, and leveraging the latest advances in psychiatric medicine to achieve the best possible outcomes.",
    education: [
      "DO, Michigan State University College of Osteopathic Medicine",
      "Psychiatry Residency, Henry Ford Health System",
      "B.A. in Psychology, Wayne State University",
    ],
    memberships: [
      "American Psychiatric Association (APA)",
      "American Osteopathic Association (AOA)",
    ],
  },
];

export default function ProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "About", href: "/about" },
              { name: "Our Providers", href: "/about/providers" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Providers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our board-certified psychiatrists combine clinical expertise with
              genuine compassion to deliver the highest quality psychiatric care.
              Get to know the team behind Jajo Psychiatry.
            </p>
          </div>
        </div>
      </section>

      {/* Provider Bios */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {providers.map((provider, index) => (
              <div
                key={provider.name}
                className="grid lg:grid-cols-3 gap-8 lg:gap-12"
              >
                {/* Photo Placeholder */}
                <div className="lg:col-span-1">
                  <div className="bg-muted rounded-2xl aspect-[3/4] flex items-center justify-center sticky top-8">
                    <div className="text-center">
                      <div className="h-20 w-20 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary">
                          {provider.name
                            .split(" ")
                            .filter((n) => n !== "Dr.")
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="lg:col-span-2">
                  <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {provider.name}
                  </h2>
                  <p className="text-primary font-medium mb-4">
                    {provider.title}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {provider.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="inline-flex items-center gap-1.5 bg-primary-light text-primary text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <Award className="h-3 w-3" />
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Approach */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      Approach to Care
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.approach}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-3">
                      Specialties
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {provider.specialties.map((specialty) => (
                        <div
                          key={specialty}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Education & Training
                    </h3>
                    <ul className="space-y-2">
                      {provider.education.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Memberships */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Professional Memberships
                    </h3>
                    <ul className="space-y-2">
                      {provider.memberships.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      href={PRACTICE.bookingUrl}
                      variant="primary"
                      size="md"
                    >
                      <Calendar className="h-4 w-4" />
                      Book with {provider.name.split(",")[0].replace("Dr. ", "")}
                    </Button>
                  </div>
                </div>

                {/* Divider */}
                {index < providers.length - 1 && (
                  <div className="lg:col-span-3">
                    <hr className="border-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Accepting New Patients
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our providers are currently accepting new patients. Appointments are
            often available within one week, and same-day scheduling may be
            available depending on openings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={PRACTICE.bookingUrl} variant="primary" size="lg">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button href="/new-patients" variant="outline" size="lg">
              New Patient Information
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  );
}
