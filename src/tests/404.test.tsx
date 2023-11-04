import React from "react";
import { render, logRoles, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Page404 from "../Pages/404.tsx";

describe("Testing 404 component", () => {
  it("should show PageNotFound Emoji", () => {
    render(<Page404 />);
    let pageNotFoundEmoji = screen.getByTestId(/notfound_emoji/i);
    expect(pageNotFoundEmoji).toBeInTheDocument();
  });

  it("should show h1 with text '404'", () => {
    render(<Page404 />);
    let heading404 = screen.getByRole("heading", { name: "404" });
    expect(heading404).toBeInTheDocument();
  });

  it("Should show paragraph with text 'Page not found, it seems you entered a wrong url'", () => {
    render(<Page404 />);
    let pageNotFoundText = screen.getByText(
      /Page not found, it seems you entered a wrong url/i
    );

    expect(pageNotFoundText).toBeInTheDocument();
  });

  it("Should show paragraph with text 'Please navigate with the pannel on the right end'", () => {
    render(<Page404 />);
    let navigationDirectiveText = screen.getByText(
      /Please navigate with the pannel on the right end/i
    );

    expect(navigationDirectiveText).toBeInTheDocument();
  });
});
