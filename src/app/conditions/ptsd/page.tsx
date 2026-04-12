import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "PTSD Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Evidence-based treatment for post-traumatic stress disorder (PTSD). Compassionate psychiatric care for trauma-related conditions in Farmington Hills, MI.",
};

export default function PTSDPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="ptsd"
      conditionName="PTSD"
      heroEyebrow="Condition"
      heroTitle="Healing,"
      heroTitleEm="at your pace."
      heroDescription="Evidence-based psychiatric care for post-traumatic stress disorder. Compassionate, trauma-informed treatment that meets you where you are."
      heroImage="/images/ai/cta-warm.jpg"
      sidebarStat="12M"
      sidebarStatLabel="Adults experience PTSD in any given year in the U.S."
      sidebarNote="A medical response to trauma — not a weakness."
      intro={[
        "PTSD is a response to experiencing or witnessing traumatic events. It's not a sign of weakness — it's a medical condition that responds to treatment.",
        "We provide trauma-informed psychiatric care that prioritizes your sense of safety and control. Treatment focuses on reducing symptoms like intrusive memories, hyperarousal, and avoidance through medication management and coordination with therapy.",
        "Recovery from PTSD is not linear, and everyone's path is different. Our role is to walk alongside you with patience, expertise, and care.",
      ]}
      symptoms={[
        "Intrusive memories, flashbacks, or nightmares of traumatic events",
        "Severe emotional distress when reminded of trauma",
        "Avoidance of places, people, or activities that trigger memories",
        "Negative changes in mood, thoughts, or beliefs about yourself or others",
        "Feeling detached from family, friends, or activities",
        "Hyperarousal — being easily startled or on edge",
        "Difficulty sleeping or concentrating",
        "Irritability, angry outbursts, or self-destructive behavior",
        "Memory gaps around the traumatic event",
        "Persistent feelings of guilt, shame, or fear",
      ]}
      treatmentParagraphs={[
        "Treatment begins with a gentle, paced evaluation. We never push beyond what feels safe. Understanding your history and symptoms informs a personalized treatment plan.",
        "Medication management can reduce symptoms like hyperarousal, sleep disturbances, and depression that often accompany PTSD. SSRIs and prazosin (for nightmares) are commonly effective.",
        "PTSD often benefits most from trauma-focused therapy combined with medication. We coordinate with therapists trained in EMDR, CPT, or PE to provide comprehensive care.",
      ]}
      whenToSeekHelp={[
        "If traumatic memories, flashbacks, nightmares, or avoidance are interfering with daily life, relationships, or work, help is available.",
        "PTSD symptoms can emerge weeks, months, or even years after a traumatic event. It's never too late to seek treatment.",
        "If you're experiencing thoughts of self-harm, call 988 or go to the nearest emergency room. For non-urgent evaluations, new patients are typically seen within one week.",
      ]}
      relatedServices={[
        { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "Telepsychiatry", href: "/services/telepsychiatry" },
      ]}
      faqs={[
        { question: "How is PTSD diagnosed?", answer: "Through a careful clinical interview that assesses symptoms, their duration, and how they relate to a traumatic event. We use validated screening tools when appropriate." },
        { question: "What medications treat PTSD?", answer: "SSRIs (sertraline, paroxetine) are FDA-approved for PTSD. Prazosin is often used for nightmares. We'll find what works for you." },
        { question: "Do I have to talk about my trauma?", answer: "Not in detail, not unless you're ready. A psychiatric evaluation focuses on understanding your current symptoms, not reliving the trauma. Therapy (if you choose it) is where deeper work happens, and only at your pace." },
        { question: "Can PTSD be treated via telehealth?", answer: "Yes. Telepsychiatry can be especially helpful for patients who find leaving home difficult due to PTSD symptoms." },
        { question: "Do I need therapy too?", answer: "Trauma-focused therapy is often the most effective treatment for PTSD, especially combined with medication. We can coordinate with qualified therapists." },
        { question: "Is recovery possible?", answer: "Yes. Many people experience significant improvement with treatment. Recovery is possible, though the pace is different for everyone." },
      ]}
      ctaHeadline="Take a gentle first step."
      ctaSubheadline="Reach out when you're ready. We'll meet you where you are."
    />
  );
}
