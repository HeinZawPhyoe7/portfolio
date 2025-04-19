import React from "react";
import MagicButton from "./ui/MagicButton";
import { Navigation } from "lucide-react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading">
          Contact <span className="text-purple">Information</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Address:Bangkok,Thailand
        </p>
        <p className="text-white-200 md:mt-10 my-2 text-center">
          Ph:09266870290
        </p>
        <p className="text-white-200 md:mt-10 my-2 text-center">
          Ph:0824873655
        </p>
        <a href="mailto:heinzawphyoe2@gmail.com">
          <MagicButton
            title="My Email"
            icon={<Navigation />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Hein
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt="profile" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
