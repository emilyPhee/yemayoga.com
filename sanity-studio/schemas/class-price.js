export default {
  title: 'Class Price',
  name: 'classPrice',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'array',
      of: [{ type: 'price' }],
    },
  ],
};
