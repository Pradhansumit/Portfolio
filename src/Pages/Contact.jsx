import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router";

const socialLinks = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/sumitpradhan01/",
    logo: <LinkedInLogoIcon width={50} height={50} />,
  },
  {
    id: 2,
    link: "https://www.github.com/Pradhansumit",
    logo: <GitHubLogoIcon width={50} height={50} />,
  },
  {
    id: 3,
    link: "https://x.com/SumitPr27120783",
    logo: <TwitterLogoIcon width={50} height={50} />,
  },
  {
    id: 4,
    link: "https://www.discord.com/user/_sumit.pradhan",
    logo: <DiscordLogoIcon width={50} height={50} />,
  },
];

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-27vh)] flex items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-2 w-40 h-40  gap-24 place-items-center">
        {socialLinks.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            target="_blank"
            aria-label={`Visit Sumit Pradhan's ${item.link.split(".")[1]} profile`}
          >
            <div className="cursor-pointer bg-zinc-800 p-8 rounded-xl transition-transform duration-300 hover:scale-110">
              {item.logo}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
