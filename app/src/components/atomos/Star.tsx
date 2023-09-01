import React from "react";
const Star = ({
  pushed,
  onClick,
}: {
  pushed: boolean;
  onClick?: () => void;
}) => {
  const star = pushed ? (
    <img src="assets/icon/star-yellow.svg" alt="star" width={14} height={14} />
  ) : (
    <img src="assets/icon/star.svg" alt="star" width={14} height={14} />
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
