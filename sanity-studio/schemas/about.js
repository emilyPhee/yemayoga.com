export default {
  title: 'About',
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
      name: 'about_title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      title: 'About Introduction (KR)',
      name: 'about_intro_kr',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the about Introduction in Korean.',
      validation: (Rule) => Rule.required().max(400),
    },
    {
      title: 'About Introduction (EN)',
      name: 'about_intro_en',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the about Introduction in English.',
      validation: (Rule) => Rule.required().max(400),
    },
    {
      title: 'Instructor Name',
      name: 'instructor_name',
      type: 'string',
    },
    {
      title: 'Instructor Sub Name',
      name: 'instructor_sub_name',
      type: 'string',
      description: 'Please type the secondary name (Optional).',
      validation: (Rule) => Rule.optional().max(20),
    },
    {
      title: 'Instructor Introduction (KR)',
      name: 'introduction_kr',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the introduction in Korean.',
      validation: (Rule) => Rule.required().max(1300),
    },
    {
      title: 'Instructor Introduction (EN)',
      name: 'introduction_en',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Please type the introduction in English.',
      validation: (Rule) => Rule.required().max(1300),
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
