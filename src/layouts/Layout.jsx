import React from "react";
import Header from "../components/navbar/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
