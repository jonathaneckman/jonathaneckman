import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type BlogPost = {
    slug: string;
    title?: string;
    excerpt?: string;
    author?: string;
    date: string;
    tags?: string[],
    coverImage?: string;
    content?: string;
  }

const postsDirectory = join(process.cwd(), "src/articles");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: Array<keyof BlogPost> = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: BlogPost = {
    slug: realSlug,
    date: ''
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "content") {
        post[field] = content;
    }

    if (typeof data[field] !== "undefined") {
        post[field] = data[field];
    }
  });

  return post;
}

export function getAllPosts(fields: Array<keyof BlogPost> = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}