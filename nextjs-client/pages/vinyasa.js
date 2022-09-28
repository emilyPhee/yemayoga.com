import Layout from '@components/Layout';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import client from 'src/sanity/client';
import { vinyasaQuery } from 'src/sanity/queries';

export default function Vinyasa({ data }) {
  return (
    <>
      <YogaIntro data={data.vinyasaData} />
    </>
  );
}

Vinyasa.getLayout = function getLayout(page) {
  return <Layout currentPage="vinyasa">{page}</Layout>;
};

export async function getStaticProps() {
  const vinyasaData = await client.fetch(vinyasaQuery);

  const data = { vinyasaData };
  return {
    props: {
      data,
    },
  };
}
