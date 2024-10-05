"use client";

import { signOut } from "next-auth/react";

export default async function Logout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
