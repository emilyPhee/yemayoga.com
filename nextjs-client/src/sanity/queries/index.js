export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

export const ashtangaQuery = `
	*[_type == 'yogaClass' && name == 'Ashtanga'] 
	{
		name, image, short_description, yoga_description, yoga_systems, etiquette
	}[0]
`;

export const vinyasaQuery = `
	*[_type == 'yogaClass' && name == 'Vinyasa'] 
	{
		name, image, short_description, yoga_description, yoga_systems, etiquette
	}[0]
`;

export const privateQuery = `
	*[_type == 'yogaClass' && name == 'Private']

	{
		name, image, short_description, yoga_description, yoga_systems, etiquette
	}[0]
`;
