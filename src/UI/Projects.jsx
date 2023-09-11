import { lazy } from "react";

const NavBar = lazy(() => {
  return import("../components/Nav");
});

const Projects = () => {
  return (
    <main className="flex bg-[#0f0e0e] text-white">
      <NavBar />
      <section></section>
    </main>
  );
};

export default Projects;
