import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Newsletter from "@/app/components/ui/Newsletter";

const rootDirectory = path.join(process.cwd(), "content");

const components = {
  h1: (props) => (
    <h1 {...props} className="text-emerald-400">
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter,
};

const getPostsBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  // parsing content from mdx file
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter, slug: realSlug };
};

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const post = await getPostsBySlug(file);
    posts.push(post);
  }

  await wait(2000);
  return posts;
}

export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { getPostsBySlug };
