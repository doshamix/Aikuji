import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import search_icon from "../images/search_icon.png";
import discord_icon from "../images/discord_icon.svg";
import twitter_icon from "../images/twitter_icon.svg";
import styles from "../styles/Navbar/Navbar.module.css";

function Navbar() {
  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.D_navbar}>
        <div className="container" style={{ height: "100%" }}>
          <div className={styles.inner}>
            {/* LOGO */}
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <span>AIKUJI</span>
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              {/* LINKS */}
              <ul
                className={
                  navBar
                    ? `${styles.navbar_list} ${styles.active}`
                    : `${styles.navbar_list}`
                }
              >
                <li>
                  <a href="/" onClick={() => setOpenNav(!openNav)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#team_section" onClick={() => setOpenNav(!openNav)}>
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap_section"
                    onClick={() => setOpenNav(!openNav)}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#staking_section"
                    onClick={() => setOpenNav(!openNav)}
                  >
                    Staking
                  </a>
                </li>
              </ul>
              <div className={styles.connect}>
                <p>Connect with us</p>
                <div className={styles.c_social}>
                  <div className={styles.cs_icon}>
                    <img src={discord_icon} alt="discord-icon" />
                  </div>
                  <div className={styles.cs_icon}>
                    <img src={twitter_icon} alt="twitter-icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH */}
            <div className={styles.searchBar}>
              <input placeholder="Search here" />
              <img src={search_icon} alt="search-icon" />
            </div>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div
                class={
                  openNav
                    ? `${styles.hamburger_lines} ${styles.active}`
                    : `${styles.hamburger_lines}` && navBar
                    ? `${styles.hamburger_lines} ${styles.color_active}`
                    : `${styles.hamburger_lines}`
                }
              >
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
