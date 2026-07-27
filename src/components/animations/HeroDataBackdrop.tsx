const chartBars = Array.from({ length: 9 }, (_, index) => index + 1);
const scatterPoints = Array.from({ length: 10 }, (_, index) => index + 1);
const pipelineSteps = ["Ingest", "Clean", "Model", "Visualise"] as const;

export function HeroDataBackdrop() {
  return (
    <div aria-hidden="true" className="hero-data-backdrop">
      <div className="hero-background-scan" />

      <div className="hero-background-pipeline">
        {pipelineSteps.map((step, index) => (
          <span key={step}>
            <i>0{index + 1}</i>
            {step}
          </span>
        ))}
      </div>

      <div className="hero-background-bars">
        <small>Signal density</small>
        <div>
          {chartBars.map((bar) => (
            <span className={`hero-background-bar bar-${bar}`} key={bar} />
          ))}
        </div>
      </div>

      <div className="hero-background-orbit">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>Model loop</span>
      </div>

      <div className="hero-background-scatter">
        <small>Pattern field</small>
        {scatterPoints.map((point) => (
          <span
            className={`hero-scatter-point point-${point}`}
            key={point}
          />
        ))}
      </div>
    </div>
  );
}
