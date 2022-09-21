import Layout from '@components/Layout';
import YogaClassesList from '@components/YogaClassList';
import styled from '@emotion/styled';
import client from '../src/sanity/client';
import { yogaClassesQuery } from '../src/sanity/queries/index';
import { theme } from '@styles/theme';
import ClassReview from '@components/ClassReview';

const Container = styled.section`
  .home-intro {
    background: url('/images/home-intro.jpg') center/cover no-repeat;
    height: 93vh;
    color: ${theme.colors.whiteText};
    font-family: ${theme.fonts.cantarell};
    padding-left: ${theme.sizes.paddingFullScreen};
    padding-top: 18rem;
  }

  .title {
    font-size: 4rem;
  }

  .introduction {
    font-size: 2rem;
    width: 50rem;
  }
`;

export default function Home({ data }) {
  return (
    <Container>
      <div className="home-intro">
        <h1 className="title">Breathe and move with Yemayoga </h1>
        <p className="introduction">
          See yourself grow through yoga and learn how you feel you can do it.
        </p>
      </div>

      <YogaClassesList data={data} />
      <ClassReview />
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
