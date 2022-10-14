export default {
  title: 'Yoga Class',
  name: 'yogaClass',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required().max(80),
    },
    {
      title: 'Card image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Duration in minutes',
      name: 'duration',
      type: 'number',
      validation: Rule => Rule.min(1).max(1000),
    },
    {
      title: 'Level',
      name: 'level',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'All level', value: 'all level' },
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
    },
    {
      title: 'Monthly Price',
      name: 'monthlyPrice',
      type: 'number',
      validation: Rule => Rule.min(0),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Short Description',
      name: 'short_description',
      type: 'string',
    },
    {
      title: 'Yoga Description',
      name: 'yoga_description',
      type: 'text',
    },
    {
      title: 'Yoga Systems',
      name: 'yoga_systems',
      type: 'array',
      of: [{ type: 'system' }],
    },
    {
      title: 'Etiquette',
      name: 'etiquette',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Schedule',
      name: 'schedule',
      type: 'array',
      of: [{ type: 'weeklySchedule' }],
    },
  ],
};
