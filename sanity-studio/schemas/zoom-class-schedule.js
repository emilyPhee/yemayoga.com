export default {
  title: 'Zoom Class Schedule',
  name: 'zoomClassSchedule',
  type: 'object',
  fields: [
    {
      title: 'Time Zone',
      name: 'time_zone',
      type: 'string',
    },
    {
      title: 'Zoom Class Schedule',
      name: 'zoom_class_schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
  ],
};
