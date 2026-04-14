import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleEm?: string;
  description?: string;
  image?: string;
  breadcrumbs?: { name: string; href: string }[];
}

export function PageHero({
  eyebrow,
  title,
  titleEm,
  description,
  image = "/images/ai/abstract-calm.jpg",
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative px-6 lg:px-10 pt-8 pb-10 sm:pb-16">
      <div className="max-w-[1400px] mx-auto">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            {eyebrow && (
              <p className="text-xs tracking-[0.3em] uppercase text-[#1B1F4B]/50 mb-4 sm:mb-5">
                — {eyebrow}
              </p>
            )}
            <h1 className="font-editorial text-[2.25rem] sm:text-[3rem] lg:text-[5rem] leading-[0.98] text-[#1B1F4B] mb-4 sm:mb-6">
              {title}
              {titleEm && (
                <>
                  <br />
                  <em className="italic text-[#2D5DA1]">{titleEm}</em>
                </>
              )}
            </h1>
            {description && (
              <p className="text-base sm:text-lg text-[#1B1F4B]/60 leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/6]">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F4B]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
