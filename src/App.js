import { lazy, Suspense } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/themeColorsContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loading from "./Pages/Loading.tsx";

const LandingPage = lazy(() => {
  return import("./Pages/LandingPage.tsx");
});

const Home = lazy(() => {
  return import("./Pages/Home.tsx");
});
const Skills = lazy(() => {
  return import("./Pages/Skills.tsx");
});

const Projects = lazy(() => {
  return import("./Pages/Projects.tsx");
});

const Journey = lazy(() => {
  return import("./Pages/Journey.tsx");
});

const Contact = lazy(() => {
  return import("./Pages/Contact.tsx");
});

const Page404 = lazy(() => {
  return import("./Pages/404.tsx");
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [
      { path: "/", Component: Home },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "journey", Component: Journey },
      { path: "contact", Component: Contact },
      { path: "*", Component: Page404 },
    ],
  },
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
