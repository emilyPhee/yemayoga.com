import Layout from '@components/Layout';
import styled from '@emotion/styled';

const Container = styled.div``;
export default function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout currentPage="home">{page}</Layout>;
};
