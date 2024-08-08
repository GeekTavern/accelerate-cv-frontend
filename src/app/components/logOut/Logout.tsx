"use client";

import { signOut } from "next-auth/react";

export default async function Logout() {
  return (
    <span
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
}
