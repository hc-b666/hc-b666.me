import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
