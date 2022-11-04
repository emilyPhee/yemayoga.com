export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

// get yoga class image
export const ashtangaImageQuery = `
*[_type == 'yogaClass' ] 
	{
  		name, image
	}[2]
`;

export const vinyasaImageQuery = `
*[_type == 'yogaClass'] 
	{
  		name, image
	}[3]
`;

export const privateImageQuery = `
*[_type == 'yogaClass' ] 
	{
  		name, image
	}[1]
`;

export const zoomImageQuery = `
*[_type == 'yogaClass'] 
	{
  		name, image
	}[0]
`;

// get yoga page data
export const ashtangaPageQuery = `
	*[_type == 'yogaPage'] 
	{
		 yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[1]
`;

export const vinyasaPageQuery = `
	*[_type == 'yogaPage'] 
	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[2]
`;

export const privatePageQuery = `
	*[_type == 'yogaPage']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const zoomPageQuery = `
	*[_type == 'yogaPage']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[3]
`;
