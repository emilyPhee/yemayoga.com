export const scheduleQuery = `
    *[_type == 'schedule'] | order(order asc)
    {
        level, yoga_schedule, yoga_name, announcement
    }
`;

export const zoomClassQuery = `
     *[_type == 'zoom_class'] 
    {
        yoga_name, zoom_schedule, zoom_class_price

    }
`;

export const priceQuery = `
   *[_type == 'classPrice'] | order(order asc) 
   {
    title, price, _id
   }
`;

export const isUnderMaintenanceQuery = `
   *[_type == 'schedule_maintenance']
   {
    is_under_maintenance
   }
`;
