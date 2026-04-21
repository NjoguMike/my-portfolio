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
