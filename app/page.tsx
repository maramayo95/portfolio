import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import About2 from "./components/About2";
import ContactForm from "./components/ContactForm";
import MarqueeText from "./components/MarqueeText";


export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <About2/>
      <ContactForm/>
    </main>
  );
}
