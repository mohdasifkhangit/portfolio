export default function SectionHeader({ label, title, text }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {text && <p className="muted lead-sm">{text}</p>}
    </div>
  );
}
