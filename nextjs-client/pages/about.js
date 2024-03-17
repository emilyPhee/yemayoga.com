import AboutIntro from '@components/AboutIntro';
import Layout from '@components/Layout';
import client from '../src/sanity/client';
import { aboutQuery } from 'src/sanity/queries/about';
import AboutInstructor from '@components/AboutInstructor';
import styled from '@emotion/styled';
import { Divider } from '@chakra-ui/react';
import Overlay from '@components/Overlay';
import { aboutMaintenanceQuery } from 'src/sanity/queries/page-maintenance';

const Container = styled.div`
  position: relative;

  .divider-container {
    padding: 0 5rem;
  }
`;
export default function About({ data }) {
  const isUnderMaintenance =
    data.isUnderMaintenanceData?.[0].about_under_maintenance;

  return (
    <Container>
      {isUnderMaintenance && (
        <Overlay
          krMessage={'페이지 업데이트 중입니다.'}
          engMessage={'The page is being updated.'}
        />
      )}
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
  const isUnderMaintenanceData = await client.fetch(aboutMaintenanceQuery);

  const data = { aboutData, isUnderMaintenanceData };

  return {
    props: {
      data,
    },
  };
}
