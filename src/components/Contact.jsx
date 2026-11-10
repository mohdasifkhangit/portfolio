import { profile, socials } from "../data.js";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">04 / Get in touch</span>
        <h2 className="big">Let’s build something striking.</h2>
        <p className="lead">Have a video project, a channel to grow, or a batch of shorts to produce? Send a message.</p>
        <div className="contact-layout">
          <ContactForm />
          <div className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </span>
            <p className="mono-label">Email</p>
            <p className="contact-text">{profile.email}</p>
          </a>
          {socials.map((s) => (
            <a key={s.label} className="contact-card" href={s.href} target="_blank" rel="noopener noreferrer">
              <span className="icon">{s.short}</span>
              <p className="mono-label">{s.label}</p>
              <p className="contact-text">{s.text}</p>
            </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
