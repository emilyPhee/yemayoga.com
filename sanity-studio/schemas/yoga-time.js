export default {
  title: 'Yoga Time',
  name: 'yogaTime',
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
      validation: Rule => Rule.min(0).max(59).precision(2).positive().integer(),
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
