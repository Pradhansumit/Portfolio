import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import Writings from "./Pages/Writings";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header></Header>
      <main className="max-w-xl mx-auto">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
