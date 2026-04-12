import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Expert insights on ADHD, anxiety, depression, bipolar disorder, medication management, and psychiatric care from Jajo Psychiatry in Michigan.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      <PageHero
        breadcrumbs={[{ name: "Journal", href: "/blog" }]}
        eyebrow="The Journal"
        title="Writing on"
        titleEm="mental health."
        description="Expert insights and resources on psychiatric conditions, treatment options, and mental health care from our team."
        image="/images/ai/window-light.jpg"
      />

      {/* Posts grid */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          {blogPosts.length === 0 ? (
            <p className="text-[#1F1A14]/60 text-center py-20">
              New posts coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#EADCC2]/40 hover:bg-[#EADCC2] rounded-2xl p-8 transition-colors flex flex-col justify-between min-h-[320px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs tracking-wider uppercase text-[#8B6F4E]">
                        {String(i + 1).padStart(2, "0")} &middot; {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#1F1A14]/50">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-editorial text-2xl leading-[1.15] text-[#1F1A14] mb-3 line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#1F1A14]/60 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-8 mt-auto">
                    <time className="text-xs text-[#1F1A14]/40">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <ArrowUpRight className="h-4 w-4 text-[#8B6F4E] group-hover:rotate-45 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline="Have questions about your mental health?"
        subheadline="Our team is here to help. Schedule a consultation to discuss your concerns with an experienced psychiatrist."
      />
    </div>
  );
}
