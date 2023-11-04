import { BrowserRouter } from "react-router-dom";
import {
  render,
  screen,
  fireEvent,
  logRoles,
  logDOM,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../Pages/Skills";
import React from "react";

describe("TESTING SKILLS PAGE", () => {
  it("should render navigation buttons with label 'front end' which sets displayed contents to frontend stuff when clicked", () => {
    const { container } = render(
      <BrowserRouter>
        <Skills />
      </BrowserRouter>
    );

    const frontEndNavButton = screen.getByRole("button", {
      name: /Front End/i,
    });
    expect(frontEndNavButton).toBeInTheDocument();

    fireEvent.click(frontEndNavButton);
    expect(screen.getByText(/Frontend technologies/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "React JS" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Next JS" })).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "React Native" })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Vue JS" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Redux" })).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Tailwind CSS" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Boostrap CSS" })
    ).toBeInTheDocument();
  });

  it("should render navigation buttons with label 'back end'  which sets displayed contents to backend stuff when clicked", () => {
    const { container } = render(
      <BrowserRouter>
        <Skills />
      </BrowserRouter>
    );

    const BackEndNavButton = screen.getByRole("button", {
      name: /Back End/i,
    });
    expect(BackEndNavButton).toBeInTheDocument();

    fireEvent.click(BackEndNavButton);
    expect(screen.getByText(/Backend technologies/i)).toBeInTheDocument();

    //headings
    expect(screen.getByRole("heading", { name: /main/i }));
    expect(screen.getByRole("heading", { name: /Databases/i }));
    expect(screen.getByRole("heading", { name: /Other tools/i }));

    //technologies (images)
    expect(screen.getByRole("img", { name: "Node Js" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: ".Net-core" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "MSSMS" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "PostgresQL" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "MongoDB" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "GraphQL" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Postman" })).toBeInTheDocument();
  });

  it("should render buttom with name 'Next'", () => {
    render(
      <BrowserRouter>
        <Skills />
      </BrowserRouter>
    );
    const NextButton = screen.getByRole("button", { name: /Next/i });
    expect(NextButton).toBeInTheDocument();
  });

  it("should render buttom with name 'Back'", () => {
    render(
      <BrowserRouter>
        <Skills />
      </BrowserRouter>
    );
    const BackButton = screen.getAllByRole("button", { name: /Back/i });
    expect(BackButton[1].textContent).toBe("Back");
  });
});
