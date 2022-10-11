import AboutIntro from '@components/AboutIntro';
import Layout from '@components/Layout';
import client from '../src/sanity/client';
import { aboutQuery } from 'src/sanity/queries/about';
import AboutInstructor from '@components/AboutInstructor';

export default function About({ data }) {
  return (
    <>
      <AboutIntro data={data.aboutData} />
      <AboutInstructor data={data.aboutData} />
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout currentPage="about">{page}</Layout>;
};

export async function getStaticProps() {
  const aboutData = await client.fetch(aboutQuery);
  console.log(aboutData);
  const data = { aboutData };

  return {
    props: {
      data,
    },
  };
}
