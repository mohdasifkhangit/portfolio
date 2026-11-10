import { useState } from "react";
import { profile } from "../data.js";

const encode = (data) => new URLSearchParams(data).toString();

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...Object.fromEntries(fd) }),
      });
      if (!res.ok) throw new Error("bad response");
      e.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="form" name="contact" onSubmit={onSubmit}>
      <p className="hp" aria-hidden="true">
        <label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Your email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea id="message" name="message" required placeholder="What are you making, and by when?" />
      </div>
      <button className="btn btn-dark" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <p className="form-msg ok" role="status">Message sent. I’ll reply by email soon.</p>}
      {status === "error" && (
        <p className="form-msg err" role="alert">
          Message didn’t send. Email me directly at {profile.email}.
        </p>
      )}
    </form>
  );
}
