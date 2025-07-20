export interface Report {
  title: string;
  summary: string;
  description?: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  slug: string;
}

export const reports: Report[] = [
  {
    title: "Corporate Capture of Municipal Climate Policy: A Case Study in Regulatory Failure",
    summary: "Six-month investigation reveals systematic infiltration of city planning committees by fossil fuel companies.",
    date: "March 15, 2024",
    category: "Health & Environment",
    tags: ["Health & Environment"],
    readTime: "12 min",
    featured: true,
    slug: "corporate-capture-of-municipal-climate-policy"
  },
  {
    title: "The Privatization Pipeline: How Charter School Networks Extract Public Wealth",
    summary: "Analysis of financial flows between charter operators and private equity firms across five states.",
    date: "February 28, 2024",
    category: "Economy & Inequality",
    tags: ["Economy & Inequality"],
    readTime: "18 min",
    featured: false,
    slug: "the-privatization-pipeline-charter-school-networks"
  },
  {
    title: "Policing for Profit: Asset Forfeiture and Municipal Budget Dependencies",
    summary: "Data-driven examination of how civil asset forfeiture has become essential revenue for local governments.",
    date: "February 10, 2024",
    category: "Power & Governance",
    tags: ["Power & Governance"],
    readTime: "15 min",
    featured: false,
    slug: "policing-for-profit-asset-forfeiture"
  },
  {
    title: "Digital Redlining: Broadband Access and the New Geography of Inequality",
    summary: "Mapping the correlation between historical redlining and contemporary internet infrastructure gaps.",
    date: "January 22, 2024",
    category: "Technology & Surveillance",
    tags: ["Technology & Surveillance"],
    readTime: "10 min",
    featured: false,
    slug: "digital-redlining-broadband-access"
  },
  {
    title: "The Revolving Door: Defense Contractors and Pentagon Personnel Exchange",
    summary: "Tracking career movements between major defense contractors and Department of Defense leadership positions.",
    date: "January 8, 2024",
    category: "Technology & Surveillance",
    tags: ["Technology & Surveillance"],
    readTime: "20 min",
    featured: false,
    slug: "the-revolving-door-defense-contractors"
  },
  {
    title: "Healthcare Consolidation and Care Deserts: When Monopolies Kill",
    summary: "Investigation into hospital mergers and their impact on rural healthcare access and patient outcomes.",
    date: "December 15, 2023",
    category: "Culture & Narrative",
    tags: ["Culture & Narrative"],
    readTime: "14 min",
    featured: false,
    slug: "healthcare-consolidation-care-deserts"
  }
];

export const categories = [
  "All Reports",
  "Power & Governance",
  "Economy & Inequality", 
  "Technology & Surveillance",
  "Health & Environment",
  "Culture & Narrative",
];