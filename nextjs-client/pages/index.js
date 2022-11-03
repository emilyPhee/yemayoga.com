import Layout from '@components/Layout';
import YogaClassesList from '@components/YogaClassCardList';
import styled from '@emotion/styled';
import client from '../src/sanity/client';
import { yogaClassesQuery } from '../src/sanity/queries/index';
import { theme } from '@styles/theme';
import ClassReview from '@components/ClassReview';
import { reviewQuery } from 'src/sanity/queries/review';

import { Divider } from '@chakra-ui/react';

const Container = styled.section`
  .home-intro {
    background: url('/images/home-intro2.jpg') center/cover no-repeat;
    height: 100vh;
    color: ${theme.colors.whiteText};
    font-family: ${theme.fonts.cantarell};
    position: relative;
  }

  .intro-wrapper {
    position: absolute;
    top: 25%;
    left: 20%;
  }

  .title {
    font-size: 4rem;
  }

  .introduction {
    font-size: 2rem;
    width: 50rem;
  }

  .divider-container {
    padding: 0 5rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .home-intro {
      padding: 0;
      padding: 12rem 0 0 5rem;
    }
    .title {
      font-size: 3rem;
      /* width: 90%; */
    }
    .introduction {
      font-size: 1.7rem;
      width: 90%;
    }
  }
`;

export default function Home({ data }) {
  return (
    <Container>
      <div className="home-intro">
        <div className="intro-wrapper">
          <h1 className="title">Breathe and move with Yemayoga </h1>
          <p className="introduction">
            See yourself grow through yoga and learn how you feel you can do it.
          </p>
        </div>
      </div>

      <YogaClassesList data={data.yogaClassData} />
      <div className="divider-container">
        <Divider />
      </div>
      <ClassReview reviewData={data.reviewData} />
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout currentPage="home">{page}</Layout>;
};

export async function getStaticProps() {
  const yogaClassData = await client.fetch(yogaClassesQuery);
  const reviewData = await client.fetch(reviewQuery);

  const data = { yogaClassData, reviewData };

  return {
    props: {
      data,
    },
  };
}
