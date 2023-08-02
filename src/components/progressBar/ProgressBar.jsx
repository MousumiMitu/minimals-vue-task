import React from "react";

const ProgressBar = ({ color, bar }) => {
  return (
    <div class="progress-bar rounded overflow-hidden p-0 ">
      <div
        class="bar position-relative float-start h-100 rounded"
        style={{ width: `${bar}`, background: `${color}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
