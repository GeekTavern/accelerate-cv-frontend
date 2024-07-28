'use client';

import { useFormik, Form, FieldArray, Field, Formik } from 'formik';
import { CvFormValues, Role } from '../../types/globals';
import { RoleForm } from '../roleForm/RoleForm';
import styles from './cvForm.module.scss';
import { submitData } from './api';
import { useState } from 'react';

export const CvForm = () => {
  const initialValues: CvFormValues = { roles: [] };
  const [updatedAiRoles, setUpdatedAiRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: CvFormValues) => {
    const response = await submitData(values);
    setUpdatedAiRoles(response);
  };

  return (
    <div>
      {updatedAiRoles.length === 0 ? (
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmit(values);
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
                            remove role
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
      ) : (
        <div>
          <p className={styles.successStatment}>
            Submission succesful. Here's your AI powered roles. Fill your boots
          </p>
          {updatedAiRoles.map((role: Role) => {
            return (
              <div className={styles.resultsContainer}>
                <h3 className={styles.roleTitle}>{role.position}</h3>
                <p className={styles.roleDescription}>{role.description}</p>
              </div>
            );
          })}
          <button onClick={() => setUpdatedAiRoles([])}>Start Over</button>
        </div>
      )}
    </div>
  );

  //so then we need to pass down formik to the bloody thing.
};
