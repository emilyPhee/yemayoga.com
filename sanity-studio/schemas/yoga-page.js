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
      title: 'Yoga Quote',
      name: 'yoga_quote',
      type: 'string',
    },

    {
      title: 'Short Description',
      name: 'short_description',
      type: 'string',
      description: 'Please type the yoga short description.',
    },
    {
      title: 'Yoga Description (KR)',
      name: 'yoga_description_kr',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the yoga description in Korean.',
    },
    {
      title: 'Yoga Description (EN)',
      name: 'yoga_description_en',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the yoga description in English.',
    },
    {
      title: 'Yoga Systems',
      name: 'yoga_systems',
      type: 'array',
      of: [{ type: 'system' }],
    },
    {
      title: 'Etiquette (KR)',
      name: 'etiquette_kr',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Please type the etiquette in Korean.',
    },
    {
      title: 'Etiquette (EN)',
      name: 'etiquette_en',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Please type the etiquette in English.',
    },
  ],
};
