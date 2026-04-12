import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "Depression Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Personalized medication management and care for depression and mood disorders. Expert psychiatric treatment in Farmington Hills, MI.",
};

export default function DepressionPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="depression"
      conditionName="Depression"
      heroEyebrow="Condition"
      heroTitle="Feeling like"
      heroTitleEm="yourself again."
      heroDescription="Thoughtful, evidence-based treatment for depression and mood disorders. You don't have to navigate this alone."
      heroImage="/images/ai/window-light.jpg"
      sidebarStat="21M+"
      sidebarStatLabel="Adults experience a depressive episode each year in the U.S."
      sidebarNote="There is almost always a path forward."
      intro={[
        "Depression is more than feeling sad. It's a medical condition that affects mood, energy, sleep, appetite, and the ability to enjoy life — and it responds to treatment.",
        "We treat major depressive disorder, persistent depressive disorder (dysthymia), and treatment-resistant depression. Our approach combines careful medication selection, regular monitoring, and collaboration with therapy when helpful.",
        "If you've tried medications before without success, GeneSight genetic testing can guide the next step. There's almost always a path forward — we'll help you find it.",
      ]}
      symptoms={[
        "Persistent sadness, emptiness, or hopelessness",
        "Loss of interest in activities you used to enjoy",
        "Significant changes in appetite or weight",
        "Sleeping too much or too little",
        "Fatigue or loss of energy nearly every day",
        "Feelings of worthlessness or excessive guilt",
        "Difficulty thinking, concentrating, or making decisions",
        "Slowed speech, movement, or restlessness",
        "Recurrent thoughts of death or suicide",
        "Physical symptoms without clear cause (headaches, pain)",
      ]}
      treatmentParagraphs={[
        "Treatment begins with a thorough evaluation to understand your specific symptoms, history, and any previous treatments.",
        "We personalize medication plans using SSRIs, SNRIs, atypical antidepressants, or augmentation strategies. We monitor closely during the first 6-8 weeks and adjust as needed.",
        "For treatment-resistant depression, GeneSight testing can identify medications more likely to work based on your genetics. We also coordinate with therapists when combined treatment would be helpful.",
      ]}
      whenToSeekHelp={[
        "If symptoms have persisted for more than two weeks, it's time to reach out. Depression is highly treatable, but it rarely improves on its own.",
        "You should seek help immediately if you're experiencing thoughts of self-harm or suicide. Call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room.",
        "For non-urgent evaluations, we typically see new patients within one week.",
      ]}
      relatedServices={[
        { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "GeneSight Testing", href: "/services/genesight-testing" },
      ]}
      faqs={[
        { question: "How is depression diagnosed?", answer: "Through a clinical interview, symptom review, and validated screening tools like the PHQ-9. Your psychiatrist will also assess for other conditions that can present similarly." },
        { question: "What medications treat depression?", answer: "SSRIs (like sertraline, escitalopram), SNRIs (like venlafaxine, duloxetine), and atypical antidepressants (like bupropion). The right choice depends on your symptoms, history, and preferences." },
        { question: "How long until antidepressants work?", answer: "Most antidepressants take 4-6 weeks to reach full effect. Some patients notice early improvement in 1-2 weeks. Patience and close monitoring are important during this period." },
        { question: "What if my medication doesn't work?", answer: "We have many options. We may adjust the dose, switch medications, add an augmenting agent, or use GeneSight testing to guide the next choice." },
        { question: "Do I need therapy too?", answer: "For moderate to severe depression, the combination of medication and therapy often works best. We can coordinate with a therapist you trust." },
        { question: "Can depression be treated via telehealth?", answer: "Yes. Telepsychiatry is effective for depression treatment and can be especially helpful when depression makes leaving home difficult." },
      ]}
      ctaHeadline="Start feeling better today."
      ctaSubheadline="Schedule an evaluation. New patients are typically seen within one week."
    />
  );
}
