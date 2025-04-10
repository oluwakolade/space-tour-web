import React from "react";

const Home = ({ setActiveTab }) => {
  return (
    <section className="home text-white">
      <div className="home-left">
        <h2 className="text-5">So, you want to travel to</h2>
        <h1 className="text-1"> Space</h1>
        <p className="text-9">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="home-right">
        <button className="explore-btn" onClick={()=> setActiveTab("tab2")} >
        <span className="text-4 text-blue-900">Explore</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
