import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
// const ProjectsPage = lazy(() => import("@/pages/Projects"));

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/extensions" element={<Extensions />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </Suspense>
  );
}
