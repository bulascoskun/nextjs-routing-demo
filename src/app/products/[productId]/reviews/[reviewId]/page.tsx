import { notFound } from 'next/navigation';

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Product: {params.productId} & Review: {params.reviewId}
    </div>
  );
};
export default ReviewDetails;
