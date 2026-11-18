import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { beforeAfter as d } from "../data.js";

export default function BeforeAfter() {
  const box = useRef(null);
  const [pos, setPos] = useState(50);
  const [missing, setMissing] = useState([]); // which files failed to load

  const move = (x) => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  const onDown = (e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); };
  const onMove = (e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX); };
  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };
  const fail = (file) => setMissing((m) => (m.includes(file) ? m : [...m, file]));

  return (
    <section id="transformation" className="section">
      <div className="container">
        <SectionHeader
          label="03 / The transformation"
          title="See the difference editing makes."
          text="Drag the handle, or use the arrow keys, to compare the original with the final edit."
        />
        <div className="panel">
          {missing.length > 0 ? (
            <div className="ba empty-box">
              <p className="empty">
                Temporary placeholder. Could not load: {missing.join(", ")}.<br />
                Check that the files exist in /public/images/ and that the names in data.js match exactly (capital letters count).
              </p>
            </div>
          ) : (
            <div ref={box} className="ba" onPointerDown={onDown} onPointerMove={onMove}>
              <img src={d.after} alt="Final edit" draggable="false" loading="lazy" onError={() => fail(d.after)} />
              <span className="tag tag-right">Final</span>
              <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img src={d.before} alt="Original footage" draggable="false" loading="lazy" onError={() => fail(d.before)} />
                <span className="tag tag-left">Original</span>
              </div>
              <div
                className="ba-handle"
                style={{ left: `${pos}%` }}
                role="slider"
                tabIndex={0}
                aria-label="Compare original and final"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                onKeyDown={onKey}
              >
                <span className="knob" aria-hidden="true">↔</span>
              </div>
            </div>
          )}
          <div className="panel-foot">
            <h3 className="h4">{d.caption}</h3>
            <p className="mono-label">{d.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
