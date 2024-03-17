export const homeMaintenanceQuery = `  
	*[_type == 'maintenance']
  {
  	home_under_maintenance
  }
`;

export const aboutMaintenanceQuery = `
   *[_type == 'maintenance']
   {
    about_under_maintenance
   }
`;

export const scheduleMaintenanceQuery = `
   *[_type == 'maintenance']
   {
    schedule_under_maintenance
   }
`;

export const contactMaintenanceQuery = `
   *[_type == 'maintenance']
   {
    contact_under_maintenance
   }
`;
