export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(order asc)
	{
  	name, duration, level, image
	}
`;
