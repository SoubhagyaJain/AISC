import {
  FileText,
  Layers,
  ShieldCheck,
  Settings2,
  Scissors,
  MessageSquare,
  AlertTriangle,
  RefreshCcw,
  FileOutput,
  Table2,
  Box,
  ClipboardList,
  HardHat,
  Calculator,
  BookOpen,
  Truck,
  Lock,
  Cpu,
  Database,
  Network
} from "lucide-react";

export const engineProofChips = [
  "Multi-source extraction",
  "SDS2 engineering workflow",
  "Revision delta analysis",
  "SigmaNEST optimization",
  "Automated RFI generation",
  "Localized project assistant",
  "IFC / BIM output",
  "Custom Excel reporting"
];

export const engineWorkflowSteps = [
  {
    number: "01",
    label: "Extract",
    icon: FileText,
    title: "Document Extraction",
    description:
      "Read drawings, schedules, connection notes, and contract specs. Classify document types, identify structural members, and build the project knowledge index."
  },
  {
    number: "02",
    label: "Hydrate",
    icon: Layers,
    title: "Spec Hydration",
    description:
      "Map each member's geometry, size, material grade, surface finish, weld prep requirements, and structural metadata into a structured, queryable data model."
  },
  {
    number: "03",
    label: "Validate",
    icon: ShieldCheck,
    title: "Market Validation",
    description:
      "Check pricing, stock availability, lead times, and availability constraints against current market data. Flag risk items before they reach production."
  },
  {
    number: "04",
    label: "Engineer",
    icon: Settings2,
    title: "Engineering Logic",
    description:
      "Run connection-aware engineering workflows and generate SDS2-compatible model outputs. Apply project standards, code requirements, and connection logic automatically."
  },
  {
    number: "05",
    label: "Optimize",
    icon: Scissors,
    title: "Production Optimization",
    description:
      "Calculate true wastage, trim-loss, and nesting efficiency across the bill of materials. Generate SigmaNEST-ready optimization output to minimize material cost."
  },
  {
    number: "06",
    label: "Query",
    icon: MessageSquare,
    title: "Project Assistant",
    description:
      "Let engineers and estimators query revisions, failed outputs, connection logic, and project-specific standards through a scoped, secure assistant interface."
  }
];

export const engineGuardrails = [
  {
    icon: AlertTriangle,
    color: "amber",
    label: "Lead-Time Guardrail",
    title: "Material risk flagged before it reaches production",
    description:
      "When a specified member has a lead time that exceeds the project schedule, the engine flags the item, quantifies the delay risk in days and cost, and surfaces a viable alternative section from current stock."
  },
  {
    icon: Lock,
    color: "red",
    label: "RFI Guardrail",
    title: "Missing information locks the item and generates a resolution path",
    description:
      "If engineering information is incomplete or ambiguous, the item is placed in a review-locked state. An approval-ready RFI package is generated automatically with snapshots and specification context."
  },
  {
    icon: RefreshCcw,
    color: "blue",
    label: "Revision Delta Guardrail",
    title: "Revision changes quantified in tonnage, cost, and scope",
    description:
      "When a drawing revision is uploaded, the engine compares it against the previous version and generates a delta report showing added, removed, and modified members with full tonnage and cost impact."
  }
];

export const engineDeliverables = [
  {
    icon: Table2,
    title: "Custom Excel Reports",
    description:
      "Structured output mapped to your estimating and procurement team templates. Ready for review without reformatting. Includes BOM, pricing, lead times, and risk flags."
  },
  {
    icon: Box,
    title: "IFC / BIM Packages",
    description:
      "Structured model outputs compatible with downstream modeling workflows. Geometry, grade, finish, and connection data are embedded and ready for coordination."
  },
  {
    icon: ClipboardList,
    title: "Automated RFI Packages",
    description:
      "Generated issue packages with drawing snapshots, conflict descriptions, and approval-ready context. Built for one-click submission to the engineering team."
  }
];

export const engineUseCases = [
  {
    icon: HardHat,
    role: "Structural Steel Fabricators",
    value:
      "Reduce drawing-to-BOM time from days to hours. Eliminate manual re-keying and catch spec gaps before materials are ordered."
  },
  {
    icon: Calculator,
    role: "Estimators",
    value:
      "Extract complete member schedules from PDFs in minutes. Run validated takeoffs with material availability and pricing built in."
  },
  {
    icon: BookOpen,
    role: "Detailers",
    value:
      "Receive a structured model stub with geometry, grades, and connection logic already applied. Spend time on engineering decisions, not data entry."
  },
  {
    icon: Settings2,
    role: "Engineering Teams",
    value:
      "Query the project knowledge base to resolve connection conflicts, check revision changes, and confirm standards compliance through the assistant."
  },
  {
    icon: Truck,
    role: "Procurement & Production Planning",
    value:
      "See material availability, lead-time risk, and nesting optimization before purchase orders are placed. Avoid schedule surprises downstream."
  }
];

export const engineTechChips = [
  { icon: Cpu, label: "Hybrid AI + engineering workflow" },
  { icon: Database, label: "Structured memory & retrieval layer" },
  { icon: Lock, label: "Secure project-scoped context" },
  { icon: Network, label: "Scalable document processing pipeline" },
  { icon: ShieldCheck, label: "Review-gated output model" },
  { icon: RefreshCcw, label: "Continuous revision tracking" }
];

export const engineFaqs = [
  {
    question: "What types of drawings can the engine process?",
    answer:
      "The engine accepts PDF structural drawings, general arrangement drawings, connection notes, material schedules, and contract specification documents. Mixed-format packages with multiple document types are supported."
  },
  {
    question: "How accurate are the outputs?",
    answer:
      "Outputs are generated through a structured extraction and validation pipeline, not free-form AI generation. Member geometry, grades, and quantities are cross-referenced against the source document and flagged when confidence is below threshold. Every output goes through a review step before being marked production-ready."
  },
  {
    question: "What does the review workflow look like?",
    answer:
      "After processing, outputs are staged in a review state. Engineers or estimators can inspect member-by-member, approve individual items, and escalate flagged items through the RFI path. Nothing is marked final without a human review touchpoint."
  },
  {
    question: "How are drawing revisions handled?",
    answer:
      "When a new revision is uploaded, the engine runs a delta comparison against the current approved version. Added, removed, and modified members are identified with full tonnage and cost impact. The review queue is updated to show only the changed items."
  },
  {
    question: "What deliverables are generated?",
    answer:
      "The engine generates custom Excel reports mapped to your team templates, IFC/BIM packages for downstream coordination, and automated RFI packages for unresolved engineering items. All outputs are tied to the reviewed and approved project state."
  },
  {
    question: "How does this fit into existing fabrication workflows?",
    answer:
      "The engine is designed to integrate at the front end of your current workflow — between drawing receipt and shop drawing production. Existing tools like SDS2, SigmaNEST, and your ERP are downstream consumers of the structured output."
  },
  {
    question: "Is the assistant project-specific and secure?",
    answer:
      "Yes. The localized assistant is scoped to a single project's knowledge base. It has no access to other projects and operates within a controlled retrieval layer. Users can only query information from the documents and outputs associated with their project."
  },
  {
    question: "How do demos and onboarding work?",
    answer:
      "We run the demo against a set of your actual drawings — not canned data. You see the extraction, validation, and output cycle using your real project. Onboarding for live use typically takes 1–2 weeks depending on your document complexity."
  }
];
