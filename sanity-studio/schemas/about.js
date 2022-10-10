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
      title: 'Introduction Title',
      name: 'intro_title',
      type: 'string',
      validation: Rule => Rule.required().max(100),
    },
    {
      title: 'Introduction',
      name: 'introduction',
      type: 'text',
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
