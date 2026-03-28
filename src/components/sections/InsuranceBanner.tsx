import { Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE, INSURANCE_PROVIDERS } from "@/lib/constants";

export function InsuranceBanner() {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Shield className="h-4 w-4" />
            Insurance-Friendly Practice
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-3">
            We Accept Most Major Insurance Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not sure if we accept your plan? Give us a call and we&apos;ll
            verify your coverage for you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {INSURANCE_PROVIDERS.map((provider) => (
            <div
              key={provider}
              className="bg-white px-5 py-3 rounded-lg border border-border text-sm font-medium text-foreground/80 shadow-sm"
            >
              {provider}
            </div>
          ))}
          <div className="bg-accent/10 px-5 py-3 rounded-lg border border-accent/30 text-sm font-medium text-accent">
            + More
          </div>
        </div>

        <div className="text-center">
          <Button href={`tel:${PRACTICE.phoneRaw}`} variant="outline" size="md">
            <Phone className="h-4 w-4" />
            Call to Verify Your Insurance
          </Button>
        </div>
      </div>
    </section>
  );
}
