"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientComp = () => {
  const session = useSession({ required: true });
  console.log(session?.data);

  return <div>ClientComp</div>;
};

export default ClientComp;
