import { lazy } from "react";
import { Outlet } from "react-router-dom";

const NavBar = lazy(() => {
  return import("../components/Nav");
});
const LandingPage = () => {
  return (
    <main className="flex min-h-screen bg-[#201f1f] text-white overflow-x-hidden">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default LandingPage;
