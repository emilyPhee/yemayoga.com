export default {
  title: 'Schedule',
  name: 'schedule',
  type: 'document',
  fields: [
    {
      title: 'Yoga Name',
      name: 'yoga_name',
      type: 'string',
    },
    {
      title: 'Schedule',
      name: 'schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
  ],
};
