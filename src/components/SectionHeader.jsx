export default function SectionHeader({ label, title, text }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
      </div>
      {text && <p className="muted small">{text}</p>}
    </div>
  );
}
