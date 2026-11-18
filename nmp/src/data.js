// ============================================================
//  EDIT THIS FILE ONLY. Copy your real values from your old data.js
//  (email, YouTube ID, video file names, titles).
// ============================================================

export const brand = {
  name: "NMP",
  full: "No Music Production",
  founder: "Asif Khan",
  email: "your@email.com", // <- your real email
};

// Add a project = copy one block. Video files live in /public/videos/
// ratio: "9 / 16" for vertical reels, "16 / 9" for horizontal, "1 / 1" for square
export const shortForm = [
  {
    title: "Podcast Reel",
    category: "Podcast clip",
    description: "Dialogue-led edit with captions and tight pacing.",
    details: "DaVinci Resolve",
    src: "/videos/reel-1.mp4",
    ratio: "9 / 16",
  },
  {
    title: "Fast Edit",
    category: "Short-form edit",
    description: "Quick cuts and rhythm built around the audio.",
    details: "DaVinci Resolve",
    src: "/videos/reel-2.mp4",
    ratio: "9 / 16",
  },
  {
    title: "Product Advertisement",
    category: "Advertisement",
    description: "A product-focused edit designed to communicate clearly.",
    details: "DaVinci Resolve",
    src: "/videos/reel-3.mp4",
    ratio: "9 / 16",
  },
];

// The part after "v=" in your YouTube link
export const longForm = {
  youtubeId: "dQw4w9WgXcQ", // <- your podcast intro video ID
  type: "Independent sample edit", // change to "Client project" only if it really is one
  title: "Podcast introduction",
  description:
    "An independently edited podcast introduction focused on pacing, dialogue selection, animated typography, and visual storytelling.",
  responsibilities: ["Dialogue selection and pacing", "Animated typography", "Visual storytelling"],
  software: "DaVinci Resolve",
};

// Files go in /public/images/ — names are case-sensitive on Netlify
export const beforeAfter = {
  before: "/images/before.jpg",
  after: "/images/after.jpg",
  caption: "Colour grade",
  details: "DaVinci Resolve",
};

export const services = [
  { title: "Short-Form Editing", text: "Reels, YouTube Shorts, podcast clips, and educational content." },
  { title: "Long-Form Editing", text: "YouTube videos, interviews, podcasts, and documentary-style content." },
  { title: "Captions and Visual Storytelling", text: "Readable subtitles, typography, relevant visuals, and purposeful pacing." },
  { title: "Colour and Audio", text: "Basic colour correction, voice cleanup, and consistent audio levels." },
];

export const process = [
  { title: "Discuss", text: "Understand the project, footage, references, and requirements." },
  { title: "Edit", text: "Create the first version." },
  { title: "Refine", text: "Apply revisions within the agreed scope." },
  { title: "Deliver", text: "Provide the final files in the agreed format." },
];

export const projectTypes = ["Short-form editing", "Long-form editing", "Captions and visuals", "Colour and audio", "Not sure yet"];
