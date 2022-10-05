import Layout from '@components/Layout';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { privateQuery } from 'src/sanity/queries';

const Container = styled.div``;

export default function Private({ data }) {
  return (
    <Container>
      <YogaIntro data={data.privateData} />
      <YogaDescription data={data.privateData} />
      <YogaSystemList data={data.privateData} />
    </Container>
  );
}

Private.getLayout = function getLayout(page) {
  return <Layout currentPage="private">{page}</Layout>;
};

export async function getStaticProps() {
  const privateData = await client.fetch(privateQuery);

  const data = { privateData };

  return {
    props: {
      data,
    },
  };
}
