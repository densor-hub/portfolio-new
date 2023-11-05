import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";

describe("TESTING LANDING PAGE", () => {
  it("should render NavBar", () => {
    const { container } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const NavBar = screen.getByTestId("nav_bar");
    expect(NavBar).toBeInTheDocument();
  });

  it("should render navigation item HOME", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const HomeIcon = screen.getByTestId("home_icon");
    expect(HomeIcon).toBeInTheDocument();

    const HomeLink = screen.getByRole("link", { name: /Home/i });
    expect(HomeLink).toBeInTheDocument();
  });

  it("should render navigation item SKILLS", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const SkillsIcon = screen.getByTestId("skills_icon");
    expect(SkillsIcon).toBeInTheDocument();

    const SkillsLink = screen.getByRole("link", { name: /SKILLS/i });
    expect(SkillsLink).toBeInTheDocument();
  });

  it("should render navigation item PROJECTS", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const ProjectsIcon = screen.getByTestId("projects_icon");
    expect(ProjectsIcon).toBeInTheDocument();

    const ProjectsLink = screen.getByRole("link", { name: /PROJECTS/i });
    expect(ProjectsLink).toBeInTheDocument();
  });

  it("should render navigation item JOURNEY", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const journeyIcon = screen.getByTestId("journey_icon");
    expect(journeyIcon).toBeInTheDocument();

    const journeyLink = screen.getByRole("link", { name: /JOURNEY/i });
    expect(journeyLink).toBeInTheDocument();
  });

  it("should render navigation item CONTACT", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const contactIcon = screen.getByTestId("contact_icon");
    expect(contactIcon).toBeInTheDocument();

    const contactLink = screen.getByRole("link", { name: /CONTACT/i });
    expect(contactLink).toBeInTheDocument();
  });
});
