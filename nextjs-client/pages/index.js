import Layout from '@components/Layout';
import YogaClassesList from '@components/YogaClassList';
import styled from '@emotion/styled';
import client from '@sanity-client/client';
import { yogaClassesQuery } from '@sanity-client/queries/index';
import Image from 'next/image';
// temporary mock data
const yogaClassesData = [
  {
    name: 'Ashtanga',
    duration: 90,
    level: ['All level'],
  },
  {
    name: 'Vinyaga',
    duration: 90,
    level: ['Beginner', 'Intermediate'],
  },
  {
    name: 'Private',
    duration: null,
    level: ['Beginner'],
  },
  {
    name: 'Private',
    duration: null,
    level: ['Beginner'],
  },
  {
    name: 'Private',
    duration: null,
    level: ['Beginner'],
  },
];

const Container = styled.div``;
export default function Home({ data }) {
  return (
    <Container>
      <h1>Home Page</h1>

      {/* temporary mock data */}
      <YogaClassesList classData={yogaClassesData} />
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
