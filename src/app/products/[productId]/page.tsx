const ProductDetails = ({ params }: { params: { productId: string } }) => {
  console.log(params.productId);

  return <h1>Details about product {params.productId}</h1>;
};
export default ProductDetails;
