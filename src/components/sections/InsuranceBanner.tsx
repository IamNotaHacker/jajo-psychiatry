import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE, INSURANCE_PROVIDERS } from "@/lib/constants";

export function InsuranceBanner() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8F6F1] to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide mb-4">
          <Shield className="h-4 w-4" />
          INSURANCE-FRIENDLY PRACTICE
        </div>
        <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl text-navy mb-3">
          We Accept Most Major Plans
        </h2>
        <p className="text-navy/45 text-lg max-w-xl mx-auto mb-10">
          Not sure if we accept yours? Give us a call and we&apos;ll verify
          your coverage before your first visit.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {INSURANCE_PROVIDERS.map((provider) => (
            <div
              key={provider}
              className="bg-white rounded-lg border border-border/50 px-4 py-3.5 text-sm font-medium text-navy/60 hover:border-primary/30 hover:text-navy transition-all"
            >
              {provider}
            </div>
          ))}
        </div>

        <Button href={`tel:${PRACTICE.phoneRaw}`} variant="outline" size="md">
          <Phone className="h-4 w-4" />
          Call to Verify Insurance
        </Button>
      </div>
    </section>
  );
}
