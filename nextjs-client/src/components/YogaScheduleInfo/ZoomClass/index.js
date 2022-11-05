import { Container } from './style';

const ZoomClass = ({ data, formatTime }) => {
  const { yoga_name, zoom_schedule, zoom_class_price } = data[0];
  const USASchedule = zoom_schedule[0];
  const koreaSchedule = zoom_schedule[1];

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="zoom-class-title">{yoga_name}</h2>
      </div>
      <div className="grid-wrapper">
        <div className="USA-schedule">
          <div className="schedule-container">
            <h4 className="usa-schedule-title">{USASchedule.time_zone}</h4>
            <ul className="list-wrapper">
              {USASchedule.zoom_class_schedule.map((schedule, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <div className="day">{schedule.day}</div>
                  <div className="class-time">
                    {formatTime(schedule.start_time, schedule.end_time)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Korea-schedule">
          <div className="schedule-container">
            <h4 className="korea-schedule-title">{koreaSchedule.time_zone}</h4>
            <ul className="list-wrapper">
              {koreaSchedule.zoom_class_schedule.map((schedule, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <div className="day">{schedule.day}</div>
                  <div className="class-time">
                    {formatTime(schedule.start_time, schedule.end_time)}
                  </div>
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
                <li>around ${price.amount} / month</li>
                <li>{price.announcement}</li>
              </ul>
            ))}
          </div>
          <a
            href="https://pf.kakao.com/_hsxmxbl"
            target="_blank"
            rel="noreferrer"
            className="registration-link"
          >
            등록 문의
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ZoomClass;
