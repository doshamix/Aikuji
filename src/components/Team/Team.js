import React from "react";
import TeamTitle from "./TeamTitle";
import styles from "../../styles/Team/Team.module.css";
import TeamCard from "./TeamCard";
import { TeamData } from "./TeamData";

function Team() {
  return (
    <>
      <div className={styles.team} id="team_section">
        <div className="container custom_container">
          <TeamTitle />

          <div className={styles.t_cards}>
            <div className={`${styles.row} row`}>
              {TeamData.map((loopData) => (
                <TeamCard key={loopData.id} data={loopData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
