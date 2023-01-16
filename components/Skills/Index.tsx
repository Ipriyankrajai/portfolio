import React from "react";

const skillSet = [
  {
    id: 1,
    name: "React",
    exp: "2 Years Experience",
  },
  {
    id: 2,
    name: "Express",
    exp: "2 Years Experience",
  },
  {
    id: 3,
    name: "MongoDB",
    exp: "2 Years Experience",
  },
  {
    id: 4,
    name: "Accessibility",
    exp: "2 Years Experience",
  },
  {
    id: 5,
    name: "Typescript",
    exp: "1 Years Experience",
  },
  {
    id: 6,
    name: "Python",
    exp: "3 Years Experience",
  },
];
const Skills = () => {
  return (
    <section className="mb-[100px]">
      <div className="relative">
        {/* <div className="absolute left-[0%] md:left-[-30%]">
          <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
              <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
            </g>
          </svg>
        </div> */}
        <div className="grid grid-cols-1 text-center gap-9 md:grid-cols-2 md:text-left lg:grid-cols-3">
          {skillSet.map((skillDetails) => (
            <div key={skillDetails.id}>
              <h3 className="text-4xl pb-4 font-bold">{skillDetails.name}</h3>
              <p className="text-[16px] text-[#d9d9d9]">{skillDetails.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
