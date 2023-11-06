import { Outlet } from "react-router-dom";

import React from "react";
import NavBar from "../components/Nav";
const LandingPage = () => {
  return (
    <main className="flex min-h-screen bg-[#201f1f] text-white overflow-x-hidden">
      <NavBar PagenotFound={false} data-testid="nav_bar" />
      <Outlet />
    </main>
  );
};

export default LandingPage;
