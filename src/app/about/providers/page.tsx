import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";
import {
  FlourishOrnament,
  BotanicalSprig,
  DotGridPattern,
} from "@/components/ui/Ornaments";

export const metadata: Metadata = {
  title: "Our Providers | Jajo Psychiatry",
  description:
    "Meet the team of board-certified Physician Assistants, therapists, and physicians at Jajo Psychiatry in Farmington Hills, MI.",
};

interface Provider {
  initials: string;
  image?: string;
  name: string;
  credentials: string;
  title: string;
  bio: string[];
  education: { school: string; degree: string }[];
  certifications?: string[];
  affiliations?: string[];
  status?: "active" | "not-seeing-patients";
}

const activeTeam: Provider[] = [
  {
    initials: "SJ",
    image: "/images/team/shahad-jonna.jpg",
    name: "Shahad Jajo Jonna",
    credentials: "PA-C",
    title: "Owner · Board-Certified Physician Assistant",
    bio: [
      "Shahad is a nationally board-certified and state-licensed Physician Assistant specializing in Psychiatry. She is the daughter of Jajo Psychiatry's founder, the late Dr. Raad Jajo, and now owns and leads the practice he built.",
      "She has practiced psychiatry as a PA for over six years and brings more than fourteen years of medical experience across psychiatry, dermatology, orthopedics, and pain management. For nearly a decade, she trained and practiced alongside her father, learning his approach to thoughtful, individualized care.",
      "Shahad currently works in collaboration with Dr. Wendy Besler, M.D., a neuropsychiatrist. She is known for her warmth, her meticulous attention to detail, and her ability to put patients at ease. Her approach combines evidence-based medicine with holistic care and clear communication.",
    ],
    education: [
      {
        school: "Wayne State University",
        degree: "Bachelor of Science, Psychology (with honors), 2015",
      },
      {
        school: "University of Detroit Mercy",
        degree: "Master of Science, Physician Assistant Studies, 2018",
      },
    ],
    certifications: [
      "National Commission on Certification of Physician Assistants",
      "Fellow of the American Academy of Physician Associates",
      "Diplomate, Michigan Association of Physician Assistants",
      "Member, Association of PAs in Psychiatry",
    ],
    affiliations: ["Henry Ford Medical Group"],
  },
  {
    initials: "SS",
    image: "/images/team/stacy-sharpe.jpg",
    name: "Stacy Sharpe",
    credentials: "MS, PA-C",
    title: "Board-Certified Physician Assistant",
    bio: [
      "Stacy has been a board-certified Physician Assistant since 2012, with experience concentrated in adult and geriatric psychiatry across both outpatient and long-term care settings.",
      "Before becoming a PA, she worked for several years as a Mental Health Technician on an inpatient psychiatric unit and in an emergency department, specializing in crisis intervention and acute stabilization. She also spent years in neurological rehabilitation, helping patients with traumatic brain injuries regain independence.",
      "Stacy believes in comprehensive mental health care that considers pharmacological treatment, lifestyle, nutrition, and emotional well-being &mdash; all delivered in a respectful, safe space for every patient.",
    ],
    education: [
      {
        school: "Wayne State University",
        degree: "Bachelor of Science, Psychology and Biology, 2003",
      },
      {
        school: "University of Detroit Mercy",
        degree: "Master of Science, Physician Assistant Studies",
      },
    ],
    certifications: [
      "National Commission on Certification of Physician Assistants",
      "Fellow of the American Academy of Physician Associates",
      "Diplomate, Michigan Association of Physician Assistants",
      "Member, Association of PAs in Psychiatry",
    ],
  },
  {
    initials: "MK",
    image: "/images/team/mackenzy-kassab.jpg",
    name: "MacKenzy Kassab",
    credentials: "PA-C",
    title: "Board-Certified Physician Assistant",
    bio: [
      "MacKenzy is a nationally board-certified Physician Assistant licensed in Michigan. She brings a background in acute care and Family Medicine, where she worked alongside collaborating physicians treating a range of mental health conditions.",
      "She is committed to making a meaningful impact in her patients' lives and recognizes how deeply mental health affects overall well-being. Her focus is on creating a supportive environment that helps people navigate their challenges and feel heard.",
    ],
    education: [
      {
        school: "Wayne State University",
        degree: "Bachelor of Science, Public Health, 2019",
      },
      {
        school: "University of Detroit Mercy",
        degree: "Master of Physician Assistant Studies, 2022",
      },
    ],
    certifications: [
      "National Commission on Certification of Physician Assistants",
      "Fellow of the American Academy of Physician Associates",
      "Fellow of the Michigan Academy of Physician Associates",
    ],
  },
  {
    initials: "MZ",
    image: "/images/team/marisa-zito.jpg",
    name: "Marisa Zito",
    credentials: "M.S., PA-C, RD",
    title: "Board-Certified Physician Assistant & Registered Dietitian",
    bio: [
      "Marisa is a nationally board-certified Physician Assistant and Registered Dietitian with a deep commitment to patient-centered care and mental health advocacy. Her background spans interventional pain management, physical medicine and rehabilitation, and clinical nutrition.",
      "She began her healthcare journey in 2007 as a clinical dietitian at Henry Ford Hospital Detroit, specializing in oncology and hematology. Caring for cancer patients shaped her trust-building approach and made the transition into behavioral health a natural one.",
      "Marisa treats a wide range of conditions including mood disorders, depression, anxiety, PTSD, and the psychiatric concerns that often accompany chronic pain. Her approach is whole-person, collaborative, and grounded in meeting patients exactly where they are.",
    ],
    education: [
      {
        school: "Central Michigan University",
        degree: "Bachelor of Science, Dietetics & Nutrition Science, 2002–2006",
      },
      {
        school: "Wayne State University",
        degree: "Master of Science, Physician Assistant, 2019–2021",
      },
    ],
  },
  {
    initials: "CK",
    image: "/images/team/christen-konja.png",
    name: "Christen Konja",
    credentials: "PA-C",
    title: "Board-Certified Physician Assistant",
    bio: [
      "Christen is a board-certified Physician Assistant licensed in Michigan with full prescribing privileges. During her training, she gained mental health experience through internal medicine, inpatient psychiatry, and pediatric rotations.",
      "She is dedicated to providing compassionate care for patients from all walks of life and is passionate about reducing the stigma around mental illness. Christen treats depression, PTSD, anxiety and panic disorder, OCD, ADHD, and more.",
    ],
    education: [
      {
        school: "Wayne State University",
        degree: "Bachelor of Science, Biology & Nutrition, 2015–2019",
      },
      {
        school: "University of Dayton",
        degree: "Master of Physician Assistant Practice, 2019–2021",
      },
    ],
    certifications: ["Medication-Assisted Treatment (MAT)"],
  },
  {
    initials: "JR",
    image: "/images/team/janelle-rabban.jpg",
    name: "Janelle Rabban",
    credentials: "L.M.S.W.",
    title: "Clinical Social Work / Therapist",
    bio: [
      "Janelle is a Licensed Master Social Worker who believes life is rarely a straight line — and that none of us are immune from hardship, challenge, or pain. Her work focuses on helping clients build self-care, resilience, and the skills to navigate what life brings.",
      "She works with clients on a wide variety of areas including trauma, anxiety, depression, grief and loss, abuse, and stress. Her approach centers on partnership: walking alongside clients as they reframe daily challenges into opportunities for growth.",
    ],
    education: [
      {
        school: "University of Southern California, Suzanne Dworak-Peck School of Social Work",
        degree: "Master of Social Work / LLMSW, 2019",
      },
    ],
  },
];

