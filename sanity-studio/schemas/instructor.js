export default {
  title: 'Instructor',
  name: 'instructor',
  type: 'object',
  fields: [
    {
      title: 'Instructor Name',
      name: 'instructor_name',
      type: 'string',
    },
    {
      title: 'Sub Name',
      name: 'sub',
      type: 'string',
      validation: Rule => Rule.optional().max(20),
    },
    {
      title: 'Introduction (KR)',
      name: 'introduction_kr',
      type: 'text',
      description: 'Please type the introduction in Korean.',
      validation: Rule => Rule.required().max(1300),
    },
    {
      title: 'Introduction (EN)',
      name: 'introduction_en',
      type: 'text',
      description: 'Please type the introduction in English.',
      validation: Rule => Rule.required().max(1300),
    },
    {
      title: 'Instructor Image',
      name: 'instructor_img',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
