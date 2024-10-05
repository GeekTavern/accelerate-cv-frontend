export interface Role {
  position: string;
  description: string;
}

//here we need to add the role.
export interface CvFormValues {
  roles: Role[];
}
