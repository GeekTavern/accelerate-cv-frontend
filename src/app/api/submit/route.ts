import { CvFormValues } from '@/app/types/globals';

export async function POST(req: Request) {
  //this will extract the body from the request
  const body: CvFormValues = await req.json();

  const endpoint = process.env.AI_API_ENDPOINT ?? '';

  try {
    //this is wrong
    const aiRequestBody = body.roles;

    console.log(
      aiRequestBody,
      endpoint,
      'the ai request body and the endpoint server'
    );

    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(aiRequestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response, 'REACHED HERE');

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from AI endpoint:', errorText);
      return new Response('Error posting to AI endpoint', {
        status: response.status,
        statusText: response.statusText,
      });
    }

    // Return the response as is if everything is okay
    const responseBody = await response.json();
    return new Response(JSON.stringify(responseBody), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // this error handling and code is not entirely accurate
    console.log('reached error block');
    return (
      new Response('error posting to ai endpoint'),
      {
        status: 500,
      }
    );
  }
}
