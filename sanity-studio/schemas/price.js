export default {
  title: 'Price',
  name: 'price',
  type: 'object',
  fields: [
    {
      title: 'Class Count',
      name: 'class_count',
      type: 'number',
      description: 'Please type how many classes it includes for this class.',
    },
    {
      title: 'Class Count Options',
      name: 'class_count_options',
      type: 'string',
      description:
        'Please select an option if the class is on a weekly basis or count it as a class number..',
      options: {
        list: [
          { title: 'Per Week', value: '/week' },
          { title: 'Use in Given Time', value: 'Time Range' },
        ],
      },
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number',
      description: 'Please Enter $ amount',
      validation: (Rule) => Rule.min(1).required(),
    },
    {
      title: 'Announcement (Optional)',
      name: 'announcement',
      type: 'string',
      description: 'Please type the announcement/notes for price.',
    },
  ],
};
