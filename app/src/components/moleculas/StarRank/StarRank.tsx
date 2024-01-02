import React from "react";
import { Star } from "src/components/atomos";

type PropsStarRank = {
  stars: number | undefined;
  setStars: React.Dispatch<React.SetStateAction<number | undefined>>;
};
const StarRank = ({ stars, setStars }: PropsStarRank) => {
  const rank = [
    { pushed: false, key: 1 },
    { pushed: false, key: 2 },
    { pushed: false, key: 3 },
    { pushed: false, key: 4 },
    { pushed: false, key: 5 },
  ];

  const repaint = (stars: number | undefined) => {
    const aux = rank.map((star) => {
      if (stars) {
        if (star.key <= stars) {
          return { ...star, pushed: true };
        } else {
          return { ...star };
        }
      } else {
        return star;
      }
    });
    return aux;
  };

  return (
    <div className="flex gap-[2px] px-1">
      {repaint(stars).map((star) => {
        return (
          <Star
            pushed={star.pushed}
            key={star.key}
            onClick={() => {
              setStars((prevState) => {
                const flag = star.key === prevState ? undefined : star.key;
                return flag;
              });
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRank;
