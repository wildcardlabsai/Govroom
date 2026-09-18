export const SITE = {
  name: "VROOM",
  domain: "GoVroom.co.uk",
  tagline: "DEALER AFTERSALES. SIMPLIFIED.",
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
  { label: "Blog", href: "/blog", description: "News and dealer insight" },
  { label: "Guides", href: "/resources#guides", description: "Practical aftersales guides" },
  { label: "FAQs", href: "/faq", description: "Common questions, answered" },
  { label: "Contact", href: "/contact", description: "Talk to the VROOM team" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Who It's For", href: "/who-its-for" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/resources#guides" },
    { label: "FAQs", href: "/faq" },
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
  | "trend";

export const CORE_FEATURES: { icon: IconKey; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Warranties",
    description: "Create, manage and track warranties with ease, from activation to expiry.",
  },
  {
    icon: "clipboard",
    title: "Claims",
    description: "Handle claims quickly and keep customers informed at every stage.",
  },
  {
    icon: "users",
    title: "Customers",
    description: "Store customer details and their complete aftersales history in one place.",
  },
  {
    icon: "car",
    title: "Vehicles",
    description: "Keep all vehicle information organised and easy to find when it matters.",
  },
  {
    icon: "chart",
    title: "Insights",
    description: "Get a clearer view of your aftersales performance with real data.",
  },
  {
    icon: "document",
    title: "Documents",
    description: "Store and access documents whenever you or your customers need them.",
  },
];

export const BENEFITS = [
  "Easy to use",
  "Designed for the motor trade",
  "Save time and reduce admin",
  "Improve customer satisfaction",
  "Clear, real-time insights",
];

export const WORKFLOW_STEPS = [
  { label: "Sale", detail: "Vehicle sold" },
  { label: "Warranty", detail: "Cover activated" },
  { label: "Claim", detail: "Issue reported" },
  { label: "Customer", detail: "Kept informed" },
  { label: "Resolution", detail: "Sorted and closed" },
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

export const DEALER_LOGOS = ["REO", "GMC", "OB Motors", "Empressive", "TC Wales"];

export const WHO_ITS_FOR = [
  {
    title: "Independent Dealers",
    description:
      "Run aftersales without a back office. VROOM gives independent dealers a simple, organised way to manage warranties and claims without extra headcount.",
  },
  {
    title: "Growing Motor Businesses",
    description:
      "As volumes grow, spreadsheets stop working. VROOM scales with your business so aftersales stays under control as you add stock and staff.",
  },
  {
    title: "Dealer Groups",
    description:
      "Get visibility across multiple sites. VROOM brings warranties, claims and customer records together so every site works the same way.",
  },
] as const;

export const FAQ_CATEGORIES = [
  {
    category: "VROOM",
    items: [
      {
        q: "What is VROOM?",
        a: "VROOM is an aftersales platform built for UK car dealers. It brings warranties, claims, customers, vehicles and documents together in one place, so aftersales is easier to manage and easier to stay on top of.",
      },
      {
        q: "Who is VROOM built for?",
        a: "VROOM is designed for independent dealers, growing motor businesses and dealer groups who want a simpler, more organised way to run aftersales.",
      },
      {
        q: "Does VROOM replace my current systems?",
        a: "VROOM is focused specifically on aftersales — warranties, claims, customers and documents — rather than being a full dealer management system. It's designed to sit alongside your existing sales process.",
      },
    ],
  },
  {
    category: "Warranties",
    items: [
      {
        q: "Can I manage different warranty products in VROOM?",
        a: "Yes. VROOM is built to handle a range of warranty products and cover types, so you can manage everything from one place.",
      },
      {
        q: "Will I be able to see which warranties are expiring soon?",
        a: "Yes, VROOM gives you a clear view of upcoming expiries so you can plan renewals and follow-ups ahead of time.",
      },
    ],
  },
  {
    category: "Claims",
    items: [
      {
        q: "How does claims handling work in VROOM?",
        a: "Claims can be logged, tracked and updated through clear statuses, so you and your customer always know where things stand.",
      },
      {
        q: "Can customers track their own claim status?",
        a: "Yes. Customers can view claim status and updates through their own VROOM portal, reducing inbound calls and emails.",
      },
    ],
  },
  {
    category: "Customers",
    items: [
      {
        q: "What customer information does VROOM store?",
        a: "VROOM stores customer contact details along with their vehicle, warranty and claims history, so your team has full context in one view.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        q: "How is VROOM priced?",
        a: "Pricing is based on dealership size and needs. See the Pricing page for an overview, or get in touch for a plan tailored to your business.",
      },
      {
        q: "Is there a contract or can I pay monthly?",
        a: "We aim to keep things straightforward for dealers. Full commercial details are confirmed when you speak with the VROOM team.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        q: "How long does it take to get set up?",
        a: "Most dealers can get up and running quickly. The VROOM team will guide you through set up so your data and team are ready from day one.",
      },
      {
        q: "Can I book a demo before signing up?",
        a: "Yes — you can book a demo at any time and see VROOM working before making a decision.",
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
    category: "Strategy",
    date: "2026-08-01",
    readTime: "6 min read",
  },
  {
    slug: "warranty-claims-without-the-spreadsheet",
    title: "Getting warranty claims out of the spreadsheet",
    excerpt:
      "Spreadsheets get dealers started, but they don't scale. A practical look at when — and how — to move on.",
    category: "Operations",
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
    category: "Insights",
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
