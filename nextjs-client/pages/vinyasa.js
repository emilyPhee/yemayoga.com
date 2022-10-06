import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import client from 'src/sanity/client';
import { vinyasaQuery } from 'src/sanity/queries';

export default function Vinyasa({ data }) {
  const vinyasaData = data.vinyasaData;
  return (
    <>
      <YogaIntro data={vinyasaData} />
      <YogaDescription data={vinyasaData} />
      <YogaSystemList data={vinyasaData} />
      <YogaEtiquette data={vinyasaData} />
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
