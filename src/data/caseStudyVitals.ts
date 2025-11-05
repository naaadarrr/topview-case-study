import type {
  MetaBadge,
  Stat,
  SectionBlock,
  CaseStudyCard,
} from "@/src/types/caseStudy";

export const metaBadges: MetaBadge[] = [
  { label: "Industry", value: "Marketing Agency" },
  { label: "Use cases", value: "Short-form video production" },
  { label: "Use cases", value: "Campaign acceleration" },
];

export const hero = {
  title: "How Văzut Online scaled video 10x faster at 60% lower cost",
  company: "Văzut Online",
  overview: [
    "Văzut Online is a video-first marketing agency specializing in short, high-quality promotional clips for social media and digital advertising. They complement production with optional social media management and ad services, giving clients a full-funnel execution partner.",
    "With a focus on speed, customization, and multi-platform adaptability, founder Alin built the agency to help fast-moving brands launch campaigns without sacrificing quality or budget.",
  ],
};

export const stats: Stat[] = [
  { label: "Cost savings", value: "60%" },
  { label: "Production speed", value: "90% faster" },
  { label: "Videos per day", value: "15–20" },
  { label: "Engagement lift", value: "200%" },
  { label: "Conversion growth", value: "40%" },
];

export const keyResultsNarrative = {
  title: "Industry context",
  paragraphs: [
    "Digital marketing is increasingly competitive. Brands need large volumes of personalized video content for Facebook, Instagram, TikTok, and emerging channels. Traditional production is costly and slow, keeping agencies from scaling without sacrificing ROI or creative quality.",
    "Văzut Online needed an approach that could maintain premium visuals while keeping pace with clients’ demand for quick turnarounds and measurable performance gains.",
  ],
};

export const sections: SectionBlock[] = [
  {
    title: "The challenges they faced",
    paragraphs: [
      "For Alin, producing high-quality videos was expensive, time-consuming, and complex. Văzut Online struggled with:",
    ],
    bullets: [
      {
        text: "High production costs — Outsourcing video creation was costly and unsustainable for delivering frequent campaigns.",
      },
      {
        text: "Time-intensive editing — Each video required significant editing hours, slowing down campaign execution.",
      },
      {
        text: "Limited flexibility — Updating delivered videos demanded advanced editing skills, adding complexity and delays.",
      },
    ],
  },
  {
    title: "The solution we bring",
    paragraphs: [
      "By adopting Topview, Văzut Online streamlined its entire creative pipeline. Intuitive editing tools, ready-to-use assets, and flexible templates enabled the team to:",
    ],
    bullets: [
      { text: "Produce professional videos at a fraction of the cost." },
      { text: "Create content faster and more efficiently." },
      { text: "Make quick adjustments without advanced editing skills." },
      { text: "Maintain high-quality visuals across every client campaign." },
    ],
  },
  {
    title: "The impact",
    paragraphs: [
      "Topview transformed Văzut Online’s production workflow, unlocking measurable growth for both the agency and its clients:",
    ],
    bullets: [
      { text: "60% cost savings compared to outsourced video production." },
      { text: "90% faster production time, enabling rapid campaign launches." },
      { text: "15–20 custom videos produced daily to match client demand." },
      { text: "200% increase in social media engagement across client campaigns." },
      { text: "40% growth in sales conversions from video-driven funnels." },
    ],
  },
  {
    title: "Top performing content",
    paragraphs: [
      "A Facebook ad series for an e-commerce client delivered 3x engagement compared to previous creatives, proving that faster production can still deliver premium results.",
    ],
  },
  {
    title: "In their words",
    paragraphs: [
      "“Topview made video production faster, easier, and far more affordable for my business.” — Alin, Founder & Marketing Specialist, Văzut Online",
    ],
  },
];

export const moreCaseStudies: CaseStudyCard[] = [
  {
    category: "E-COMMERCE",
    title: "From Static to Scroll-Stopping — How AdMax 10x’d Performance for an E-commerce Agency",
    date: "Jul 27, 2025",
    logoText: "AdMax",
    logoSrc: "/logos/admax.png",
  },
  {
    category: "E-COMMERCE",
    title: "How Văzut Online scaled video 10x faster at 60% lower cost",
    date: "May 12, 2025",
    logoText: "Văzut Online",
    logoSrc: "/logos/vazutonline.png",
  },
  {
    category: "ADVERTISING",
    title: "How AdNet cut production time by 90% and scaled ad testing with Creatify",
    date: "Apr 17, 2025",
    logoText: "AdNet",
    logoSrc: "/logos/adnet.png",
  },
];

