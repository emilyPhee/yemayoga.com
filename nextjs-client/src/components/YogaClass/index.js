import { Container } from './style';
import Image from 'next/image';
import { urlFor } from '../../sanity/image-url';

const YogaClass = ({ data }) => {
  const { duration, level, name, image } = data;

  return (
    <Container>
      <div className='class-img'>
        <Image
          alt='yoga class'
          src={urlFor(image).width(250).height(320).url()}
          layout='fill'
        />
        <h4 className='name'>{name}</h4>
      </div>
      <p className='level'>{level.join(' | ')}</p>
      {duration ? <p className='duration'>{`${duration} min`}</p> : null}
    </Container>
  );
};
export default YogaClass;
