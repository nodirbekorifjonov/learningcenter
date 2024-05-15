import React from "react";
// react-router-dom
import { Outlet } from "react-router-dom";
// styles
import "./style.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TestDemoText from "../../components/TestModeText";

const RootLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main */}
      <main>
        <TestDemoText />
        <Outlet />
        <TestDemoText />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
