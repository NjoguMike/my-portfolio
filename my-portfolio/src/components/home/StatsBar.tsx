
export default function StatsBar({ content }: { content : any}) {
  return (
    <div className="stats-bar">
      {content?.stats?.map((stat: { label : string; value : string}, index: number) => (
        <div key={`${stat?.label}-${index}`} className="stat-item">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}