export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

// get yoga class image
export const ashtangaImageQuery = `
*[_type == 'yogaClass' && _id == '9c47ddfe-7fa9-41ee-845f-98c5bdb64d05' ] 
	{
  		name, image
	}[0]
`;

export const vinyasaImageQuery = `
*[_type == 'yogaClass' && _id == 'd8c0a5c0-77ff-458d-b1c6-0753fc717cd1'] 
	{
  		name, image
	}[0]
`;

export const privateImageQuery = `
*[_type == 'yogaClass' && _id == '94dc9770-cc55-43c7-a77b-6e02cc23a44f'] 
	{
  		name, image
	}[0]
`;

export const zoomImageQuery = `
*[_type == 'yogaClass' && _id == '17cbc0ef-9046-416e-97a4-b5d875f5fec1'] 
	{
  		name, image
	}[0]
`;

// get yoga page data
export const ashtangaPageQuery = `
	*[_type == 'yogaPage' && _id == '33b81a03-5b44-435f-9ef1-85582b21a9bc'] 
	{
		 yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const vinyasaPageQuery = `
	*[_type == 'yogaPage' && _id == '3866e672-c8b3-46f7-9647-8cde9c619d63'] 
	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const privatePageQuery = `
	*[_type == 'yogaPage' && _id == '2f9bfb11-a984-4ebd-9696-721958d03495']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;

export const zoomPageQuery = `
	*[_type == 'yogaPage' && _id == 'cd54f41c-4e8a-4e27-8a72-07d41016110e']

	{
		yoga_name, yoga_quote, short_description, yoga_description_kr, yoga_description_en, yoga_systems, etiquette_kr, etiquette_en
	}[0]
`;
