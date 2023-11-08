import React from "react";
import Header from "../components/navbar/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebr/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
