import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { LaptopFrame } from "@/components/product/LaptopFrame";
import { DashboardMockup } from "@/components/product/DashboardMockup";
import { AIAssistantMockup } from "@/components/product/AIAssistantMockup";
import { CustomerPortalMockup } from "@/components/product/CustomerPortalMockup";
import { FeaturePanel } from "@/components/product/FeaturePanel";
import type { IconKey } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See how VROOM brings warranties, claims, customers, vehicles, documents and aftersales insights together in one dealer aftersales platform.",
  alternates: { canonical: "/features" },
};

type Visual =
  | { kind: "dashboard" }
  | { kind: "ai" }
  | { kind: "portal" }
  | { kind: "panel"; icon: IconKey; title: string; rows: { label: string; value: string; tone?: "green" | "neutral" }[] };

const SECTIONS: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  visual: Visual;
}[] = [
  {
    id: "warranties",
    eyebrow: "Warranties",
    title: "Create and manage warranties without the paper trail.",
    description:
      "VROOM keeps every warranty in one organised place — from activation through to expiry — so you always know exactly what's covered and for how long.",
    benefits: [
      "Create and issue warranties in minutes",
      "Track cover, terms and expiry dates",
      "See upcoming expiries before they happen",
      "Link warranties directly to the vehicle and customer",
      "Keep a full history for every policy",
    ],
    visual: {
      kind: "panel",
      icon: "shield",
      title: "Warranty Overview",
      rows: [
        { label: "Active warranties", value: "132", tone: "green" },
        { label: "Expiring in 30 days", value: "9" },
        { label: "Average cover length", value: "24 months" },
        { label: "Warranty exposure", value: "£48,320" },
      ],
    },
  },
  {
    id: "claims",
    eyebrow: "Claims",
    title: "Handle claims quickly and keep everyone in the loop.",
    description:
      "Log a claim, track its progress and resolve it — all without digging through emails and spreadsheets. VROOM gives your team a clear claims process from first report to resolution.",
    benefits: [
      "Log claims in seconds with the right detail captured",
      "Track claims through clear, consistent statuses",
      "Reduce back-and-forth with customers and suppliers",
      "See claims trends across your dealership",
    ],
    visual: { kind: "dashboard" },
  },
  {
    id: "customers",
    eyebrow: "Customers",
    title: "One record for every customer, not five.",
    description:
      "VROOM stores customer details alongside their vehicle, warranty and claims history, so your team always has full context — whoever picks up the phone.",
    benefits: [
      "Store customer contact details securely",
      "See full aftersales history in one view",
      "Understand which customers may need attention",
      "Keep communication organised and traceable",
    ],
    visual: {
      kind: "panel",
      icon: "users",
      title: "Customer Record",
      rows: [
        { label: "Active customers", value: "1,204", tone: "green" },
        { label: "Open enquiries", value: "5" },
        { label: "Repeat customers", value: "31%" },
        { label: "Average response time", value: "2.4 hrs" },
      ],
    },
  },
  {
    id: "vehicles",
    eyebrow: "Vehicles",
    title: "Every vehicle, and its full aftersales story.",
    description:
      "Keep vehicle information organised and easy to find — spec, history, warranty status and claims — all connected to the customer who owns it.",
    benefits: [
      "Store vehicle details and specification",
      "Track warranty and claims history per vehicle",
      "Find any vehicle quickly by reg, customer or stock number",
    ],
    visual: {
      kind: "panel",
      icon: "car",
      title: "Vehicle Record",
      rows: [
        { label: "Vehicles under cover", value: "132", tone: "green" },
        { label: "Claims this year", value: "28" },
        { label: "Average mileage", value: "41,200" },
        { label: "Cover status", value: "Active", tone: "green" },
      ],
    },
  },
  {
    id: "documents",
    eyebrow: "Documents",
    title: "Every document, exactly where it should be.",
    description:
      "Store warranty terms, claim evidence, invoices and customer paperwork in one secure place — accessible whenever you or your customer need them.",
    benefits: [
      "Store documents against the right customer, vehicle or claim",
      "Give customers self-service access to their own documents",
      "Stop chasing paperwork over email",
    ],
    visual: {
      kind: "panel",
      icon: "document",
      title: "Documents",
      rows: [
        { label: "Documents stored", value: "3,482", tone: "green" },
        { label: "Uploaded this month", value: "214" },
        { label: "Shared with customers", value: "1,102" },
        { label: "Storage used", value: "Well within limits" },
      ],
    },
  },
  {
    id: "insights",
    eyebrow: "Insights",
    title: "A clear read on how aftersales is really performing.",
    description:
      "See warranty exposure, claims trends and customer activity in real data — so decisions about aftersales are based on what's actually happening.",
    benefits: [
      "Track claims volume and resolution time",
      "Monitor warranty exposure across your book",
      "Spot trends before they become problems",
    ],
    visual: { kind: "dashboard" },
  },
  {
    id: "ai-assistance",
    eyebrow: "AI Assistance",
    title: "Useful guidance when you need it, not a chatbot for its own sake.",
    description:
      "From understanding a customer complaint to preparing a considered response, VROOM's AI assistant gives your team a starting point grounded in your warranty terms.",
    benefits: [
      "Get clarity on customer issues quickly",
      "Generate response guidance grounded in your terms",
      "Save time on first drafts and admin",
      "Keep the final decision with your team",
    ],
    visual: { kind: "ai" },
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your aftersales team needs."
        description="VROOM brings warranties, claims, customers, vehicles, documents and insights into one platform — built specifically for how UK dealers actually work."
      />

      {SECTIONS.map((section, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 sm:py-24 ${dark ? "bg-vroom-navy-2" : "bg-white"}`}
          >
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <Badge tone={dark ? "dark" : "light"} className="mb-5">
                    {section.eyebrow}
                  </Badge>
                  <h2
                    className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
                      dark ? "text-white" : "text-vroom-ink"
                    }`}
                  >
                    {section.title}
                  </h2>
                  <p
                    className={`mt-5 max-w-md text-base leading-relaxed ${
                      dark ? "text-white/65" : "text-vroom-grey-700"
                    }`}
                  >
                    {section.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {section.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className={`flex items-start gap-3 text-sm sm:text-base ${
                          dark ? "text-white/75" : "text-vroom-grey-700"
                        }`}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vroom-green text-vroom-ink">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {section.visual.kind === "dashboard" && (
                    <LaptopFrame>
                      <DashboardMockup />
                    </LaptopFrame>
                  )}
                  {section.visual.kind === "ai" && <AIAssistantMockup />}
                  {section.visual.kind === "portal" && <CustomerPortalMockup />}
                  {section.visual.kind === "panel" && (
                    <FeaturePanel icon={section.visual.icon} title={section.visual.title} rows={section.visual.rows} />
                  )}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection
        title="See VROOM working for your dealership."
        description="Get started with VROOM, or book a demo and we'll walk you through it."
      />
    </>
  );
}
