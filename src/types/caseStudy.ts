export type Stat = {
  label: string;
  value: string;
};

export type MetaBadge = {
  label: string;
  value: string;
};

export type Bullet = {
  text: string;
};

export type SectionBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: Bullet[];
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type CaseStudyCard = {
  category: string;
  title: string;
  date: string;
  logoAlt?: string;
  logoSrc?: string;
  logoText?: string;
  href?: string;
};

