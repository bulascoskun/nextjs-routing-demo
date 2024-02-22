const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Product: {params.productId} & Review: {params.reviewId}
    </div>
  );
};
export default ReviewDetails;
