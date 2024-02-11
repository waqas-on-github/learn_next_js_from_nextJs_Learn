import Pageviews from "@/app/components/ui/Pageviews";
import { getAllPosts, getPostsBySlug, wait } from "@/lib/posts";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: [post.slug] }));
}

const page = async ({ params }) => {
  const { slug } = params;

  const { content, frontmatter } = await getPostsBySlug(slug[0]);
  await wait(2000);

  return (
    <section className="py-24 flex items-center justify-center flex-col ">
      <div className="container">
        {/* post formatting  */}
        <header className="rounded p-8">
          <h1 className=" font-serif text-3xl "> {frontmatter.title} </h1>
          <p className="text-sm font-light uppercase leading-3 text-gray-500">
            {frontmatter.author}
          </p>

          <Suspense fallback={<div>loading page views ...</div>}>
            <Pageviews />
          </Suspense>
        </header>
      </div>
      <main className="prose mt-12"> {content}</main>
    </section>
  );
};

export default page;
