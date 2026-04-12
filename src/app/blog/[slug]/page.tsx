import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { getBlogPost, getRelatedPosts, getAllBlogSlugs } from "@/lib/blog";
import { PRACTICE, SERVICES, CONDITIONS } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Jajo Psychiatry Journal`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  const relatedServices = SERVICES.filter((s) =>
    post.relatedServices.includes(s.slug)
  );
  const relatedConditions = CONDITIONS.filter((c) =>
    post.relatedConditions.includes(c.slug)
  );

  return (
    <div className="bg-[#F8F4EC] text-[#1F1A14]">
      {/* Header */}
      <section className="px-6 lg:px-10 pt-8 pb-14">
        <div className="max-w-[900px] mx-auto">
          <Breadcrumbs
            items={[
              { name: "Journal", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <div className="flex items-center gap-4 mt-6 mb-6 text-xs tracking-wider uppercase text-[#8B6F4E]">
            <span>— {post.category}</span>
            <span className="text-[#1F1A14]/20">/</span>
            <span className="flex items-center gap-1 text-[#1F1A14]/50">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span className="text-[#1F1A14]/20">/</span>
            <span className="flex items-center gap-1 text-[#1F1A14]/50">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[4rem] leading-[1.05] text-[#1F1A14] mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-[#1F1A14]/60 leading-relaxed max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            {/* Article */}
            <article className="prose prose-lg max-w-none prose-headings:font-editorial prose-headings:text-[#1F1A14] prose-p:text-[#1F1A14]/75 prose-p:leading-relaxed prose-li:text-[#1F1A14]/75 prose-strong:text-[#1F1A14] prose-a:text-[#8B6F4E] prose-a:no-underline hover:prose-a:underline max-w-[680px]">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-editorial text-3xl mt-12 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace("- ", "")
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                          }}
                        />
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="space-y-5 hidden lg:block">
              <div className="bg-[#1F1A14] text-[#F8F4EC] rounded-2xl p-6 sticky top-28">
                <p className="text-xs tracking-[0.25em] uppercase text-[#E8C9A0] mb-3">
                  — Need Help?
                </p>
                <p className="font-editorial text-2xl leading-[1.15] mb-5">
                  New patients often seen within 1 week.
                </p>
                <Link
                  href={PRACTICE.bookingUrl}
                  className="flex items-center justify-between px-5 py-3 rounded-full bg-[#F8F4EC] text-[#1F1A14] text-sm font-semibold mb-3"
                >
                  Book Appointment
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="block text-center text-xs text-white/60 hover:text-white"
                >
                  Or call {PRACTICE.phone}
                </a>

                {relatedServices.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
                      Related Services
                    </p>
                    <ul className="space-y-2">
                      {relatedServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-sm text-[#E8C9A0] hover:text-white flex items-center gap-1.5"
                          >
                            <span>—</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {relatedConditions.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
                      Related Conditions
                    </p>
                    <ul className="space-y-2">
                      {relatedConditions.map((condition) => (
                        <li key={condition.slug}>
                          <Link
                            href={`/conditions/${condition.slug}`}
                            className="text-sm text-[#E8C9A0] hover:text-white flex items-center gap-1.5"
                          >
                            <span>—</span>
                            {condition.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-14 border-t border-[#1F1A14]/10">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1F1A14]/50 mb-3">
                — More Reading
              </p>
              <h2 className="font-editorial text-3xl lg:text-4xl mb-10">
                Related articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-[#EADCC2]/40 hover:bg-[#EADCC2] rounded-2xl p-6 transition-colors"
                  >
                    <span className="text-xs tracking-wider uppercase text-[#8B6F4E]">
                      — {related.category}
                    </span>
                    <h3 className="font-editorial text-xl text-[#1F1A14] mt-3 mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-[#1F1A14]/60 line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-14">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1F1A14]/70 hover:text-[#1F1A14]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to get started?"
        subheadline="Schedule your appointment and take the first step toward better mental health."
      />
    </div>
  );
}
