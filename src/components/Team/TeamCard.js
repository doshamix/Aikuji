import React from "react";
import twitter from "../../images/twitter_outline_icon.svg";
import discord from "../../images/discord_outline_icon.svg";
import team_card_bg from "../../images/team_card_bg.svg";
import team_card_mobile_bg from "../../images/team_card_mobile_bg.svg";
import styles from "../../styles/Team/Team.module.css";

function TeamCard(props) {
  const { id, user_img, name, desc, role } = props.data;
  return (
    <>
      <div className="col-lg-3 col-md-6" key={id}>
        <div className={styles.t_card}>
          <img className={styles.tc_bg} src={team_card_bg} alt="card-bg" />
          <img
            className={styles.tc_bg_mobile}
            src={team_card_mobile_bg}
            alt="card_mobile-bg"
          />
          <div className={styles.tc_user_img}>
            <img src={user_img} alt="user-img" />
          </div>
          <div className={styles.tc_text}>
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
          <h6>{role}</h6>
          <div className={styles.tc_socials}>
            <div className={styles.tcs_icon}>
              <img src={twitter} alt="twitter-icon" />
            </div>
            <div className={styles.tcs_icon}>
              <img src={discord} alt="discord-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
