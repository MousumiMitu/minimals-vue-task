import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./GarientSVG";

const CircularProgressBar = ({ color1, color2 }) => {
  const idCSS = "hello";
  const percentage = 66;
  console.log("hhh", color2);

  return (
    <div className="w-75 m-auto">
      <GradientSVG color1={color1} color2={color2} />

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
