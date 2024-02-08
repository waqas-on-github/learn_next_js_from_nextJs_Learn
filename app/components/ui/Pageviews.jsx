import { wait } from "@/lib/posts";

const Pageviews = async () => {
  await wait(3000);
  return <div>Pageviews : 100</div>;
};

export default Pageviews;
