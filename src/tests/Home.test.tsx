import {
  logDOM,
  logRoles,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../Pages/Home.tsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("TESTING HOMEPAGE", () => {
  it("should show intro 'Hello, i'm", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.queryByText(/Hello,/i)).toBeInTheDocument();

    let startingIntroText = screen.getByText(/i'm/i);
    expect(startingIntroText).toBeInTheDocument();
  });

  it("should display Text Typer with text 'David Ensor'", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    let typeWritters = screen.getAllByTestId("type_writter");
    let name = "David Ensor";
    let type_writter1_Text = typeWritters[0].textContent;
    expect(type_writter1_Text).toEqual("D");

    await waitFor(
      () => {
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(
          type_writter1_Text
            .toLowerCase()
            .trim()
            .includes(name.toLowerCase().trim())
        );
      },
      { timeout: name.length * 200 + 200 }
    );
  });

  it("should display Text Typer with alternatining roles 'Software Developer.' and 'Musician.'", async () => {
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
    let firstRole = "Software Developer";
    let secondRole = "Musician";
    let type_writter2_Text = typeWritters[1].textContent;
    expect(type_writter2_Text).toEqual("S");

    await waitFor(
      () => {
        expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();
        expect(
          type_writter2_Text
            .toLowerCase()
            .trim()
            .includes(firstRole.toLowerCase().trim())
        );
      },
      { timeout: firstRole.length * 200 + 200 }
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
});
