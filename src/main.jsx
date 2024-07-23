import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import WorkoutPage from "./Components/Workout Page/WorkoutPage.jsx";
import Hero from "./Components/Hero.jsx";
import AboutPage from "./Components/About Page/AboutPage.jsx";
import ContactPage from "./Components/Contact Page/ContactPage.jsx";

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/workout",
        element: <WorkoutPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
