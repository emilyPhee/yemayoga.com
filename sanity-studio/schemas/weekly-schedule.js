export default {
  title: 'Weekly Schedule',
  name: 'weeklySchedule',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Day of the Week',
      name: 'day',
      type: 'string',
      // of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Monday', value: 'Mon' },
          { title: 'Tuesday', value: 'Tue' },
          { title: 'Wednesday', value: 'Wed' },
          { title: 'Thursday', value: 'Thu' },
          { title: 'Friday', value: 'Fri' },
          { title: 'Saturday', value: 'Sat' },
          { title: 'Sunday', value: 'Sun' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Start Time',
      name: 'start_time',
      type: 'yogaTime',
    },
    {
      title: 'End Time',
      name: 'end_time',
      type: 'yogaTime',
    },
  ],
};
