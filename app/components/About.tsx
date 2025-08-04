import React from "react";
import BackgroundBottom from "./BackgroundBottom";
import Container from "./Container";
import { SlideInText } from "./SliderText";
import { about } from "../constants";
import Logomarquee from "./Marquee";
import { logos } from "./Logos";

const About = () => {
  return (
    <BackgroundBottom>
      <Container>
        <SlideInText centered={true} segments={about} />
      </Container>
     <Logomarquee logos={logos} duration={10} />
    </BackgroundBottom>

  );
};

export default About;
