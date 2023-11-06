import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../Pages/Home.tsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("TESTING HOMEPAGE", () => {
  it("should show intro 'Hello, i'm", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText(/Hello,/i)).toBeInTheDocument();
    expect(screen.getByText(/i'm/i)).toBeInTheDocument();
  });

  it("should display Text Typer with text 'David Ensor'", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    let typeWritters = screen.getAllByTestId("type_writter");
    let name = "David Ensor.";
    let type_writter1_Text = typeWritters[0].textContent;
    expect(type_writter1_Text).toEqual("D");

    await waitFor(
      () => {
        const newTypeWritterText = screen.getAllByTestId("type_writter");
        expect(newTypeWritterText[0]).toHaveTextContent("David Ensor.");
      },
      { timeout: name.length * 200 + 200 }
    );
  });

  it("should display Text Typer with alternatining roles", async () => {
    jest.setTimeout(20000);
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    //check for role leading text
    let roleLeadingText = screen.getByTestId(/role_lead/i);
    expect(roleLeadingText).toBeInTheDocument();
    expect(roleLeadingText).toHaveTextContent(/i am a/i);

    let typeWritters = screen.getAllByTestId("type_writter");
    let firstRole = "Front-end developer";
    let type_writter2_Text = typeWritters[1].textContent;
    expect(type_writter2_Text).toEqual("F");

    await waitFor(
      () => {
        const newTypeWritterText = screen.getAllByTestId("type_writter");
        expect(newTypeWritterText[1]).toHaveTextContent(firstRole);
      },
      { timeout: firstRole.length * 250 }
    );

    // await waitFor(
    //   () => {
    //     expect(screen.getByText(/I am a Musician/i)).toBeInTheDocument();
    //     expect(
    //       type_writter2_Text
    //         .toLowerCase()
    //         .trim()
    //         .includes(secondRole.toLowerCase().trim())
    //     );
    //   },
    //   {
    //     timeout: "Musician".length * 200 + 200,
    //   }
    // );
  });

  it("Should diplay overview paragrah", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const overview_paragrah = screen.getByTestId("overview_paragrah");
    expect(overview_paragrah).toBeInTheDocument();
  });

  it("should render ThemeSelector , with options 'yellow, orange, and emerald'", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const themeSelector = screen.getByTestId("theme_selector");
    expect(themeSelector).toBeInTheDocument();

    const yellow_selector = screen.getByTestId("yellow_selector");
    expect(yellow_selector).toBeInTheDocument();
    expect(yellow_selector).toHaveStyle({ backgroundColor: "yellow" });

    const emerald_selector = screen.getByTestId("emerald_selector");
    expect(emerald_selector).toBeInTheDocument();
    expect(emerald_selector).toHaveStyle({ backgroundColor: "#34d399" });

    const orange_selector = screen.getByTestId("orange_selector");
    expect(orange_selector).toBeInTheDocument();
    expect(orange_selector).toHaveStyle({ backgroundColor: "#ff4500" });

    //expect(yellow_selector).toHaveStyle({ backgroundColor: "yellow" });
  });

  it("should render CurvedArrow", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const curved_arrow = screen.getByTestId("curved_arrow");
    expect(curved_arrow).toBeInTheDocument();
  });

  it("should render buttom with name 'Next'", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const NextButton = screen.getByRole("button", { name: /Next/i });
    expect(NextButton).toBeInTheDocument();
  });

  it("should render image container with image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const image_container = screen.getByTestId("image_container");
    expect(image_container).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "David Ensor." });
    expect(image).toBeInTheDocument();
  });
});
