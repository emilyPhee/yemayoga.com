import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import client from 'src/sanity/client';
import { vinyasaImageQuery, vinyasaPageQuery } from 'src/sanity/queries';

export default function Vinyasa({ data }) {
  return (
    <>
      <YogaIntro data={data.vinyasaImageData} />
      <YogaDescription data={data.vinyasaPageData} />
      <YogaSystemList data={data.vinyasaPageData} />
      <YogaEtiquette data={data.vinyasaPageData} />
    </>
  );
}

Vinyasa.getLayout = function getLayout(page) {
  return <Layout currentPage="vinyasa">{page}</Layout>;
};

export async function getStaticProps() {
  const vinyasaPageData = await client.fetch(vinyasaPageQuery);
  const vinyasaImageData = await client.fetch(vinyasaImageQuery);

  const data = { vinyasaPageData, vinyasaImageData };
  return {
    props: {
      data,
    },
  };
}
