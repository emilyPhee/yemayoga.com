import Layout from "@components/Layout";
import styled from "@emotion/styled";

const Container = styled.div``;
export default function Home() {
  return <Container></Container>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
