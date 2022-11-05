import Layout from '@components/Layout';
import MoonDays from '@components/YogaClassInfo/MoonDays';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { ashtangaImageQuery, ashtangaPageQuery } from 'src/sanity/queries';
import { Divider } from '@chakra-ui/react';

const Container = styled.div`
  .divider-container {
    padding: 0 5rem;
  }
`;

export default function Ashtanga({ data }) {
  return (
    <Container>
      <YogaIntro
        data={data.ashtangaImageData}
        yogaQuote={data.ashtangaPageData.yoga_quote}
        yogaFullName={data.ashtangaPageData.yoga_name}
      />
      <YogaDescription data={data.ashtangaPageData} />
      <YogaSystemList data={data.ashtangaPageData} />
      <YogaEtiquette data={data.ashtangaPageData} />
      <div className="divider-container">
        <Divider />
      </div>
      <MoonDays />
    </Container>
  );
}

Ashtanga.getLayout = function getLayout(page) {
  return <Layout currentPage="ashtanga">{page}</Layout>;
};

export async function getStaticProps() {
  const ashtangaPageData = await client.fetch(ashtangaPageQuery);
  const ashtangaImageData = await client.fetch(ashtangaImageQuery);

  const data = { ashtangaPageData, ashtangaImageData };

  return {
    props: {
      data,
    },
  };
}
