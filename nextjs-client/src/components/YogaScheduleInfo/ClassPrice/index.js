import { Container } from './style';

const formatClassCount = (classCount, classCountOptions) => {
  return `${classCount} ${classCount > 1 ? 'classes' : 'class'} ${
    classCountOptions === '/week' ? '/ week' : ''
  }`;
};

const formatPrice = (amount, classCountOptions) => {
  return `$${amount} ${classCountOptions === 'Time Range' ? '' : '/ month'}`;
};

const ClassPrice = ({ priceData }) => {
  const { title, price } = priceData;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="price-title">{title}</h2>
      </div>
      <div className="class-price-wrapper">
        <ul className="list-wrapper">
          {price.map(p => (
            <li className="price-wrapper" key={p._key}>
              <div>
                {formatClassCount(p.class_count, p.class_count_options)}
              </div>
              <div>{formatPrice(p.amount, p.class_count_options)}</div>
              <div className="announcement">{p.announcement}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ClassPrice;
