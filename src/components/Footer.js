import React from "react";
import logo from '../images/logo.png';
import discord_icon from '../images/discord_icon.svg';
import twitter_icon from '../images/twitter_icon.svg';
import styles from "../styles/Footer/Footer.module.css";

function Footer() {
  return (
    <>
      <div className="container custom_container">
        <div className={styles.footer}>
          <div className={styles.f_logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.f_copyright}>Copyright 2022 @ AIKUJI</div>
          <div className={styles.f_socials_connect}>
            <h6>Connect with us</h6>
            <div className={styles.f_socials}>
              <div className={styles.fc_icon}>
                <img src={discord_icon} alt="discord_icon" />
              </div>
              <div className={styles.fc_icon}>
                <img src={twitter_icon} alt="twitter_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
