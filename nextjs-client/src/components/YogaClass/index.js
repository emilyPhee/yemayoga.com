import { Container } from './style';
import Image from 'next/image';

const YogaClass = ({ data }) => {
  const { duration, level, name } = data;
  return (
    <Container>
      <div className="class-img">
        <Image
          alt="yoga class"
          width={4096}
          height={3072}
          src="/images/temp.jpg"
          layout="responsive"
        />
        <h4 className="name">{name}</h4>
      </div>
      <p className="level">
        {level.length === 1 ? level : `${level[0]} | ${level[1]}`}
      </p>
      <p className="duration">
        {duration} {duration ? 'MIN' : ''}
      </p>
    </Container>
  );
};
export default YogaClass;
