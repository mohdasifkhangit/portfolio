import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { shortForm } from "../data.js";

// Only one video plays at a time
let stopCurrent = null;

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const PLAY = <path d="M8 5v14l11-7z" fill="currentColor" />;
const PAUSE = <><path d="M8 5v14" /><path d="M16 5v14" /></>;
const SOUND_ON = <><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></>;
const SOUND_OFF = <><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m22 9-6 6M16 9l6 6" /></>;

function VideoCard({ title, category, description, details, src, ratio = "9 / 16" }) {
  const box = useRef(null);
  const video = useRef(null);
  const [near, setNear] = useState(false); // lazy load
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setNear(true), io.disconnect()), { rootMargin: "300px" });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);

  const pause = () => { video.current?.pause(); setPlaying(false); };

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (playing) return pause();
    if (stopCurrent) stopCurrent();
    v.play().then(() => { setPlaying(true); stopCurrent = pause; }).catch(() => {});
  };

  const toggleSound = () => {
    const v = video.current;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <article className="work-card">
      <div ref={box} className="media" style={{ aspectRatio: ratio }}>
        {failed ? (
          <p className="empty">Video not found: {src}</p>
        ) : (
          <video
            ref={video}
            src={near ? `${src}#t=0.1` : undefined}
            muted
            loop
            playsInline
            preload="metadata"
            onClick={toggle}
            onError={() => near && setFailed(true)}
            aria-label={title}
          />
        )}
        {!failed && (
          <div className="controls">
            <button onClick={toggle} aria-label={playing ? `Pause ${title}` : `Play ${title}`}><Icon d={playing ? PAUSE : PLAY} /></button>
            <button onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Turn sound off"}><Icon d={muted ? SOUND_OFF : SOUND_ON} /></button>
          </div>
        )}
      </div>
      <div className="work-info">
        <span className="eyebrow">{category}</span>
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        {details && <p className="mono-label">{details}</p>}
      </div>
    </article>
  );
}

export default function ShortForm() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          label="01 / Selected work"
          title="Short-form. Strong storytelling."
          text="Purposeful edits designed to communicate clearly and hold attention."
        />
        <div className="work-grid">
          {shortForm.map((p) => <VideoCard key={p.src} {...p} />)}
        </div>
      </div>
    </section>
  );
}
