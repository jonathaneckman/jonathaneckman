import { Container } from "@/components/Container";
import { getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdown-to-html";
// import markdownStyles from "./markdown-styles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  const content = await markdownToHtml(post.content || "");

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {post.title}
        </h1>
        {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p> */}
        {/* <p className="text-gray-400">{post.author}</p> */}
      </header>
      <div
        className="mt-16 sm:mt-20 text-zinc-800 dark:text-zinc-100"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>

    // </div>
  );
}
