import { profile } from "../data.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="avatar">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav-links">
          <a href="#reels">Reels</a>
          <a href="#transformation">Before / After</a>
          <a href="#longform">Long form</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn-dark">Start project</a>
        </div>
      </div>
    </header>
  );
}
