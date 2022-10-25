import { Container } from './style';

const ZoomClass = ({ data, formatTime }) => {
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
          <h4 className="level">{USASchedule.level.toUpperCase()}</h4>
          <div className="schedule-container">
            <h4 className="usa-schedule-title">{USASchedule.title}</h4>
            <ul className="list-wrapper">
              {USASchedule.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <div>{day}</div>
                  <div className="class-time">
                    {formatTime(USASchedule.start_time, USASchedule.end_time)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Korea-schedule">
          <div className="schedule-container">
            <h4 className="korea-schedule-title">{koreaSchedule.title}</h4>
            <ul className="list-wrapper">
              {koreaSchedule.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p>{day}</p>
                  <p className="class-time">
                    {formatTime(
                      koreaSchedule.start_time,
                      koreaSchedule.end_time
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="price">
          <div className="schedule-container">
            <h4 className="price-title">Price</h4>
            {zoom_class_price.map((price, inx) => (
              <ul className="list-wrapper price-list" key={inx}>
                <li>around ${price.amount}</li>
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
