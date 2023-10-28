import { lazy } from "react";
import { Outlet } from "react-router-dom";

import React from "react";
const NavBar = lazy(() => {
  return import("../components/Nav.tsx");
});
const LandingPage = () => {
  return (
    <main className="flex min-h-screen bg-[#201f1f] text-white overflow-x-hidden">
      <NavBar PagenotFound={false} />
      <Outlet />
    </main>
  );
};

export default LandingPage;
