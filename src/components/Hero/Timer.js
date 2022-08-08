import React from "react";
import Countdown from "react-countdown";
import styles from "../../styles/Hero/Hero.module.css";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className={styles.timer}>
        <span className={styles.t_text}>Public mint end in</span>
        <span className={styles.t_time}>
          {days}
          <span>D</span>
          <span>:</span>
          {hours}
          <span>H</span>
          <span>:</span>
          {minutes}
          <span>M</span>
          <span>:</span>
          {seconds}
          <span>S</span>
        </span>
        <div className={styles.t_left_bg}></div>
        <div className={styles.t_right_bg}></div>
      </span>
    );
  }
};

function Timer() {
  return (
    <>
      <Countdown date={Date.now() + 1000000000} renderer={renderer} />
    </>
  );
}

export default Timer;
