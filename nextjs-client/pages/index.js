import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.section`
  background: url('/images/home-intro.jpg') center/cover no-repeat;
  height: 92vh;
  color: ${theme.colors.whiteText};
  font-family: ${theme.fonts.cantarell};
  padding-left: ${theme.sizes.paddingFullScreen};
  padding-top: 18rem;

  .title {
    font-size: 4rem;
  }

  .introduction {
    font-size: 2rem;
    width: 50rem;
  }
`;

export default function Home() {
  return (
    <Container>
      <h1 className="title">Breathe and move with Yemayoga </h1>
      <p className="introduction">
        See yourself grow through yoga and learn how you feel you can do it.
      </p>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout currentPage="home">{page}</Layout>;
};
