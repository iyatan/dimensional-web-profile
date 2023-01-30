import React from "react";

const ScoreBar = ({ percentage }) => {
  const width = `${percentage * 100}%`;

  return (
    <div className="bg-gray-300 h-3 w-full rounded-md">
      <div
        className="bg-blue-500 h-full rounded-md"
        style={{ width: width, backgroundColor: "#51A5F2" }}
      ></div>
    </div>
  );
};

export default ScoreBar;
