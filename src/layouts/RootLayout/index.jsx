import React from "react";
// react-router-dom
import { Outlet } from "react-router-dom";
// styles
import "./style.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
