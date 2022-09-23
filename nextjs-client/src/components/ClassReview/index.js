import { EmblaCarousel } from '@components/EmblaCarousel';
import { Container } from './style';

const ClassReview = () => {
  const reviewSlides = [
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
      name: 'John Doe',
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
      name: 'Mary Jane',
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation!',
      name: 'Emily Park',
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.laborisnisi ut aliquip ex ea commodo consequat.',
      name: 'Anthony Park',
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.laborisnisi ut aliquip ex ea commodo consequat.',
      name: 'Simba Park',
    },
  ];
  return (
    <Container>
      <h1 className="title">Yemayoga Stories</h1>
      <EmblaCarousel reviewSlides={reviewSlides} />
    </Container>
  );
};

export default ClassReview;
