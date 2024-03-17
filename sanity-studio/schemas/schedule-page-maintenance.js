export default {
  title: 'Website Maintenance',
  name: 'maintenance',
  type: 'document',
  fields: [
    {
      title: "Is 'Home' page under maintenance?",
      name: 'home_under_maintenance',
      type: 'boolean',
      description: "Please switch ON if the 'Home' page is under maintenance.",
    },
    {
      title: "Is 'About' page under maintenance?",
      name: 'about_under_maintenance',
      type: 'boolean',
      description: "Please switch ON if the 'About' page is under maintenance.",
    },
    {
      title: "Is 'Schedule' page under maintenance?",
      name: 'schedule_under_maintenance',
      type: 'boolean',
      description:
        "Please switch ON if the 'Schedule' page is under maintenance.",
    },
    {
      title: "Is 'Contact' page under maintenance?",
      name: 'contact_under_maintenance',
      type: 'boolean',
      description:
        "Please switch ON if the 'Contact' page is under maintenance.",
    },
  ],
  preview: {
    select: {
      field1: 'home_under_maintenance',
      field2: 'about_under_maintenance',
      field3: 'schedule_under_maintenance',
      field4: 'contact_under_maintenance',
    },
    prepare(selection) {
      const { field1, field2, field3, field4 } = selection;

      if ([field1, field2, field3, field4].some((field) => field)) {
        return { title: 'Under Maintenance' };
      } else {
        return { title: 'NOT under Maintenance' };
      }
    },
  },
};
