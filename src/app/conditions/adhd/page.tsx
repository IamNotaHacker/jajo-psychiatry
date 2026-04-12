import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "ADHD Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Expert ADHD diagnosis and treatment for adults in Farmington Hills, MI. Comprehensive evaluations, medication management, and personalized care.",
};

export default function ADHDPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="adhd"
      conditionName="ADHD"
      heroEyebrow="Condition"
      heroTitle="Attention,"
      heroTitleEm="reclaimed."
      heroDescription="Expert ADHD diagnosis and treatment for adults. Thorough evaluations and personalized plans that actually fit your life."
      heroImage="/images/ai/office-detail.jpg"
      sidebarStat="11M+"
      sidebarStatLabel="Adults in the U.S. living with ADHD"
      sidebarNote="Often undiagnosed until adulthood — you're not alone."
      intro={[
        "ADHD is one of the most common mental health conditions in adults — yet it often goes undiagnosed for years. If you find yourself constantly struggling to stay focused, feeling restless, losing track of tasks, or acting on impulse, you are not alone.",
        "Adult ADHD presents differently than in children. Symptoms may become more noticeable as responsibilities grow at work, in relationships, or in daily life. Many adults have spent years believing they were simply 'lazy' or 'disorganized' when the real issue is a treatable medical condition.",
        "We help adults get accurate diagnoses and build treatment plans that work — so you can stop fighting your brain and start working with it.",
      ]}
      symptoms={[
        "Difficulty sustaining attention during tasks or conversations",
        "Frequently losing important items like keys, phone, or documents",
        "Trouble organizing tasks and managing time effectively",
        "Feeling restless or unable to sit still for extended periods",
        "Making impulsive decisions without thinking through consequences",
        "Starting many projects but struggling to finish them",
        "Difficulty following through on instructions or commitments",
        "Frequently zoning out or daydreaming during meetings",
        "Chronic procrastination despite wanting to be productive",
        "Emotional reactivity — quick frustration, mood swings, impatience",
      ]}
      treatmentParagraphs={[
        "Treatment begins with a comprehensive psychiatric evaluation and ADHD-specific testing. We take the time to understand your symptoms, rule out other causes, and build an accurate diagnosis.",
        "Once diagnosed, we develop a personalized medication management plan — stimulant or non-stimulant — tailored to your needs. We monitor progress closely and adjust to optimize results while minimizing side effects.",
        "For patients who haven't responded well to previous medications, GeneSight genetic testing helps identify which medications may work best based on your unique profile.",
      ]}
      whenToSeekHelp={[
        "Consider an ADHD evaluation if difficulty with attention, organization, or impulsivity is consistently interfering with your work, relationships, or daily life.",
        "If you relate to the symptoms described above, or if a family member, partner, or coworker has suggested you may have ADHD, reaching out for an evaluation is a positive step.",
        "Early and accurate diagnosis leads to better outcomes and a higher quality of life.",
      ]}
      relatedServices={[
        { name: "ADHD Testing", href: "/services/adhd-testing" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "GeneSight Testing", href: "/services/genesight-testing" },
      ]}
      faqs={[
        { question: "How is ADHD diagnosed in adults?", answer: "Through a comprehensive evaluation including detailed symptom review, medical history, and daily functioning assessment. We use clinical interviews and evidence-based screening tools to assess attention, impulsivity, and executive function." },
        { question: "What medications are used to treat ADHD?", answer: "Stimulants (methylphenidate, amphetamine-based) and non-stimulants (atomoxetine, certain antidepressants). The right choice depends on your symptoms, history, and response. We find the most effective option with the fewest side effects." },
        { question: "Can ADHD develop in adulthood?", answer: "ADHD is a neurodevelopmental condition that begins in childhood, but many adults aren't diagnosed until later in life. Symptoms become more noticeable as responsibilities increase." },
        { question: "How long does an ADHD evaluation take?", answer: "Initial evaluations typically take 45-60 minutes. Some patients may require follow-up visits for additional assessment." },
        { question: "Can I get ADHD treatment via telepsychiatry?", answer: "Yes. ADHD evaluations and ongoing medication management are available through secure telepsychiatry for patients anywhere in Michigan." },
        { question: "What if ADHD medication doesn't work?", answer: "Finding the right treatment sometimes takes adjustment. We'll adjust dose, try different medications, or explore GeneSight genetic testing to better understand your metabolism." },
      ]}
      ctaHeadline="Get an expert ADHD evaluation."
      ctaSubheadline="Schedule your appointment and get the answers you've been looking for."
    />
  );
}
