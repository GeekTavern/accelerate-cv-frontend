'use client';
import { Formik, FormikProps } from 'formik';
import { CvFormValues } from '../../types/globals';
import styles from './roleForm.module.scss';

interface RoleFormProps {
  //yes but this has to have an initial values type
  formik: FormikProps<CvFormValues>;
}

//so what are the fields that we require here
export const RoleForm: React.FC<RoleFormProps> = ({ formik }) => {
  const addNewRoleHandler = () => {};
  return (
    <div className={styles.container}>
      <label htmlFor='position'>Position</label>
      <input id='position'></input>
      <label htmlFor='startDate'>Start Date</label>
      <input id='startDate'></input>
      <label htmlFor='endDate'>End Date</label>
      <input id='endDate'></input>
      <label htmlFor='description'>Description</label>
      <textarea id='description'></textarea>
      <button onClick={addNewRoleHandler}>Add new Role</button>
    </div>
  );
};
