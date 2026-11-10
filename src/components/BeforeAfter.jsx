import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { beforeAfter as d } from "../data.js";

export default function BeforeAfter() {
  const box = useRef(null);
  const [pos, setPos] = useState(50); // percent

  const move = (clientX) => {
    const r = box.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  const onDown = (e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); };
  const onMove = (e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX); };
  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
  };

  return (
    <section id="transformation" className="section">
      <div className="container">
        <SectionHeader
          label="02 / Transformation"
          title="From raw cut to final."
          text="Drag the handle to compare the source footage with the finished edit."
        />
        <div className="card">
          <div
            ref={box}
            className="ba"
            onPointerDown={onDown}
            onPointerMove={onMove}
          >
            <img src={d.after} alt={d.afterLabel} draggable="false" />
            <span className="pill pill-red ba-right">{d.afterLabel}</span>

            <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={d.before} alt={d.beforeLabel} draggable="false" style={{ filter: d.beforeFilter }} />
              <span className="pill pill-dark ba-left">{d.beforeLabel}</span>
            </div>

            <div
              className="ba-handle"
              style={{ left: `${pos}%` }}
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              onKeyDown={onKey}
            >
              <span className="knob">↔</span>
            </div>
          </div>
          <div className="card-foot">
            <div>
              <h4>{d.title}</h4>
              <p className="mono-label">{d.details}</p>
            </div>
            <p className="mono-label">{d.meta.join("  ·  ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
