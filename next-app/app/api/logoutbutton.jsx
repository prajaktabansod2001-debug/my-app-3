
"use client";

import { signOut } from "next-auth/react";

export function Logout() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
}

