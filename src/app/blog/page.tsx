import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Mental Health Blog",
  description:
    "Expert insights on ADHD, anxiety, depression, bipolar disorder, medication management, and psychiatric care from Jajo Psychiatry in Michigan.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-4">
            Mental Health Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert insights and resources on psychiatric conditions, treatment
            options, and mental health care from Jajo Psychiatry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Have Questions About Your Mental Health?"
        subheadline="Our team is here to help. Schedule a consultation to discuss your concerns with an experienced psychiatrist."
        variant="light"
      />
    </>
  );
}
