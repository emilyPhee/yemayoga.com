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
      title: 'Yoga Schedule',
      name: 'yoga_schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
    {
      title: 'Class Price',
      name: 'class_price',
      type: 'array',
      of: [{ type: 'price' }],
    },
  ],
};
