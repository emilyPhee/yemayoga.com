import { Container } from './style';
import Image from 'next/image';
import { urlFor } from '../../sanity/image-url';
import Link from 'next/link';

const YogaClassCard = ({ data }) => {
  const { duration, level, name, image } = data;
  const yogaClassNameList = ['Ashtanga', 'Vinyasa', 'Private'];

  return (
    <Container>
      <Link
        href={yogaClassNameList.includes(name) ? `/${name.toLowerCase()}` : '/'}
      >
        <div className="card-wrapper">
          <div className="class-img">
            <Image
              alt="yoga class"
              src={urlFor(image).width(1250).height(1500).url()}
              layout="fill"
            />
          </div>
          <h4 className="name">{name}</h4>
        </div>
      </Link>
      <p className="level">{level.join(' | ')}</p>
      {duration ? <p className="duration">{`${duration} min`}</p> : null}
    </Container>
  );
};
export default YogaClassCard;
