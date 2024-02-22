'use client';

import { useRouter } from 'next/navigation';

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Order Placed');
    // router.replace('/'); // same replace function
    // router.back('/'); // navigate back
    // router.forward('/'); // navigate forward
    router.push('/');
  };

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};
export default OrderProduct;
