import Layout from '@components/Layout';

export default function Vinyasa() {
  return (
    <>
      <h1>Vinyasa Page...</h1>
    </>
  );
}

Vinyasa.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
