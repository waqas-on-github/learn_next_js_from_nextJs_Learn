"use client";
import { postGuest } from "@/lib/actions/postGuest";
import { useRef, useState } from "react";

const GuestFormEntries = () => {
  const [validationError, setvalidationError] = useState(null);
  const fromRef = useRef();

  // client "server acion for error handling"
  async function clientAction(data) {
    const result = await postGuest(data);
    if (result?.error) {
      setvalidationError(result.error);
    } else {
      setvalidationError(null);
      fromRef.current.reset();
    }
  }

  return (
    <form
      className="flex flex-col justify-center items-start gap-4 "
      action={clientAction}
      ref={fromRef}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="p-4 focus:outline-none "
      />
      {validationError?.name && (
        <span> {validationError?.name._errors.join(",")}</span>
      )}
      <input
        type="text"
        name="message"
        placeholder="you message"
        className="p-4 focus:outline-none"
      />
      {validationError?.message && (
        <span> {validationError?.message._errors.join(",")}</span>
      )}

      <button className="bg-slate-600 p-2 rounded hover:bg-slate-400 ">
        add
      </button>
    </form>
  );
};

export default GuestFormEntries;
