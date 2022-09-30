export const reviewQuery = `
    *[_type == 'review'] 
     {
        name, content_en, content_kr
     }
`;
