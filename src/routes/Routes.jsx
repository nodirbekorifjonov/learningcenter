import React from "react";
// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layouts
import RootLayout from "../layouts/RootLayout";
// pages
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Projects from "../pages/Projects";
import Team from "../pages/Team";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="projects" element={<Projects />} />
        <Route path="team" element={<Team />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Routes;
