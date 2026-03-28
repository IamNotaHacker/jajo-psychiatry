import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "PTSD Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Evidence-based PTSD treatment and psychiatric care in Farmington Hills, MI. Trauma-informed medication management and personalized support. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "What is PTSD?",
    answer:
      "Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It involves persistent symptoms such as flashbacks, nightmares, emotional numbness, and hypervigilance that last for more than a month and significantly interfere with daily life. PTSD is not a sign of weakness — it is a medical condition that responds to treatment.",
  },
  {
    question: "What kinds of trauma can lead to PTSD?",
    answer:
      "PTSD can result from many types of traumatic experiences, including military combat, physical or sexual assault, serious accidents, natural disasters, childhood trauma, domestic violence, or witnessing a life-threatening event. Any experience that overwhelms a person's ability to cope can potentially lead to PTSD.",
  },
  {
    question: "What medications are used to treat PTSD?",
    answer:
      "SSRIs (selective serotonin reuptake inhibitors) such as sertraline and paroxetine are considered first-line medication treatments for PTSD. SNRIs and other medications may also be used depending on the individual's symptom profile. Additional medications may be prescribed to address specific symptoms like nightmares or insomnia. Your psychiatrist will develop a plan tailored to your needs.",
  },
  {
    question: "How long does PTSD treatment take?",
    answer:
      "The duration of PTSD treatment varies depending on the severity of symptoms, the type of trauma, and individual response to treatment. Some patients experience significant improvement within a few months, while others may benefit from longer-term care. We follow your progress closely and adjust the treatment plan as needed.",
  },
  {
    question: "Can PTSD develop years after a traumatic event?",
    answer:
      "Yes. While PTSD symptoms often begin within three months of a traumatic event, they can also appear months or even years later. This is sometimes called delayed-onset PTSD. If you are experiencing trauma-related symptoms regardless of when the event occurred, we encourage you to seek an evaluation.",
  },
  {
    question: "Can PTSD be treated through telepsychiatry?",
    answer:
      "Yes. Psychiatric evaluations and medication management for PTSD are effective through secure telepsychiatry appointments. For some patients, the comfort and privacy of receiving care from home can actually make it easier to engage in treatment.",
  },
  {
    question: "Is PTSD different from acute stress disorder?",
    answer:
      "Acute stress disorder involves similar symptoms to PTSD but occurs within the first month after a traumatic event and typically resolves within that time frame. If symptoms persist beyond one month, a diagnosis of PTSD may be appropriate. In either case, early evaluation and treatment can improve outcomes.",
  },
];

export default function PTSDPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "PTSD", href: "/conditions/ptsd" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            PTSD Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Trauma can leave lasting marks that affect how you think, feel, and move through
            the world. If you are living with nightmares, flashbacks, emotional numbness, or
            a constant sense of being on guard, you may be experiencing Post-Traumatic Stress
            Disorder (PTSD). These symptoms are not something you have to endure alone. At
            Jajo Psychiatry in Farmington Hills, MI, we provide compassionate, trauma-informed
            psychiatric care to help you begin to heal.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button href="/services/psychiatric-evaluations" variant="outline" size="sm">
              Psychiatric Evaluations
            </Button>
            <Button href="/services/medication-management" variant="outline" size="sm">
              Medication Management
            </Button>
            <Button href="/services/telepsychiatry" variant="outline" size="sm">
              Telepsychiatry
            </Button>
          </div>
        </div>
      </section>

      {/* Signs & Symptoms */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Signs &amp; Symptoms of PTSD
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            PTSD symptoms generally fall into four categories. You may experience some or all
            of the following:
          </p>

          <h3 className="font-semibold text-foreground text-lg mb-3">Re-Experiencing Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Intrusive, unwanted memories of the traumatic event",
              "Flashbacks — feeling as if the trauma is happening again",
              "Distressing nightmares related to the event",
              "Intense emotional or physical reactions to trauma reminders",
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

          <h3 className="font-semibold text-foreground text-lg mb-3">Avoidance Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Avoiding places, people, or situations that trigger memories",
              "Refusing to think or talk about the traumatic experience",
              "Emotional numbness or feeling detached from others",
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

          <h3 className="font-semibold text-foreground text-lg mb-3">Hyperarousal Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Being easily startled or feeling constantly on edge",
              "Difficulty sleeping or staying asleep",
              "Irritability, angry outbursts, or difficulty controlling emotions",
              "Trouble concentrating on everyday tasks",
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

          <h3 className="font-semibold text-foreground text-lg mb-3">Mood &amp; Cognitive Symptoms</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Persistent negative thoughts about yourself or the world",
              "Distorted feelings of blame or guilt related to the trauma",
              "Loss of interest in activities you previously enjoyed",
              "Difficulty experiencing positive emotions",
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

      {/* How PTSD Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How PTSD Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Effective PTSD treatment starts with a safe, thorough{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                psychiatric evaluation
              </Link>
              . We understand that discussing trauma can be difficult, and our approach is
              always patient-centered and respectful of your pace. The evaluation helps us
              understand your symptoms, assess severity, and check for co-occurring conditions
              like depression or anxiety that often accompany PTSD.
            </p>
            <p>
              Medication is an important component of PTSD treatment for many patients. Through
              personalized{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>
              , we may prescribe SSRIs or other medications to reduce the intensity of
              intrusive thoughts, improve sleep, and stabilize mood. We carefully monitor your
              response and adjust your plan over time.
            </p>
            <p>
              When previous medication trials have been unsuccessful,{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              can help us identify medications that may be better suited to your biology. All
              follow-up care is available{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in person
              </Link>{" "}
              or through{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>
              , whichever feels more comfortable for you.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for PTSD
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              If you have been experiencing trauma-related symptoms — flashbacks, nightmares,
              avoidance, emotional numbness, or hypervigilance — for more than a month and
              these symptoms are affecting your work, relationships, or daily functioning, it
              is time to seek professional help. PTSD does not typically resolve on its own,
              and the longer it goes untreated, the more it can impact every area of your life.
            </p>
            <p>
              It takes courage to reach out, and we are here to help you take that step at
              your own pace. If you are in crisis, please contact the{" "}
              <strong>988 Suicide &amp; Crisis Lifeline</strong> by calling or texting{" "}
              <strong>988</strong>.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="PTSD Treatment FAQs"
        subtitle="Common questions about PTSD diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="Begin Your Healing Journey"
        subheadline="Schedule a psychiatric evaluation at Jajo Psychiatry. Compassionate, trauma-informed care is available."
      />
    </>
  );
}
