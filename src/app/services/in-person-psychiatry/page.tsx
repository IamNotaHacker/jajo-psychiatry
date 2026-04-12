import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "In-Person Psychiatry | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "In-person psychiatric care at our Farmington Hills office. Face-to-face evaluations, medication management, and ongoing support in a warm, comfortable setting.",
};

export default function InPersonPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="in-person-psychiatry"
      serviceName="In-Person Psychiatry"
      heroEyebrow="Service"
      heroTitle="In-person care,"
      heroTitleEm="at our office."
      heroDescription="Face-to-face psychiatric care in a warm, private setting in Farmington Hills. For patients who prefer the personal connection of sitting with their provider."
      heroImage="/images/ai/hero-main.jpg"
      sidebarLabel="In-Person Care"
      sidebarStat="Suite 105"
      sidebarStatLabel="Our private office on West 13 Mile Road, Farmington Hills"
      sidebarNote="A warm, quiet space designed for thoughtful care."
      intro={[
        "Our Farmington Hills office was designed to feel more like a quiet living room than a clinical space — comfortable seating, natural light, and complete privacy.",
        "In-person visits allow your psychiatrist to pick up on subtle cues, build deeper rapport, and create a sense of connection that many patients prefer for their initial evaluation or ongoing care.",
        "We're conveniently located at 31393 West 13 Mile Road, Suite 105, Farmington Hills, MI 48334, with ample parking and easy access from surrounding communities.",
      ]}
      steps={[
        { num: "01", title: "Arrival", description: "Arrive a few minutes early to get comfortable. Our reception area is private and quiet." },
        { num: "02", title: "Check-in", description: "Complete any remaining paperwork and meet your psychiatrist personally." },
        { num: "03", title: "Private Visit", description: "Your appointment takes place in a quiet office with comfortable seating — no rushed feeling." },
        { num: "04", title: "Treatment Plan", description: "Your psychiatrist discusses findings, explains options, and answers all your questions in person." },
        { num: "05", title: "Follow-up", description: "Schedule your next visit before you leave. Prescriptions are sent electronically." },
      ]}
      benefits={[
        { title: "Personal Connection", text: "Nothing replaces sitting face-to-face with your psychiatrist for building trust and rapport." },
        { title: "Private Setting", text: "A calm, confidential office designed for thoughtful conversation, not a busy clinic." },
        { title: "Easy Access", text: "Convenient Farmington Hills location with ample parking. Minutes from I-696 and I-275." },
        { title: "Unhurried Visits", text: "We block appropriate time for every visit — you never feel rushed." },
        { title: "Full Services", text: "Everything from evaluations to GeneSight testing handled on-site." },
        { title: "Same Team", text: "Continuity of care with the same psychiatrist who knows your history." },
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
        { question: "Where is your office located?", answer: "31393 West 13 Mile Road, Suite 105, Farmington Hills, MI 48334. We have ample parking and are easily accessible from I-696 and I-275." },
        { question: "What are your office hours?", answer: "Monday through Friday, 9:00 AM to 5:00 PM. We are closed on weekends. Call (734) 331-6037 to schedule." },
        { question: "How long do in-person visits last?", answer: "Initial evaluations are typically 45-60 minutes. Follow-up medication management visits are usually 15-30 minutes." },
        { question: "Can I switch between in-person and telehealth visits?", answer: "Yes. Many patients mix in-person and telehealth visits based on their schedule and preference." },
        { question: "What should I bring to my first appointment?", answer: "A photo ID, insurance card, list of current medications, and any relevant medical or psychiatric records from previous providers." },
      ]}
      ctaHeadline="Visit us in person today."
      ctaSubheadline="Schedule an in-person appointment at our Farmington Hills office."
    />
  );
}
