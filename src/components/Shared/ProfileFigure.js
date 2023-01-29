import React from "react";

const RoundComponent = () => {
  return (
    <div className="relative rounded-full h-[200px] w-[200px] bg-gradient-to-b from-blue-400 to-yellow-500">
      <div className="absolute inset-0 rounded-full border-4 border-black"></div>
      <div className="absolute inset-0 rounded-full border-[14px] border-yellow-500"></div>
    </div>
  );
};

export default RoundComponent;
