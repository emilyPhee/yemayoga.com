export const reviewQuery = `
    *[_type == 'review'] | order(order asc)
     {
        name, content_en, content_kr
     }
`;
