import { CvFormValues } from '@/app/types/globals';

export const submitData = async (formValues: CvFormValues) => {
  const data = await fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(formValues),
  });

  console.log(data.status, 'here is the data.status');
  //TODO this needs to have more accurate error handling
  if (data.status !== 200) {
    Promise.reject('next server request failed');
  }

  console.log(data, '<<<here is the data');
  const convertedBody = await data.json();

  console.log(convertedBody, 'here is the body that is returned');
  return convertedBody;
};
