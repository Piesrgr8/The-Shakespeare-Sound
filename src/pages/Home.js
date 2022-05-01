import React from "react";
import InfoCard from "../component/functions/InfoCard";

import img1 from "../assets/img/reggie-header1.jpg";
import "../assets/Home.css";
import Title from "../component/functions/Title";

export default function Home() {
  return (
    <div className="home">
      <Title title="THE SHAKESPEARE SOUND" subtitle="Sounds that give delight and hurt not."/>
      <br />
      <InfoCard
        id={1}
        img={img1}
        title="Our Podcast"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <InfoCard
        id={2}
        img={img1}
        title="Our Podcast"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}
