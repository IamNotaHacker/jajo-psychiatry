import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bipolar Disorder Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Expert bipolar disorder treatment and mood stabilization in Farmington Hills, MI. Personalized medication management and psychiatric care. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "What is the difference between bipolar I and bipolar II?",
    answer:
      "Bipolar I disorder involves episodes of full mania — periods of abnormally elevated mood, energy, and activity that last at least seven days or are severe enough to require hospitalization. Bipolar II disorder involves hypomanic episodes (less severe than full mania) alternating with major depressive episodes. Both types require professional treatment, and an accurate diagnosis is essential for effective care.",
  },
  {
    question: "What medications are used to treat bipolar disorder?",
    answer:
      "Bipolar disorder is commonly treated with mood stabilizers such as lithium and valproate, atypical antipsychotics, and sometimes anticonvulsant medications. The specific medication or combination depends on your symptoms, type of bipolar disorder, and individual response. Your psychiatrist will work closely with you to find the right balance.",
  },
  {
    question: "Why is medication management so important for bipolar disorder?",
    answer:
      "Bipolar disorder is a chronic condition that requires ongoing management to prevent mood episodes. Consistent medication management helps stabilize mood, reduce the frequency and severity of episodes, and improve overall quality of life. Stopping medication without medical guidance can lead to relapse, which is why regular follow-up appointments are essential.",
  },
  {
    question: "Can bipolar disorder be misdiagnosed as depression?",
    answer:
      "Yes, this is one of the most common diagnostic challenges in psychiatry. Many people with bipolar disorder first seek help during a depressive episode and may be initially diagnosed with major depression. A thorough psychiatric evaluation that explores your full history — including any periods of elevated mood, increased energy, or impulsive behavior — is critical for accurate diagnosis.",
  },
  {
    question: "How often will I need follow-up appointments?",
    answer:
      "Follow-up frequency depends on where you are in your treatment. During the initial stabilization phase, appointments may be every 2 to 4 weeks. Once your mood is stable and medications are well-established, visits may be less frequent. We always remain available if you notice changes in your symptoms between scheduled visits.",
  },
  {
    question: "Can I receive bipolar disorder treatment through telepsychiatry?",
    answer:
      "Yes. Both initial evaluations and ongoing medication management for bipolar disorder can be conducted through secure telepsychiatry visits. This is especially convenient for follow-up appointments and allows us to serve patients throughout Michigan.",
  },
  {
    question: "What should I do if I think I am having a mood episode?",
    answer:
      "If you notice signs of a manic or depressive episode — such as dramatic changes in sleep, energy, mood, or behavior — contact our office as soon as possible. Early intervention during a mood episode can prevent it from worsening. If you are in crisis or experiencing thoughts of self-harm, contact the 988 Suicide & Crisis Lifeline or go to your nearest emergency room.",
  },
];

export default function BipolarDisorderPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Bipolar Disorder Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Living with bipolar disorder can feel like being on a rollercoaster you never
            asked to ride. The highs of mania can lead to impulsive decisions and sleepless
            nights, while the lows of depression can drain your energy and motivation
            entirely. If your moods feel unpredictable or extreme, you deserve care from a
            psychiatrist who understands this complex condition. At Jajo Psychiatry in
            Farmington Hills, MI, we specialize in helping patients achieve lasting mood
            stability.
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
            Signs &amp; Symptoms of Bipolar Disorder
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Bipolar disorder involves distinct mood episodes. Symptoms vary depending on
            whether someone is experiencing a manic/hypomanic episode or a depressive episode:
          </p>

          <h3 className="font-semibold text-foreground text-lg mb-3">Manic or Hypomanic Episodes</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Abnormally elevated or irritable mood lasting days or weeks",
              "Significantly decreased need for sleep without feeling tired",
              "Racing thoughts or rapid, pressured speech",
              "Grandiose thinking or inflated self-confidence",
              "Increased goal-directed activity or physical agitation",
              "Impulsive or risky behavior — excessive spending, reckless decisions",
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

          <h3 className="font-semibold text-foreground text-lg mb-3">Depressive Episodes</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Persistent sadness, emptiness, or hopelessness",
              "Loss of interest in activities once found enjoyable",
              "Fatigue, low energy, or feeling slowed down",
              "Difficulty concentrating or making decisions",
              "Changes in sleep — insomnia or sleeping excessively",
              "Feelings of worthlessness or thoughts of death",
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

      {/* How Bipolar Disorder Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How Bipolar Disorder Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Accurate diagnosis is the foundation of effective bipolar treatment. Our process
              begins with a detailed{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                psychiatric evaluation
              </Link>{" "}
              that explores your complete mood history, including any periods of elevated mood
              or energy that may have been overlooked in the past. Because bipolar disorder is
              frequently misdiagnosed as depression, we take extra care to get the diagnosis
              right.
            </p>
            <p>
              Once diagnosed, we develop a comprehensive{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>{" "}
              plan focused on mood stabilization. This typically involves mood stabilizers,
              atypical antipsychotics, or a combination tailored to your specific needs. We
              monitor your response closely and adjust the treatment plan during regular
              follow-up visits.
            </p>
            <p>
              For patients who have had difficulty finding the right medication,{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              can provide valuable pharmacogenomic data to guide prescribing decisions. We
              offer both{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in-person
              </Link>{" "}
              and{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>{" "}
              appointments to ensure ongoing access to care.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for Bipolar Disorder
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              If you experience dramatic mood swings that go beyond normal ups and downs —
              periods where you feel unusually energized, impulsive, or invincible followed by
              deep depressive episodes — it is important to seek a professional evaluation.
              You should also reach out if you have been treated for depression but have not
              responded as expected, as undiagnosed bipolar disorder may be the underlying
              cause.
            </p>
            <p>
              Bipolar disorder is a lifelong condition, but with the right treatment plan, most
              people achieve significant stability and lead fulfilling lives. The earlier you
              begin treatment, the better the long-term outlook.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Bipolar Disorder Treatment FAQs"
        subtitle="Common questions about bipolar disorder diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="Find Stability With Expert Care"
        subheadline="Schedule a psychiatric evaluation at Jajo Psychiatry and take the first step toward mood stability."
      />
    </>
  );
}
