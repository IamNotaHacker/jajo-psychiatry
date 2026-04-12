import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "GeneSight Testing | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "GeneSight pharmacogenomic testing at Jajo Psychiatry. Genetic insights that help guide psychiatric medication decisions for more effective treatment.",
};

export default function GenesightPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="genesight-testing"
      serviceName="GeneSight Testing"
      heroEyebrow="Service"
      heroTitle="Precision"
      heroTitleEm="prescribing."
      heroDescription="GeneSight pharmacogenomic testing analyzes how your genes affect your response to psychiatric medications — helping us prescribe smarter from the start."
      heroImage="/images/ai/genesight-hero.jpg"
      sidebarLabel="GeneSight"
      sidebarStat="3–5"
      sidebarStatLabel="Business days — typical results turnaround"
      sidebarNote="Your DNA, guiding your treatment."
      intro={[
        "Finding the right psychiatric medication can feel like trial and error. GeneSight testing changes that by using your DNA to guide treatment decisions.",
        "A simple cheek swab analyzes how your body metabolizes dozens of commonly prescribed psychiatric medications, including antidepressants, mood stabilizers, antipsychotics, and ADHD medications.",
        "The results help your psychiatrist choose medications your body is more likely to respond to — reducing side effects and the back-and-forth of medication adjustments.",
      ]}
      steps={[
        { num: "01", title: "Consultation", description: "Discuss with your psychiatrist whether GeneSight is right for you based on your treatment history." },
        { num: "02", title: "Cheek Swab", description: "A simple, painless cheek swab collects your DNA sample in the office or at home." },
        { num: "03", title: "Lab Processing", description: "Your sample is sent to the GeneSight lab for analysis. Results typically return in 3-5 business days." },
        { num: "04", title: "Results Review", description: "Your psychiatrist reviews results with you, explaining how genetics inform medication options." },
        { num: "05", title: "Treatment Plan", description: "Medications are selected or adjusted based on genetic guidance combined with clinical factors." },
      ]}
      benefits={[
        { title: "Less Trial & Error", text: "Skip the guesswork. Genetic data helps narrow down which medications are most likely to work." },
        { title: "Fewer Side Effects", text: "Understanding your metabolism helps avoid medications that may cause unwanted reactions." },
        { title: "Faster Results", text: "Starting with the right medication means less time waiting to feel better." },
        { title: "Evidence-Based", text: "GeneSight is backed by peer-reviewed research and used by thousands of psychiatrists." },
        { title: "Insurance Covered", text: "GeneSight is often covered by insurance, especially for patients who've tried medications before." },
        { title: "One-Time Test", text: "Results are yours for life. The data remains useful for future medication decisions." },
      ]}
      relatedConditions={[
        { name: "Depression", href: "/conditions/depression" },
        { name: "Anxiety", href: "/conditions/anxiety" },
        { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
        { name: "ADHD", href: "/conditions/adhd" },
      ]}
      faqs={[
        { question: "Is GeneSight covered by insurance?", answer: "Many insurance plans, including Medicare, cover GeneSight, especially when previous medications haven't worked. We help verify your coverage before testing." },
        { question: "How long do results take?", answer: "Results typically return to your psychiatrist within 3-5 business days of the lab receiving your sample." },
        { question: "Is the test painful?", answer: "Not at all. GeneSight uses a simple, painless cheek swab — no blood draw required." },
        { question: "Can I do this if I'm already on medication?", answer: "Yes. GeneSight is helpful whether you're starting new medication or considering adjustments to current treatment." },
        { question: "Does GeneSight guarantee the right medication?", answer: "No test is perfect. GeneSight is one important tool your psychiatrist uses alongside clinical judgment and your treatment history." },
      ]}
      ctaHeadline="Discover your genetic profile."
      ctaSubheadline="Schedule a consultation to learn if GeneSight testing is right for you."
    />
  );
}
