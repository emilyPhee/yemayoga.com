import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { ashtangaQuery } from 'src/sanity/queries';

const Container = styled.div``;

export default function Ashtanga({ data }) {
  return (
    <Container>
      <YogaIntro data={data.ashtangaData} />
      <YogaDescription data={data.ashtangaData} />
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