const inactiveTeam: Provider[] = [
  {
    initials: "WB",
    image: "/images/team/wendy-besler.jpg",
    name: "Dr. Wendy Besler",
    credentials: "M.D.",
    title: "Collaborating Physician · Neuropsychiatrist",
    bio: [
      "Dr. Wendy Besler is a neuropsychiatrist and the current attending physician at Jajo Psychiatry. She spent ten years as a Physician Assistant in neurology before attending medical school and completing a residency in psychiatry.",
      "Dr. Besler integrates neurology and psychiatry to evaluate and treat patients whose symptoms cross both disciplines. Her focus is providing the best possible care through a combination of integrative and traditional medicine.",
      "Note: Dr. Besler is not currently providing direct patient care but serves as the collaborating physician for our team.",
    ],
    education: [
      {
        school: "Detroit Wayne County Health Authority",
        degree: "Psychiatry Residency",
      },
      {
        school: "International University of the Health Sciences",
        degree: "Doctor of Medicine",
      },
      {
        school: "Touro University, New York",
        degree: "Board Certified, Psychiatry and Neurology",
      },
      {
        school: "University of Detroit Mercy",
        degree: "Master of Science, Physician Assistant",
      },
      {
        school: "Michigan State University",
        degree: "Bachelor of Science, Psychology",
      },
    ],
    status: "not-seeing-patients",
  },
  {
    initials: "YJ",
    image: "/images/team/yousif-jajo.jpg",
    name: "Dr. Yousif Jajo",
    credentials: "M.D.",
    title: "Psychiatrist",
    bio: [
      "Dr. Yousif Jajo has lived in metro Detroit for the past twenty years, having immigrated from Iraq. He graduated with distinction from the University of Michigan–Dearborn with a bachelor's degree in Biochemistry, then continued at Wayne State University School of Medicine — following in his late father's footsteps.",
      "His passion for psychiatry was shaped by his father's influence, and his areas of interest include consultation-liaison psychiatry, emergency psychiatry, and outpatient psychiatry. Outside of medicine, he enjoys spending time with family and friends, going to the movies, and exercising.",
      "Note: Dr. Yousif Jajo is not currently seeing patients at this time.",
    ],
    education: [
      {
        school: "University of Michigan – Dearborn",
        degree: "Bachelor of Science, Biochemistry (with distinction)",
      },
      {
        school: "Wayne State University School of Medicine",
        degree: "M.D., Psychiatry and Behavioral Neurosciences",
      },
    ],
    status: "not-seeing-patients",
  },
];

