import type { Metadata } from "next";
import { ConditionDetailLayout } from "@/components/sections/ConditionDetailLayout";

export const metadata: Metadata = {
  title: "Bipolar Disorder Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Comprehensive treatment for bipolar disorder including medication management and ongoing monitoring. Expert psychiatric care in Farmington Hills, MI.",
};

export default function BipolarPage() {
  return (
    <ConditionDetailLayout
      conditionSlug="bipolar-disorder"
      conditionName="Bipolar Disorder"
      heroEyebrow="Condition"
      heroTitle="Steady,"
      heroTitleEm="stable, yours."
      heroDescription="Expert medication management for bipolar I, bipolar II, and cyclothymia. Careful mood stabilization with ongoing monitoring."
      heroImage="/images/ai/abstract-calm.jpg"
      sidebarStat="7M+"
      sidebarStatLabel="Adults in the U.S. living with bipolar disorder"
      sidebarNote="Stability is not only possible — it's common with the right plan."
      intro={[
        "Bipolar disorder is a complex condition that affects mood, energy, and thinking — cycling between depressive episodes and manic or hypomanic episodes. With the right treatment, stability is not only possible, it's common.",
        "We treat bipolar I, bipolar II, and cyclothymic disorder. Medication management is the foundation of effective treatment, but we also emphasize lifestyle factors, sleep hygiene, and coordination with therapy.",
        "Our goal is long-term stability — not just managing episodes as they happen, but helping you build a life where mood stays balanced and predictable.",
      ]}
      symptoms={[
        "Periods of elevated mood, energy, or excessive activity",
        "Decreased need for sleep without feeling tired",
        "Racing thoughts and rapid speech",
        "Impulsive decisions or risky behavior",
        "Grandiose thinking or inflated self-esteem",
        "Depressive episodes with sadness and hopelessness",
        "Loss of interest in usual activities",
        "Significant changes in sleep, appetite, or energy",
        "Difficulty concentrating or making decisions",
        "Mixed episodes combining depressive and manic features",
      ]}
      treatmentParagraphs={[
        "Treatment starts with a careful evaluation to confirm the diagnosis and understand your specific pattern — bipolar disorder is often misdiagnosed as depression alone.",
        "We use mood stabilizers (lithium, valproate, lamotrigine), atypical antipsychotics, and other evidence-based medications. Finding the right combination requires patience and close monitoring.",
        "We emphasize medication adherence, regular follow-ups, and lifestyle factors like sleep regulation. For treatment-resistant cases, GeneSight testing can help guide medication choices.",
      ]}
      whenToSeekHelp={[
        "If you've experienced distinct periods of elevated mood alternating with depression, bipolar disorder may be the cause. A psychiatric evaluation can bring clarity.",
        "During manic or mixed episodes, judgment can be impaired. If you're concerned about safety or making impulsive decisions, reach out immediately.",
        "For severe manic episodes or any safety concerns, call 988 or go to the nearest emergency room. For non-urgent evaluations, we typically see new patients within one week.",
      ]}
      relatedServices={[
        { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
        { name: "Medication Management", href: "/services/medication-management" },
        { name: "GeneSight Testing", href: "/services/genesight-testing" },
      ]}
      faqs={[
        { question: "What's the difference between bipolar I and bipolar II?", answer: "Bipolar I involves full manic episodes. Bipolar II involves hypomania (less severe than mania) with depressive episodes. Both benefit from professional treatment." },
        { question: "Is bipolar disorder curable?", answer: "Bipolar disorder is a chronic condition, but with proper treatment, long-term stability is achievable. Many patients live full, productive lives with the right medication plan." },
        { question: "What medications treat bipolar disorder?", answer: "Mood stabilizers like lithium, valproate, and lamotrigine are foundational. Atypical antipsychotics and, in some cases, antidepressants may be added carefully." },
        { question: "Why do I need to keep taking medication?", answer: "Bipolar disorder requires ongoing medication to prevent relapse. Stopping medication — even when feeling well — significantly increases the risk of another episode." },
        { question: "Can I drink alcohol on bipolar medications?", answer: "Alcohol can destabilize mood and interact with many bipolar medications. We recommend minimizing or avoiding alcohol. Discuss specifics with your psychiatrist." },
        { question: "Can bipolar disorder be treated via telehealth?", answer: "Yes, with regular follow-ups. Telepsychiatry is effective for maintenance treatment, though acute episodes may require in-person evaluation." },
      ]}
      ctaHeadline="Build lasting stability today."
      ctaSubheadline="Schedule a thorough evaluation and create a treatment plan that lasts."
    />
  );
}
