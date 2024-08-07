import { useState } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Sidebar, Footer } from "@/components";

import { Home, Projects, Extensions } from "@/pages";

// ToDo
// Add Resume Page like CV file

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="min-h-screen flex flex-col 2xl:justify-between bg-white dark:bg-black relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extensions" element={<Extensions />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
