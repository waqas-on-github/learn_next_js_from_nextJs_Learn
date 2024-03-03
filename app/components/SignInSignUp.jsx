"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInSignUp = () => {
  const session = useSession();
  return (
    <>
      {session.data ? (
        <button className="border rounded p-2" onClick={() => signOut()}>
          signOut
        </button>
      ) : (
        <button className="border rounded p-2" onClick={() => signIn()}>
          singIn
        </button>
      )}
    </>
  );
};

export default SignInSignUp;
