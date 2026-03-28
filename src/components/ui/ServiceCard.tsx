import Link from "next/link";
import { ArrowRight, ClipboardCheck, Pill, Video, Building2, Brain, Dna } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  ClipboardCheck,
  Pill,
  Video,
  Building2,
  Brain,
  Dna,
} as const;

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: keyof typeof iconMap;
  className?: string;
}

export function ServiceCard({
  slug,
  title,
  shortDescription,
  icon,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group block bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {shortDescription}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
