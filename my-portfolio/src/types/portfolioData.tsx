export type HighlightItem = {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  image: string;
  category?: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type SecondaryCTA = {
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  primary: string;
  secondary: string;
};

export type PortfolioSection = {
  label: string;
  eyebrow: string;
  heading: string;
  text: string;
  primaryCta: string;
  secondaryCta: SecondaryCTA;
  highlights: HighlightItem[];
  stats: StatItem[];
};

export type PortfolioData = {
  tech: PortfolioSection;
  wellness: PortfolioSection;
};