import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { longform as d } from "../data.js";

export default function LongForm() {
  const [started, setStarted] = useState(false);

  return (
    <section id="longform" className="section section-white">
      <div className="container">
        <SectionHeader label="03 / Featured work" title="Long form storytelling." />
        <div className="card card-dark">
          <div className="player">
            {started ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${d.youtubeId}?autoplay=1&rel=0`}
                title={d.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <>
                <img src={`https://img.youtube.com/vi/${d.youtubeId}/maxresdefault.jpg`} alt={d.title} />
                <button className="play" onClick={() => setStarted(true)} aria-label={`Play ${d.title}`}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </button>
                <span className="pill pill-dark ba-left" style={{ top: "auto", bottom: 16 }}>{d.length}</span>
              </>
            )}
          </div>
          <div className="lf-info">
            <div>
              <span className="eyebrow">{d.tag}</span>
              <h3>{d.title}</h3>
              <p className="muted">{d.description}</p>
            </div>
            <dl className="lf-meta">
              {d.meta.map((m) => (
                <div key={m.k}><dt>{m.k}</dt><dd>{m.v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
