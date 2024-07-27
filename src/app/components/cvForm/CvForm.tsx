'use client';

import { useFormik, Form, FieldArray, Field, Formik } from 'formik';
import { CvFormValues } from '../../types/globals';
import { RoleForm } from '../roleForm/RoleForm';
import styles from './cvForm.module.scss';

export const CvForm = () => {
  const initialValues: CvFormValues = { roles: [] };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FieldArray
              name='roles'
              render={(arrayHelpers) => (
                <div className={styles.container}>
                  {values.roles.map((role, index) => (
                    <div className={styles.roleContainer} key={index}>
                      <label htmlFor={`roles.${index}.position`}>
                        Position
                      </label>
                      <Field name={`roles.${index}.position`} />
                      {/* <label htmlFor={`roles.${index}.startDate`}>
                        Start Date
                      </label>
                      <Field name={`roles.${index}.startDate`} />
                      <label htmlFor={`roles.${index}.endDate`}>End Date</label>
                      <Field name={`roles.${index}.endDate`} /> */}
                      <label htmlFor={`roles.${index}.description`}>
                        Description
                      </label>

                      <Field
                        as='textarea'
                        name={`roles.${index}.description`}
                      />

                      <button
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type='button'
                    onClick={() =>
                      arrayHelpers.push({
                        position: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                      })
                    }
                  >
                    add new role
                  </button>
                  <button type='submit'>Save</button>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
  //so then we need to pass down formik to the bloody thing.
};
