import { Container } from './style';

// Keep the inquiry presentation stable when the class name is edited in Sanity.
const PRIVATE_CLASS_ID = '1f2b6967-153b-46e9-b039-131f0a19a2d7';

const Schedule = ({ schedule, formatTime }) => {
  if (!schedule) return null;

  const { level, yoga_schedule, yoga_name, announcement } = schedule;
  const isInquiryOnly = schedule._id === PRIVATE_CLASS_ID;

  // Private lessons stay visible without times; other classes need a timetable.
  if (
    !isInquiryOnly &&
    (!Array.isArray(yoga_schedule) || yoga_schedule.length === 0)
  ) {
    return null;
  }

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div
        className={`yoga-schedule-wrapper${isInquiryOnly ? ' inquiry-only' : ''}`}
      >
        <p className="level">{level?.toUpperCase()}</p>
        {isInquiryOnly ? (
          <>
            <p className="inquiry-message">자세한 시간은 문의바랍니다.</p>
            <a
              className="inquiry-link"
              href="https://pf.kakao.com/_lyxjdxb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡으로 개인 수업 등록 문의 (새 창)"
            >
              등록 문의
            </a>
          </>
        ) : (
          <>
            <ul className="time-list">
              {yoga_schedule.map((schedule, inx) => (
                <li className="date-time-wrapper" key={inx.toString()}>
                  <span className="day">{schedule.day}</span>
                  <span className="class-time">
                    {formatTime(schedule.start_time, schedule.end_time)}
                  </span>
                </li>
              ))}
            </ul>
            {announcement && <p className="announcement">{announcement}</p>}
          </>
        )}
      </div>
    </Container>
  );
};

export default Schedule;
