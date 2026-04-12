import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "Schizophrenia Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Ongoing psychiatric care and medication management for schizophrenia and related conditions. Compassionate, evidence-based treatment in Farmington Hills, MI.",
};

export default function SchizophreniaPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="schizophrenia"
      conditionName="Schizophrenia"
      heroEyebrow="Condition"
      heroTitle="Thoughtful,"
      heroTitleEm="ongoing care."
      heroDescription="Evidence-based medication management and continuity of care for schizophrenia and related psychotic disorders."
      heroImage="/images/ai/hero-main.jpg"
      sidebarStat="3.5M"
      sidebarStatLabel="Adults in the U.S. living with schizophrenia"
      sidebarNote="Highly treatable with consistent, ongoing care."
      intro={[
        "Schizophrenia is a serious but treatable condition that affects thinking, perception, and behavior. With appropriate medication and support, many individuals lead meaningful, independent lives.",
        "We provide ongoing psychiatric care and medication management for schizophrenia, schizoaffective disorder, and related conditions. Our approach emphasizes stability, minimal side effects, and collaboration with family and support systems.",
        "Continuity of care matters. The same provider who knows your history, what's worked, and what hasn't is essential for long-term success.",
      ]}
      symptoms={[
        "Hallucinations — hearing or seeing things others don't",
        "Delusions — fixed false beliefs despite evidence",
        "Disorganized thinking or speech",
        "Unusual or disorganized behavior",
        "Negative symptoms — reduced emotion, motivation, or speech",
        "Social withdrawal or isolation",
        "Difficulty concentrating or processing information",
        "Sleep disturbances and changes in energy",
        "Neglect of personal hygiene or daily tasks",
        "Cognitive changes affecting memory or attention",
      ]}
      treatmentParagraphs={[
        "Treatment centers on antipsychotic medications, which are highly effective for most patients. Selection depends on symptom profile, side effect tolerability, and individual response.",
        "Long-acting injectable medications can be an option for patients who prefer or benefit from them. Regular monitoring ensures optimal dosing and early detection of side effects.",
        "We emphasize medication adherence, regular follow-ups, and coordination with therapy and family support. For patients with complex treatment histories, GeneSight testing may help guide medication choices.",
      ]}
      whenToSeekHelp={[
        "If you or a loved one is experiencing hallucinations, delusions, disorganized thinking, or significant changes in behavior, a psychiatric evaluation is the right first step.",
        "Early intervention improves long-term outcomes significantly. The sooner treatment begins, the better the prognosis.",
        "For acute psychotic episodes or safety concerns, call 988 or go to the nearest emergency room. For non-urgent evaluations, we see new patients typically within one week.",
      ]}
      relatedServices={[
        { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "In-Person Psychiatry", href: "/services/in-person-psychiatry" },
      ]}
      faqs={[
        { question: "Is schizophrenia treatable?", answer: "Yes. Schizophrenia is a chronic condition, but it's highly treatable with antipsychotic medications, therapy, and support. Many patients achieve significant symptom relief and lead fulfilling lives." },
        { question: "What medications treat schizophrenia?", answer: "Antipsychotic medications are the foundation. Newer atypical antipsychotics like risperidone, olanzapine, aripiprazole, and others are commonly used. Long-acting injectable forms are also available." },
        { question: "Why is it important to take medication consistently?", answer: "Medication adherence is critical. Stopping medication — even when feeling well — significantly increases the risk of relapse. We work with patients to make adherence sustainable." },
        { question: "Can family be involved in treatment?", answer: "Yes, with your permission. Family involvement can be a valuable part of the support system. We're happy to coordinate with family members when appropriate." },
        { question: "Does insurance cover schizophrenia treatment?", answer: "Yes. Most major insurance plans cover psychiatric care for schizophrenia, including medication management. We accept most plans." },
        { question: "Can schizophrenia be treated via telehealth?", answer: "Telepsychiatry can work well for stable maintenance care. Acute episodes or complex medication changes may require in-person visits." },
      ]}
      ctaHeadline="Continuity of care, today."
      ctaSubheadline="Schedule an evaluation or transfer your care to Jajo Psychiatry."
    />
  );
}
