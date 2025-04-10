import React, { useState } from "react";
import { destinations } from "../data";

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(0);

  // const destinationTabs = [
  //   { id: "tab1", label: "Moon"},
  //   { id: "tab2", label: "Mars" },
  //   { id: "tab3", label: "Europa" },
  //   { id: "tab4", label: "Titan" },
  // ];

  const handleTabClick = (index) => {
    setActiveDestination(index);
  };

  const destinationContents = destinations[activeDestination];

  return (
    <section className="destination">
      <h1 className="text-5">
        <span className="text-5b">01</span> Pick your Destination
      </h1>

      <div className="destination-details">
        {/* image */}
        <div className="destination-img">
          <img
            src={destinationContents.images.webp}
            alt={destinationContents.label}
          />
        </div>
        {/* tab */}
        <div className="destination-content">
          {/* tab buttons */}
          <ul className="destination-tabs pt-4 md:pt-0">
            {destinations.map((tab, index) => (
              <li key={index}>
                <button
                  onClick={() => handleTabClick(index)}
                  className={activeDestination === index ? "destination-btn-active" : ""}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          {/* tab content */}
          <DestinationTabContent
            title={destinationContents.label}
            desc={destinationContents.description}
            distance={destinationContents.distance}
            time={destinationContents.travel}
          />
        </div>
      </div>
    </section>
  );
};

export default Destination;

const DestinationTabContent = (props) => {
  return (
    <div className="md:h-80 items-center text-center md:items-start md:text-start pt-12 md:pt-0">
      <h2 className="text-2">{props.title}</h2>
      <p className="text-9">{props.desc}</p>
      {/* line */}
      <div className="w-full pt-4">
      <hr className="border-t border-0.5 border-gray-300" />
      </div>
      <div className="flex flex-col md:flex-row justify-start md:gap-20 gap-4  pt-8">
        {/* distance */}
        <div className="flex flex-col">
          <h3 className="text-7">avg. distance</h3>
          <h4 className="text-6">{props.distance}</h4>
        </div>
        {/* time */}
        <div className="flex flex-col">
          <h3 className="text-7">est. travel time</h3>
          <h4 className="text-6">{props.time}</h4>
        </div>
      </div>
    </div>
  );
};
