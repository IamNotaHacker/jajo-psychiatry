import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Anxiety Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Compassionate anxiety treatment in Farmington Hills, MI. Generalized anxiety, social anxiety, panic disorder care with personalized medication management. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "What is the difference between normal worry and an anxiety disorder?",
    answer:
      "Everyone experiences worry from time to time, but an anxiety disorder involves persistent, excessive worry that is difficult to control and interferes with daily functioning. If your anxiety is lasting weeks or months, disrupting sleep, causing physical symptoms, or preventing you from doing things you need to do, it may be time to seek professional help.",
  },
  {
    question: "What types of anxiety disorders do you treat?",
    answer:
      "At Jajo Psychiatry, we treat generalized anxiety disorder (GAD), social anxiety disorder, panic disorder, specific phobias, and other anxiety-related conditions. Each type of anxiety has its own pattern, and treatment is tailored to your specific diagnosis and symptoms.",
  },
  {
    question: "What medications are used to treat anxiety?",
    answer:
      "Commonly prescribed anxiety medications include SSRIs (selective serotonin reuptake inhibitors), SNRIs (serotonin-norepinephrine reuptake inhibitors), and buspirone. In some cases, other medications may be used for short-term symptom relief. Your psychiatrist will recommend the best option based on your symptoms, medical history, and treatment goals.",
  },
  {
    question: "How long does anxiety medication take to work?",
    answer:
      "Most anxiety medications, particularly SSRIs and SNRIs, take 2 to 6 weeks to reach their full effect. Some patients notice gradual improvement within the first week or two. Your psychiatrist will monitor your progress and make adjustments as needed during this period.",
  },
  {
    question: "Can anxiety be treated through telepsychiatry?",
    answer:
      "Yes. Anxiety treatment, including psychiatric evaluations and ongoing medication management, is very well suited to telepsychiatry. We offer secure virtual appointments for patients throughout Michigan, providing the same quality of care as in-person visits.",
  },
  {
    question: "Do I need medication for anxiety, or can I manage it on my own?",
    answer:
      "The answer depends on the severity of your symptoms and how much they affect your daily life. Some people benefit greatly from medication, while others may use a combination of approaches. A psychiatric evaluation can help clarify the best path forward. We believe in the least invasive, most effective approach for each individual patient.",
  },
  {
    question: "Can anxiety occur alongside other mental health conditions?",
    answer:
      "Yes, anxiety very commonly co-occurs with depression, ADHD, PTSD, and other conditions. This is why a thorough psychiatric evaluation is so important — it ensures that all contributing factors are identified and addressed in your treatment plan.",
  },
];

export default function AnxietyPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "Anxiety", href: "/conditions/anxiety" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Anxiety Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Anxiety is more than occasional nervousness — it can be a constant, exhausting
            presence that makes everyday situations feel overwhelming. Whether you experience
            racing thoughts, persistent worry, physical tension, or panic attacks, these
            feelings deserve attention and care. At Jajo Psychiatry in Farmington Hills, MI,
            we provide thoughtful, evidence-based treatment to help you regain a sense of
            calm and control.
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
            Signs &amp; Symptoms of Anxiety
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Anxiety disorders can manifest in many ways, both mentally and physically.
            Common signs include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Persistent, excessive worry that feels difficult to stop",
              "Feeling on edge, keyed up, or restless most of the time",
              "Difficulty concentrating or mind going blank",
              "Irritability or feeling easily overwhelmed",
              "Muscle tension, headaches, or jaw clenching",
              "Sleep problems — trouble falling asleep, staying asleep, or restless sleep",
              "Rapid heartbeat, shortness of breath, or chest tightness",
              "Avoiding situations, places, or people due to fear or worry",
              "Nausea, stomach upset, or other unexplained physical symptoms",
              "Panic attacks — sudden intense fear with physical symptoms",
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

      {/* How Anxiety Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How Anxiety Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Anxiety treatment begins with a{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                comprehensive psychiatric evaluation
              </Link>
              . During this initial visit, your psychiatrist will take the time to understand
              your symptoms, their severity, how long they have been present, and how they
              affect your daily life. This detailed assessment is critical for distinguishing
              between different types of anxiety disorders and identifying any co-occurring
              conditions.
            </p>
            <p>
              Based on your evaluation, we create a personalized{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>{" "}
              plan. Medications such as SSRIs, SNRIs, or buspirone are often effective for
              reducing anxiety symptoms. We start with conservative doses and adjust carefully
              over time, monitoring both effectiveness and side effects at every follow-up
              visit.
            </p>
            <p>
              If you have tried medications in the past without success,{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              can offer valuable insight into how your body processes different medications,
              helping us make more targeted choices. Follow-up care is available{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in person
              </Link>{" "}
              or via{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>{" "}
              for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for Anxiety
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Consider reaching out to a psychiatrist if your anxiety is persistent, difficult
              to control, and interfering with work, relationships, or your ability to enjoy
              life. You should also seek help if you are experiencing panic attacks, avoiding
              situations you used to handle, or noticing physical symptoms that do not have a
              clear medical explanation.
            </p>
            <p>
              Anxiety disorders are highly treatable. Many patients experience significant
              improvement within weeks of starting the right treatment plan. The sooner you
              reach out, the sooner you can begin feeling like yourself again.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Anxiety Treatment FAQs"
        subtitle="Common questions about anxiety diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="Take Control of Your Anxiety"
        subheadline="Schedule a psychiatric evaluation at Jajo Psychiatry and start your path to relief."
      />
    </>
  );
}
