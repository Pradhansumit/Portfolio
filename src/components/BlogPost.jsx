import Markdown from "react-markdown";
import frontMatter from "front-matter";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router";

const posts = import.meta.glob("../posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const BlogPost = () => {
  const { slug } = useParams();
  const content = posts[`../posts/${slug}.md`];

  if (!content) return <p className="text-red-500">Post not found.</p>;

  const { attributes, body } = frontMatter(content);

  return (
    <article className="prose prose-invert max-w-2xl mx-auto py-8 leading-6 whitespace-pre-wrap">
      <h1 className="text-center text-6xl">{attributes.title}</h1>
      <p className=" text-gray-400 text-xl my-5">{attributes.date}</p>
      <div className="text-lg">
        <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
      </div>
    </article>
  );
};

export default BlogPost;
