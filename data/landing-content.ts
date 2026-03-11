import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  Compass,
  FileStack,
  MailCheck,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const navLinks = ["Features", "How It Works", "Pricing", "Use Cases", "Contact"];

export const trustSignals = [
  "Used by AISC fabricators in 34 states",
  "Built for steel detailing + erection scopes",
  "Reporting trusted by precon and sales teams"
];

export const stats = [
  { value: "22,480+", label: "Qualified inbound leads captured" },
  { value: "81,300+", label: "Service + location SEO pages published" },
  { value: "6,900+", label: "Contractor campaigns automated" },
  { value: "99.98%", label: "Weekly report delivery uptime" }
];

export const whoItsFor = [
  {
    title: "AISC Fabricators",
    description: "Improve visibility for fabrication, detailing, stairs/rails, misc. metals, and specialty scopes in every target market.",
    icon: Building2
  },
  {
    title: "General Contractors",
    description: "Generate project-ready inbound from owners, developers, and subcontractor search intent tied to your regions.",
    icon: BriefcaseBusiness
  },
  {
    title: "Steel Service Businesses",
    description: "Scale local SEO and lead capture without manually writing pages, blogs, and follow-up sequences each week.",
    icon: Users
  }
];

export const features = [
  {
    title: "AI Service Page Builder",
    description: "Generate high-intent service pages for fabrication, detailing, and field installation scopes.",
    icon: Search
  },
  {
    title: "Location SEO Page Engine",
    description: "Deploy region-specific pages for every city and metro you bid in.",
    icon: MapPinned
  },
  {
    title: "Contractor Blog System",
    description: "Publish contractor-focused content built around steel workflows, schedules, and scope clarity.",
    icon: FileStack
  },
  {
    title: "Lead Capture + CRM Routing",
    description: "Capture qualified form and call leads, then route by service line and territory.",
    icon: Users
  },
  {
    title: "Weekly Growth Dashboard",
    description: "Track rankings, lead source quality, and campaign ROI in one operating view.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Approval Workflow",
    description: "Give sales, precon, and operations teams review control before content goes live.",
    icon: ClipboardCheck
  },
  {
    title: "Competitor Monitoring",
    description: "Identify where local fabricators and GCs are outranking you and close gaps fast.",
    icon: Compass
  },
  {
    title: "Follow-up Automation",
    description: "Send tailored responses based on lead type, service request, and geography.",
    icon: MailCheck
  },
  {
    title: "Industry Topic Suggestions",
    description: "Get new content ideas from shifting steel demand and regional search behavior.",
    icon: Sparkles
  },
  {
    title: "Multi-location Service Hubs",
    description: "Scale consistent pages across branches while preserving local relevance.",
    icon: Bot
  },
  {
    title: "Conversion Tracking",
    description: "Measure which pages and campaigns drive qualified opportunities.",
    icon: BarChart3
  },
  {
    title: "Governed Publishing",
    description: "Maintain brand and technical accuracy with role-based publishing controls.",
    icon: ShieldCheck
  }
];

export const steps = [
  "Share your steel services, ideal project types, and target regions.",
  "The platform builds a service-page, location-page, and content roadmap.",
  "AI publishes contractor-focused pages, blogs, and lead workflows.",
  "Your team tracks rankings, qualified leads, and growth by region."
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$1,250/mo",
    description: "For single-market fabricators building consistent inbound.",
    features: [
      "30 AI blogs / month",
      "25 service + location pages / month",
      "Lead forms + call tracking",
      "Weekly ranking + lead report"
    ],
    cta: "Start Pilot"
  },
  {
    name: "Growth",
    price: "$2,950/mo",
    description: "For regional fabricators and GCs scaling across multiple metros.",
    features: [
      "80 AI blogs / month",
      "Unlimited service/location pages",
      "CRM routing + follow-up automation",
      "Competitor tracking dashboard",
      "Monthly strategy call"
    ],
    cta: "Book Growth Demo",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For multi-branch operations with complex approvals and reporting needs.",
    features: [
      "Custom content governance",
      "Multi-brand + multi-location architecture",
      "Executive and branch-level scorecards",
      "Advanced attribution + close-loop reporting",
      "Dedicated growth strategist"
    ],
    cta: "Talk to Sales"
  }
];
