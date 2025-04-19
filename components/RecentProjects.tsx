import { projects } from "@/data";
import { Navigation } from "lucide-react";
import React from "react";

const RecentProjects = () => {
  return (
    <div className=" py-20" id="projects">
      <h1 className=" heading">
        A small selection of {""}
        <span className=" text-purple">recent project</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <div>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden mb-10">
                <div className=" bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div className="border border-white-[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center">
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <Navigation className=" ms-3" color="#CBACF9" size={18} />
                </div>
              </div>
              <a href={link} className="text-sm text-purple line-clamp-2">
                ProjectLink={link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
