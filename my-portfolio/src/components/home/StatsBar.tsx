import type { PortfolioSection, StatItem } from "../../types/portfolioData";

type StatsBarProps = {
  content?: PortfolioSection;
};

export default function StatsBar({ content }: StatsBarProps) {
  return (
    <div className="stats-bar">
      {content?.stats?.map((stat: StatItem, index: number) => (
        <div key={`${stat.label}-${index}`} className="stat-item">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}