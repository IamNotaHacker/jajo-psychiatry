import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "Anxiety Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Compassionate treatment for generalized anxiety, social anxiety, panic disorder, and more. Expert psychiatric care for anxiety disorders in Farmington Hills, MI.",
};

export default function AnxietyPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="anxiety"
      conditionName="Anxiety"
      heroEyebrow="Condition"
      heroTitle="Calm"
      heroTitleEm="is possible."
      heroDescription="Compassionate, evidence-based treatment for generalized anxiety, social anxiety, panic disorder, and related conditions."
      heroImage="/images/ai/nature-calm.jpg"
      sidebarStat="40M+"
      sidebarStatLabel="Adults affected — the most common mental health condition in the U.S."
      sidebarNote="Treatable. You don't have to push through alone."
      intro={[
        "Anxiety is more than feeling worried. When it becomes persistent, overwhelming, or interferes with daily life, it's a medical condition that deserves real treatment.",
        "Our psychiatrists treat the full spectrum of anxiety disorders — generalized anxiety, panic disorder, social anxiety, and health anxiety. We combine careful diagnosis with personalized medication strategies and collaboration with therapy where helpful.",
        "You don't have to white-knuckle your way through life. There are treatments that work — and we'll help you find the right one.",
      ]}
      symptoms={[
        "Persistent, excessive worry that's hard to control",
        "Restlessness, feeling on edge, or keyed up",
        "Racing thoughts or mind constantly in overdrive",
        "Difficulty sleeping, falling asleep, or staying asleep",
        "Physical symptoms like rapid heartbeat, sweating, trembling",
        "Gastrointestinal issues, nausea, or tight chest",
        "Avoidance of situations that trigger anxiety",
        "Panic attacks — sudden waves of intense fear",
        "Difficulty concentrating or mind going blank",
        "Irritability, muscle tension, or fatigue",
      ]}
      treatmentParagraphs={[
        "Treatment starts with a comprehensive psychiatric evaluation to understand your specific anxiety patterns, triggers, and history.",
        "We offer personalized medication management using SSRIs, SNRIs, buspirone, or other evidence-based options. We work carefully to find the right medication with minimal side effects.",
        "For patients who've tried medications without success, GeneSight testing can provide genetic insights to guide the next step. We also coordinate with therapists when CBT or other therapy would strengthen your plan.",
      ]}
      whenToSeekHelp={[
        "Consider a psychiatric evaluation if anxiety is affecting your sleep, work, relationships, or ability to enjoy daily life.",
        "You don't need to be in crisis to seek help — early treatment often prevents escalation and leads to better outcomes.",
        "If you're experiencing panic attacks, persistent worry, or avoidance behaviors that limit your life, help is available.",
      ]}
      relatedServices={[
        { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "GeneSight Testing", href: "/services/genesight-testing" },
      ]}
      faqs={[
        { question: "What's the difference between normal worry and an anxiety disorder?", answer: "Everyone worries sometimes. An anxiety disorder involves persistent, excessive worry that's hard to control, causes distress, and interferes with daily functioning." },
        { question: "What medications are used for anxiety?", answer: "SSRIs and SNRIs are common first-line treatments. Buspirone, beta-blockers, and hydroxyzine may also be used. Your psychiatrist will recommend what's best for your specific situation." },
        { question: "How long until anxiety medication works?", answer: "SSRIs and SNRIs typically take 4-6 weeks to reach full effect. Some patients notice early improvement in 1-2 weeks. We monitor closely during this period." },
        { question: "Can I get anxiety treatment via telehealth?", answer: "Yes. Anxiety is well-suited to telepsychiatry. Many patients actually prefer virtual visits when anxiety makes leaving home difficult." },
        { question: "Do I need therapy too?", answer: "Medication and therapy can be complementary. For many anxiety disorders, the combination is more effective than either alone. We can coordinate with a therapist you trust." },
        { question: "Will I have to take medication forever?", answer: "Not necessarily. Many patients take medication for 6-12 months or longer, then taper off successfully. Others benefit from longer-term maintenance. We review regularly." },
      ]}
      ctaHeadline="Find your calm today."
      ctaSubheadline="Schedule an evaluation and start building a plan that works."
    />
  );
}
