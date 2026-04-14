import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Medication Management | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Expert psychiatric medication management in Farmington Hills, Michigan. Our psychiatrists provide personalized medication monitoring, adjustments, and optimization for mental health conditions.",
};

export default function MedicationManagementPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="medication-management"
      serviceName="Medication Management"
      heroEyebrow="Service"
      heroTitle="Medication"
      heroTitleEm="management."
      heroDescription="Careful prescribing, monitoring, and adjustment. A collaborative, ongoing process to find what works for you — with the fewest side effects."
      heroImage="/images/ai/window-new.jpg"
      sidebarLabel="Medication Management"
      sidebarStat="Ongoing"
      sidebarStatLabel="Care that evolves with you — not a one-time prescription"
      sidebarNote="Finding what works, with the fewest side effects."
      intro={[
        "Psychiatric medications can be highly effective, but their success depends on careful selection, proper dosing, and ongoing monitoring.",
        "Medication management is more than simply writing prescriptions. It is a collaborative process where your psychiatrist works closely with you to track how your medication is working, identify side effects, and make changes when necessary.",
        "Whether you're starting psychiatric medication for the first time, transitioning from another provider, or optimizing an existing regimen, our team provides expert guidance through in-person visits and telepsychiatry.",
      ]}
      stepsHeading="What to expect"
      steps={[
        {
          num: "01",
          title: "Medication Review",
          description:
            "Review of all current medications — psychiatric, non-psychiatric, supplements, and over-the-counter products — to prevent interactions and inform decisions.",
        },
        {
          num: "02",
          title: "Personalized Selection",
          description:
            "Based on diagnosis, symptoms, medical history, and lifestyle, we select the medication most likely to be effective. GeneSight testing available to guide decisions.",
        },
        {
          num: "03",
          title: "Gradual Titration",
          description:
            "Most medications start low and gradually increase. More frequent appointments monitor your response, watch for side effects, and adjust dosage.",
        },
        {
          num: "04",
          title: "Ongoing Optimization",
          description:
            "Regular monitoring of progress, side effects, and relevant labs. Your regimen is continuously refined to maintain optimal results.",
        },
        {
          num: "05",
          title: "Long-term Partnership",
          description:
            "As life circumstances and needs change, your treatment plan adjusts. We are your partner in maintaining mental wellness long-term.",
        },
      ]}
      benefits={[
        {
          title: "Psychiatrist-Led",
          text: "Managed by board-certified psychiatrists with specialized training in psychopharmacology, not general practitioners.",
        },
        {
          title: "Individualized",
          text: "Never one-size-fits-all. Plans customized to your diagnosis, genetics, history, and treatment response.",
        },
        {
          title: "GeneSight Available",
          text: "Pharmacogenomic testing helps identify which medications work best based on your genetic makeup.",
        },
        {
          title: "Responsive",
          text: "Side effects and concerns addressed promptly. We prioritize timely communication and follow-up.",
        },
        {
          title: "Flexible",
          text: "In-person at our Farmington Hills office or via telepsychiatry — keep appointments on schedule.",
        },
        {
          title: "Coordinated",
          text: "With your permission, we coordinate with your therapist and primary care for unified care.",
        },
      ]}
      relatedConditions={[
        { name: "ADHD", href: "/conditions/adhd" },
        { name: "Anxiety", href: "/conditions/anxiety" },
        { name: "Depression", href: "/conditions/depression" },
        { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
        { name: "PTSD", href: "/conditions/ptsd" },
        { name: "Schizophrenia", href: "/conditions/schizophrenia" },
      ]}
      faqs={[
        {
          question: "How often will I need medication management appointments?",
          answer:
            "When starting a new medication or making adjustments, visits are typically every 2-4 weeks. Once your regimen is stable, follow-ups are generally every 1-3 months. Your psychiatrist will determine the right schedule.",
        },
        {
          question: "What if my medication is causing side effects?",
          answer:
            "Always report side effects to your psychiatrist. Many are mild and temporary, but persistent or uncomfortable side effects can be addressed through dosage changes, switching medications, or management strategies. Never stop psychiatric medication abruptly.",
        },
        {
          question: "Can I do medication management visits through telehealth?",
          answer:
            "Yes. Medication management appointments are available via telepsychiatry for patients anywhere in Michigan. Virtual follow-ups work just as well as in-person visits for monitoring progress.",
        },
        {
          question: "Will I need to take medication indefinitely?",
          answer:
            "Duration varies by condition and individual response. Some benefit from short-term medication; others need longer-term maintenance. Your psychiatrist regularly reviews whether medication continues to be the right approach.",
        },
        {
          question: "How do you decide which medication to prescribe?",
          answer:
            "Selection is based on diagnosis, symptoms, medical history, other medications, and your preferences. We also offer GeneSight pharmacogenomic testing to help make more informed prescribing decisions from the start.",
        },
      ]}
      ctaHeadline="Optimize your medication today."
      ctaSubheadline="Schedule a medication management appointment at Jajo Psychiatry in Farmington Hills, MI."
    />
  );
}
