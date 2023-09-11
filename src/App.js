import { lazy, Suspense } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/themeColorsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = lazy(() => {
  return import("./UI/Introduction");
});
const Skills = lazy(() => {
  return import("./UI/Skills");
});

const Projects = lazy(() => {
  return import("./UI/Projects");
});
const router = createBrowserRouter([
  { path: "/", Component: Root },
  { path: "skills", Component: Skills },
  { path: "projects", Component: Projects },
]);

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loadind..</div>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ThemeContextProvider>
  );
};
export default App;
