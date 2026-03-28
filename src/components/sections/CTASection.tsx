import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  variant?: "primary" | "light";
}

export function CTASection({
  headline = "Ready to Take the First Step?",
  subheadline = "Schedule your appointment today and start your journey toward better mental health.",
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={
        isPrimary
          ? "relative bg-navy noise-bg py-20 sm:py-24 overflow-hidden"
          : "bg-secondary py-16 sm:py-20"
      }
    >
      {isPrimary && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        </>
      )}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isPrimary && <div className="accent-line mx-auto mb-6" />}
        <h2
          className={`font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            isPrimary ? "text-white" : "text-foreground"
          }`}
        >
          {headline}
        </h2>
        <p
          className={`text-lg mb-10 max-w-xl mx-auto ${
            isPrimary ? "text-white/50" : "text-muted-foreground"
          }`}
        >
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={PRACTICE.bookingUrl}
            size="lg"
            className={isPrimary ? "bg-primary hover:bg-primary-dark shadow-lg shadow-primary/25" : "bg-primary hover:bg-primary-dark"}
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </Button>
          <Button
            href={`tel:${PRACTICE.phoneRaw}`}
            variant="outline"
            size="lg"
            className={isPrimary ? "border-white/20 text-white hover:bg-white/10" : ""}
          >
            <Phone className="h-5 w-5" />
            Call {PRACTICE.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
