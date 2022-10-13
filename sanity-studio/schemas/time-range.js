export default {
  title: 'Time Range',
  name: 'timeRange',
  type: 'object',
  fields: [
    {
      title: 'Hour',
      name: 'hour',
      type: 'number',
      validation: Rule => Rule.min(1).max(12).precision(2).positive().integer(),
    },
    {
      title: 'Minute',
      name: 'minute',
      type: 'number',
      validation: Rule => Rule.min(0).max(60).precision(2).positive().integer(),
    },
  ],
};
