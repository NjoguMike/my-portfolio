
export default function StatsBar({ content }) {
  return (
    <div className="stats-bar">
      {content?.stats?.map((stat) => (
        <div key={stat.label} className="stat-item">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
