"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("registration failed");
    }
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email'></input>
      <input name='password' type='password'></input>
      <button type='submit'>Register</button>
    </form>
  );
}
