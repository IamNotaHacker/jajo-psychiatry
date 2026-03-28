import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "GeneSight Testing | Pharmacogenomic Testing | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "GeneSight pharmacogenomic testing in Farmington Hills, Michigan. Discover how your genes affect medication response to find the right psychiatric medication faster. Available at Jajo Psychiatry for patients across Michigan.",
};

const faqs = [
  {
    question: "What is GeneSight testing?",
    answer:
      "GeneSight is a pharmacogenomic test that analyzes specific genes involved in how your body metabolizes and responds to many commonly prescribed psychiatric medications. The test results provide your psychiatrist with a personalized report categorizing medications into those most likely to work well, those that may need dosage adjustments, and those that may be less effective or cause more side effects based on your genetic profile.",
  },
  {
    question: "Is GeneSight testing painful?",
    answer:
      "Not at all. GeneSight testing requires only a simple cheek swab, which takes less than a minute. There are no blood draws or needles involved. The swab is collected in our office and sent to the GeneSight laboratory for analysis.",
  },
  {
    question: "How long does it take to get GeneSight results?",
    answer:
      "GeneSight results are typically available within approximately 36 hours after the laboratory receives your sample. Once results are ready, your psychiatrist will review the report and discuss the findings with you, usually at your next scheduled appointment or sooner if needed.",
  },
  {
    question: "Does insurance cover GeneSight testing?",
    answer:
      "Many insurance plans provide coverage for GeneSight testing, including Medicare. GeneSight also offers financial assistance programs for patients who may have out-of-pocket costs. Our office can help you understand your coverage and any potential costs before proceeding with the test.",
  },
  {
    question: "Is GeneSight testing right for me?",
    answer:
      "GeneSight testing may be especially helpful if you have tried multiple psychiatric medications without adequate results, experienced significant side effects from medications, or are starting psychiatric medication for the first time and want to improve the chances of selecting an effective option. Your psychiatrist can help determine whether pharmacogenomic testing is appropriate for your situation.",
  },
];

export default function GeneSightTestingPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "GeneSight Testing", href: "/services/genesight-testing" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            GeneSight Testing
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Finding the right psychiatric medication can sometimes be a lengthy
            process of trial and error. GeneSight pharmacogenomic testing
            offers a science-based approach to help shorten that journey. At
            Jajo Psychiatry in Farmington Hills, Michigan, we offer GeneSight
            testing as part of our commitment to providing the most informed,
            personalized psychiatric care possible.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            GeneSight testing analyzes how your unique genetic makeup affects
            the way your body processes and responds to many FDA-approved
            psychiatric medications used to treat depression, anxiety, ADHD,
            bipolar disorder, PTSD, and other conditions. The results give
            your psychiatrist valuable, clinically actionable information that
            can guide medication selection and dosing decisions, potentially
            reducing the time it takes to find a medication that works well
            for you.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The test itself is simple, quick, and painless: just a cheek swab
            collected in our office. Within days, your psychiatrist receives a
            detailed report that categorizes relevant medications based on how
            your genes may affect your response to each one. This information
            does not replace clinical judgment but enhances it, adding a layer
            of precision to your treatment plan. GeneSight testing is available
            to patients at our Farmington Hills office and can also inform
            treatment decisions for patients seen via telepsychiatry throughout
            Michigan.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect with GeneSight Testing
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Discussion with Your Psychiatrist",
                description:
                  "Your psychiatrist will discuss whether GeneSight testing is appropriate for your clinical situation. This is often recommended for patients who have not responded well to previous medications, have experienced notable side effects, or are beginning treatment and want to make more informed decisions from the start.",
              },
              {
                step: "2",
                title: "Simple Cheek Swab Collection",
                description:
                  "If you and your psychiatrist decide to proceed, the test requires only a quick, painless cheek swab. The sample is collected in our Farmington Hills office during a regular appointment and takes less than a minute. No blood draw or special preparation is needed.",
              },
              {
                step: "3",
                title: "Laboratory Analysis",
                description:
                  "Your sample is sent to the GeneSight laboratory, where it is analyzed for genetic variants that affect how your body metabolizes psychiatric medications. The lab examines genes related to drug metabolism enzymes (such as cytochrome P450 enzymes) and other pharmacogenomic markers.",
              },
              {
                step: "4",
                title: "Review of Your Personalized Report",
                description:
                  "Results are typically available within about 36 hours. Your psychiatrist receives a detailed report that organizes commonly prescribed psychiatric medications into categories based on your genetic profile: medications in the green category are most likely to work as expected, yellow may require dosage adjustments, and red may present greater challenges based on your genetics.",
              },
              {
                step: "5",
                title: "Integrating Results into Your Treatment Plan",
                description:
                  "Your psychiatrist reviews the GeneSight report with you and explains how the findings apply to your specific situation. These results are used in conjunction with your clinical history, current symptoms, and preferences to optimize your medication plan. The goal is to select the medication most likely to be effective with the fewest side effects.",
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
            Benefits of GeneSight Pharmacogenomic Testing
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Reduce Trial and Error",
                text: "GeneSight results help your psychiatrist narrow down medication options more quickly, potentially saving you weeks or months of trying medications that may not be well-suited to your genetics.",
              },
              {
                title: "Personalized Medication Insights",
                text: "The test provides information specific to your genetic profile, giving your psychiatrist data-driven guidance that complements their clinical expertise.",
              },
              {
                title: "Minimize Side Effects",
                text: "By identifying medications your body may have difficulty metabolizing, GeneSight testing can help avoid medications more likely to cause uncomfortable side effects for you.",
              },
              {
                title: "Quick, Painless, and Convenient",
                text: "A simple cheek swab is all that is needed. The test takes seconds to administer, requires no special preparation, and results are available in approximately 36 hours.",
              },
              {
                title: "Covers Many Medications",
                text: "The GeneSight report covers a broad range of psychiatric medications used for depression, anxiety, ADHD, bipolar disorder, PTSD, schizophrenia, and other conditions.",
              },
              {
                title: "Lifetime Value",
                text: "Your genetic profile does not change. The information from your GeneSight test remains relevant for future medication decisions throughout your life, providing lasting value beyond a single prescription.",
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
            Conditions Where GeneSight Testing Helps
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            GeneSight results can inform medication decisions for a wide range
            of psychiatric conditions treated at Jajo Psychiatry:
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
        title="GeneSight Testing FAQs"
        subtitle="Answers to common questions about pharmacogenomic testing at Jajo Psychiatry."
        faqs={faqs}
        className="bg-muted"
      />

      {/* CTA */}
      <CTASection
        headline="Discover Your Personalized Medication Path"
        subheadline="Ask about GeneSight testing at your next appointment or schedule a visit at Jajo Psychiatry in Farmington Hills, MI."
      />
    </>
  );
}
