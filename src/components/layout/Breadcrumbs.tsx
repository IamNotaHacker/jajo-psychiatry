import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return <BreadcrumbSchema items={allItems} />;
}
