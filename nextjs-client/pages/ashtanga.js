import Layout from '@components/Layout';
import MoonDays from '@components/YogaClassInfo/MoonDays';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { ashtangaQuery } from 'src/sanity/queries';

const Container = styled.div``;

export default function Ashtanga({ data }) {
  const ashtangaData = data.ashtangaData;

  return (
    <Container>
      <YogaIntro data={ashtangaData} />
      <YogaDescription data={ashtangaData} />
      <YogaSystemList data={ashtangaData} />
      <YogaEtiquette data={ashtangaData} />
    </Container>
  );
}

Ashtanga.getLayout = function getLayout(page) {
  return <Layout currentPage="ashtanga">{page}</Layout>;
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
