import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ShortForm from "./components/ShortForm.jsx";
import LongForm from "./components/LongForm.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShortForm />
        <LongForm />
        <BeforeAfter />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
