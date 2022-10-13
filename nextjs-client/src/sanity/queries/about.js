export const aboutQuery = `
    *[_type == 'about'] 
     {
        about_img, about_title, about_intro_kr, about_intro_en, 
        instructor_name, instructor_sub_name,introduction_kr, introduction_en, instructor_img

     }
`;
