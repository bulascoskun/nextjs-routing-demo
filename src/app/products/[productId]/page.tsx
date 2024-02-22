import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    return setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  console.log(params.productId);

  return <h1>Details about product {params.productId}</h1>;
};
export default ProductDetails;
