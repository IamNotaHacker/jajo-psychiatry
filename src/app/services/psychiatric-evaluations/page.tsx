import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Psychiatric Evaluations | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Comprehensive psychiatric evaluations in Farmington Hills, Michigan. Our board-certified psychiatrists provide thorough mental health assessments to build personalized treatment plans.",
};

export default function PsychiatricEvaluationsPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="psychiatric-evaluations"
      serviceName="Psychiatric Evaluations"
      heroEyebrow="Service"
      heroTitle="Psychiatric"
      heroTitleEm="evaluations."
      heroDescription="A comprehensive psychiatric evaluation is the foundation of effective mental health care. Thorough clinical assessments designed to understand your symptoms, history, and goals."
      heroImage="/images/ai/office-new.jpg"
      sidebarLabel="Your Evaluation"
      sidebarStat="45–60"
      sidebarStatLabel="Minutes — the typical length of your initial evaluation"
      sidebarNote="The foundation of every treatment plan we build."
      intro={[
        "Whether you are experiencing symptoms for the first time or seeking a second opinion, our evaluations provide the clarity you need to move forward with confidence.",
        "We take the time to listen carefully, ask the right questions, and consider all factors that may be contributing to your mental health concerns — including medical history, family history, lifestyle, and psychosocial stressors.",
        "Our practice serves patients from Farmington Hills and communities throughout Michigan. Evaluations are available both in person at our office and through our secure telepsychiatry platform.",
      ]}
      stepsHeading="What to expect at your evaluation"
      steps={[
        {
          num: "01",
          title: "Scheduling & Intake",
          description:
            "We help you schedule at a convenient time. Before your appointment, you complete intake forms covering medical history, current symptoms, and any prior treatment.",
        },
        {
          num: "02",
          title: "Clinical Interview",
          description:
            "Your psychiatrist conducts an in-depth, collaborative clinical interview about symptoms, history, medications, sleep, and overall functioning.",
        },
        {
          num: "03",
          title: "Mental Status Exam",
          description:
            "A structured observation of your appearance, behavior, speech, mood, thought processes, cognition, and insight — providing an objective picture.",
        },
        {
          num: "04",
          title: "Diagnostic Assessment",
          description:
            "Validated screening tools like PHQ-9, GAD-7, or ADHD rating scales complement the interview to ensure diagnostic accuracy.",
        },
        {
          num: "05",
          title: "Treatment Plan",
          description:
            "Your psychiatrist explains findings, discusses diagnoses, and recommends a personalized plan — medication, therapy referrals, lifestyle, or testing.",
        },
      ]}
      benefits={[
        {
          title: "Thorough & Unhurried",
          text: "Ample time for each evaluation — you never feel rushed. We listen carefully and explore every aspect.",
        },
        {
          title: "Board-Certified",
          text: "Extensive training in diagnosing and treating a wide spectrum of psychiatric conditions in adults.",
        },
        {
          title: "Evidence-Based",
          text: "Validated clinical screening tools and current guidelines ensure accurate diagnoses.",
        },
        {
          title: "In-Person or Virtual",
          text: "Visit our Farmington Hills office or complete your evaluation via secure telepsychiatry.",
        },
        {
          title: "Collaborative Care",
          text: "Your treatment plan is developed together — we explain findings clearly and welcome questions.",
        },
        {
          title: "Seamless Continuity",
          text: "After evaluation, transitioning to ongoing medication management is simple.",
        },
      ]}
      relatedConditions={[
        { name: "ADHD", href: "/conditions/adhd" },
        { name: "Anxiety", href: "/conditions/anxiety" },
        { name: "Depression", href: "/conditions/depression" },
        { name: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
        { name: "PTSD", href: "/conditions/ptsd" },
        { name: "Schizophrenia", href: "/conditions/schizophrenia" },
      ]}
      faqs={[
        {
          question: "How long does a psychiatric evaluation take?",
          answer:
            "An initial psychiatric evaluation typically lasts 45 to 60 minutes. This allows time for a thorough clinical interview, history review, and initial treatment recommendations. In complex cases, a follow-up session may be scheduled.",
        },
        {
          question: "What should I bring to my evaluation?",
          answer:
            "A valid photo ID, your insurance card, a list of current medications with dosages, and any relevant medical or psychiatric records. Writing down your main concerns ahead of time is helpful.",
        },
        {
          question: "Will I receive a diagnosis at my first appointment?",
          answer:
            "In many cases, yes — a preliminary diagnosis can be provided during or shortly after your first evaluation. Some conditions require additional assessment over time. Your psychiatrist will be transparent about the process.",
        },
        {
          question: "Can I have my evaluation done via telehealth?",
          answer:
            "Yes. We offer psychiatric evaluations through our telepsychiatry platform for patients anywhere in Michigan, using the same thorough clinical process over secure, HIPAA-compliant video.",
        },
        {
          question: "Do I need a referral from my primary care doctor?",
          answer:
            "Most insurance plans do not require a referral. Some HMO plans may. Call us at (734) 331-6037 and we'll help verify your coverage and any referral needs.",
        },
      ]}
      ctaHeadline="Schedule your evaluation today."
      ctaSubheadline="Take the first step toward understanding your mental health. New patients are often seen within one week."
    />
  );
}
