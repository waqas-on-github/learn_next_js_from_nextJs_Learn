"use client";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <button onClick={handleClick}>contact</button>
    </>
  );
};

export default Contact;
