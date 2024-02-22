import Link from 'next/link';

const F1 = () => {
  return (
    <>
      <div>
        <h1>F1 Page</h1>
        <Link href="/f1/f2">F2</Link>
        <Link href="/f1/f4">F4</Link>
      </div>
    </>
  );
};
export default F1;
