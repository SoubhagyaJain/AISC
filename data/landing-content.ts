import {
  BarChart3,
  Bot,
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

export const stats = [
  { value: "18.4k+", label: "Qualified leads generated" },
  { value: "72k+", label: "SEO pages published" },
  { value: "5.9k+", label: "Campaigns automated" },
  { value: "99.97%", label: "Weekly reporting uptime" }
];

export const features = [
  { title: "AI SEO Page Generation", description: "Publish service and region pages that match project intent and search demand.", icon: Search },
  { title: "Blog Content Engine", description: "Ship contractor-focused blog posts with steel-specific topic depth.", icon: FileStack },
  { title: "Lead Capture + CRM", description: "Capture qualified inbound leads and sync instantly with your pipeline.", icon: Users },
  { title: "Weekly Reporting Dashboard", description: "Track rankings, forms, and campaign outputs in one executive view.", icon: ChartNoAxesCombined },
  { title: "Content Calendar", description: "Plan and approve monthly publishing across services and geographies.", icon: ClipboardCheck },
  { title: "Competitor Monitoring", description: "Spot ranking gaps and react fast to local and regional competitors.", icon: Compass },
  { title: "Local SEO Landing Pages", description: "Launch multi-location pages built around your fabrication footprint.", icon: MapPinned },
  { title: "Email Follow-up Automation", description: "Respond to new inquiries with relevant messaging and proof points.", icon: MailCheck },
  { title: "Industry Suggestions", description: "Receive steel and GC content recommendations based on demand shifts.", icon: Sparkles },
  { title: "Approval Workflow", description: "Keep marketing, sales, and leadership aligned before publishing.", icon: ShieldCheck },
  { title: "Multi-location Service Pages", description: "Scale pages by region while preserving technical service accuracy.", icon: Bot },
  { title: "Conversion Tracking", description: "Measure channel-level ROI using lead source and close-rate signals.", icon: BarChart3 }
];

export const steps = [
  "Tell us your business model, services, and target regions.",
  "AI builds your SEO strategy, calendar, and campaign roadmap.",
  "Launch optimized pages, blogs, and workflows in days.",
  "Track lead quality, rankings, and growth in one dashboard."
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$890/mo",
    description: "For focused teams launching predictable inbound.",
    features: ["20 AI blogs/mo", "15 service/location pages", "Lead capture forms", "Weekly reporting"],
    cta: "Start Trial"
  },
  {
    name: "Growth",
    price: "$1,890/mo",
    description: "For fabricators and GCs scaling across regions.",
    features: ["60 AI blogs/mo", "Unlimited service pages", "Campaign automation", "Competitor insights", "CRM sync"],
    cta: "Book Demo",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For multi-location operations with advanced workflows.",
    features: ["Custom AI strategy", "Multi-brand architecture", "Executive reporting", "Priority support", "Dedicated strategist"],
    cta: "Contact Sales"
  }
];
