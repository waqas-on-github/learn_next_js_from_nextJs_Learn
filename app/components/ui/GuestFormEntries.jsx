import { postGuest } from "@/lib/actions/postGuest";
const GuestFormEntries = () => {
  return (
    <form
      action={postGuest}
      className="flex flex-col justify-center items-start gap-4 "
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="p-4 focus:outline-none "
      />
      <input
        type="text"
        name="message"
        placeholder="you message"
        className="p-4 focus:outline-none"
      />
      <button className="bg-slate-600 p-2 rounded hover:bg-slate-400 ">
        add
      </button>
    </form>
  );
};

export default GuestFormEntries;
