import { Review as ReviewType } from "schema";
import { Review } from "../../moleculas";

const AllReviews = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Comentarios</h2>
      <div className="flex flex-col gap-3 border rounded-lg overflow-x-hidden  shadow-md shadow-background  p-3 w-fit h-[600px]">
        {reviews.length > 0 ? (
          reviews.map((r, index) => {
            return <Review review={r.review} key={index} />;
          })
        ) : (
          <div className="font-normal">No han realizan comentarios</div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
