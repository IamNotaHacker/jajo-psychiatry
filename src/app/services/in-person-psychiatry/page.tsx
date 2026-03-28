import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title:
    "In-Person Psychiatry | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "In-person psychiatric care at our Farmington Hills, Michigan office. Face-to-face psychiatric evaluations, medication management, and ongoing treatment at 31393 West 13 Mile Road, Suite 105. Serving the greater Detroit metro area.",
};

const faqs = [
  {
    question: "Where is Jajo Psychiatry located?",
    answer:
      "Our office is located at 31393 West 13 Mile Road, Suite 105, Farmington Hills, MI 48334. We are conveniently located in the Farmington Hills area with easy access from major roads and highways serving the greater Detroit metropolitan area.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Jajo Psychiatry is open Monday through Friday, 9:00 AM to 5:00 PM. We are closed on Saturday and Sunday. If you need to reach us outside of business hours, please leave a message and our team will return your call on the next business day.",
  },
  {
    question: "How long are in-person appointments?",
    answer:
      "Initial psychiatric evaluations typically last 45 to 60 minutes to allow for a thorough assessment. Follow-up medication management appointments generally last 15 to 30 minutes, depending on the complexity of your care. We schedule enough time so you never feel rushed.",
  },
  {
    question: "Is parking available at your office?",
    answer:
      "Yes, free parking is available in the building lot directly adjacent to our office entrance. The parking area is well-lit and easily accessible. Our suite is located on the first floor for convenient access.",
  },
  {
    question: "Can I switch between in-person and telepsychiatry visits?",
    answer:
      "Absolutely. Many of our patients use a combination of in-person and telepsychiatry appointments depending on their schedule and preferences. You can choose the format that works best for each visit. Simply let us know your preference when scheduling.",
  },
];

export default function InPersonPsychiatryPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: "In-Person Psychiatry", href: "/services/in-person-psychiatry" },
            ]}
          />

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mb-6">
            In-Person Psychiatry
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            While telepsychiatry offers tremendous convenience, many patients
            prefer the personal connection that comes with face-to-face
            psychiatric care. At Jajo Psychiatry, our Farmington Hills office
            is designed to provide a welcoming, comfortable, and private
            environment where you can meet directly with your psychiatrist for
            evaluations, medication management, and ongoing treatment.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            In-person appointments allow for a more complete clinical
            observation, which can be particularly valuable during initial
            evaluations or when addressing complex psychiatric conditions. Your
            psychiatrist can observe nonverbal cues, conduct a thorough mental
            status examination, and build the kind of therapeutic rapport that
            many patients find especially meaningful in face-to-face settings.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Located at 31393 West 13 Mile Road, Suite 105 in Farmington Hills,
            Michigan, our office is easily accessible from communities
            throughout the greater Detroit metro area including Southfield, West
            Bloomfield, Novi, Livonia, and beyond. We are committed to making
            your in-person visit as comfortable and productive as possible from
            the moment you arrive.
          </p>
        </div>
      </section>

      {/* Location Card */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="h-14 w-14 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground mb-2">
                Our Office Location
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-1">
                31393 West 13 Mile Road, Suite 105
              </p>
              <p className="text-muted-foreground leading-relaxed mb-1">
                Farmington Hills, MI 48334
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Phone: (734) 331-6037
              </p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 5:00 PM | Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What to Expect at Your In-Person Visit
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Arrive and Check In",
                description:
                  "When you arrive at our Farmington Hills office, our front desk team will greet you and verify your information. If you have completed your intake paperwork online, the check-in process is quick. We strive to minimize wait times so your appointment starts on schedule.",
              },
              {
                step: "2",
                title: "Meet with Your Psychiatrist",
                description:
                  "You will be brought to a private consultation room where you will meet one-on-one with your psychiatrist. For new patients, this initial session includes a comprehensive psychiatric evaluation. For returning patients, your psychiatrist will review your progress, discuss any changes in symptoms, and address concerns.",
              },
              {
                step: "3",
                title: "Clinical Assessment",
                description:
                  "During your appointment, your psychiatrist conducts a thorough clinical assessment. In person, this includes direct observation of your presentation, a mental status examination, and a detailed review of your symptoms, history, and treatment goals.",
              },
              {
                step: "4",
                title: "Treatment Planning and Medication Review",
                description:
                  "Your psychiatrist will discuss findings, explain any diagnoses, and collaboratively develop or adjust your treatment plan. This may include starting, adjusting, or continuing medications, ordering lab work, recommending therapy, or scheduling additional testing such as ADHD evaluations or GeneSight testing.",
              },
              {
                step: "5",
                title: "Schedule Your Next Appointment",
                description:
                  "Before leaving, you will schedule your next follow-up visit with our office team. Prescriptions are sent electronically to your pharmacy, and any referrals or lab orders are processed promptly so there is no delay in your care.",
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
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why Choose In-Person Psychiatric Care
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Deeper Personal Connection",
                text: "Face-to-face interaction allows for a stronger therapeutic relationship. Many patients feel more connected and engaged during in-person appointments.",
              },
              {
                title: "Comprehensive Clinical Observation",
                text: "In-person visits allow your psychiatrist to make more complete observations of your appearance, behavior, and nonverbal communication, which supports more accurate assessment.",
              },
              {
                title: "Welcoming Office Environment",
                text: "Our Farmington Hills office is designed with your comfort in mind. Private consultation rooms, a calm atmosphere, and a friendly staff create a positive experience.",
              },
              {
                title: "Ideal for Initial Evaluations",
                text: "First-time psychiatric evaluations can benefit from the in-person format, where the full scope of clinical observation tools is available to your psychiatrist.",
              },
              {
                title: "No Technology Barriers",
                text: "In-person visits eliminate concerns about internet connectivity, device issues, or unfamiliarity with video platforms. Simply show up and focus on your care.",
              },
              {
                title: "Flexible Scheduling Options",
                text: "Switch seamlessly between in-person and telepsychiatry visits based on your needs. Our hybrid model gives you the best of both worlds.",
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
      <section className="py-16 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conditions Treated at Our Office
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our in-person psychiatric services address the full range of
            conditions we treat. Learn more:
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
        title="In-Person Psychiatry FAQs"
        subtitle="Common questions about visiting our Farmington Hills office."
        faqs={faqs}
      />

      {/* CTA */}
      <CTASection
        headline="Visit Us in Farmington Hills"
        subheadline="Schedule an in-person appointment at Jajo Psychiatry. We look forward to welcoming you to our office."
      />
    </>
  );
}
