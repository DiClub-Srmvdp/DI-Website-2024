import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import JourneyPage from "./pages/JourneyPage";
import EventsPage from "./pages/EventsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import SparkPage from "./pages/SparkPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/team",
          element: <TeamPage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/projects/:projectKey",
          element: <SingleProjectPage />,
        },
        {
          path: "/journey",
          element: <JourneyPage />,
        },
        {
          path: "/events",
          element: <EventsPage />,
        },
        {
          path: "/spark",
          element: <SparkPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
