// ============================================================
//  EDIT THIS FILE ONLY. Everything on the site comes from here.
// ============================================================

export const profile = {
  name: "Asif Khan",
  initials: "AK",
  available: "Available for projects",
  headline: "Precision editing for creators & brands.",
  bio: "I turn raw footage into stories people finish watching. Reels, long form and colour grading.",
  email: "filmsbyasiff@gmail.com",
};

// REPLACE with your real numbers, or delete this whole list to hide the row.
export const metrics = [
  { value: "0M+", label: "Total views" },
  { value: "0%", label: "Avg engagement" },
  { value: "0+", label: "Videos delivered" },
];

// Add a third reel by copying one block. Files go in /public/videos/
export const reels = [
  { title: "Podcast Reel", tag: "Instagram Reel", duration: "0:30", stats: "Sohail Zindani", src: "/videos/reel-1.mp4" },
  { title: "Fast Edit", tag: "YouTube Short", duration: "0:30", stats: "Alex hormozi", src: "/videos/reel-2.mp4" },
  { title: "Product AD", tag: "Instagram Reel", duration: "0:30", stats: "Casio", src: "/videos/reel-3.mp4" },
  // No third video yet? Delete the line above, or the card will be empty.
];

// Same frame, raw vs graded. Use your own files in /public/images/ (e.g. "/images/before.jpg")
export const beforeAfter = {
  title: "Colour grade",
  details: "Davinci resolve ",
  before: "/public/images/before.jpg",
  after: "/public/images/after.jpg",
  beforeLabel: "Raw footage",
  afterLabel: "Final edit",
  beforeFilter: "brightness(0.75) contrast(0.55) grayscale(0.35)", // fake "raw" look for same image; remove if before.jpg is real
  meta: ["Editor: Asif Khan", "Client: Self"],
};
// The part after "v=" in your YouTube link: youtube.com/watch?v=THIS_PART
export const longform = {
  youtubeId: "Go9pnFNtliU",
  tag: "Long form",
  title: "PODCAST INTRO",
  description: "Added subtitle,pacing and curiosity-reward loop.",
  length: "Full video",
  meta: [
    { k: "Role", v: "Editor and colourist" },
    { k: "Software", v: "DaVinci Resolve" },
    { k: "Timeline", v: "Add turnaround" },
  ],
};

export const socials = [
  { label: "LinkedIn", short: "in", text: "linkedin.com/in/mohdasifkhan471", href: "https://www.linkedin.com/in/mohdasifkhan471/" },
  { label: "Instagram", short: "ig", text: "@filmsbyasiff", href: "https://www.instagram.com/filmsbyasiff/" },
  { label: "YouTube", short: "yt", text: "youtube.com/@filmsbyasiff", href: "https://www.youtube.com/@filmsbyasiff" },
  { label: "GitHub", short: "gh", text: "github.com/mohdasifkhangit", href: "https://github.com/mohdasifkhangit" },
];
