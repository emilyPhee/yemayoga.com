export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;

export const ashtangaQuery = `
	*[name == 'Ashtanga'] 
	{
		name, image
	}
`;
