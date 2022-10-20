import Layout from '@components/Layout';
import ScheduleList from '@components/YogaScheduleInfo/ScheduleList';

export default function Schedule() {
  return (
    <div>
      <h1>Schedule Page</h1>
      <ScheduleList />
    </div>
  );
}

Schedule.getLayout = function getLayout(page) {
  return <Layout currentPage="schedule">{page}</Layout>;
};
