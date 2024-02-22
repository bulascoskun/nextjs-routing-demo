const ProductDetails = ({ params }: { params: { productId: string } }) => {
  console.log(params.productId);

  return <div>Details about product {params.productId}</div>;
};
export default ProductDetails;
