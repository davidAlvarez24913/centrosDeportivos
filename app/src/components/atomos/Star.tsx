import React from "react";
const Star = ({ pushed }: { pushed: boolean }) => {
  const star = pushed ? (
    <img
      src="assets/icon/star-yellow.svg"
      alt="star"
      width={14}
      height={14}
      className="text-red-500"
    />
  ) : (
    <img
      src="assets/icon/star.svg"
      alt="star"
      width={14}
      height={14}
      className="text-red-500"
    />
  );
  return <>{star}</>;
};

export default Star;
