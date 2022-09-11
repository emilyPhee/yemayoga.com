import Layout from '@components/Layout';

export default function Schedule() {
  return <h1>Schedule Page</h1>;
}

Schedule.getLayout = function getLayout(page) {
  return <Layout currentPage="schedule">{page}</Layout>;
};
