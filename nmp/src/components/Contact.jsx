import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { brand, projectTypes } from "../data.js";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...data }).toString(),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <SectionHeader
          label="06 / Get in touch"
          title="Have a project in mind?"
          text="Tell us what you're creating, and let's discuss how NMP can help."
        />
        <form className="form" name="contact" onSubmit={onSubmit}>
          <p className="hp" aria-hidden="true">
            <label>Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
          </p>
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="projectType">Project type</label>
            <select id="projectType" name="projectType" required defaultValue="">
              <option value="" disabled>Select one</option>
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" required minLength={10} placeholder="What are you making, and by when?" />
          </div>
          <button className="btn btn-red" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Project Inquiry"}
          </button>
          {status === "sent" && <p className="form-msg ok" role="status">Thank you. Your inquiry was sent and I’ll reply by email.</p>}
          {status === "error" && (
            <p className="form-msg err" role="alert">
              It didn’t send. Please email <a href={`mailto:${brand.email}`}>{brand.email}</a> directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
