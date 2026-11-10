import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <div className="footer-links">
          <a href="#reels">Reels</a>
          <a href="#transformation">Before / After</a>
          <a href="#longform">Long form</a>
        </div>
      </div>
    </footer>
  );
}
