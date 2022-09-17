export const yogaClassesQuery = `
	*[_type == 'yogaClass'] | order(_createdAt)
	{
  	name, duration, level
	}
`;
