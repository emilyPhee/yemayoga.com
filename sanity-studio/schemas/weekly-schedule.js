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
      title: 'Level',
      name: 'level',
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
      type: 'yogaTime',
    },
    {
      title: 'End Time',
      name: 'end_time',
      type: 'yogaTime',
    },
    {
      title: 'Announcement (Optional)',
      name: 'announcement',
      type: 'string',
      description: 'Please type the announcement/notes for schedule.',
    },
  ],
};
