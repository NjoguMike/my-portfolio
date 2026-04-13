type Mode = "tech" | "wellness";

type ModeToggleProps = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

export default function ModeToggle({ mode, setMode }: ModeToggleProps) {
  return (
    <div className="mode-toggle" role="tablist">
      <button
        type="button"
        className={`toggle-btn ${mode === "tech" ? "active" : ""}`}
        onClick={() => setMode("tech")}
      >
        Tech
      </button>

      <button
        type="button"
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