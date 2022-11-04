import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { zoomPageQuery, zoomImageQuery } from 'src/sanity/queries';

const Container = styled.div`
  .divider-container {
    padding: 0 5rem;
  }
`;

export default function Zoom({ data }) {
  return (
    <Container>
      <YogaIntro
        data={data.zoomImageData}
        yogaQuote={data.zoomPageData.yoga_quote}
        yogaFullName={data.zoomPageData.yoga_name}
      />
      <YogaDescription data={data.zoomPageData} />
      <YogaSystemList data={data.zoomPageData} />
      <YogaEtiquette data={data.zoomPageData} />
    </Container>
  );
}

Zoom.getLayout = function getLayout(page) {
  return <Layout currentPage="zoom">{page}</Layout>;
};

export async function getStaticProps() {
  const zoomPageData = await client.fetch(zoomPageQuery);
  const zoomImageData = await client.fetch(zoomImageQuery);

  const data = { zoomPageData, zoomImageData };

  return {
    props: {
      data,
    },
  };
}
