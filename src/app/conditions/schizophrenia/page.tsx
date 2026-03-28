import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Schizophrenia Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Comprehensive schizophrenia treatment and ongoing psychiatric care in Farmington Hills, MI. Expert medication management and personalized support. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "What is schizophrenia?",
    answer:
      "Schizophrenia is a serious mental health condition that affects how a person thinks, feels, and perceives reality. It can involve hallucinations (hearing or seeing things others do not), delusions (strongly held false beliefs), disorganized thinking, and difficulty with motivation and emotional expression. Schizophrenia is a medical condition — not a character flaw — and it responds to treatment.",
  },
  {
    question: "What medications are used to treat schizophrenia?",
    answer:
      "Antipsychotic medications are the primary treatment for schizophrenia. These include second-generation (atypical) antipsychotics such as risperidone, aripiprazole, and olanzapine, as well as first-generation options when appropriate. The choice of medication depends on your symptom profile, response to previous treatments, and side effect tolerance. Your psychiatrist will work with you to find the best fit.",
  },
  {
    question: "Can someone with schizophrenia live a normal life?",
    answer:
      "Yes. With consistent treatment, many people with schizophrenia lead meaningful, productive lives. Medication management is key to controlling symptoms and preventing relapse. Ongoing psychiatric care helps patients maintain stability, manage side effects, and adapt their treatment plan as their needs evolve over time.",
  },
  {
    question: "What happens if someone with schizophrenia stops taking medication?",
    answer:
      "Stopping antipsychotic medication without medical guidance significantly increases the risk of relapse and symptom recurrence. Even when symptoms improve, the underlying condition requires ongoing management. If you are concerned about side effects or wish to adjust your treatment, please discuss this with your psychiatrist rather than stopping medication on your own.",
  },
  {
    question: "How is schizophrenia diagnosed?",
    answer:
      "Schizophrenia is diagnosed through a thorough psychiatric evaluation that includes a detailed assessment of symptoms, duration, and impact on functioning. There is no single test for schizophrenia — diagnosis requires clinical expertise and a careful review of the patient's history. Your psychiatrist will also rule out other conditions that can produce similar symptoms.",
  },
  {
    question: "At what age does schizophrenia typically begin?",
    answer:
      "Schizophrenia most commonly appears in the late teens to early 30s. Men tend to develop symptoms slightly earlier than women. However, schizophrenia can occur at any age. If you or a loved one is experiencing concerning symptoms, early evaluation and treatment lead to better outcomes.",
  },
  {
    question: "Can schizophrenia treatment include telepsychiatry?",
    answer:
      "Yes, follow-up medication management appointments for schizophrenia can be conducted through secure telepsychiatry visits. This is especially helpful for maintaining consistent care and reducing barriers to attending regular appointments. Initial evaluations may be done in person or virtually depending on the clinical situation.",
  },
];

export default function SchizophreniaPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "Schizophrenia", href: "/conditions/schizophrenia" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Schizophrenia Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Schizophrenia is a complex condition that can profoundly affect how a person
            experiences reality, but with the right treatment, stability and a fulfilling
            life are possible. If you or a loved one is dealing with hallucinations,
            delusions, disorganized thinking, or withdrawal from daily activities, know that
            help is available. At Jajo Psychiatry in Farmington Hills, MI, we provide expert,
            ongoing psychiatric care for patients living with schizophrenia.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button href="/services/psychiatric-evaluations" variant="outline" size="sm">
              Psychiatric Evaluations
            </Button>
            <Button href="/services/medication-management" variant="outline" size="sm">
              Medication Management
            </Button>
            <Button href="/services/in-person-psychiatry" variant="outline" size="sm">
              In-Person Psychiatry
            </Button>
          </div>
        </div>
      </section>

      {/* Signs & Symptoms */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Signs &amp; Symptoms of Schizophrenia
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Schizophrenia symptoms are typically grouped into three categories: positive
            symptoms (experiences added to a person&apos;s reality), negative symptoms
            (abilities or feelings that are diminished), and cognitive symptoms.
          </p>

          <h3 className="font-semibold text-foreground text-lg mb-3">Positive Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Hallucinations — hearing voices, seeing, or feeling things that are not there",
              "Delusions — strongly held beliefs not based in reality",
              "Disorganized speech — difficulty organizing thoughts logically",
              "Disorganized or unusual motor behavior",
            ].map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 bg-white rounded-lg border border-border p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{symptom}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-foreground text-lg mb-3">Negative Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Reduced emotional expression — flat affect or monotone speech",
              "Lack of motivation or difficulty starting and sustaining activities",
              "Social withdrawal and decreased interest in relationships",
              "Diminished ability to experience pleasure (anhedonia)",
              "Decreased speech output or brief, empty replies",
            ].map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 bg-white rounded-lg border border-border p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{symptom}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-foreground text-lg mb-3">Cognitive Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Difficulty with attention, concentration, and memory",
              "Trouble processing information to make decisions",
              "Problems with working memory — using information immediately after learning it",
            ].map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-3 bg-white rounded-lg border border-border p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Schizophrenia Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How Schizophrenia Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Treatment for schizophrenia at Jajo Psychiatry begins with a comprehensive{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                psychiatric evaluation
              </Link>
              . Because schizophrenia can present differently in each person, we conduct a
              thorough assessment of symptoms, history, and current functioning to develop an
              accurate clinical picture. We also evaluate for any co-occurring conditions that
              may need to be addressed.
            </p>
            <p>
              Antipsychotic medication is the cornerstone of schizophrenia treatment.
              Through careful{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>
              , we select an antipsychotic medication based on your symptom profile and
              individual factors, then monitor your response closely. Managing side effects
              is an important part of this process — we work to find the medication that
              provides the best symptom control with the most tolerable side effect profile.
            </p>
            <p>
              For patients who have tried multiple medications without adequate improvement,{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              can help guide medication selection based on how your body metabolizes different
              drugs. Consistent follow-up is essential for schizophrenia, and we offer both{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in-person appointments
              </Link>{" "}
              and{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>{" "}
              to make ongoing care as accessible as possible.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for Schizophrenia
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              If you or a loved one is experiencing hallucinations, delusions, disorganized
              thinking, significant personality changes, or increasing social withdrawal, it is
              important to seek a psychiatric evaluation as soon as possible. Early intervention
              in schizophrenia is associated with better long-term outcomes and greater
              stability.
            </p>
            <p>
              If you are already being treated for schizophrenia but are experiencing
              breakthrough symptoms, medication side effects, or difficulty maintaining your
              treatment plan, reaching out for a medication review can help get your care back
              on track. If you or someone you know is in crisis, call <strong>988</strong> or
              go to the nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Schizophrenia Treatment FAQs"
        subtitle="Common questions about schizophrenia diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="Expert Psychiatric Care Is Available"
        subheadline="Schedule an appointment at Jajo Psychiatry for compassionate, ongoing schizophrenia treatment."
      />
    </>
  );
}
