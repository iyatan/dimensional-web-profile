import React from "react";

const RoundComponent = ({ size }) => {
  return (
    <div
      className={`relative rounded-full bg-gradient-to-b from-blue-400 to-yellow-500`}
      style={{
        height: size,
        width: size,
      }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-black"></div>
      <div className="absolute inset-0 rounded-full border-14 border-yellow-500"></div>
    </div>
  );
};

export default RoundComponent;
