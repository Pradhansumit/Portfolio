import { Link } from "react-router";
import frontMatter from "front-matter";

const posts = import.meta.glob("../posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const BlogList = () => {
  const blogData = Object.entries(posts).map(([path, content]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { attributes } = frontMatter(content);
    return { slug, ...attributes };
  });

  blogData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-6 py-8 text-white">
      {blogData.map(({ slug, title, date }) => (
        <div key={slug}>
          <Link
            to={`/blog/${slug}`}
            className="text-2xl font-bold tracking-widest hover:text-orange-400 transition duration-300"
          >
            {title}
          </Link>
          <p className="text-lg tracking-wide">{date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
