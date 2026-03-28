import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { InsuranceBanner } from "@/components/sections/InsuranceBanner";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jajo Psychiatry in Farmington Hills, MI. Call (734) 331-6037 or send us a message. Located at 31393 West 13 Mile Road, Suite 105.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: PRACTICE.phone,
    href: `tel:${PRACTICE.phoneRaw}`,
    detail: "Call to schedule or ask questions",
  },
  {
    icon: Mail,
    label: "Email",
    value: PRACTICE.email,
    href: `mailto:${PRACTICE.email}`,
    detail: "We respond within 1 business day",
  },
  {
    icon: MapPin,
    label: "Address",
    value: PRACTICE.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address.full)}`,
    detail: "Farmington Hills, Michigan",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday: 9:00 AM - 5:00 PM",
    href: undefined,
    detail: "Saturday - Sunday: Closed",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <div className="max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are here to help. Reach out to schedule an appointment, ask a
              question, or learn more about our services. Our team responds
              within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we will get back to you within one
                business day.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm mb-0.5">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.label === "Address" ? "_blank" : undefined
                          }
                          rel={
                            item.label === "Address"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-primary hover:underline font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <Button
                  href={PRACTICE.bookingUrl}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment Online
                </Button>
                <Button
                  href={`tel:${PRACTICE.phoneRaw}`}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call {PRACTICE.phone}
                </Button>
                <Button
                  href={PRACTICE.patientFormsUrl}
                  variant="ghost"
                  size="md"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Patient Intake Forms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Our Location
            </h2>
            <p className="text-muted-foreground text-lg">
              Conveniently located in Farmington Hills, Michigan.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="aspect-[16/7] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">
                  Google Maps Embed
                </p>
                <p className="text-sm text-muted-foreground/60">
                  {PRACTICE.address.full}
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">
                  Jajo Psychiatry
                </h3>
                <p className="text-sm text-muted-foreground">
                  {PRACTICE.address.street}, {PRACTICE.address.suite}
                </p>
                <p className="text-sm text-muted-foreground">
                  {PRACTICE.address.city}, {PRACTICE.address.state}{" "}
                  {PRACTICE.address.zip}
                </p>
              </div>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address.full)}`}
                variant="outline"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Office Hours
              </h3>
              <p className="text-sm text-muted-foreground">
                {PRACTICE.hours.weekdays}
              </p>
              <p className="text-sm text-muted-foreground">
                {PRACTICE.hours.weekends}
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Phone
              </h3>
              <a
                href={`tel:${PRACTICE.phoneRaw}`}
                className="text-sm text-primary hover:underline font-medium"
              >
                {PRACTICE.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Call to schedule or ask questions
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Email
              </h3>
              <a
                href={`mailto:${PRACTICE.email}`}
                className="text-sm text-primary hover:underline font-medium"
              >
                {PRACTICE.email}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Response within 1 business day
              </p>
            </div>
          </div>
        </div>
      </section>

      <InsuranceBanner />
    </>
  );
}
