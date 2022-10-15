import Layout from '@components/Layout';
import MoonDays from '@components/YogaClassInfo/MoonDays';
import YogaDescription from '@components/YogaClassInfo/YogaDescription';
import YogaEtiquette from '@components/YogaClassInfo/YogaEtiquette';
import YogaIntro from '@components/YogaClassInfo/YogaIntro';
import YogaSystemList from '@components/YogaClassInfo/YogaSystemList';
import styled from '@emotion/styled';
import client from 'src/sanity/client';
import { ashtangaImageQuery, ashtangaPageQuery } from 'src/sanity/queries';
import { useLanguages } from '@contexts/languageContext';

const Container = styled.div`
  .line {
    width: 90%;
    height: 1px;
    background-color: #e4e4e4;
  }

  .line-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default function Ashtanga({ data }) {
  const { preferredLanguage } = useLanguages();

  return (
    <Container>
      <YogaIntro data={data.ashtangaImageData} />
      <YogaDescription
        language={preferredLanguage}
        data={data.ashtangaPageData}
      />
      {/* <YogaSystemList data={data.ashtangaPageData} /> */}
      {/* <YogaEtiquette data={data} /> */}
      <div className="line-wrapper">
        <div className="line"></div>
      </div>
      <MoonDays />
    </Container>
  );
}

Ashtanga.getLayout = function getLayout(page) {
  return <Layout currentPage="ashtanga">{page}</Layout>;
};

export async function getStaticProps() {
  const ashtangaPageData = await client.fetch(ashtangaPageQuery);

  const ashtangaImageData = await client.fetch(ashtangaImageQuery);

  const data = { ashtangaPageData, ashtangaImageData };

  return {
    props: {
      data,
    },
  };
}
