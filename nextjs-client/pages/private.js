import Layout from '@components/Layout';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { privateQuery } from 'src/sanity/queries';

const Container = styled.div``;

export default function Private({ data }) {
  return (
    <Container>
      <YogaIntro data={data.privateData} />
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
