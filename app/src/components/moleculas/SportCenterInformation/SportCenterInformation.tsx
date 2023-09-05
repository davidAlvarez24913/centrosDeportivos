import React from "react";
import { InformationSection, MainCard } from "src/components/atomos";
import StarRank from "../StarRank";

type SportCenterInformationProps = {
  schedule: string;
  ubication: string;
  description: string;
  phone: string;
  image: string;
  ranking: number;
  reviews: string[];
};
const SportCenterInformation = ({
  schedule,
  ubication,
  description,
  image,
  phone,
  ranking,
  reviews,
}: SportCenterInformationProps) => {
  return (
    <div>
      <div className="flex flex-col gap-3 mt-5">
        <img src={image} alt="service image" />
        {/* <StarRank stars={ranking}></StarRank> */}
        <p className="text-sm font-normal">{description}</p>
        <InformationSection
          phone={phone}
          ubication={ubication}
          schedule={schedule}
        />
        <h2 className="text-xl font-bold">Reseñas</h2>
        {reviews.map((review) => {
          return (
            <MainCard key={1}>
              <p className="py-2 px-3 text-justify font-light">{review}</p>
            </MainCard>
          );
        })}
      </div>
    </div>
  );
};

export default SportCenterInformation;
