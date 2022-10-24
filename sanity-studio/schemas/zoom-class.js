export default {
  title: 'Zoom Class',
  name: 'zoom_class',
  type: 'document',
  fields: [
    {
      title: 'Yoga Name',
      name: 'yoga_name',
      type: 'string',
    },
    {
      title: 'Zoom Class Schedule',
      name: 'zoom_class_schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
    {
      title: 'Zoom Class Price',
      name: 'zoom_class_price',
      type: 'array',
      of: [{ type: 'price' }],
    },
  ],
};