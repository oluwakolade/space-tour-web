import React, { useState } from "react";
import { crew } from "../data";

const Crew = () => {
  const [activeCrew, setActiveCrew] = useState(0);

  const dotTabs = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  const handleTabClick = (index) => {
    setActiveCrew(index);
  };
  const crews = crew[activeCrew];

  return (
    <section className="crew">
      <h1 className="text-5">
        <span className="text-5b">02</span> meet your crew
      </h1>
      {/* crew content */}

      <div className="flex flex-col md:flex-wrap items-center md:flex-row md:items-end">
        <CrewContent
          role={crews.role}
          name={crews.label}
          desc={crews.bio}
          image={crews.images.webp}
        />

        {/* image */}
        <div className="flex items-center justify-center w-full h-80 md:w-1/2 md:h-96 overflow-hidden order-3 md:order-2 mb-16 md:mb-0">
          <img
            src={crews.images.webp}
            alt={crews.label}
            className="object-contain w-60 h-60 md:w-full md:h-full"
          />
        </div>

        <div className="dot-tab order-2 md:order-3">
          {dotTabs.map((tabs) => (
            <button
            key={tabs.id}
              id={tabs.id}
              onClick={() => handleTabClick(tabs.id)}
              className={`dot-btn ${
                activeCrew === tabs.id ? "dot-btn-active" : " "
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;

const CrewContent = (props) => {
  return (
    // <div className="flex flex-col items-center md:items-start justify-between">
    <div className="flex flex-col items-center text-center md:text-start md:items-start justify-between w-full md:w-1/2 pt-8 pb-12 md:pb-20 order-1">
      <div className="flex flex-col gap-4">
        <h3 className="text-6b">{props.role}</h3>
        <h3 className="text-4 text-white">{props.name}</h3>
        <p className="text-9">{props.desc}</p>
      </div>

      {/* dots */}
      {/* <div className="dot-tab">{props.dotTabs}</div> */}
    </div>
    // </div>
  );
};
