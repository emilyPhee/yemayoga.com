import Layout from '@components/Layout';

export default function Ashtanga() {
  return (
    <>
      <h1>Ashtanga Page...</h1>
    </>
  );
}

Ashtanga.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
