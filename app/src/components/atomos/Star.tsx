import React from "react";
const Star = ({
  pushed,
  onClick,
}: {
  pushed: boolean;
  onClick?: () => void;
}) => {
  const star = pushed ? (
    <img src="assets/icon/star-yellow.svg" alt="star" width={16} height={16} />
  ) : (
    <img src="assets/icon/star.svg" alt="star" width={16} height={16} />
  );
  return (
    <button
      type="button"
      onClick={() => {
        onClick!();
      }}
    >
      {star}
    </button>
  );
};

export default Star;
