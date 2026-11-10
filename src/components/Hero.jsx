import { profile, metrics } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="badge"><span className="dot" />{profile.available}</div>
      <h1>{profile.headline}</h1>
      <p className="lead">{profile.bio}</p>
      {metrics.length > 0 && (
        <div className="metrics">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="metric-value">{m.value}</p>
              <p className="mono-label">{m.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
