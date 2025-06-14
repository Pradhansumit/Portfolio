import { Link } from "react-router";

const menuItems = [
  { id: 4, title: "About", link: "/about" },
  {
    id: 1,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 2,
    title: "Writing",
    link: "/writing",
  },
  { id: 3, title: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <div className="bg-zinc-900 py-5 px-3 text-white">
      <div className="max-w-xl mx-auto">
        <p className="text-center uppercase tracking-widest text-4xl my-3">
          <Link to="">Sumit Pradhan</Link>
        </p>
        <div className="mt-5 flex flex-row gap-3 items-center justify-center">
          {menuItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="rounded bg-zinc-800 px-4 py-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
