import { Shield, Clock, Video, Heart, CalendarCheck, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  { icon: CalendarCheck, label: "Appointments Within 1 Week" },
  { icon: Clock, label: "Same-Day Sometimes Available" },
  { icon: Video, label: "Telehealth Available" },
  { icon: Shield, label: "Insurance-Friendly" },
  { icon: Heart, label: "Personalized Care" },
  { icon: Award, label: "Board-Certified" },
];

interface TrustBadgesProps {
  variant?: "inline" | "grid";
  className?: string;
  count?: number;
}

export function TrustBadges({
  variant = "inline",
  className,
  count,
}: TrustBadgesProps) {
  const items = count ? badges.slice(0, count) : badges;

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)}>
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-sm">
            <Icon className="h-4 w-4 text-accent" />
            <span className="text-foreground/70 font-medium">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 gap-4", className)}>
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 bg-white rounded-lg border border-border p-4"
        >
          <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
