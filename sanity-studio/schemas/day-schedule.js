export default {
  title: 'Day Schedule',
  name: 'daySchedule',
  type: 'object',
  fields: [
    {
      title: 'Day of the Week',
      name: 'day',
      type: 'string',
    },
    {
      title: 'Start Time',
      name: 'start_time',
      type: 'string',
    },
    {
      title: 'End Time',
      name: 'end_time',
      type: 'string',
    },
    {
      title: 'Period (am/pm)',
      name: 'period',
      type: 'string',
    },
  ],
};
