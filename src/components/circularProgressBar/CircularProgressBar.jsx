import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./GarientSVG";

const CircularProgressBar = ({ props }) => {
  const idCSS = "hello";
  const percentage = 66;
  console.log(props);
  return (
    <div className="w-75">
      <GradientSVG />
      <CircularProgressbar
        strokeWidth={8}
        value={percentage}
        text={`${percentage}%`}
        styles={{
          text: {
            fill: "#222222",
            fontSize: "16px",
          },
          path: { stroke: `url(#${idCSS})`, height: "100%" },
          trail: {
            stroke: "#EDEFF1",
          },
        }}
      />
    </div>
  );
};

export default CircularProgressBar;
