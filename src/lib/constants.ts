export const PRACTICE = {
  name: "Jajo Psychiatry",
  phone: "(734) 331-6037",
  phoneRaw: "7343316037",
  email: "info@jajopsychiatry.com",
  address: {
    street: "31393 West 13 Mile Road",
    suite: "Suite 105",
    city: "Farmington Hills",
    state: "MI",
    zip: "48334",
    full: "31393 West 13 Mile Road, Suite 105, Farmington Hills, MI 48334",
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    weekends: "Saturday - Sunday: Closed",
  },
  social: {
    facebook: "https://www.facebook.com/jajopsychiatry",
    instagram: "https://www.instagram.com/jajopsychiatry",
    twitter: "https://twitter.com/jajopsychiatry",
    psychologyToday: "https://www.psychologytoday.com/profile/1389578",
  },
  bookingUrl: "#book-appointment",
  patientFormsUrl:
    "https://app.formdr.com/practice/MTY4OTM=/form/xynx0Gt0-6u3QMwjdSbcAKXltLDJU6l0",
} as const;

export const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Practice", href: "/about" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "Our Providers", href: "/about/providers" },
      { label: "Why Jajo Psychiatry", href: "/about/why-jajo" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Psychiatric Evaluations", href: "/services/psychiatric-evaluations" },
      { label: "Medication Management", href: "/services/medication-management" },
      { label: "Telepsychiatry", href: "/services/telepsychiatry" },
      { label: "In-Person Psychiatry", href: "/services/in-person-psychiatry" },
      { label: "ADHD Testing & Evaluations", href: "/services/adhd-testing" },
      { label: "GeneSight Testing", href: "/services/genesight-testing" },
    ],
  },
  {
    label: "Conditions",
    href: "/conditions",
    children: [
      { label: "ADHD", href: "/conditions/adhd" },
      { label: "Anxiety", href: "/conditions/anxiety" },
      { label: "Depression", href: "/conditions/depression" },
      { label: "Bipolar Disorder", href: "/conditions/bipolar-disorder" },
      { label: "PTSD", href: "/conditions/ptsd" },
      { label: "Schizophrenia", href: "/conditions/schizophrenia" },
    ],
  },
  {
    label: "Resources",
    href: "/new-patients",
    children: [
      { label: "New Patient Information", href: "/new-patients" },
      { label: "Insurance & Payment", href: "/insurance" },
      { label: "Patient Forms", href: PRACTICE.patientFormsUrl },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "psychiatric-evaluations",
    title: "Psychiatric Evaluations",
    shortDescription:
      "Comprehensive mental health assessments to understand your needs and create a personalized treatment plan.",
    icon: "ClipboardCheck",
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    shortDescription:
      "Ongoing medication monitoring and adjustments to ensure your treatment is effective and well-tolerated.",
    icon: "Pill",
  },
  {
    slug: "telepsychiatry",
    title: "Telepsychiatry",
    shortDescription:
      "Convenient virtual psychiatric care from anywhere in Michigan through secure video visits.",
    icon: "Video",
  },
  {
    slug: "in-person-psychiatry",
    title: "In-Person Psychiatry",
    shortDescription:
      "Face-to-face psychiatric care at our Farmington Hills office for personalized treatment.",
    icon: "Building2",
  },
  {
    slug: "adhd-testing",
    title: "ADHD Testing & Evaluations",
    shortDescription:
      "Evidence-based ADHD assessments using clinical screening tools for accurate diagnosis.",
    icon: "Brain",
  },
  {
    slug: "genesight-testing",
    title: "GeneSight Testing",
    shortDescription:
      "Genetic testing to understand how your body metabolizes medications for better treatment outcomes.",
    icon: "Dna",
  },
] as const;

export const CONDITIONS = [
  {
    slug: "adhd",
    title: "ADHD",
    fullTitle: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    shortDescription:
      "Expert evaluation and treatment for attention, focus, and hyperactivity challenges in adults.",
  },
  {
    slug: "anxiety",
    title: "Anxiety",
    fullTitle: "Anxiety Disorders",
    shortDescription:
      "Compassionate treatment for generalized anxiety, social anxiety, panic disorder, and more.",
  },
  {
    slug: "depression",
    title: "Depression",
    fullTitle: "Major Depressive Disorder",
    shortDescription:
      "Personalized medication management and care for depression and mood disorders.",
  },
  {
    slug: "bipolar-disorder",
    title: "Bipolar Disorder",
    fullTitle: "Bipolar Disorder",
    shortDescription:
      "Comprehensive treatment for mood stabilization, including medication management and monitoring.",
  },
  {
    slug: "ptsd",
    title: "PTSD",
    fullTitle: "Post-Traumatic Stress Disorder (PTSD)",
    shortDescription:
      "Evidence-based treatment for trauma-related conditions including medication and therapeutic approaches.",
  },
  {
    slug: "schizophrenia",
    title: "Schizophrenia",
    fullTitle: "Schizophrenia",
    shortDescription:
      "Ongoing psychiatric care and medication management for schizophrenia and related conditions.",
  },
] as const;

export const INSURANCE_PROVIDERS = [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "United Healthcare",
  "Humana",
  "Medicare",
  "Medicaid",
  "Priority Health",
  "HAP",
  "Molina Healthcare",
] as const;

export const CONTACT_REASONS = [
  "New Patient Appointment",
  "ADHD Evaluation",
  "Anxiety Treatment",
  "Depression Treatment",
  "Bipolar Disorder",
  "PTSD Treatment",
  "Schizophrenia",
  "GeneSight Testing",
  "Medication Management",
  "Telepsychiatry",
  "General Inquiry",
  "Other",
] as const;
