'use client';

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email'></input>
      <input name='password' type='password'></input>
      <button type='submit'>Log in</button>
    </form>
  );
}
