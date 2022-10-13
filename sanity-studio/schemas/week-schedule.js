export default {
  title: 'Week Schedule',
  name: 'weekSchedule',
  type: 'object',
  fields: [
    {
      title: 'Yoga Name',
      name: 'yoga_name',
      type: 'string',
    },
    {
      title: 'Day of the Week',
      name: 'day',
      type: 'array',
      of: [{ type: 'string' }],
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
      },
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
      options: {
        list: [
          { title: 'am', value: 'am' },
          { title: 'pm', value: 'pm' },
        ],
      },
      layout: 'dropdown',
    },
  ],
};
