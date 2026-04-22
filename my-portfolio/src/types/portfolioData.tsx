export type LandingPagePaths = 'tech' | 'wellness'

export type LandingHero = {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export type CardsContent = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  card_image: string;
  primaryCta: string;
  route: string;
}

export type LandingPageData = {
  hero: LandingHero;
  cards: CardsContent[];
};

export type Highlights = {
      title: string;
      subtitle: string;
      description: string;
      link: string;
      image: string;
}

export type Stats = {
  label: string;
  value: string;
}

export type HeroContent = {
    label: string;
    eyebrow: string;
    heading: string;
    text: string;
    primaryCta: string;
    secondaryCta: {
      eyebrow: string;
      headline: string;
      sub: string;
      cta: string;
      primary: string;
      secondary: string;
    };
}

export type PortfolioSectionData = Record<
  LandingPagePaths,
  {
    section: HeroContent;
    highlights: Highlights[];
    stats: Stats[];
  }
>;

export type PortfolioData = Record<LandingPagePaths, PortfolioSectionData>;