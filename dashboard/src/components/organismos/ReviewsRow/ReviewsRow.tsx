type ReviewsRowProps = {
  index: number;
  review: string;
};

const ReviewsRow = (Review: ReviewsRowProps) => {
  const { index, review } = Review;
  return (
    <>
      <tr className="border-b border-background ">
        <th className="pl-2 py-5">
          <p className="text-center text-sm font-normal">{index}</p>
        </th>
        <th className="py-5">
          <p className="text-center text-sm font-normal">{review}</p>
        </th>
      </tr>
    </>
  );
};

export default ReviewsRow;
