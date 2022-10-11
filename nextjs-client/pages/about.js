import AboutIntro from '@components/AboutIntro';
import Layout from '@components/Layout';
import client from 'src/sanity/client';

export default function About() {
  return (
    <>
      <AboutIntro />
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout currentPage="about">{page}</Layout>;
};

export async function getStaticProps() {
  const aboutData = await client.fetch();
}
