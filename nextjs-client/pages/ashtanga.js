import Layout from '@components/Layout';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import client from 'src/sanity/client';
import { ashtangaQuery } from 'src/sanity/queries';
export default function Ashtanga({ data }) {
  console.log('data', data);
  return (
    <>
      <h1>Ashtanga Page...</h1>

      <YogaIntro />
    </>
  );
}

Ashtanga.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const ashtangaData = await client.fetch(ashtangaQuery);

  const data = { ashtangaData };

  return {
    props: {
      data,
    },
  };
}
