import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Depression Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Personalized depression treatment and medication management in Farmington Hills, MI. Evidence-based psychiatric care for major depressive disorder. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "What is the difference between sadness and clinical depression?",
    answer:
      "Sadness is a normal emotion that everyone experiences in response to difficult events. Clinical depression (major depressive disorder) is different — it involves a persistent low mood, loss of interest, and other symptoms that last at least two weeks and significantly interfere with daily functioning. Depression does not require a specific trigger and often does not improve on its own without treatment.",
  },
  {
    question: "What medications are used to treat depression?",
    answer:
      "Commonly prescribed antidepressants include SSRIs (such as sertraline and escitalopram), SNRIs (such as venlafaxine and duloxetine), and other classes of medications depending on the individual. Your psychiatrist will select a medication based on your symptom profile, medical history, and any prior medication experiences.",
  },
  {
    question: "How long does it take for antidepressants to work?",
    answer:
      "Most antidepressants take 2 to 6 weeks to reach their full therapeutic effect. Some patients notice gradual improvements in sleep, energy, or appetite before mood fully improves. It is important to continue taking medication as prescribed and to attend follow-up appointments so your psychiatrist can monitor your progress.",
  },
  {
    question: "Will I need to take antidepressants forever?",
    answer:
      "Not necessarily. The duration of medication treatment depends on your individual situation, including the severity of your depression, how many episodes you have had, and how well you respond to treatment. Some patients take medication for several months, while others benefit from longer-term treatment. Your psychiatrist will work with you to determine the right timeline.",
  },
  {
    question: "Can depression be treated through telepsychiatry?",
    answer:
      "Yes. Depression evaluations and ongoing medication management are very effective through telepsychiatry. We offer secure video visits for patients throughout Michigan, providing the same quality of care as in-person appointments.",
  },
  {
    question: "What if I have tried antidepressants before and they did not work?",
    answer:
      "If previous medications were ineffective or caused unwanted side effects, there are many options to explore. We may try a different class of medication, adjust your dosage, or recommend GeneSight genetic testing to identify which medications may be best suited to your biology. Treatment-resistant depression is more common than many people realize, and there are strategies to address it.",
  },
  {
    question: "Can depression occur alongside other conditions like anxiety or ADHD?",
    answer:
      "Yes, depression frequently co-occurs with anxiety, ADHD, PTSD, bipolar disorder, and other conditions. A thorough psychiatric evaluation helps identify all contributing factors so that your treatment plan addresses the complete picture rather than just one piece.",
  },
];

export default function DepressionPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "Depression", href: "/conditions/depression" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Depression Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Depression can make even the simplest parts of your day feel impossibly heavy.
            When getting out of bed, going to work, or connecting with the people you care
            about feels like too much, it is important to know that what you are experiencing
            is real, common, and treatable. At Jajo Psychiatry in Farmington Hills, MI, we
            provide compassionate, expert psychiatric care to help you find your way back to
            feeling like yourself.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button href="/services/psychiatric-evaluations" variant="outline" size="sm">
              Psychiatric Evaluations
            </Button>
            <Button href="/services/medication-management" variant="outline" size="sm">
              Medication Management
            </Button>
            <Button href="/services/genesight-testing" variant="outline" size="sm">
              GeneSight Testing
            </Button>
          </div>
        </div>
      </section>

      {/* Signs & Symptoms */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Signs &amp; Symptoms of Depression
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Depression affects how you feel, think, and function. Symptoms vary from person
            to person but commonly include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Persistent feelings of sadness, emptiness, or hopelessness",
              "Loss of interest or pleasure in activities you once enjoyed",
              "Significant changes in appetite — eating much more or much less",
              "Sleep disturbances — insomnia, oversleeping, or restless sleep",
              "Fatigue or loss of energy, even after adequate rest",
              "Difficulty concentrating, making decisions, or remembering things",
              "Feelings of worthlessness or excessive guilt",
              "Withdrawing from friends, family, or social activities",
              "Physical symptoms like headaches, body aches, or digestive problems",
              "Thoughts of death or self-harm (seek immediate help if you are experiencing this)",
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

      {/* How Depression Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How Depression Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Treatment begins with a thorough{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                psychiatric evaluation
              </Link>
              . Your psychiatrist will take the time to understand the full scope of your
              symptoms — when they started, how severe they are, and how they are affecting
              your life. This evaluation also screens for co-occurring conditions like anxiety
              or ADHD that may need to be addressed alongside your depression.
            </p>
            <p>
              Based on your evaluation, we develop a personalized{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>{" "}
              plan. Antidepressants can be highly effective, but finding the right one requires
              careful consideration. We start with evidence-based first-line treatments and
              closely monitor your response, adjusting the plan as needed during follow-up
              visits.
            </p>
            <p>
              If you have not responded well to previous medications,{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              can help us understand how your body metabolizes different medications, allowing
              for more precise prescribing. Ongoing care is available through{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in-person visits
              </Link>{" "}
              or convenient{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>{" "}
              appointments.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for Depression
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              If you have been feeling persistently sad, empty, or hopeless for two weeks or
              more, and these feelings are interfering with your ability to work, maintain
              relationships, or take care of yourself, it is time to seek professional help.
              Depression rarely improves on its own, and early treatment leads to better
              outcomes.
            </p>
            <p>
              If you or someone you know is experiencing thoughts of self-harm or suicide,
              please contact the{" "}
              <strong>988 Suicide &amp; Crisis Lifeline</strong> by calling or texting{" "}
              <strong>988</strong>, or go to your nearest emergency room immediately.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Depression Treatment FAQs"
        subtitle="Common questions about depression diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="You Deserve to Feel Better"
        subheadline="Schedule a psychiatric evaluation at Jajo Psychiatry and take the first step toward recovery."
      />
    </>
  );
}
