import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "ADHD Testing & Evaluations | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Comprehensive ADHD testing and evaluations for adults in Farmington Hills, Michigan. Evidence-based ADHD assessments using validated clinical tools for accurate diagnosis. Serving patients throughout Michigan.",
};

const faqs = [
  {
    question: "What does an ADHD evaluation involve?",
    answer:
      "An ADHD evaluation at Jajo Psychiatry includes a detailed clinical interview about your symptoms, history, and daily functioning, combined with validated ADHD rating scales and screening instruments. Your psychiatrist reviews your developmental history, academic and occupational performance, and rules out other conditions that can mimic ADHD symptoms. The evaluation typically takes one to two sessions.",
  },
  {
    question: "Can adults be diagnosed with ADHD for the first time?",
    answer:
      "Absolutely. Many adults are not diagnosed with ADHD until later in life, particularly those who developed effective coping strategies in childhood or whose symptoms were primarily inattentive rather than hyperactive. Adult ADHD is a well-recognized condition, and receiving a diagnosis at any age can be the first step toward meaningful improvement in focus, productivity, and quality of life.",
  },
  {
    question: "How long does it take to get ADHD testing results?",
    answer:
      "In many cases, your psychiatrist can share preliminary findings and discuss a likely diagnosis at the end of your evaluation session. If additional testing or information gathering is needed, results are typically available within one to two weeks. Your psychiatrist will explain the findings thoroughly and discuss treatment options with you.",
  },
  {
    question: "Do you use computerized ADHD tests?",
    answer:
      "Our evaluations rely primarily on clinical interviews and validated questionnaire-based screening tools such as the Adult ADHD Self-Report Scale (ASRS) and the Conners Adult ADHD Rating Scales. These evidence-based instruments, combined with thorough clinical assessment by an experienced psychiatrist, provide the most reliable diagnostic picture.",
  },
  {
    question: "If I am diagnosed with ADHD, what are the next steps?",
    answer:
      "After an ADHD diagnosis, your psychiatrist will discuss a personalized treatment plan, which may include medication management, behavioral strategies, lifestyle modifications, and referrals for therapy or coaching. Medication management for ADHD is available at our practice and can begin as soon as your treatment plan is established.",
  },
];

export default function ADHDTestingPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "ADHD Testing & Evaluations", href: "/services/adhd-testing" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ADHD Testing &amp; Evaluations
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Attention-Deficit/Hyperactivity Disorder (ADHD) is one of the most
            common psychiatric conditions in adults, yet it remains widely
            underdiagnosed. Many adults struggle for years with difficulty
            concentrating, disorganization, impulsivity, and restlessness
            without realizing that ADHD may be the underlying cause. At Jajo
            Psychiatry in Farmington Hills, Michigan, we provide comprehensive,
            evidence-based ADHD evaluations to help you get the accurate
            diagnosis you need.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our ADHD testing process goes far beyond a simple questionnaire. Our
            board-certified psychiatrists conduct a thorough clinical
            evaluation that considers your full history, current symptoms, and
            how they impact your daily life. We use validated screening
            instruments alongside in-depth clinical interviews to differentiate
            ADHD from other conditions that can present with similar symptoms,
            such as anxiety, depression, and sleep disorders.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have suspected you may have ADHD for years or a recent
            life change has brought attention and focus difficulties to the
            forefront, our evaluation provides clarity. With an accurate
            diagnosis, you can access effective treatments that make a real
            difference in your work, relationships, and overall well-being.
            ADHD evaluations at Jajo Psychiatry are available in person at our
            Farmington Hills office and through telepsychiatry for patients
            across Michigan.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect During ADHD Testing
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Pre-Evaluation Information Gathering",
                description:
                  "Before your appointment, you will complete intake forms and ADHD-specific questionnaires that help your psychiatrist understand the nature and scope of your symptoms. You may also be asked to provide school records, prior evaluations, or input from a family member who knew you during childhood.",
              },
              {
                step: "2",
                title: "Comprehensive Clinical Interview",
                description:
                  "Your psychiatrist conducts a detailed interview exploring your current symptoms, childhood development, academic history, work performance, relationships, and daily functioning. ADHD is a lifelong condition, so understanding your history is critical to an accurate diagnosis.",
              },
              {
                step: "3",
                title: "Validated Screening Instruments",
                description:
                  "You will complete standardized ADHD rating scales, such as the Adult ADHD Self-Report Scale (ASRS) and the Conners Adult ADHD Rating Scales. These evidence-based tools provide structured data that complements the clinical interview and supports diagnostic accuracy.",
              },
              {
                step: "4",
                title: "Differential Diagnosis",
                description:
                  "Your psychiatrist carefully evaluates whether your symptoms are best explained by ADHD or by other conditions that can present similarly, such as anxiety, depression, bipolar disorder, or sleep disorders. Many patients have co-occurring conditions, and identifying all of them is essential for effective treatment.",
              },
              {
                step: "5",
                title: "Results and Treatment Planning",
                description:
                  "Your psychiatrist shares the evaluation findings, explains the diagnosis, and works with you to develop a personalized treatment plan. If ADHD is confirmed, treatment options may include medication management, behavioral strategies, organizational skills training, and lifestyle adjustments. If another condition is identified, appropriate treatment is recommended.",
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
            Why Choose Jajo Psychiatry for ADHD Testing
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Psychiatrist-Led Evaluations",
                text: "Your ADHD assessment is conducted by a board-certified psychiatrist with specialized expertise in diagnosing and treating ADHD in adults, ensuring clinical rigor and accuracy.",
              },
              {
                title: "Evidence-Based Assessment Tools",
                text: "We use validated, research-backed screening instruments alongside thorough clinical interviews for the most reliable diagnostic picture possible.",
              },
              {
                title: "Thorough Differential Diagnosis",
                text: "We do not rush to a diagnosis. Your psychiatrist carefully considers all possible explanations for your symptoms, including co-occurring conditions that may require separate treatment.",
              },
              {
                title: "Seamless Transition to Treatment",
                text: "If ADHD is diagnosed, medication management and treatment planning can begin immediately within our practice, eliminating the need for additional referrals.",
              },
              {
                title: "Available In-Person and Virtually",
                text: "ADHD evaluations are offered at our Farmington Hills office and through telepsychiatry, providing flexible options for patients across Michigan.",
              },
              {
                title: "Supportive and Non-Judgmental Environment",
                text: "We understand that seeking an ADHD evaluation as an adult can feel vulnerable. Our team provides compassionate, respectful care every step of the way.",
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
            Related Conditions
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            ADHD frequently co-occurs with other mental health conditions. If
            you are being evaluated for ADHD, your psychiatrist will also screen
            for these commonly related conditions:
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
        title="ADHD Testing FAQs"
        subtitle="Common questions about ADHD evaluations at Jajo Psychiatry."
        faqs={faqs}
        className="bg-muted"
      />

      {/* CTA */}
      <CTASection
        headline="Get Clarity with an ADHD Evaluation"
        subheadline="Schedule your ADHD assessment at Jajo Psychiatry in Farmington Hills, MI and take the first step toward better focus and functioning."
      />
    </>
  );
}
