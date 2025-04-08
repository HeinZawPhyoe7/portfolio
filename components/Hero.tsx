import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { Navigation } from "lucide-react";

const Hero = () => {
  return (
    <div className=" pb-20 pt-36">
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className=" h-screen w-full flex items-center justify-center absolute top-0 left-0 bg-white dark:bg-black-100 dark:bg-grid-white/[0.3] bg-grid-black/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className=" flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
          <h2 className=" uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className=" text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hello My Portfolio is Here"
          />

          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Hein Zaw Phyoe from Myanmar
          </p>
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<Navigation />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
