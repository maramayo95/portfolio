'use client'
import React from "react";
import Container from "./Container";
import Stack from "./Stack";
import { SlideInText } from "./SliderText";
import { projects } from "../constants";
import { AppearText } from "./AppearText";


const About2 = () => {
  return (
    <div className="min-h-screen"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row w-full items-center ">
        <div className=" w-full lg:w-1/2">
          <SlideInText  segments={[  { text: "Projects", highlight: true }]}/>

         {/* <SlideInText textSize="text-xl"  segments={projects} /> */}
         <AppearText/>
        </div>

      <div className=" w-full lg:w-1/2">
        
        <Stack />
      </div>
        </div>
      </Container>
    </div>
  );
};

export default About2;
