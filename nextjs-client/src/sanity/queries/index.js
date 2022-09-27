export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

export const ashtangaQuery = `
	*[_type == 'yogaClass' && name == 'Ashtanga'] 
	{
		name, image
	}[0]
`;

export const vinyasaQuery = `
	*[_type == 'yogaClass' && name == 'Vinyasa'] 
	{
		name, image
	}
`;
