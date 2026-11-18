import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { longForm as d } from "../data.js";

export default function LongForm() {
  const [started, setStarted] = useState(false);

  return (
    <section id="long-form" className="section">
      <div className="container">
        <SectionHeader label="02 / Long-form" title="Stories that need room to breathe." />
        <div className="panel">
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
                <img src={`https://img.youtube.com/vi/${d.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" />
                <button className="play" onClick={() => setStarted(true)} aria-label={`Play ${d.title}`}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </>
            )}
          </div>
          <div className="lf-info">
            <div>
              <span className="eyebrow">{d.type}</span>
              <h3>{d.title}</h3>
              <p className="muted">{d.description}</p>
            </div>
            <div>
              <p className="mono-label">My role</p>
              <ul className="list">
                {d.responsibilities.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <p className="mono-label">Software: {d.software}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
