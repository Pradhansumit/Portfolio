import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import Writings from "./Pages/Writings";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-zinc-850 min-h-screen">
      <Header></Header>
      <main className="max-w-xl mx-auto text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
