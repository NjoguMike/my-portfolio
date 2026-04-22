import type { LandingPagePaths } from "../types/portfolioData";

export function portfolioPath( value: string): value is LandingPagePaths {
  return value === 'tech' || value === 'wellness';
}