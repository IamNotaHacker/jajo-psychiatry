import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface PracticeSpotlightProps {
  image?: string;
  eyebrow?: string;
  title?: string;
  titleEm?: string;
  paragraphs?: string[];
  founderName?: string;
  founderNote?: string;
  statValue?: string;
  statLabel?: string;
  metrics?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PracticeSpotlight({
  image = "/images/ai/window-light.jpg",
  eyebrow = "Our Practice",
  title = "Mental health care,",
  titleEm = "offered with patience.",
  paragraphs = [
    "We treat ADHD, anxiety, depression, and bipolar disorder with personalized attention — no rushed visits, no one-size-fits-all plans.",
    "Our team continues the tradition built by our late founder, Dr. Raad Jajo: listening closely, treating thoughtfully, and standing alongside each patient through the long arc of their care.",
  ],
  founderName = "Dr. Raad Jajo, M.D.",
  founderNote = "20+ years in psychiatric care — a legacy of personalized treatment.",
  statValue = "1 week",
  statLabel = "Avg. wait for new patients",
  metrics = [
    { value: "8", label: "Providers on the team" },
    { value: "20+", label: "Years serving Michigan" },
    { value: "10+", label: "Insurance plans accepted" },
  ],
  primaryCta = { label: "Meet our providers", href: "/about/providers" },
  secondaryCta = { label: "Our founder's story", href: "/about/founder" },
}: PracticeSpotlightProps) {
  return (
    <section className="relative px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: layered visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-[#1F1A14]/10">
              <Image src={image} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A14]/30 to-transparent" />
            </div>

            {founderName && (
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#F8F4EC] rounded-2xl p-5 shadow-xl shadow-[#1F1A14]/10 border border-[#1F1A14]/5 max-w-[240px]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B6F4E] mb-1.5">
                  Founded by
                </p>
                <p className="font-editorial text-lg leading-tight text-[#1F1A14] mb-1">
                  {founderName}
                </p>
                <p className="text-xs text-[#1F1A14]/50 leading-relaxed">
                  {founderNote}
                </p>
              </div>
            )}

            {statValue && (
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#1F1A14] text-[#F8F4EC] rounded-full px-5 py-3 shadow-xl shadow-[#1F1A14]/20">
                <p className="font-editorial text-2xl leading-none text-[#E8C9A0]">
                  {statValue}
                </p>
                <p className="text-[10px] tracking-wider uppercase text-white/50 mt-0.5">
                  {statLabel}
                </p>
              </div>
            )}
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-5">
              — {eyebrow}
            </p>
            <h2 className="font-editorial text-4xl lg:text-[3.25rem] leading-[1.1] text-[#1F1A14] mb-7">
              {title}
              <br />
              <em className="italic text-[#8B6F4E]">{titleEm}</em>
            </h2>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-[#1F1A14]/65 leading-relaxed max-w-xl ${
                  i === 0 ? "text-lg mb-6" : "mb-10"
                }`}
              >
                {para}
              </p>
            ))}

            {metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-editorial text-3xl text-[#1F1A14]">
                      {metric.value}
                    </p>
                    <p className="text-xs text-[#1F1A14]/50 leading-tight mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#1F1A14]/60">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 text-[#1F1A14] font-semibold border-b border-[#1F1A14] pb-0.5"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 hover:text-[#1F1A14] transition-colors"
                >
                  {secondaryCta.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
