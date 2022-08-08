import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/birds_animation.json";

function BirdsAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="birds_anim">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
    </>
  );
}

export default BirdsAnimation;
