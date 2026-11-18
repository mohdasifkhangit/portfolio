import SectionHeader from "./SectionHeader.jsx";
import { brand } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <SectionHeader label="05 / The studio" title="Independent by design." />
        <p className="lead">
          {brand.name} ({brand.full}) is an independent video-editing studio founded by {brand.founder}. We focus on
          clean, intentional editing that lets the message and storytelling lead.
        </p>
        <p className="lead">
          Starting as a one-person studio, {brand.name} brings a personal, detail-oriented approach to every project.
        </p>
        <p className="mono-label">Founded by {brand.founder} — Video Editor &amp; Creative.</p>
      </div>
    </section>
  );
}
