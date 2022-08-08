import React from "react";
import hero_img from '../../images/hero_img.png'
import styles from '../../styles/Hero/Hero.module.css'

function HeroImg() {
  return (
    <>
      <div className={styles.h_img}>
        <img src={hero_img} alt="hero-img" />
      </div>
    </>
  );
}

export default HeroImg;
