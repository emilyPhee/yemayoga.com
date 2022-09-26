import Layout from '@components/Layout';

export default function Private() {
  return (
    <>
      <h1>Private Page...</h1>
    </>
  );
}

Private.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
