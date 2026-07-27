const ambientNodes = Array.from({ length: 9 }, (_, index) => index + 1);

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-mesh" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-flow ambient-flow-one" />
      <div className="ambient-flow ambient-flow-two" />
      <div className="ambient-nodes">
        {ambientNodes.map((node) => (
          <span className={`ambient-node ambient-node-${node}`} key={node} />
        ))}
      </div>
    </div>
  );
}
