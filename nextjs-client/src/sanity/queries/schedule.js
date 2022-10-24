export const scheduleQuery = `
    *[_type == 'schedule'] | order(order asc)
    {
        yoga_schedule, yoga_name
    }
`;

export const zoomClassQuery = `
    *[_type == 'zoom_class'] 
    {
        yoga_name, zoom_class_schedule, zoom_class_price

    }[0]
`;

export const priceQuery = `
   *[_type == 'classPrice'] | order(order asc) 
   {
    title, price, _id
   }
`;