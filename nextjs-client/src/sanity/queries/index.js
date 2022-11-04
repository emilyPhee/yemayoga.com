export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

// get yoga class image
export const ashtangaImageQuery = `
*[_type == 'yogaClass' && name == 'Ashtanga'] 
	{
  		name, image
	}
`;

export const vinyasaImageQuery = `
*[_type == 'yogaClass' && name == 'Vinyasa'] 
	{
  		name, image
	}
`;

export const privateImageQuery = `
*[_type == 'yogaClass' && name == 'Private'] 
	{
  		name, image
	}
`;

export const zoomImageQuery = `
*[_type == 'yogaClass' && name == 'Zoom'] 
	{
  		name, image
	}
`;

// get yoga page data
export const ashtangaPageQuery = `
	*[_type == 'yogaPage' && yoga_name == 'Ashtanga'] 
	{
		 yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const vinyasaPageQuery = `
	*[_type == 'yogaPage' && yoga_name == 'Vinyasa'] 
	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const privatePageQuery = `
	*[_type == 'yogaPage' && yoga_name == 'Private']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const zoomPageQuery = `
	*[_type == 'yogaPage' && yoga_name == 'Zoom']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;
