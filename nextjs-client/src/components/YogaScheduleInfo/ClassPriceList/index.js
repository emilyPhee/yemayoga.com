import ClassPrice from '../ClassPrice';
import { Container } from './style';

const ClassPriceList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <div className="price-grid-wrapper">
        {data.map(price => (
          <ClassPrice key={price._id} priceData={price} />
        ))}
      </div>
    </Container>
  );
};

export default ClassPriceList;
