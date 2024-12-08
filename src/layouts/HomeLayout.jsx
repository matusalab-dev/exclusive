import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
