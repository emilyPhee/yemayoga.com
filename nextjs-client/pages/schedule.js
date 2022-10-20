import Layout from '@components/Layout';
import ScheduleList from '@components/YogaScheduleInfo/ScheduleList';
import { scheduleQuery } from 'src/sanity/queries/schedule';
import client from 'src/sanity/client';

export default function Schedule({ data }) {
  return (
    <div>
      <h1>Schedule</h1>
      <ScheduleList data={data.scheduleData} />
    </div>
  );
}

Schedule.getLayout = function getLayout(page) {
  return <Layout currentPage="schedule">{page}</Layout>;
};

export async function getStaticProps() {
  const scheduleData = await client.fetch(scheduleQuery);

  const data = { scheduleData };

  return {
    props: {
      data,
    },
  };
}
