import { Link } from "react-router";

const About = () => {
  return (
    <section className="px-4 py-6 text-gray-300 leading-relaxed tracking-wide">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">
        About Me
      </h2>
      <h4 className="text-xl my-2">Hey, I'm Sumit Pradhan,</h4>
      <p className="mb-4">
        I'm a backend-focused developer passionate about building scalable,
        reliable web applications.
      </p>
      <p className="mb-4">
        My core expertise lies in{" "}
        <span className="text-orange-300 font-bold">backend development</span>{" "}
        using{" "}
        <span className="text-orange-300 font-bold">Django and Express</span>,
        where I’ve worked extensively with REST APIs, database design,
        authentication systems, and background jobs.
      </p>
      <p className="mb-4">
        That said, I also love crafting intuitive user interfaces with{" "}
        <span className="text-orange-300 font-bold">React</span>, and often
        build full-stack apps from scratch to bring my ideas to life. While
        backend is my strength, I'm always eager to contribute to frontend when
        the project needs it.
      </p>
      <p className="mb-4">
        Previously, I worked with{" "}
        <span className="text-orange-300 font-bold">.NET</span> technologies,
        where I built desktop applications and performed API integrations —
        giving me a strong foundation in backend logic and system design.
      </p>
      <p className="mb-4">
        I'm driven by solving real-world problems, optimizing performance, and I
        especially love cron jobs for background automation!
      </p>
      <p className="mb-4">
        Currently, I'm actively looking for backend roles or React roles where I
        can grow and contribute to meaningful software products.
      </p>
      <p className="italic">
        Outside coding, I’m usually reading fiction books, learning new tech, or
        solving problems on{" "}
        <Link
          to="https://leetcode.com/u/SumitCode-001/"
          target="_blank"
          className="text-orange-300 font-bold"
        >
          LeetCode👈
        </Link>
        .
      </p>
    </section>
  );
};

export default About;
