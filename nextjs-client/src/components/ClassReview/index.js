import { EmblaCarousel } from '@components/EmblaCarousel';
import { Container } from './style';

const ClassReview = ({ reviewData }) => {
  return (
    <Container>
      <h1 className="title">Yemayoga Stories</h1>
      <EmblaCarousel reviewData={reviewData} />
    </Container>
  );
};

export default ClassReview;
