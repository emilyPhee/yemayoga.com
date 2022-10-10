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
      title: 'Introduction',
      name: 'introduction',
      type: 'text',
      validation: Rule => Rule.required().max(1300),
    },
    {
      title: 'Instructor Image',
      name: 'instructor_img',
      type: 'image',
    },
  ],
};
