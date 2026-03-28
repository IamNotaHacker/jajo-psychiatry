import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConditionCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  className?: string;
}

export function ConditionCard({
  slug,
  title,
  shortDescription,
  className,
}: ConditionCardProps) {
  return (
    <Link
      href={`/conditions/${slug}`}
      className={cn(
        "group block bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Learn About Treatment <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
