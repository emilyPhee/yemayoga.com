export default {
  title: 'Class review',
  name: 'review',
  type: 'document',
  validation: Rule =>
    Rule.custom(fields => {
      if (fields.content_kr || fields.content_en) {
        return true;
      }

      return 'Please have AT LEAST ONE review typed in either language';
    }),
  fields: [
    {
      title: 'Reviewer',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.optional().max(80),
    },
    {
      title: 'Review content (KR)',
      name: 'content_kr',
      type: 'text',
      description: 'Please type the review in Korean.',
    },

    {
      title: 'Review content (EN)',
      name: 'content_en',
      type: 'text',
      description: 'Please type the review in English.',
    },
  ],
};
