import SectionHeader from "./SectionHeader.jsx";
import { services, process } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader label="04 / What we do" title="Editing that serves the story." />
        <div className="grid-4">
          {services.map((s) => (
            <div key={s.title} className="cell">
              <h3 className="h4">{s.title}</h3>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>

        <h3 className="sub">How we work</h3>
        <ol className="grid-4 steps">
          {process.map((p, i) => (
            <li key={p.title} className="cell">
              <span className="mono-label">0{i + 1}</span>
              <h3 className="h4">{p.title}</h3>
              <p className="muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
