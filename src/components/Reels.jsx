import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { reels } from "../data.js";

function Reel({ title, tag, duration, stats, src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const play = () => {
    ref.current?.play().then(() => setPlaying(true)).catch(() => {});
  };

  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0.1;
    v.muted = true;
    setPlaying(false);
    setMuted(true);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const v = ref.current;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) play();
  };

  return (
    <article
      className="reel"
      onMouseEnter={play}
      onMouseLeave={() => { if (muted) stop(); }}
      onClick={() => (playing ? stop() : play())}
    >
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
      <button
        className="sound-btn"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m22 9-6 6M16 9l6 6" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>
        )}
      </button>
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
          text="Hover or tap a reel to play it. Use the speaker button for sound."
        />
        <div className="reel-grid">
          {reels.map((r) => <Reel key={r.src} {...r} />)}
        </div>
      </div>
    </section>
  );
}