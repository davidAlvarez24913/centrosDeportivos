import React from "react";
import { InformationSection, MainCard } from "src/components/atomos";
import StarRank from "../StarRank";
import { Review } from "schema";
import NoDataCard from "src/components/atomos/NoDataCard";

type SportCenterInformationProps = {
  schedule: string;
  ubication: string;
  description: string;
  phone: string;
  image: string;
  reviews: Review[];
};
const SportCenterInformation = ({
  schedule,
  ubication,
  description,
  image,
  phone,
  reviews,
}: SportCenterInformationProps) => {
  const sum = reviews.reduce((sum, review) => sum + review.ranking, 0);
  const avg = sum / reviews.length || 0;

  return (
    <div>
      <div className="flex flex-col gap-3 mt-5">
        <img
          src={image === "" ? "assets/default-image.jpg" : image}
          alt="service image"
        />
        <StarRank stars={avg} setStars={() => {}}></StarRank>
        <p className="text-sm font-normal">{description}</p>
        <InformationSection
          phone={phone}
          ubication={ubication}
          schedule={schedule}
        />
        <h2 className="text-xl font-bold">Reseñas</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <MainCard key={review.reviewId}>
                <p className="py-2 px-3 text-justify font-light">
                  {review.review}
                </p>
              </MainCard>
            );
          })
        ) : (
          <NoDataCard>No tiene reseñas por el momento</NoDataCard>
        )}
      </div>
    </div>
  );
};

export default SportCenterInformation;
