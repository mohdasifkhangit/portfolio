import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { reels } from "../data.js";

function Reel({ title, tag, duration, stats, src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => { ref.current?.play().then(() => setPlaying(true)).catch(() => {}); };
  const stop = () => { const v = ref.current; if (!v) return; v.pause(); v.currentTime = 0.1; setPlaying(false); };

  return (
    <article
      className="reel"
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={() => (playing ? stop() : play())}
    >
      {/* #t=0.1 makes the browser show a frame as the cover */}
      <video ref={ref} src={`${src}#t=0.1`} muted loop playsInline preload="metadata" />
      <div className="reel-overlay">
        <div className="reel-top">
          <span className="pill">{tag}</span>
          <span className="mono-white">{duration}</span>
        </div>
        <div>
          <h3>{title}</h3>
          <p className="mono-white dim">{stats}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reels() {
  return (
    <section id="reels" className="section section-white">
      <div className="container">
        <SectionHeader
          label="01 / Short form"
          title="Reels built for attention."
          text="Hover or tap a reel to play it."
        />
        <div className="reel-grid">
          {reels.map((r) => <Reel key={r.src} {...r} />)}
        </div>
      </div>
    </section>
  );
}
