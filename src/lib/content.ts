export const SITE = {
  name: "VROOM",
  domain: "GoVroom.co.uk",
  tagline: "DEALER WARRANTIES. SIMPLIFIED.",
  description:
    "VROOM helps UK car dealers manage warranties, claims, customers and everything in between — so you can save time, reduce risk and keep your customers on the road.",
};

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Who it's for", href: "/who-its-for" },
  { label: "About", href: "/about" },
] as const;

export const RESOURCES_LINKS = [
  { label: "Resources", href: "/resources", description: "Everything in one hub" },
  { label: "How It Works", href: "/how-it-works", description: "From sale to resolution" },
  { label: "Blog", href: "/blog", description: "News and dealer insight" },
  { label: "FAQs", href: "/faq", description: "Common questions, answered" },
  { label: "Contact", href: "/contact", description: "Talk to the VROOM team" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Who It's For", href: "/who-its-for" },
    { label: "Customers", href: "/customers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Resources", href: "/resources" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export type IconKey =
  | "shield"
  | "clipboard"
  | "users"
  | "car"
  | "chart"
  | "document"
  | "spark"
  | "check"
  | "clock"
  | "trend"
  | "complaint"
  | "disputeiq";

export const CORE_FEATURES: { icon: IconKey; title: string; slug: string; description: string }[] = [
  {
    icon: "shield",
    title: "Warranties",
    slug: "warranties",
    description: "Create, manage and track warranties from one place.",
  },
  {
    icon: "clipboard",
    title: "Claims",
    slug: "claims",
    description: "Handle claims quickly and keep customers informed.",
  },
  {
    icon: "users",
    title: "Customers",
    slug: "customers",
    description: "Keep complete customer information and history together.",
  },
  {
    icon: "car",
    title: "Vehicles",
    slug: "vehicles",
    description: "Keep vehicle information connected to everything that happens after the sale.",
  },
  {
    icon: "document",
    title: "Documents",
    slug: "documents",
    description: "Store and access important documents when your team needs them.",
  },
  {
    icon: "chart",
    title: "Insights",
    slug: "insights",
    description: "Understand your aftersales performance with useful information and reporting.",
  },
  {
    icon: "complaint",
    title: "Complaints",
    slug: "complaints",
    description: "Manage customer complaints through a clear process.",
  },
  {
    icon: "disputeiq",
    title: "DisputeIQ",
    slug: "disputeiq",
    description: "AI-assisted guidance for difficult aftersales situations.",
  },
];

export const BENEFITS = [
  "Save time and reduce admin",
  "Keep customers informed",
  "Reduce risk",
  "Make smarter decisions",
];

export const WORKFLOW_STEPS = [
  { label: "Create", detail: "Add the customer, vehicle and warranty" },
  { label: "Manage", detail: "Keep information and documents together" },
  { label: "Handle", detail: "Manage claims, repairs and complaints" },
  { label: "Resolve", detail: "Keep customers updated with a complete record" },
  { label: "Understand", detail: "Use insights to improve your operation" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Add a real quote from this dealership once available — this card is structured for genuine, attributed feedback.",
    name: "Dealer Principal",
    company: "Independent Dealership",
  },
  {
    quote:
      "Add a real quote from this dealership once available — this card is structured for genuine, attributed feedback.",
    name: "General Manager",
    company: "Used Car Group",
  },
  {
    quote:
      "Add a real quote from this dealership once available — this card is structured for genuine, attributed feedback.",
    name: "Director",
    company: "Trade Dealership",
  },
];

export const DEALER_LOGOS = ["Autocentre", "Riverside Motors", "Peak Motors", "Grange Autos"];

export const WHO_ITS_FOR = [
  {
    title: "Independent Dealers",
    description:
      "Keep warranties, claims, customers and documents organised without unnecessary complexity.",
  },
  {
    title: "Growing Dealerships",
    description:
      "As the business grows, VROOM provides the structure to manage more aftersales activity without creating more admin.",
  },
  {
    title: "Dealer Groups",
    description:
      "Give multiple sites a consistent way to manage aftersales while keeping dealer information appropriately separated.",
  },
  {
    title: "Multi-Site Operations",
    description:
      "Create a consistent aftersales process across locations.",
  },
] as const;

export const FAQ_CATEGORIES = [
  {
    category: "General",
    items: [
      {
        q: "What is VROOM?",
        a: "VROOM is an aftersales platform built for UK car dealers. It brings warranties, claims, customers, vehicles and documents together in one place, so aftersales is easier to manage and stay on top of.",
      },
      {
        q: "Who is VROOM for?",
        a: "VROOM is designed for independent dealers, growing motor businesses and dealer groups who want a simpler, more organised way to run aftersales.",
      },
      {
        q: "Is VROOM a DMS?",
        a: "No. VROOM focuses specifically on dealer aftersales rather than attempting to replace a full dealership management system. It's designed to sit alongside your existing sales process.",
      },
      {
        q: "How quickly can we get started?",
        a: "Most dealers can get up and running quickly. The VROOM team will guide you through setup so your data and team are ready from day one.",
      },
      {
        q: "Can I see a demo?",
        a: "Yes — you can book a demo at any time and see VROOM working before making a decision.",
      },
    ],
  },
  {
    category: "Warranties",
    items: [
      {
        q: "Can I create warranties in VROOM?",
        a: "Yes. VROOM is built to handle a range of warranty products and cover types, so you can manage everything from one place.",
      },
      {
        q: "Can I generate warranty certificates?",
        a: "Yes, VROOM can generate warranty documentation for your customers.",
      },
      {
        q: "Can I customise warranty documents?",
        a: "Yes, warranty documents can be configured to match your dealership's branding and requirements.",
      },
      {
        q: "Can customers see their warranty?",
        a: "Yes. Customers can view their warranty details through the VROOM customer portal.",
      },
    ],
  },
  {
    category: "Claims",
    items: [
      {
        q: "How does the claims system work?",
        a: "Claims can be logged, tracked and updated through clear statuses, so you and your customer always know where things stand.",
      },
      {
        q: "Can customers submit claims?",
        a: "Yes. Customers can submit claims through the customer portal, which are then visible to your team for review.",
      },
      {
        q: "Can I upload evidence?",
        a: "Yes. Photos, documents and other evidence can be attached to claims for a complete record.",
      },
      {
        q: "Can I assign a repairer?",
        a: "Yes. Repairers can be assigned to claims so your team knows who is handling the work.",
      },
      {
        q: "Can I track repair costs?",
        a: "Yes. Repair costs can be recorded against claims to give you visibility over your aftersales spend.",
      },
    ],
  },
  {
    category: "Customers",
    items: [
      {
        q: "Can customers access their own information?",
        a: "Yes. The VROOM customer portal gives customers access to their warranty, claims and document information.",
      },
      {
        q: "What can customers see?",
        a: "Customers can view their warranty details, claim status, uploaded documents and key aftersales information.",
      },
      {
        q: "Can customers upload documents?",
        a: "Yes. Customers can upload documents and evidence directly through the portal.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "How is dealer data protected?",
        a: "VROOM uses industry-standard security practices to protect dealer and customer data.",
      },
      {
        q: "Can another dealership see our information?",
        a: "No. Each dealership's data is completely separate. There is no cross-visibility between dealerships.",
      },
      {
        q: "Can staff have different permissions?",
        a: "Yes. VROOM supports role-based access so you can control what each team member can see and do.",
      },
    ],
  },
  {
    category: "DisputeIQ",
    items: [
      {
        q: "What is DisputeIQ?",
        a: "DisputeIQ is an AI-assisted feature that helps dealers organise the facts, understand the situation and prepare a clearer response when aftersales situations become complicated.",
      },
      {
        q: "Does DisputeIQ provide legal advice?",
        a: "No. DisputeIQ provides guidance to help dealers organise information and understand their position. It does not replace professional legal advice.",
      },
      {
        q: "Can DisputeIQ make decisions for dealers?",
        a: "No. DisputeIQ is a guidance tool. All decisions remain with the dealer.",
      },
    ],
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "why-aftersales-is-the-next-battleground-for-dealers",
    title: "Why aftersales is the next battleground for UK dealers",
    excerpt:
      "Margins on the forecourt are tighter than ever. Here's why the dealers pulling ahead are the ones investing in what happens after the sale.",
    category: "Aftersales",
    date: "2026-08-01",
    readTime: "6 min read",
  },
  {
    slug: "warranty-claims-without-the-spreadsheet",
    title: "Getting warranty claims out of the spreadsheet",
    excerpt:
      "Spreadsheets get dealers started, but they don't scale. A practical look at when — and how — to move on.",
    category: "Warranties",
    date: "2026-07-18",
    readTime: "5 min read",
  },
  {
    slug: "what-customers-actually-want-from-aftersales",
    title: "What customers actually want from dealer aftersales",
    excerpt:
      "Fewer phone calls, clearer answers. A look at what keeps customers confident after they've driven away.",
    category: "Customer Experience",
    date: "2026-06-30",
    readTime: "4 min read",
  },
  {
    slug: "aftersales-metrics-worth-tracking",
    title: "Five aftersales metrics worth tracking every month",
    excerpt:
      "From warranty exposure to claim resolution time — the numbers that tell you how healthy your aftersales operation really is.",
    category: "Dealer Operations",
    date: "2026-06-09",
    readTime: "7 min read",
  },
  {
    slug: "building-trust-after-the-handshake",
    title: "Building trust after the handshake",
    excerpt:
      "The sale is only the start of the relationship. How dealers can use aftersales to build lasting trust.",
    category: "Customer Experience",
    date: "2026-05-22",
    readTime: "5 min read",
  },
] as const;
