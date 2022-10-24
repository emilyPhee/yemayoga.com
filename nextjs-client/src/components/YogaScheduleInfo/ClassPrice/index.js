import { Container } from './style';

const ClassPrice = ({ priceData }) => {
  const { title, price } = priceData;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="price-title">{title}</h2>
      </div>
      <div className="class-price-wrapper">
        <ul>
          {price.map(p => (
            <li className="price-wrapper" key={p._key}>
              <div>{p.class_count}</div>
              <div>{p.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ClassPrice;
