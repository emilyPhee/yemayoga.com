export default {
  title: 'About Yemayoga',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'About Image',
      name: 'about_img',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'About Title',
      name: 'intro_title',
      type: 'string',
      validation: Rule => Rule.required().max(100),
    },
    {
      title: 'About Introduction (KR)',
      name: 'about_intro_kr',
      type: 'text',
      description: 'Please type the about Introduction in Korean.',
      validation: Rule => Rule.required().max(400),
    },
    {
      title: 'About Introduction (EN)',
      name: 'about_intro_en',
      type: 'text',
      description: 'Please type the about Introduction in English.',
      validation: Rule => Rule.required().max(400),
    },
    {
      title: 'Instructors',
      name: 'instructors',
      type: 'array',
      of: [{ type: 'instructor' }],
    },
  ],
};
