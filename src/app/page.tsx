import Link from 'next/link';

const Home = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </main>
  );
};

export default Home;
