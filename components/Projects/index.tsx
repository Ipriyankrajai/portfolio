import Link from "next/link";
import React from "react";

const projectsList = [
  {
    name: "the established",
  },
  {
    name: "SkillDB",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="flex justify-between flex-wrap items-center">
        <h2 className="text-[30px] lg:text-[70px] tracking-tighter">
          Projects
        </h2>
        <Link href="#contact-me">
          <div className="tracking-widest font-bold border-b-[2px] border-[#4ce19e] w-max pb-2 hover:text-[#4ce19e]">
            CONTACT ME
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {projectsList.map((proj, index) => (
          <div key={index}>{proj.name}</div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
