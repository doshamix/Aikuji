import React from "react";
import styles from "../../styles/Hero/Hero.module.css";
import Separator from "../Separator";
import HeroImg from "./HeroImg";
import HeroSeperator from "./HeroSeperator";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <HeroSeperator />

        <div className="container custom_container">
          <HeroImg />

          <Separator />
        </div>
      </div>
    </>
  );
}

export default Hero;
