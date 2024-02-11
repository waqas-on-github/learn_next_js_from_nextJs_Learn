"use client";
const Error = ({ error, reset }) => {
  return (
    <div>
      <h2 className="text-red-400 text-sm">some thing went wrong </h2>
      <button
        className="bg-white p-2 text-black rounded hover:bg-slate-200"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
