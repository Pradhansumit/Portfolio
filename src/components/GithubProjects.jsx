import { useEffect, useState } from "react";
import { Link } from "react-router";

const GithubProjects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Pradhansumit/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) => !repo.fork && repo.name !== "Pradhansumit",
        );
        setRepos(filtered);
      });
  }, []);

  repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="bg-zinc-800 text-white p-4 rounded-lg shadow hover:scale-103 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold tracking-wider">{repo.name}</h3>
          <p className="text my-2">{repo.description}</p>
          <Link
            to={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 mt-2 inline-block group"
          >
            View on GitHub{" "}
            <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GithubProjects;
