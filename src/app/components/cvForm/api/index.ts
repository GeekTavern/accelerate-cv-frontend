import { CvFormValues } from '@/app/types/globals';

export const submitData = async (formValues: CvFormValues) => {

  try {
    const data = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(formValues),
    });

    if (data.status !== 200) {
      Promise.reject('next server request failed');
    }
    const convertedBody = await data.json();
  
    return convertedBody;
  } catch(error){
    throw error;
    
  }


};
