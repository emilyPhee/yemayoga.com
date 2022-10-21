import { Container } from './style';

const ZoomClass = ({ data }) => {
  console.log(data);
  const { yoga_name, zoom_class_price, zoom_class_schedule } = data;
  const USASchedule = zoom_class_schedule[0];
  const koreaSchedule = zoom_class_schedule[1];

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="zoom-class-title">{yoga_name}</h2>
      </div>
      <div className="grid-wrapper">
        <div className="USA-schedule">
          <h4 className="level">{USASchedule.level}</h4>
          <ul className="list-wrapper">
            {USASchedule.day.map((day, inx) => (
              <li className="date-time-wrapper" key={inx}>
                <p>{day}</p>
                <p className="class-time">6:00 - 7:10 am</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="Korea-schedule">
          <h4>{koreaSchedule.title}</h4>
          <div>
            <ul className="list-wrapper">
              {koreaSchedule.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p>{day}</p>
                  <p className="class-time">6:00 - 7:10 am</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="price">
          <h4>Price</h4>
          <div>
            {zoom_class_price.map((price, inx) => (
              <ul className="list-wrapper" key={inx}>
                <li>{price.amount}</li>
                <li>{price.announcement}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ZoomClass;
