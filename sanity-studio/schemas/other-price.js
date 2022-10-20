export default {
  title: 'Other Price',
  name: 'otherPrice',
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
