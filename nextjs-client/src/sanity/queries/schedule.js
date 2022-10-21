export const scheduleQuery = `
    *[_type == 'schedule'] | order(order asc)
    {
        yoga_schedule, yoga_name
    }
`;

export const zoomClassQuery = ``;

export const priceQuery = ``;
