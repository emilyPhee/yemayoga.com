import AboutIntro from '@components/AboutIntro';
import Layout from '@components/Layout';
import client from '../src/sanity/client';
import { aboutQuery } from 'src/sanity/queries/about';
import AboutInstructor from '@components/AboutInstructor';
import styled from '@emotion/styled';
import { Divider } from '@chakra-ui/react';

const Container = styled.div`
  .divider-container {
    padding: 0 5rem;
  }
`;
export default function About({ data }) {
  return (
    <Container>
      <AboutIntro data={data.aboutData} />
      <div className="divider-container">
        <Divider />
      </div>
      <AboutInstructor data={data.aboutData} />
    </Container>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout currentPage="about">{page}</Layout>;
};

export async function getStaticProps() {
  const aboutData = await client.fetch(aboutQuery);

  const data = { aboutData };

  return {
    props: {
      data,
    },
  };
}
