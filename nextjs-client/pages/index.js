import Layout from '@components/Layout';
import YogaClassesList from '@components/YogaClassList';
import styled from '@emotion/styled';
import client from '@sanity-client/client';
import { yogaClassesQuery } from '@sanity-client/queries/index';

const Container = styled.div``;
export default function Home({ data }) {
  console.log('data from home', data);
  return (
    <Container>
      <h1>Home Page</h1>
      <YogaClassesList data={data} />
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout currentPage="home">{page}</Layout>;
};

export async function getStaticProps() {
  const yogaClassData = await client.fetch(yogaClassesQuery);

  const data = { yogaClassData };

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
