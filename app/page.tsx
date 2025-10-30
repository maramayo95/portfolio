
import Hero from "./components/Hero";
import About from "./components/About";
import About2 from "./components/About2";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
    <main id="home">
      <Hero />
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <About2 />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
