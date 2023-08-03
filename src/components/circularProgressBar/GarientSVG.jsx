import React from "react";

const GradientSVG = ({ color1, color2 }) => {
  const idCSS = "hello";
  const gradientTransform = `rotate(90)`;
  return (
    <div style={{ height: "0" }}>
      <svg>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#6CFFBA" />
            <stop offset="85.56%" stopColor="#38CE90 " />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientSVG;
