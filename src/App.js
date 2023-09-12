import { lazy, Suspense } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/themeColorsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = lazy(() => {
  return import("./UI/Intro");
});
const Skills = lazy(() => {
  return import("./UI/Skills");
});

const Projects = lazy(() => {
  return import("./UI/Projects");
});

const Resume = lazy(() => {
  return import("./UI/Resume");
});

const Contact = lazy(() => {
  return import("./UI/Contact");
});

const router = createBrowserRouter([
  { path: "/", Component: Root },
  { path: "skills", Component: Skills },
  { path: "projects", Component: Projects },
  { path: "resume", Component: Resume },
  { path: "contact", Component: Contact },
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
