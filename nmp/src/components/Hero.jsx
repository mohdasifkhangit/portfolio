import { brand } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <span className="eyebrow">Independent video editing studio</span>
      <h1>Good stories deserve great editing.</h1>
      <p className="lead">
        NMP transforms raw footage into purposeful, polished videos for creators, educators, and brands.
        From engaging short-form content to thoughtful long-form storytelling.
      </p>
      <div className="cta-row">
        <a href="#work" className="btn btn-red">Explore Our Work</a>
        <a href="#contact" className="btn btn-ghost">Start a Project</a>
      </div>
      <p className="mono-label">Independent studio founded by {brand.founder}.</p>
    </section>
  );
}
