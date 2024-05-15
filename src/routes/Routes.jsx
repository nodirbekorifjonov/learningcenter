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
import News from "../pages/News";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import CourseLayout from "../layouts/CourseLayout";
import CourseDetails from "../pages/Courses/CourseDetails";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/courses" element={<CourseLayout />}>
          <Route index element={<Courses />} />
          <Route path=":id" element={<CourseDetails />} />
        </Route>
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Routes;
