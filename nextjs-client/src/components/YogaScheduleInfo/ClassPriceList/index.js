import ClassPrice from '../ClassPrice';
import { Container } from './style';

const ClassPriceList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map(price => (
        <ClassPrice key={price._id} priceData={price} />
      ))}
    </Container>
  );
};

export default ClassPriceList;
