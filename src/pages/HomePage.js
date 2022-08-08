import React from "react";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";

function HomePage() {
  return (
    <>
      <div>
        <Hero />
        <Team />
      </div>
      <Roadmap/>
    </>
  );
}

export default HomePage;
