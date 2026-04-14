import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES, CONDITIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Psychiatric Services | Jajo Psychiatry | Farmington Hills, MI",
  description:
    "Explore our full range of psychiatric services in Farmington Hills, Michigan, including psychiatric evaluations, medication management, telepsychiatry, ADHD testing, and GeneSight testing.",
};

const serviceDetails: Record<
  string,
  { num: string; description: string }
> = {
  "psychiatric-evaluations": {
    num: "01",
    description:
      "In-depth assessment of your mental health history, current symptoms, and goals.",
  },
  "medication-management": {
    num: "02",
    description:
      "Careful prescribing, monitoring, and adjustment to find what works for you.",
  },
  telepsychiatry: {
    num: "03",
    description: "Convenient virtual visits for patients anywhere in Michigan.",
  },
  "in-person-psychiatry": {
    num: "04",
    description:
      "Face-to-face psychiatric care at our Farmington Hills office.",
  },
  "adhd-testing": {
    num: "05",
    description: "Evidence-based screening using validated clinical tools.",
  },
  "genesight-testing": {
    num: "06",
    description: "Pharmacogenomic testing to guide medication decisions.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1B1F4B]">
      <PageHero
        breadcrumbs={[{ name: "Services", href: "/services" }]}
        eyebrow="What We Offer"
        title="Services designed"
        titleEm="around your care."
        description="A comprehensive range of psychiatric services, from initial evaluation through ongoing medication management and specialized testing."
        image="/images/ai/office-new.jpg"
      />

      {/* Services list */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-px bg-[#1B1F4B]/10 rounded-2xl overflow-hidden">
            {SERVICES.map((service) => {
              const details = serviceDetails[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-[#F8F4EC] py-8 px-6 lg:px-10 flex items-start gap-6 lg:gap-10 group cursor-pointer hover:bg-[#EADCC2]/30 transition-colors"
                >
                  <span className="font-editorial text-xl text-[#1B1F4B]/30 shrink-0 w-10">
                    {details?.num}
                  </span>
                  <div className="flex-1 grid lg:grid-cols-12 gap-4">
                    <h3 className="lg:col-span-4 font-editorial text-2xl lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="lg:col-span-7 text-[#1B1F4B]/60 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="lg:col-span-1 flex justify-end items-start">
                      <Plus className="h-5 w-5 text-[#1B1F4B]/40 group-hover:rotate-90 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-4">
                — Our Approach
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial text-3xl lg:text-[2.5rem] leading-[1.2] mb-6">
                Every patient receives a treatment plan{" "}
                <em className="italic text-[#2D5DA1]">
                  tailored to their unique circumstances
                </em>
                .
              </p>
              <p className="text-[#1B1F4B]/60 leading-relaxed max-w-2xl mb-4">
                We combine thorough clinical assessment with the latest
                evidence-based approaches to ensure you receive the highest
                standard of psychiatric care. Our practice serves patients
                across Michigan through both in-person visits at our Farmington
                Hills office and telepsychiatry appointments.
              </p>
              <p className="text-[#1B1F4B]/60 leading-relaxed max-w-2xl">
                We accept most major insurance plans and are committed to
                making quality psychiatric care accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions list */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-3">
              — Conditions We Treat
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              Our services address<br />
              <em className="italic text-[#2D5DA1]">
                a wide range of conditions.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group flex items-center justify-between bg-[#EADCC2]/50 hover:bg-[#EADCC2] rounded-2xl px-6 py-5 transition-colors"
              >
                <span className="font-editorial text-xl text-[#1B1F4B]">
                  {condition.title}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#2D5DA1] group-hover:rotate-45 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