function ProviderCard({ provider, index }: { provider: Provider; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start">
      <div className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EADCC2] shadow-xl shadow-[#1F1A14]/10">
          {provider.image ? (
            <Image
              src={provider.image}
              alt={`Portrait of ${provider.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="h-32 w-32 rounded-full bg-[#1F1A14] flex items-center justify-center mx-auto mb-4">
                  <span className="font-editorial text-5xl text-[#E8C9A0]">
                    {provider.initials}
                  </span>
                </div>
                <p className="text-xs tracking-wider uppercase text-[#8B6F4E]">
                  Portrait coming soon
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`lg:col-span-8 ${reverse ? "lg:order-1" : ""}`}>
        <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
          — Provider
        </p>
        <h3 className="font-editorial text-3xl lg:text-4xl leading-[1.1] mb-1">
          {provider.name}
          {provider.credentials && (
            <span className="text-[#8B6F4E]">, {provider.credentials}</span>
          )}
        </h3>
        <p className="text-[#8B6F4E] text-sm tracking-wider uppercase mb-8">
          {provider.title}
        </p>

        <div className="space-y-4 text-[#1F1A14]/70 leading-relaxed mb-10 max-w-2xl">
          {provider.bio.map((para, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: para }}
              className={i === 0 ? "text-lg text-[#1F1A14]" : ""}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#1F1A14]/50 mb-3">
              Education
            </p>
            <ul className="space-y-3">
              {provider.education.map((e) => (
                <li key={e.school} className="text-sm text-[#1F1A14]/70 leading-relaxed">
                  <span className="block text-[#1F1A14] font-medium">
                    {e.school}
                  </span>
                  <span className="text-[#1F1A14]/55">{e.degree}</span>
                </li>
              ))}
            </ul>
          </div>
          {(provider.certifications || provider.affiliations) && (
            <div>
              {provider.certifications && (
                <>
                  <p className="text-xs tracking-[0.25em] uppercase text-[#1F1A14]/50 mb-3">
                    Certifications
                  </p>
                  <ul className="space-y-2 mb-6">
                    {provider.certifications.map((c) => (
                      <li
                        key={c}
                        className="text-sm text-[#1F1A14]/70 flex items-start gap-2"
                      >
                        <span className="text-[#8B6F4E]">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {provider.affiliations && (
                <>
                  <p className="text-xs tracking-[0.25em] uppercase text-[#1F1A14]/50 mb-3">
                    Affiliations
                  </p>
                  <ul className="space-y-2">
                    {provider.affiliations.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-[#1F1A14]/70 flex items-start gap-2"
                      >
                        <span className="text-[#8B6F4E]">—</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        {provider.status !== "not-seeing-patients" && (
          <div className="mt-10">
            <Link
              href={PRACTICE.bookingUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1A14] text-[#F8F4EC] text-sm font-medium hover:bg-[#3D2E1F] transition-colors"
            >
              <Calendar className="h-4 w-4" />
              Book with {provider.name.split(" ")[0]}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      <PageHero
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Providers", href: "/about/providers" },
        ]}
        eyebrow="Our Team"
        title="Well established,"
        titleEm="here for you."
        description="Meet the experienced team of physician assistants, therapists, and physicians who carry on Dr. Raad Jajo's tradition of personalized, compassionate care."
        image="/images/ai/window-light.jpg"
      />

      {/* Founder callout */}
      <section className="px-6 lg:px-10 py-10">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/about/founder"
            className="group block bg-[#1F1A14] text-[#F8F4EC] rounded-[2rem] p-8 lg:p-10 hover:bg-[#3D2E1F] transition-colors"
          >
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-9">
                <p className="text-xs tracking-[0.3em] uppercase text-[#E8C9A0] mb-3">
                  — In Memory of Our Founder
                </p>
                <h2 className="font-editorial text-2xl lg:text-3xl leading-[1.15]">
                  Read about Dr. Raad Jajo, M.D. &mdash;{" "}
                  <em className="italic text-[#E8C9A0]">
                    the renowned psychiatrist who built this practice.
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end">
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#E8C9A0] text-[#1F1A14] text-sm font-semibold group-hover:bg-white transition-colors">
                  Visit founder page
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Active team */}
      <section className="relative px-6 lg:px-10 py-16 overflow-hidden">
        <BotanicalSprig className="absolute -right-20 top-20 w-[440px] h-[440px] text-[#1F1A14] opacity-[0.04] hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="mb-14">
            <FlourishOrnament className="mb-5 hidden lg:flex" />
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
              — Active Providers
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              Currently<br />
              <em className="italic text-[#8B6F4E]">accepting patients.</em>
            </h2>
          </div>

          <div className="space-y-24">
            {activeTeam.map((provider, i) => (
              <ProviderCard key={provider.name} provider={provider} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Inactive / collaborating */}
      <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
        <DotGridPattern color="#8B6F4E" opacity={0.18} dotSize={1.3} spacing={28} />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
              — Collaborating Physicians
            </p>
            <h2 className="font-editorial text-4xl lg:text-5xl leading-[1.05]">
              Not currently<br />
              <em className="italic text-[#8B6F4E]">seeing patients.</em>
            </h2>
          </div>

          <div className="space-y-24">
            {inactiveTeam.map((provider, i) => (
              <ProviderCard
                key={provider.name}
                provider={provider}
                index={activeTeam.length + i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Accepting new patients today."
        subheadline="Appointments are often available within one week. Same-day scheduling may be available depending on openings."
      />
    </div>
  );
}
