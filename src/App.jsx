import "./App.css";
import Home from "./pages/Home";
import { Outlet, Route, Routes, useLocation } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import About from "./pages/About";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./pages/NotFound";
import Footer from "./layouts/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/header/HeroSection";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? <Header children={<HeroSection />} /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
