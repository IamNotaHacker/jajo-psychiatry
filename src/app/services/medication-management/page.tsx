import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Medication Management | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Expert psychiatric medication management in Farmington Hills, Michigan. Our psychiatrists provide personalized medication monitoring, adjustments, and optimization for mental health conditions. Serving all of Michigan.",
};

const faqs = [
  {
    question: "How often will I need medication management appointments?",
    answer:
      "Appointment frequency depends on your individual needs and treatment stage. When starting a new medication or making adjustments, visits are typically scheduled every two to four weeks. Once your medication regimen is stable and working well, follow-up visits are generally every one to three months. Your psychiatrist will work with you to determine the right schedule.",
  },
  {
    question: "What if my medication is causing side effects?",
    answer:
      "Side effects should always be reported to your psychiatrist. Many side effects are mild and temporary as your body adjusts to a new medication. However, if side effects are uncomfortable or persistent, your psychiatrist can adjust the dosage, switch to a different medication, or add strategies to manage side effects. Never stop taking a prescribed psychiatric medication abruptly without medical guidance.",
  },
  {
    question: "Can I do medication management visits through telehealth?",
    answer:
      "Yes. Medication management appointments are available through our telepsychiatry platform for patients anywhere in Michigan. Virtual follow-up visits are particularly convenient for medication check-ins and work just as effectively as in-person visits for monitoring your progress and making adjustments.",
  },
  {
    question:
      "Will I need to take medication indefinitely?",
    answer:
      "The duration of medication treatment varies by condition and individual response. Some patients benefit from short-term medication while they develop other coping strategies, while others may need longer-term maintenance to sustain their mental health improvements. Your psychiatrist will regularly review whether medication continues to be the right approach and discuss options with you at each visit.",
  },
  {
    question: "How do you decide which medication to prescribe?",
    answer:
      "Medication selection is based on your specific diagnosis, symptom profile, medical history, other medications you take, and your personal preferences. We also offer GeneSight pharmacogenomic testing, which analyzes how your genes may affect your response to certain medications, helping us make more informed prescribing decisions from the start.",
  },
];

export default function MedicationManagementPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Medication Management", href: "/services/medication-management" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Medication Management
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Psychiatric medications can be highly effective in managing mental
            health conditions, but their success depends on careful selection,
            proper dosing, and ongoing monitoring. At Jajo Psychiatry in
            Farmington Hills, Michigan, our psychiatrists specialize in
            medication management, ensuring that every prescription is
            optimized for your unique needs and adjusted as your condition
            evolves.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Medication management is more than simply writing prescriptions. It
            is a collaborative, ongoing process where your psychiatrist works
            closely with you to track how your medication is working, identify
            any side effects, and make changes when necessary. Our goal is to
            find the most effective medication regimen with the fewest side
            effects so you can function at your best.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are starting psychiatric medication for the first time,
            transitioning from another provider, or looking to optimize an
            existing regimen, our team at Jajo Psychiatry provides the expert
            guidance and attentive care you deserve. We serve patients at our
            Farmington Hills office and through telepsychiatry across the state
            of Michigan.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect with Medication Management
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Comprehensive Medication Review",
                description:
                  "Your psychiatrist begins by reviewing all current medications, including psychiatric and non-psychiatric prescriptions, supplements, and over-the-counter products. Understanding the full picture helps prevent interactions and informs treatment decisions.",
              },
              {
                step: "2",
                title: "Personalized Medication Selection",
                description:
                  "Based on your diagnosis, symptom severity, medical history, and lifestyle, your psychiatrist selects the medication most likely to be effective for you. When appropriate, we may recommend GeneSight testing to help guide this decision using your genetic profile.",
              },
              {
                step: "3",
                title: "Gradual Titration and Monitoring",
                description:
                  "Most psychiatric medications are started at a low dose and gradually increased. During the titration phase, you will have more frequent appointments so your psychiatrist can monitor your response, watch for side effects, and make dosage adjustments as needed.",
              },
              {
                step: "4",
                title: "Ongoing Assessment and Optimization",
                description:
                  "Once you reach a therapeutic dose, your psychiatrist continues to monitor your progress at regular intervals. This includes evaluating symptom improvement, assessing side effects, checking relevant lab work when indicated, and adjusting your regimen to maintain optimal results.",
              },
              {
                step: "5",
                title: "Long-Term Partnership",
                description:
                  "Medication management is an ongoing relationship. As your life circumstances, health, and needs change, your treatment plan is adjusted accordingly. Your psychiatrist is your partner in maintaining mental wellness over the long term.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Choose Jajo Psychiatry for Medication Management
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Psychiatrist-Led Care",
                text: "Your medication is managed by a board-certified psychiatrist with specialized training in psychopharmacology, not a general practitioner. This expertise matters when treating complex mental health conditions.",
              },
              {
                title: "Individualized Treatment Plans",
                text: "We never take a one-size-fits-all approach. Your medication plan is customized based on your specific diagnosis, genetics, medical history, and treatment response.",
              },
              {
                title: "GeneSight Testing Available",
                text: "We offer pharmacogenomic testing to help identify which medications may work best based on your genetic makeup, reducing the trial-and-error process.",
              },
              {
                title: "Responsive to Your Concerns",
                text: "If you experience side effects or your symptoms change, we are available to address your concerns promptly. Our team prioritizes timely communication and follow-up.",
              },
              {
                title: "Flexible Appointment Options",
                text: "Medication management is available both in person at our Farmington Hills office and via telepsychiatry, making it easy to keep your appointments on schedule.",
              },
              {
                title: "Coordinated with Your Care Team",
                text: "With your permission, we coordinate with your therapist, primary care physician, and other providers to ensure a unified approach to your overall health.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-3 bg-white rounded-lg border border-border p-5"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conditions Treated with Medication Management
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Medication management at Jajo Psychiatry addresses a wide range of
            psychiatric conditions. Learn more about the conditions we
            commonly treat:
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
                className="block bg-white border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-md transition-all duration-200 text-foreground font-medium hover:text-primary"
              >
                {condition.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Medication Management FAQs"
        subtitle="Common questions about psychiatric medication management at Jajo Psychiatry."
        faqs={faqs}
        className="bg-muted"
      />

      {/* CTA */}
      <CTASection
        headline="Optimize Your Medication with Expert Care"
        subheadline="Schedule a medication management appointment at Jajo Psychiatry in Farmington Hills, MI."
      />
    </>
  );
}
