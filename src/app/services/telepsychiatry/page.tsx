import type { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Telepsychiatry | Jajo Psychiatry | Michigan",
  description:
    "Secure, convenient virtual psychiatric visits for patients across Michigan. Same quality care as in-person, from the comfort of your home.",
};

export default function TelepsychiatryPage() {
  return (
    <ServiceDetailLayout
      serviceSlug="telepsychiatry"
      serviceName="Telepsychiatry"
      heroEyebrow="Service"
      heroTitle="Virtual care,"
      heroTitleEm="real connection."
      heroDescription="Convenient, secure video visits for patients anywhere in Michigan. Same thorough evaluations and ongoing care as in-person."
      heroImage="/images/ai/nature-calm.jpg"
      sidebarLabel="Virtual Visits"
      sidebarStat="Statewide"
      sidebarStatLabel="Available to patients across all of Michigan"
      sidebarNote="Same quality care, from wherever you are."
      intro={[
        "Telepsychiatry brings high-quality mental health care into your home, office, or wherever you feel most comfortable.",
        "Our virtual appointments follow the same clinical process as in-person visits, conducted through a HIPAA-compliant, secure video platform. No commute, no waiting rooms — just thoughtful, expert care.",
        "Telepsychiatry is available across the state of Michigan for both new patient evaluations and ongoing medication management.",
      ]}
      stepsHeading="How telepsychiatry works"
      steps={[
        { num: "01", title: "Schedule", description: "Book your appointment online or by phone. We'll help you get set up quickly and answer any questions." },
        { num: "02", title: "Complete Intake", description: "Fill out intake forms securely online before your visit so your psychiatrist can make the most of your time." },
        { num: "03", title: "Connect via Video", description: "Log in from your computer, tablet, or phone using our HIPAA-compliant video platform. No special software required." },
        { num: "04", title: "Your Visit", description: "Meet with your psychiatrist in a private, comfortable space. Visits cover everything an in-person appointment would." },
        { num: "05", title: "Follow-up", description: "Prescriptions are sent electronically to your pharmacy. Follow-up visits can be virtual or in-person." },
      ]}
      benefits={[
        { title: "No Commute", text: "Skip the drive to Farmington Hills — connect from anywhere in Michigan." },
        { title: "Same Quality", text: "Virtual visits use the same thorough clinical process as in-person evaluations." },
        { title: "HIPAA-Compliant", text: "Secure, encrypted video platform keeps your conversations private." },
        { title: "Flexible Hours", text: "Evening and early morning slots often available for busy schedules." },
        { title: "Insurance Accepted", text: "Telepsychiatry is covered by most major insurance plans we accept." },
        { title: "Easy to Use", text: "No special software — connect from your computer, tablet, or smartphone." },
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
        { question: "What equipment do I need?", answer: "A smartphone, tablet, or computer with a camera and microphone, plus a reliable internet connection. You'll also need a private, quiet space for your visit." },
        { question: "Is telepsychiatry as effective as in-person care?", answer: "Yes. Research consistently shows telepsychiatry is just as effective as in-person visits for most psychiatric conditions, including medication management." },
        { question: "Can I get prescriptions through telepsychiatry?", answer: "Yes. Your psychiatrist can prescribe most psychiatric medications through telepsychiatry. Prescriptions are sent electronically to your preferred pharmacy." },
        { question: "Do you see patients outside of Michigan?", answer: "No. Due to licensing requirements, our psychiatrists can only see patients physically located in Michigan at the time of the visit." },
        { question: "Is my telehealth visit private?", answer: "Absolutely. All telepsychiatry visits are conducted on a HIPAA-compliant, encrypted platform. Your conversations remain confidential." },
      ]}
      ctaHeadline="Start telepsychiatry today."
      ctaSubheadline="Book your first virtual visit. New patients are often seen within one week."
    />
  );
}
