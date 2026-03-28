import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPost, getRelatedPosts, getAllBlogSlugs } from "@/lib/blog";
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
      title: `${post.title} | Jajo Psychiatry Blog`,
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
    <>
      {/* Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article className="prose prose-lg max-w-none prose-headings:font-[var(--font-heading)] prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 hidden lg:block">
              {/* Quick appointment card */}
              <div className="bg-primary-light rounded-xl p-5 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  New patients often seen within 1 week.
                </p>
                <Button href={PRACTICE.bookingUrl} size="sm" className="w-full">
                  Book Appointment
                </Button>
                <a
                  href={`tel:${PRACTICE.phoneRaw}`}
                  className="block text-center text-sm font-medium text-primary mt-3 hover:text-primary-dark"
                >
                  Or call {PRACTICE.phone}
                </a>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {relatedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm text-primary hover:text-primary-dark flex items-center gap-1"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related conditions */}
              {relatedConditions.length > 0 && (
                <div className="bg-white rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Related Conditions
                  </h3>
                  <ul className="space-y-2">
                    {relatedConditions.map((condition) => (
                      <li key={condition.slug}>
                        <Link
                          href={`/conditions/${condition.slug}`}
                          className="text-sm text-primary hover:text-primary-dark flex items-center gap-1"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {condition.title} Treatment
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <span className="text-xs font-semibold text-primary">
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        subheadline="Schedule your appointment and take the first step toward better mental health."
      />
    </>
  );
}
