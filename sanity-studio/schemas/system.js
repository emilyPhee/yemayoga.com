export default {
  title: 'System',
  name: 'system',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Description (EN)',
      name: 'description_en',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the system description in English.',
    },
    {
      title: 'Description (KR)',
      name: 'description_kr',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the system description in Korean.',
    },
  ],
};
