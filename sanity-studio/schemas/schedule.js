export default {
  title: 'Schedules',
  name: 'schedule',
  type: 'document',
  fields: [
    {
      title: 'Yoga Name',
      name: 'yoga_name',
      type: 'string',
    },
    {
      title: 'Level',
      name: 'level',
      type: 'string',
    },
    {
      title: 'Yoga Schedule',
      name: 'yoga_schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Announcement (Optional)',
      name: 'announcement',
      type: 'string',
      description: 'Please type the announcement/notes for schedule.',
    },
  ],
};
