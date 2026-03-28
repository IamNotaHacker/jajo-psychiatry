import { PRACTICE } from "@/lib/constants";

interface SchemaMarkupProps {
  additionalSchemas?: Record<string, unknown>[];
}

export function SchemaMarkup({ additionalSchemas = [] }: SchemaMarkupProps) {
  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: PRACTICE.name,
    description:
      "Personalized psychiatric care in Farmington Hills, MI. Expert treatment for ADHD, anxiety, depression, and bipolar disorder. In-person and telehealth available.",
    url: "https://jajopsychiatry.com",
    telephone: PRACTICE.phone,
    email: PRACTICE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${PRACTICE.address.street}, ${PRACTICE.address.suite}`,
      addressLocality: PRACTICE.address.city,
      addressRegion: PRACTICE.address.state,
      postalCode: PRACTICE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.5258,
      longitude: -83.3766,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    medicalSpecialty: [
      "Psychiatry",
      "Mental Health",
    ],
    availableService: [
      "Psychiatric Evaluations",
      "Medication Management",
      "Telepsychiatry",
      "ADHD Testing",
      "GeneSight Testing",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Michigan",
    },
  };

  const allSchemas = [medicalBusiness, ...additionalSchemas];

  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://jajopsychiatry.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
