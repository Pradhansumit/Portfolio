import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="bg-zinc-850 min-h-screen">
      <Header></Header>
      <main className="max-w-xl mx-auto text-white px-4 md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
