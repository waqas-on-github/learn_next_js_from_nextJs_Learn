import { authOptions } from "@/app/api/auth/[...nextauth]/authoptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ServerComp = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  //   if (!session?.data) {
  //     const callbacklUrl = encodeURIComponent("/procatcetd/server");
  //     return redirect(`/api/auth/signin?callbackUrl=${callbacklUrl}`);
  //   }

  return (
    <div>
      <h1>server comp here </h1>
    </div>
  );
};

export default ServerComp;
