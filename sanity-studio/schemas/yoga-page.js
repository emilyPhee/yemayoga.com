export default {
  title: 'Yoga Page',
  name: 'yogaPage',
  type: 'document',
  fields: [
    {
      title: 'Yoga Name',
      name: 'yoga_name',
      type: 'string',
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
  ],
};
