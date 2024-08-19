import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
