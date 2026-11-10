import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Reels from "./components/Reels.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import LongForm from "./components/LongForm.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <BeforeAfter />
        <LongForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
