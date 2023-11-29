const Review = ({ review }: { review: string }) => {
  return (
    <div className=" border rounded-lg  shadow-sm shadow-background h-auto ">
      <p className="text-background font-medium p-2 h-auto">{review}</p>
    </div>
  );
};

export default Review;
