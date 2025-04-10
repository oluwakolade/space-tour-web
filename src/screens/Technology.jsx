import React, { useState } from "react";
import { technology } from "../data";

const Technology = () => {
  const [activeTech, setActiveTech] = useState(0);

  const numbers = [
    { id: 0, number: "1" },
    { id: 1, number: "2" },
    { id: 2, number: "3" },
  ];

  const handleTabClick = (index) => {
    setActiveTech(index);
  };

  const tech = technology[activeTech];

  return (
    <section className="tech">
      <h1 className="text-5">
        <span className="text-5b">03</span> space launch 101
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* tab numbers */}
        <div className="number-btn ">
          {numbers.map((number) => (
            <button
              id={number.id}
              onClick={() => handleTabClick(number.id)}
              className={activeTech === number.id ? "btn-active" : ""}
            >
              {number.number}
            </button>
          ))}
        </div>
        {/* tab content */}
        <TechnologyContent tech={tech.label} desc={tech.description} />
{/* img */}
        <div className=" w-full p-0 md:w-90 md:h-90 flex items-center order-1 md:order-3 mb-12 mt-16 md:mt0 md:mb-0">
          <img src={tech.images.portrait} alt={tech.label} className="hidden md:inline" />
          <img src={tech.images.landscape} alt={tech.label} className="md:hidden" />

        </div>
      </div>
    </section>
  );
};

export default Technology;

const TechnologyContent = (props) => {
  return (
    <div className=" w-full items-center md:items-start  text-center md:text-start mt-24 mb-4 md:mb-0 md:mt-0 md:w-1/2 flex flex-col gap-2 order-3 md:order-2 md:pr-8">
      <h2 className="text-6b">the terminology...</h2>
      <h3 className="text-4 text-white">{props.tech}</h3>
      <p className="text-9">{props.desc}</p>
    </div>
  );
};
