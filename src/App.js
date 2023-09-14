import { lazy, Suspense } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/themeColorsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loading from "./UI/Loading";
const Root = lazy(() => {
  return import("./UI/Home");
});
const Skills = lazy(() => {
  return import("./UI/Skills");
});

const Projects = lazy(() => {
  return import("./UI/Projects");
});

const Journey = lazy(() => {
  return import("./UI/Journey");
});

const Contact = lazy(() => {
  return import("./UI/Contact");
});

const Page404 = lazy(() => {
  return import("./UI/404");
});

const router = createBrowserRouter([
  { path: "/", Component: Root },
  { path: "skills", Component: Skills },
  { path: "projects", Component: Projects },
  { path: "journey", Component: Journey },
  { path: "contact", Component: Contact },
  { path: "*", Component: Page404 },
]);

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ThemeContextProvider>
  );
};
export default App;
