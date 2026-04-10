export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="mode-toggle" role="tablist">
      <button
        className={`toggle-btn ${mode === "tech" ? "active" : ""}`}
        onClick={() => setMode("tech")}
      >
        Tech
      </button>

      <button
        className={`toggle-btn ${mode === "wellness" ? "active" : ""}`}
        onClick={() => setMode("wellness")}
      >
        Wellness
      </button>

      <span
        className={`toggle-indicator ${
          mode === "tech" ? "left" : "right"
        }`}
      />
    </div>
  );
}