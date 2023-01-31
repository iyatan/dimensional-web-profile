import React from "react";

const ProfileAvatar = ({ size }) => {
  return (
    <div
      className={`relative rounded-full bg-gradient-to-b from-blue-700 via-red-400 to-yellow-500`}
      style={{
        height: size,
        width: size,
        border: "solid #E0CC65",
        borderWidth: size / 13,
      }}
    >
      <div className="absolute inset-0 rounded-full border-14 border-yellow-500"></div>
      <div className="absolute inset-0 rounded-full border-4 border-black"></div>
    </div>
  );
};

export default ProfileAvatar;
