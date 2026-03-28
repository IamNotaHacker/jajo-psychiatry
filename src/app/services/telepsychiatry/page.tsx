import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Telepsychiatry | Virtual Psychiatric Care | Jajo Psychiatry | Michigan",
  description:
    "Convenient telepsychiatry services for patients throughout Michigan. Receive expert psychiatric evaluations, medication management, and follow-up care from the comfort of your home. HIPAA-compliant video visits with Jajo Psychiatry.",
};

const faqs = [
  {
    question: "Is telepsychiatry as effective as in-person visits?",
    answer:
      "Research consistently shows that telepsychiatry is as effective as in-person psychiatric care for most conditions and services, including evaluations, medication management, and follow-up appointments. Many patients report feeling more comfortable and relaxed during virtual visits, which can lead to more open and productive conversations with their psychiatrist.",
  },
  {
    question: "What technology do I need for a telepsychiatry appointment?",
    answer:
      "You need a device with a camera and microphone (smartphone, tablet, laptop, or desktop computer) and a stable internet connection. Our secure video platform works in most modern web browsers without requiring any special software downloads. We recommend finding a quiet, private space for your appointment.",
  },
  {
    question: "Is telepsychiatry covered by my insurance?",
    answer:
      "Most major insurance plans now cover telepsychiatry at the same rate as in-person visits. This includes Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and many other plans we accept. Our team can help verify your telehealth benefits when you schedule your appointment.",
  },
  {
    question: "Can I get prescriptions through telepsychiatry?",
    answer:
      "Yes. Our psychiatrists can prescribe and manage medications during telepsychiatry appointments, including most psychiatric medications. Prescriptions are sent electronically to the pharmacy of your choice. The same standards of care apply whether your visit is virtual or in person.",
  },
  {
    question: "Who is eligible for telepsychiatry at Jajo Psychiatry?",
    answer:
      "Telepsychiatry is available to patients located anywhere in the state of Michigan at the time of their appointment. You do not need to be near our Farmington Hills office to receive care. Both new and existing patients can use our telepsychiatry services.",
  },
];

export default function TelepsychiatryPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "Telepsychiatry", href: "/services/telepsychiatry" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Telepsychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Access expert psychiatric care from anywhere in Michigan with
            telepsychiatry at Jajo Psychiatry. Our secure, HIPAA-compliant
            video platform allows you to meet with a board-certified
            psychiatrist without the need to travel to our Farmington Hills
            office. Whether you live in the Detroit metro area, rural Michigan,
            or anywhere in between, quality psychiatric care is just a video
            call away.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Telepsychiatry removes many of the barriers that can make accessing
            mental health care difficult. Long commutes, scheduling conflicts,
            mobility challenges, and geographic distance no longer have to stand
            between you and the care you need. Our virtual visits are designed
            to be just as thorough and personalized as our in-person
            appointments, giving you the same high standard of care from the
            comfort and privacy of your own home.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial psychiatric evaluations to ongoing medication
            management, our telepsychiatry services cover the full scope of
            care we provide. Jajo Psychiatry has invested in reliable, secure
            technology and streamlined workflows to make your virtual
            experience seamless and focused entirely on your mental health.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect with Telepsychiatry
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Schedule Your Appointment",
                description:
                  "Contact our office by phone at (734) 331-6037 or book online. When scheduling, simply indicate that you prefer a telepsychiatry visit. Our team will confirm your appointment and send you instructions for joining the video session.",
              },
              {
                step: "2",
                title: "Complete Intake Paperwork Online",
                description:
                  "New patients will receive a link to our secure online intake forms. Completing these forms before your appointment ensures your psychiatrist has all the information needed to make the most of your time together.",
              },
              {
                step: "3",
                title: "Prepare Your Space",
                description:
                  "Find a quiet, private location with good lighting and a stable internet connection. Make sure your device camera and microphone are working. Have a list of your current medications and any questions you want to discuss readily available.",
              },
              {
                step: "4",
                title: "Join Your Video Visit",
                description:
                  "At your appointment time, click the secure link provided by our office to join the video session. Your psychiatrist will greet you and conduct your appointment with the same thoroughness and attention as an in-person visit, including clinical assessment, treatment discussion, and any medication adjustments.",
              },
              {
                step: "5",
                title: "Follow-Up and Prescriptions",
                description:
                  "After your session, any prescriptions are sent electronically to your preferred pharmacy. Follow-up appointments are scheduled based on your treatment plan, and you can continue choosing telepsychiatry or switch to in-person visits at any time.",
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
            Benefits of Telepsychiatry
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Convenience and Flexibility",
                text: "Attend appointments from home, your office, or anywhere with a private internet connection. No travel time, parking, or waiting rooms.",
              },
              {
                title: "Access Across Michigan",
                text: "Patients anywhere in Michigan can receive care from our board-certified psychiatrists, regardless of proximity to our Farmington Hills office.",
              },
              {
                title: "Same Quality of Care",
                text: "Our telepsychiatry appointments follow the same clinical protocols as in-person visits. Your treatment is not compromised by the virtual format.",
              },
              {
                title: "HIPAA-Compliant Security",
                text: "All video sessions are conducted through a secure, encrypted platform that meets federal HIPAA requirements for protecting your health information.",
              },
              {
                title: "Reduced Barriers to Care",
                text: "Telepsychiatry helps overcome obstacles like transportation challenges, childcare needs, mobility limitations, and busy work schedules.",
              },
              {
                title: "Comfortable Environment",
                text: "Many patients find they communicate more openly and honestly from the comfort of their own home, leading to more productive sessions.",
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
            Conditions Treated via Telepsychiatry
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our telepsychiatry services can address the same conditions we treat
            in person. Learn more about these conditions:
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
        title="Telepsychiatry FAQs"
        subtitle="Answers to common questions about virtual psychiatric care at Jajo Psychiatry."
        faqs={faqs}
        className="bg-muted"
      />

      {/* CTA */}
      <CTASection
        headline="Start Your Virtual Psychiatric Care Today"
        subheadline="Schedule a telepsychiatry appointment with Jajo Psychiatry and receive expert care from anywhere in Michigan."
      />
    </>
  );
}
