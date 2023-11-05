import React from "react";
import "@testing-library/jest-dom";
import { render, screen, logDOM, logRoles } from "@testing-library/react";
import Contact from "../Pages/Contact";
import { BrowserRouter } from "react-router-dom";

describe("TESTING CONTACT PAGE", () => {
  it("should should render heading with text 'Heyya'", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    const HeyyaText = screen.getByRole("heading", { name: /Heyya/i });
    expect(HeyyaText).toBeInTheDocument();
  });

  it('should render contact derective text "Contact me via"', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const contactDirectiveText = screen.getByText(/contact me via/i);
    expect(contactDirectiveText).toBeInTheDocument();
  });

  it("should render email icon and a link to connect with email", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const emailIcon = screen.getByTestId("email_icon");
    expect(emailIcon).toBeInTheDocument();

    const emailLink = screen.getByRole("link", {
      name: /davidensor5000@gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
  });

  it("should render gitHub icon and a link to connect with gitHub", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const gitHubIcon = screen.getByTestId("gitHub_icon");
    expect(gitHubIcon).toBeInTheDocument();

    const gitHubLink = screen.getByRole("link", {
      name: /git Hub/i,
    });
    expect(gitHubLink).toBeInTheDocument();
  });

  it("should render linkedIn icon and a link to connect with linkedIn", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const linkedInIcon = screen.getByTestId("linkedIn_icon");
    expect(linkedInIcon).toBeInTheDocument();

    const linkedInLink = screen.getByRole("link", {
      name: /linkedIn/i,
    });
    expect(linkedInLink).toBeInTheDocument();
  });

  it("should render twitter icon and a link to connect with twitter", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const twitterIcon = screen.getByTestId("twitter_icon");
    expect(twitterIcon).toBeInTheDocument();

    const twitterLink = screen.getByRole("link", {
      name: /twitter/i,
    });
    expect(twitterLink).toBeInTheDocument();
  });
});
