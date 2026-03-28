import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Psychiatric Evaluations | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Comprehensive psychiatric evaluations in Farmington Hills, Michigan. Our board-certified psychiatrists provide thorough mental health assessments to build personalized treatment plans. Serving patients across Michigan.",
};

const faqs = [
  {
    question: "How long does a psychiatric evaluation take?",
    answer:
      "An initial psychiatric evaluation at Jajo Psychiatry typically lasts between 45 and 60 minutes. This allows our psychiatrist enough time to conduct a thorough clinical interview, review your history, and discuss initial treatment recommendations. In some cases involving complex histories, a follow-up session may be scheduled to complete the evaluation.",
  },
  {
    question: "What should I bring to my psychiatric evaluation?",
    answer:
      "Please bring a valid photo ID, your insurance card, a list of current medications (including dosages), and any relevant medical records or previous psychiatric documentation. If you have completed our intake paperwork online, no additional forms are needed. It can also be helpful to write down your main concerns and questions ahead of time.",
  },
  {
    question: "Will I receive a diagnosis at my first appointment?",
    answer:
      "In many cases, your psychiatrist can provide a preliminary diagnosis during or shortly after your first evaluation. However, some conditions require additional assessment or observation over time. Your psychiatrist will always be transparent about the diagnostic process and will explain next steps clearly.",
  },
  {
    question: "Can I have my psychiatric evaluation done via telehealth?",
    answer:
      "Yes. Jajo Psychiatry offers psychiatric evaluations through our telepsychiatry platform for patients located anywhere in Michigan. Virtual evaluations follow the same thorough clinical process as in-person visits and are conducted over a secure, HIPAA-compliant video connection.",
  },
  {
    question:
      "Do I need a referral from my primary care doctor for an evaluation?",
    answer:
      "Most insurance plans do not require a referral to see a psychiatrist. However, some HMO plans may have referral requirements. We recommend checking with your insurance provider or calling our office at (734) 331-6037 so we can help verify your coverage and any referral needs before your appointment.",
  },
];

export default function PsychiatricEvaluationsPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Psychiatric Evaluations
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            A comprehensive psychiatric evaluation is the foundation of
            effective mental health care. At Jajo Psychiatry in Farmington
            Hills, Michigan, our board-certified psychiatrists conduct thorough
            clinical assessments designed to understand your unique symptoms,
            history, and goals. The information gathered during your evaluation
            guides every aspect of your personalized treatment plan.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Whether you are experiencing symptoms for the first time or seeking
            a second opinion on a previous diagnosis, our evaluations provide
            the clarity you need to move forward with confidence. We take the
            time to listen carefully, ask the right questions, and consider all
            factors that may be contributing to your mental health concerns,
            including medical history, family history, lifestyle, and
            psychosocial stressors.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our practice serves patients from Farmington Hills and communities
            throughout Michigan. Evaluations are available both in person at
            our office on West 13 Mile Road and through our secure
            telepsychiatry platform, making it easy to get the assessment you
            need regardless of your location within the state.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect During Your Evaluation
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Scheduling and Intake Paperwork",
                description:
                  "When you contact Jajo Psychiatry, our team will help you schedule your evaluation at a convenient time. Before your appointment, you will complete intake forms that cover your medical history, current symptoms, and any prior mental health treatment. Completing these forms in advance allows your psychiatrist to make the most of your appointment time.",
              },
              {
                step: "2",
                title: "Clinical Interview",
                description:
                  "Your psychiatrist will conduct an in-depth clinical interview, discussing your current symptoms, their duration and severity, and how they affect your daily life. You will be asked about your medical and psychiatric history, family mental health history, medications, sleep patterns, and overall functioning. This conversation is collaborative and confidential.",
              },
              {
                step: "3",
                title: "Mental Status Examination",
                description:
                  "As part of the evaluation, your psychiatrist performs a mental status examination. This is a structured observation of your appearance, behavior, speech, mood, thought processes, cognition, and insight. It helps provide an objective picture of your current mental health status and supports accurate diagnosis.",
              },
              {
                step: "4",
                title: "Diagnostic Assessment and Screening Tools",
                description:
                  "Depending on your symptoms, your psychiatrist may use validated clinical screening instruments such as the PHQ-9 for depression, the GAD-7 for anxiety, or standardized ADHD rating scales. These tools complement the clinical interview and help ensure diagnostic accuracy.",
              },
              {
                step: "5",
                title: "Treatment Plan Discussion",
                description:
                  "After completing the assessment, your psychiatrist will discuss their findings, explain any diagnoses, and recommend a treatment plan tailored to your needs. This may include medication, referrals for therapy, lifestyle modifications, or additional testing such as GeneSight pharmacogenomic testing. You will have the opportunity to ask questions and participate actively in decisions about your care.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Choose Jajo Psychiatry for Your Evaluation
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Thorough and Unhurried Assessments",
                text: "We dedicate ample time to each evaluation so you never feel rushed. Our psychiatrists listen carefully and explore every aspect of your mental health.",
              },
              {
                title: "Board-Certified Expertise",
                text: "Our psychiatrists are board-certified with extensive training in diagnosing and treating a wide spectrum of psychiatric conditions in adults.",
              },
              {
                title: "Evidence-Based Approach",
                text: "We use validated clinical screening tools and follow current evidence-based guidelines to ensure accurate diagnoses and effective treatment recommendations.",
              },
              {
                title: "In-Person and Virtual Options",
                text: "Choose between visiting our Farmington Hills office or completing your evaluation through our secure telepsychiatry platform from anywhere in Michigan.",
              },
              {
                title: "Collaborative Care Philosophy",
                text: "Your treatment plan is developed together with you. We explain our findings clearly and welcome your questions and preferences throughout the process.",
              },
              {
                title: "Seamless Continuity of Care",
                text: "After your evaluation, transitioning to ongoing care such as medication management is simple. Your treatment team already understands your history and goals.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-3 bg-white rounded-lg border border-border p-5"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conditions We Evaluate
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our psychiatric evaluations can assess and diagnose a wide range of
            mental health conditions. Learn more about the conditions we
            commonly treat:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "ADHD", href: "/conditions/adhd" },
              { name: "Anxiety Disorders", href: "/conditions/anxiety" },
              { name: "Depression", href: "/conditions/depression" },
              { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
              { name: "PTSD", href: "/conditions/ptsd" },
              { name: "Schizophrenia", href: "/conditions/schizophrenia" },
            ].map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="block bg-white border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-md transition-all duration-200 text-foreground font-medium hover:text-primary"
              >
                {condition.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Psychiatric Evaluation FAQs"
        subtitle="Common questions about the evaluation process at Jajo Psychiatry."
        faqs={faqs}
        className="bg-muted"
      />

      {/* CTA */}
      <CTASection
        headline="Schedule Your Psychiatric Evaluation"
        subheadline="Take the first step toward understanding your mental health. Contact Jajo Psychiatry in Farmington Hills, MI today."
      />
    </>
  );
}
