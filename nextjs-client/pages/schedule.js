import Layout from '@components/Layout';
import ScheduleList from '@components/YogaScheduleInfo/ScheduleList';
import {
  scheduleQuery,
  zoomClassQuery,
  priceQuery,
  isUnderMaintenanceQuery,
} from 'src/sanity/queries/schedule';
import client from 'src/sanity/client';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import ZoomClass from '@components/YogaScheduleInfo/ZoomClass';
import ClassPriceList from '@components/YogaScheduleInfo/ClassPriceList';

export const Container = styled.div`
  background-color: ${theme.colors.brandColor3};
  position: relative;

  .title {
    letter-spacing: 0.1rem;
    font-size: ${theme.sizes.fontsTitleSize};
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
    text-align: center;
    margin: 8rem 0;
  }

  .maintenance-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const formatTime = (start_time, end_time) => {
  const startTimeMinute = start_time.minute.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  const endTimeMinute = end_time.minute.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  return `${start_time.hour}:${startTimeMinute} - ${end_time.hour}:${endTimeMinute} ${end_time.period}`;
};
export default function Schedule({ data }) {
  const isUnderMaintenance =
    data.isUnderMaintenanceData?.[0].is_under_maintenance;

  return (
    <Container>
      {isUnderMaintenance && (
        <div className="maintenance-overlay">
          <p>요가 수업 스케줄 업데이트 중입니다.</p>
          <p>The class schedules are being updated.</p>
        </div>
      )}
      <h1 className="title">Schedule</h1>
      <ScheduleList data={data.scheduleData} formatTime={formatTime} />

      <h1 className="title">Zoom Class</h1>
      <ZoomClass data={data.zoomClassData} formatTime={formatTime} />

      <h1 className="title">Class Price</h1>
      <ClassPriceList data={data.classPriceData} />
    </Container>
  );
}

Schedule.getLayout = function getLayout(page) {
  return <Layout currentPage="schedule">{page}</Layout>;
};

export async function getStaticProps() {
  const scheduleData = await client.fetch(scheduleQuery);
  const zoomClassData = await client.fetch(zoomClassQuery);
  const classPriceData = await client.fetch(priceQuery);
  const isUnderMaintenanceData = await client.fetch(isUnderMaintenanceQuery);

  const data = {
    scheduleData,
    zoomClassData,
    classPriceData,
    isUnderMaintenanceData,
  };

  return {
    props: {
      data,
    },
  };
}
