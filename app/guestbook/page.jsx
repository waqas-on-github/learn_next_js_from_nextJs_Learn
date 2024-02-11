import { getAllMessages } from "@/lib/gusetbook";
import GuestFormEntries from "../components/ui/GuestFormEntries";

export const getMessage = async () => {
  const messages = await getAllMessages();
  return messages;
};

const page = async () => {
  const messages = await getMessage();

  return (
    <section className="py-24 flex items-center justify-center flex-col gap-4 ">
      <div className="container">
        <h1 className="text-3xl font-bold"> GuestBook </h1>
      </div>
      <GuestFormEntries />
      <div className="pt-10">
        {messages?.map((message) => (
          <div className=" container " key={message?.id}>
            <span>{message?.name}:</span>
            <span> {message?.message} </span>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
