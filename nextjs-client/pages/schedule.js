import Layout from '@components/Layout';
import ScheduleList from '@components/YogaScheduleInfo/ScheduleList';
import { scheduleQuery, zoomClassQuery } from 'src/sanity/queries/schedule';
import client from 'src/sanity/client';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import ZoomClass from '@components/YogaScheduleInfo/ZoomClass';

export const Container = styled.div`
  background-color: ${theme.colors.brandColor3};
  .title {
    letter-spacing: 0.1rem;
    font-size: ${theme.sizes.fontsTitleSize};
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
    margin-top: 7rem;
  }
`;

export default function Schedule({ data }) {
  return (
    <Container>
      <h1 className="title">Schedule</h1>
      <ScheduleList data={data.scheduleData} />

      <h1 className="title">Zoom Class</h1>
      <ZoomClass />
    </Container>
  );
}

Schedule.getLayout = function getLayout(page) {
  return <Layout currentPage="schedule">{page}</Layout>;
};

export async function getStaticProps() {
  const scheduleData = await client.fetch(scheduleQuery);
  const zoomClassData = await client.fetch(zoomClassQuery);

  const data = { scheduleData, zoomClassData };

  return {
    props: {
      data,
    },
  };
}
