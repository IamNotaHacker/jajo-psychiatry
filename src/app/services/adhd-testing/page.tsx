import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "ADHD Testing & Evaluations | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Comprehensive adult ADHD testing and evaluations in Farmington Hills, Michigan. Evidence-based screening using validated clinical tools for accurate diagnosis.",
};

export default function ADHDTestingPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="adhd-testing"
      serviceName="ADHD Testing & Evaluations"
      heroEyebrow="Service"
      heroTitle="ADHD testing"
      heroTitleEm="& evaluations."
      heroDescription="Evidence-based ADHD assessments using validated clinical screening tools. An accurate diagnosis is the foundation of effective treatment."
      heroImage="/images/ai/office-detail.jpg"
      sidebarLabel="ADHD Evaluations"
      sidebarStat="1–2"
      sidebarStatLabel="Visits — the typical evaluation timeline"
      sidebarNote="Clarity through careful, evidence-based assessment."
      intro={[
        "ADHD in adults is often missed or misdiagnosed. Our comprehensive evaluations use validated clinical tools to provide the clarity you need.",
        "We combine structured clinical interviews, standardized rating scales, and a thorough review of your history across work, school, relationships, and daily life to build an accurate picture.",
        "Whether you suspect you have ADHD, have been previously diagnosed but want confirmation, or need documentation for school or workplace accommodations, we provide the thorough assessment you deserve.",
      ]}
      steps={[
        { num: "01", title: "Clinical Interview", description: "A detailed conversation about your symptoms, history, and how focus challenges affect your daily life." },
        { num: "02", title: "Validated Scales", description: "Standardized rating scales like the ASRS and Conners help objectively measure ADHD symptoms." },
        { num: "03", title: "History Review", description: "We review academic, work, and personal history to identify patterns consistent with adult ADHD." },
        { num: "04", title: "Differential Diagnosis", description: "Careful evaluation to distinguish ADHD from anxiety, depression, or other conditions with similar symptoms." },
        { num: "05", title: "Diagnosis & Plan", description: "Clear diagnosis communicated in detail, with treatment options personalized to your goals." },
      ]}
      benefits={[
        { title: "Adult-Focused", text: "Specialized experience in diagnosing adult ADHD, which often presents differently than in children." },
        { title: "Evidence-Based", text: "Validated screening instruments combined with clinical judgment for accurate diagnosis." },
        { title: "Thorough", text: "We don't rush the diagnosis — careful differential ensures the right answer." },
        { title: "Clear Results", text: "You receive a clear explanation of findings and what they mean for your treatment." },
        { title: "Continuity", text: "Seamless transition to medication management or other treatment following diagnosis." },
        { title: "Documentation", text: "Written summaries available for school, workplace, or disability accommodations if needed." },
      ]}
      relatedConditions={[
        { name: "ADHD", href: "/conditions/adhd" },
        { name: "Anxiety", href: "/conditions/anxiety" },
        { name: "Depression", href: "/conditions/depression" },
      ]}
      faqs={[
        { question: "How long does ADHD testing take?", answer: "Most evaluations can be completed in one or two visits, each 60-90 minutes. Some complex cases may require additional sessions." },
        { question: "Can ADHD be diagnosed via telehealth?", answer: "Yes. ADHD evaluations can be conducted via secure telepsychiatry with the same thoroughness as in-person visits." },
        { question: "Will my insurance cover ADHD testing?", answer: "Most insurance plans cover diagnostic evaluations. Call us at (734) 331-6037 and we'll verify your coverage." },
        { question: "Can you test me even if I've been diagnosed before?", answer: "Yes. Many patients want confirmation, a second opinion, or updated documentation. We're happy to re-evaluate." },
        { question: "What happens after I'm diagnosed?", answer: "Your psychiatrist will discuss treatment options — which may include medication, behavioral strategies, or therapy referrals — tailored to your goals." },
      ]}
      ctaHeadline="Get clarity today."
      ctaSubheadline="Schedule your ADHD evaluation. Most new patients are seen within one week."
    />
  );
}
