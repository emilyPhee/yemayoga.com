import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { privateImageQuery, privatePageQuery } from 'src/sanity/queries';

const Container = styled.div``;

export default function Private({ data }) {
  return (
    <Container>
      <YogaIntro
        data={data.privateImageData}
        yogaQuote={data.privatePageData.yoga_quote}
        yogaFullName={data.privatePageData.yoga_name}
      />
      <YogaDescription data={data.privatePageData} />
      <YogaSystemList data={data.privatePageData} />
      <YogaEtiquette data={data.privatePageData} />
    </Container>
  );
}

Private.getLayout = function getLayout(page) {
  return <Layout currentPage="private">{page}</Layout>;
};

export async function getStaticProps() {
  const privatePageData = await client.fetch(privatePageQuery);
  const privateImageData = await client.fetch(privateImageQuery);

  const data = { privatePageData, privateImageData };

  return {
    props: {
      data,
    },
  };
}
