import Layout from '@components/Layout';
import YogaClassesList from '@components/YogaClassCardList';
import styled from '@emotion/styled';
import client from '../src/sanity/client';
import { yogaClassesQuery } from '../src/sanity/queries/index';
import { theme } from '@styles/theme';
import ClassReview from '@components/ClassReview';
import { reviewQuery } from 'src/sanity/queries/review';
import { AnimatedLanguageParagraph } from '@styles/shared-styled-component';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

import { Divider } from '@chakra-ui/react';
import Overlay from '@components/Overlay';
import { homeMaintenanceQuery } from 'src/sanity/queries/page-maintenance';

const Container = styled.section`
  position: relative;

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
    left: 18%;
  }

  .title {
    font-size: 4rem;
  }

  .introduction {
    margin-top: 2rem;
    width: 50rem;
    line-height: 3.5rem;
  }

  .divider-container {
    padding: 0 5rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .intro-wrapper {
      position: absolute;
      top: 20%;
      left: 7.3%;
    }
    .title {
      font-size: 3rem;
    }
    .introduction {
      width: 97%;
      line-height: 3rem;
    }
  }
`;

export default function Home({ data }) {
  const isUnderMaintenance =
    data.isUnderMaintenanceData?.[0].home_under_maintenance;

  const { preferredLanguage } = useLanguages();
  return (
    <Container>
      {isUnderMaintenance && (
        <Overlay
          krMessage={'페이지 업데이트 중입니다.'}
          engMessage={'The page is being updated.'}
        />
      )}

      <div className="home-intro">
        <div className="intro-wrapper">
          <h1 className="title">breathe and flow with Yemayoga </h1>
          <AnimatedLanguageParagraph
            key={String(preferredLanguage)}
            className="introduction"
            preferredLanguage={preferredLanguage}
          >
            {preferredLanguage === supportLanguages.English ? (
              <>
                Experience your growth and gain confidence.
                <br />
                Discover your value through yoga practices with us.
              </>
            ) : (
              <>
                요가를 통해서 스스로 성장하는 모습을 보고
                <br />
                그로 인해서 자신이 할 수 있다는 그 마음을 알아가는 것.
                <br />
                자신의 가치를 알아가는 요가 수련을 함께 합니다.
              </>
            )}
          </AnimatedLanguageParagraph>
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
  const isUnderMaintenanceData = await client.fetch(homeMaintenanceQuery);

  const data = { yogaClassData, reviewData, isUnderMaintenanceData };

  return {
    props: {
      data,
    },
  };
}
