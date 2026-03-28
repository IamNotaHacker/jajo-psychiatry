import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ADHD Treatment in Farmington Hills, MI — Jajo Psychiatry",
  description:
    "Expert ADHD diagnosis and treatment for adults in Farmington Hills, MI. Comprehensive evaluations, medication management, and personalized care at Jajo Psychiatry. Call (734) 331-6037.",
};

const faqs = [
  {
    question: "How is ADHD diagnosed in adults?",
    answer:
      "Adult ADHD is diagnosed through a comprehensive psychiatric evaluation that includes a detailed review of your symptoms, medical history, and daily functioning. At Jajo Psychiatry, we use clinical interviews and evidence-based screening tools to assess attention, impulsivity, and executive function. There is no single test for ADHD — an accurate diagnosis requires a thorough, personalized assessment.",
  },
  {
    question: "What medications are used to treat ADHD?",
    answer:
      "Common ADHD medications include stimulants such as methylphenidate and amphetamine-based medications, as well as non-stimulant options like atomoxetine and certain antidepressants. The right medication depends on your symptoms, medical history, and how you respond to treatment. We work closely with you to find the most effective option with the fewest side effects.",
  },
  {
    question: "Can ADHD develop in adulthood?",
    answer:
      "ADHD is a neurodevelopmental condition that begins in childhood, but many adults are not diagnosed until later in life. Symptoms may become more noticeable as responsibilities increase at work, in relationships, or with managing daily tasks. If you have been struggling with focus, organization, or impulsivity for most of your life, an evaluation can help clarify whether ADHD is the cause.",
  },
  {
    question: "How long does an ADHD evaluation take?",
    answer:
      "An initial ADHD evaluation at Jajo Psychiatry typically takes 45 to 60 minutes. During this visit, your psychiatrist will review your history, discuss your symptoms in detail, and begin developing a treatment plan. Some patients may require follow-up visits for additional assessment.",
  },
  {
    question: "Do you offer ADHD testing at Jajo Psychiatry?",
    answer:
      "Yes. We offer comprehensive ADHD testing and evaluations using validated clinical screening tools. Our evaluations are designed to differentiate ADHD from other conditions that can cause similar symptoms, such as anxiety or depression.",
  },
  {
    question: "Can I get ADHD treatment through telepsychiatry?",
    answer:
      "Yes, we offer ADHD evaluations and ongoing medication management through secure telepsychiatry visits for patients anywhere in Michigan. Virtual appointments provide the same quality of care as in-person visits with added convenience.",
  },
  {
    question: "What happens if ADHD medication does not work for me?",
    answer:
      "Finding the right treatment sometimes takes adjustment. If your initial medication is not effective or causes unwanted side effects, we will work with you to adjust your dose, try a different medication, or explore GeneSight genetic testing to better understand how your body metabolizes certain medications.",
  },
];

export default function ADHDPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Conditions", href: "/conditions" },
              { name: "ADHD", href: "/conditions/adhd" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ADHD Treatment in Michigan — Jajo Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Attention-Deficit/Hyperactivity Disorder (ADHD) is one of the most common mental
            health conditions in adults, yet it often goes undiagnosed for years. If you find
            yourself constantly struggling to stay focused, feeling restless, losing track of
            tasks, or acting on impulse, you are not alone — and effective treatment is
            available. At Jajo Psychiatry in Farmington Hills, MI, we help adults get accurate
            ADHD diagnoses and build treatment plans that fit their lives.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Button href="/services/adhd-testing" variant="outline" size="sm">
              ADHD Testing &amp; Evaluations
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
            Signs &amp; Symptoms of ADHD
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            ADHD symptoms in adults can look different from the hyperactivity often associated
            with children. Common signs include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Difficulty sustaining attention during tasks or conversations",
              "Frequently losing important items like keys, phone, or documents",
              "Trouble organizing tasks and managing time effectively",
              "Feeling restless or unable to sit still for extended periods",
              "Making impulsive decisions without thinking through consequences",
              "Starting many projects but struggling to finish them",
              "Difficulty following through on instructions or commitments",
              "Frequently zoning out or daydreaming during meetings or activities",
              "Chronic procrastination despite wanting to be productive",
              "Emotional reactivity — quick frustration, mood swings, or impatience",
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

      {/* How ADHD Is Treated */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How ADHD Is Treated at Jajo Psychiatry
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Treatment for ADHD at Jajo Psychiatry begins with a{" "}
              <Link href="/services/psychiatric-evaluations" className="text-primary hover:underline">
                comprehensive psychiatric evaluation
              </Link>{" "}
              and{" "}
              <Link href="/services/adhd-testing" className="text-primary hover:underline">
                ADHD-specific testing
              </Link>
              . We take the time to understand your symptoms, rule out other possible causes,
              and build an accurate diagnosis.
            </p>
            <p>
              Once diagnosed, we develop a personalized{" "}
              <Link href="/services/medication-management" className="text-primary hover:underline">
                medication management
              </Link>{" "}
              plan tailored to your specific needs. This may include stimulant or non-stimulant
              medications, depending on what works best for you. We monitor your progress
              closely and make adjustments as needed to optimize results while minimizing side
              effects.
            </p>
            <p>
              For patients who have not responded well to previous medications, we offer{" "}
              <Link href="/services/genesight-testing" className="text-primary hover:underline">
                GeneSight genetic testing
              </Link>{" "}
              to help identify which medications may work best based on your unique genetic
              profile. Follow-up appointments are available{" "}
              <Link href="/services/in-person-psychiatry" className="text-primary hover:underline">
                in person
              </Link>{" "}
              at our Farmington Hills office or through{" "}
              <Link href="/services/telepsychiatry" className="text-primary hover:underline">
                telepsychiatry
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="bg-primary-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-6">
            When to Seek Help for ADHD
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              You should consider an ADHD evaluation if difficulty with attention, organization,
              or impulsivity is consistently interfering with your work, relationships, or daily
              life. Many adults with undiagnosed ADHD have spent years believing they are simply
              &quot;lazy&quot; or &quot;disorganized&quot; when the real issue is a treatable
              medical condition.
            </p>
            <p>
              If you relate to the symptoms described above, or if a family member, partner, or
              coworker has suggested you may have ADHD, reaching out for an evaluation is a
              positive step. Early and accurate diagnosis leads to better outcomes and a higher
              quality of life.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="ADHD Treatment FAQs"
        subtitle="Common questions about ADHD diagnosis and treatment at Jajo Psychiatry."
        faqs={faqs}
      />

      <CTASection
        headline="Get an Expert ADHD Evaluation"
        subheadline="Schedule your appointment at Jajo Psychiatry and get the answers you have been looking for."
      />
    </>
  );
}
