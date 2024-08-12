"use client";

import { useRouter } from "next/navigation";

export default function RegisterButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register");
  };

  return <button onClick={handleClick}>Sign Up</button>;
}
