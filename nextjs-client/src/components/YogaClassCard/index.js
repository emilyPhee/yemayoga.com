import { Container } from './style';
import Image from 'next/image';
import { urlFor } from '../../sanity/image-url';
import Link from 'next/link';

const YogaClassCard = ({ data }) => {
  const { duration, level, name, image } = data;
  const yogaClassNameList = ['Ashtanga', 'Vinyasa', 'Private', 'Zoom'];

  return (
    <Container>
      <Link
        href={yogaClassNameList.includes(name) ? `/${name.toLowerCase()}` : '/'}
      >
        <div className="card-wrapper">
          <div className="class-img">
            <Image
              alt="yoga class"
              src={urlFor(image).width(938).height(1125).url()}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${urlFor(image)}&w=16&q=1`}
            />
          </div>
          <h4 className="name">{name}</h4>
        </div>
      </Link>
      <span className="level">{level.join(' | ')}</span>
      {duration ? <span className="duration">{`${duration} min`}</span> : null}
    </Container>
  );
};
export default YogaClassCard;
