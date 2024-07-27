export interface Role {
  position: string;
  startDate: string; //maybe a data later for ordering information
  endDate: string;
  description: string;
}

//here we need to add the role.
export interface CvFormValues {
  roles: Role[];
}
