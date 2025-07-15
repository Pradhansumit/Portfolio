import { Link } from "react-router";
import { useState } from "react";

const menuItems = [
    { id: 4, title: "About", link: "/about" },
    {
        id: 1,
        title: "Projects",
        link: "/projects",
    },
    {
        id: 2,
        title: "Blog",
        link: "/blog",
    },
    { id: 3, title: "Contact", link: "/contact" },
];

const Header = () => {
    const [active, setActive] = useState("");

    return (
        <div className="bg-zinc-900 py-5 px-3 text-white">
            <div className="max-w-xl mx-auto">
                <p className="text-center uppercase tracking-widest text-4xl my-3">
                    <Link to="" onClick={() => setActive("")}>
                        Sumit Pradhan
                    </Link>
                </p>
                <div className="mt-5 flex flex-row gap-3 items-center justify-center">
                    {menuItems.map((item) => (
                        <Link
                            to={item.link}
                            key={item.id}
                            className={`rounded  px-4 py-2 ${active === item.title ? "bg-orange-700" : "bg-zinc-800"}`}
                            onClick={() => setActive(item.title)}
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
