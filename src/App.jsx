import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import JourneyPage from "./pages/JourneyPage";
import EventsPage from "./pages/EventsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import Hexcore from "./pages/Hexcore";
import Eventpg from "./pages/Eventpg";

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
          path: "/Hexcore",
          element: <Hexcore />,
        },
        {
          path: "/Hexcore/:id",
          element: < Eventpg />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
