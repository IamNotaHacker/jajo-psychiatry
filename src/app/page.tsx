import { Hero } from "@/components/sections/Hero";
import { ServicesBar } from "@/components/sections/ServicesBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ConditionsGrid } from "@/components/sections/ConditionsGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsuranceBanner } from "@/components/sections/InsuranceBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const homepageFAQs = [
  {
    question: "How quickly can I get an appointment?",
    answer:
      "New patient appointments are often available within one week. Same-day or next-day appointments are sometimes available depending on scheduling. Call us at (734) 331-6037 to check current availability.",
  },
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, Medicare, Medicaid, Priority Health, HAP, and Molina Healthcare. Contact us to verify your specific coverage.",
  },
  {
    question: "What happens at a psychiatric evaluation?",
    answer:
      "During your initial psychiatric evaluation, your psychiatrist will review your medical history, discuss your symptoms and concerns, and work with you to develop a personalized treatment plan. The visit typically lasts 45-60 minutes.",
  },
  {
    question: "Do you offer telehealth appointments?",
    answer:
      "Yes, we offer telepsychiatry (virtual visits) for patients throughout Michigan. Telehealth appointments are conducted via secure video and offer the same quality of care as in-person visits.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We specialize in ADHD, anxiety, depression, and bipolar disorder. We also treat PTSD and schizophrenia. Our services include psychiatric evaluations, medication management, ADHD testing, and GeneSight genetic testing.",
  },
  {
    question: "How do I get started as a new patient?",
    answer:
      "Getting started is easy. You can book an appointment online, call us at (734) 331-6037, or fill out our contact form. We will help you complete intake paperwork and schedule your first evaluation.",
  },
  {
    question: "What is GeneSight testing?",
    answer:
      "GeneSight is a pharmacogenomic test that analyzes how your genes may affect your response to certain psychiatric medications. This helps your psychiatrist make more informed decisions about which medications may work best for you.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBar />
      <WhyChooseUs />
      <ConditionsGrid />
      <Testimonials />
      <InsuranceBanner />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our practice and services."
        faqs={homepageFAQs}
      />
      <CTASection />
    </>
  );
}
